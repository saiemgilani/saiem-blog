import os
import time
import uuid
from concurrent.futures import ThreadPoolExecutor
from datetime import date

import pytest
from fastapi.testclient import TestClient

from saiem_api.app import create_app
from saiem_api.db import make_pool
from saiem_api.quota import QuotaExceeded, Reservation, ensure_user, reserve, settle, spend_status
from saiem_api.settings import Settings
from tests.test_views import SECRET, auth

OWNER = "99"


def _settings(**over):
    base = dict(
        database_url=None,
        api_secret=SECRET,
        owner_github_id=OWNER,
        allow_dev_secret=False,
        lab_daily_quota=5,
        spend_units_cap=2000,
        lab_live_runs=True,
        lab_run_timeout_s=30,
        run_retention_days=90,
    )
    base.update(over)
    return Settings(**base)


def test_ensure_user_is_an_upsert(pool):
    a = ensure_user(pool, 12345, "saiemgilani")
    b = ensure_user(pool, 12345, "saiemgilani-renamed")
    assert a == b
    with pool.connection() as conn:
        assert (
            conn.execute("select login from app.users where id = %s", (a,)).fetchone()[0]
            == "saiemgilani-renamed"
        )


def test_reserve_then_refund_returns_the_units(pool):
    u = ensure_user(pool, 1, "a")
    r = reserve(pool, user_id=u, entry_slug="e", units=2, daily_limit=5, month_cap=100)
    settle(pool, r, "refund")
    with pool.connection() as conn:
        assert conn.execute("select used from app.quotas where user_id = %s", (u,)).fetchone()[0] == 0
    assert spend_status(pool)["units_used"] == 0


def test_settle_success_with_units_used_refunds_the_difference(pool):  # R-P5-5
    u = ensure_user(pool, 1, "a")
    r = reserve(pool, user_id=u, entry_slug="e", units=2, daily_limit=5, month_cap=100)
    settle(pool, r, "success", units_used=1)
    with pool.connection() as conn:
        assert conn.execute("select used from app.quotas where user_id = %s", (u,)).fetchone()[0] == 1
    assert spend_status(pool)["units_used"] == 1

    r2 = reserve(pool, user_id=u, entry_slug="e", units=2, daily_limit=5, month_cap=100)
    settle(pool, r2, "success", units_used=5)  # never charges more than reserved
    with pool.connection() as conn:
        assert conn.execute("select used from app.quotas where user_id = %s", (u,)).fetchone()[0] == 3
    assert spend_status(pool)["units_used"] == 3


def test_daily_limit_is_enforced_and_spend_untouched_on_failure(pool):
    u = ensure_user(pool, 1, "a")
    for _ in range(5):
        reserve(pool, user_id=u, entry_slug="e", units=1, daily_limit=5, month_cap=100)
    with pytest.raises(QuotaExceeded) as e:
        reserve(pool, user_id=u, entry_slug="e", units=1, daily_limit=5, month_cap=100)
    assert e.value.reason == "daily"
    assert spend_status(pool)["units_used"] == 5  # the failed reserve added nothing


def test_spend_cap_blocks_even_with_quota_left(pool):  # Review Focus #2
    u = ensure_user(pool, 1, "a")
    reserve(pool, user_id=u, entry_slug="e", units=3, daily_limit=10, month_cap=3)
    with pytest.raises(QuotaExceeded) as e:
        reserve(pool, user_id=u, entry_slug="e", units=1, daily_limit=10, month_cap=3)
    assert e.value.reason == "spend_cap"
    with pool.connection() as conn:
        assert conn.execute("select used from app.quotas where user_id = %s", (u,)).fetchone()[0] == 3


def test_spend_cap_blocks_a_single_reservation_that_exceeds_the_cap_outright(pool):
    # Controller ruling #2: the _SPEND upsert's WHERE only fires on the UPDATE path, so the
    # first-ever reservation of a month would otherwise sail through an insert unconditionally.
    u = ensure_user(pool, 1, "a")
    with pytest.raises(QuotaExceeded) as e:
        reserve(pool, user_id=u, entry_slug="e", units=5, daily_limit=10, month_cap=3)
    assert e.value.reason == "spend_cap"
    assert spend_status(pool)["units_used"] == 0
    with pool.connection() as conn:
        assert conn.execute("select count(*) from app.quotas where user_id = %s", (u,)).fetchone()[0] == 0


def test_daily_limit_change_is_enforced_immediately_and_persists_on_an_accepted_reserve(pool):
    # R-P5-6 / SF-4: the env is the authority for caps. Verified against a live probe: Postgres's
    # `ON CONFLICT DO UPDATE ... WHERE` leaves the row completely untouched (no partial SET) when
    # the WHERE is false, so a REJECTED reservation does not refresh the persisted "limit" column.
    # The actual fix is that enforcement always compares against the live daily_limit passed on
    # THIS call, not the stale stored value — a lowered limit is honored on the very next attempt.
    u = ensure_user(pool, 1, "a")
    reserve(pool, user_id=u, entry_slug="e", units=3, daily_limit=3, month_cap=100)

    with pytest.raises(QuotaExceeded) as e:
        reserve(pool, user_id=u, entry_slug="e", units=1, daily_limit=2, month_cap=100)
    assert e.value.reason == "daily"
    with pool.connection() as conn:
        used, limit = conn.execute('select used, "limit" from app.quotas where user_id = %s', (u,)).fetchone()
    assert (used, limit) == (3, 3)  # rejected: row untouched, old limit still stored

    reserve(pool, user_id=u, entry_slug="e", units=1, daily_limit=5, month_cap=100)  # fits under 5
    with pool.connection() as conn:
        used, limit = conn.execute('select used, "limit" from app.quotas where user_id = %s', (u,)).fetchone()
    assert (used, limit) == (4, 5)  # accepted: the stored limit catches up to the new value


def test_spend_cap_change_is_enforced_immediately_and_persists_on_an_accepted_reserve(pool):
    u = ensure_user(pool, 1, "a")
    reserve(pool, user_id=u, entry_slug="e", units=3, daily_limit=10, month_cap=3)

    with pytest.raises(QuotaExceeded) as e:
        reserve(pool, user_id=u, entry_slug="e", units=1, daily_limit=10, month_cap=2)
    assert e.value.reason == "spend_cap"
    status = spend_status(pool)
    assert status["units_used"] == 3
    assert status["units_cap"] == 3  # rejected: stored cap untouched

    reserve(pool, user_id=u, entry_slug="e", units=1, daily_limit=10, month_cap=5)  # fits under 5
    status = spend_status(pool)
    assert status["units_used"] == 4
    assert status["units_cap"] == 5  # accepted: spend_status now reports the current cap


def test_last_unit_has_exactly_one_winner(pool):  # Review Focus #1 / spec success criterion 4
    u = ensure_user(pool, 1, "a")
    url = os.environ["TEST_DATABASE_URL"]
    with make_pool(url, max_size=8) as wide:

        def attempt(_):
            try:
                reserve(wide, user_id=u, entry_slug="e", units=1, daily_limit=1, month_cap=100)
                return True
            except QuotaExceeded:
                return False

        with ThreadPoolExecutor(max_workers=8) as ex:
            wins = sum(ex.map(attempt, range(8)))
    assert wins == 1
    with pool.connection() as conn:
        used, limit = conn.execute('select used, "limit" from app.quotas where user_id = %s', (u,)).fetchone()
    assert (used, limit) == (1, 1)
    assert spend_status(pool)["units_used"] == 1


# --- routes ---


@pytest.fixture
def client(pool):
    return TestClient(create_app(pool=pool, api_secret=SECRET, settings=_settings()))


def test_reserve_needs_a_signed_in_github_id(client):
    r = client.post(
        "/v1/quota/reserve", json={"entry_slug": "e", "units": 1, "login": "a"}, headers=auth("run")
    )
    assert r.status_code == 401


def test_reserve_happy_path(client):
    r = client.post(
        "/v1/quota/reserve",
        json={"entry_slug": "e", "units": 1, "login": "a"},
        headers=auth("run", sub="12345"),
    )
    assert r.status_code == 200
    body = r.json()
    assert body["remaining_today"] == 4
    assert "reservation_id" in body
    with client.app.state.pool.connection() as conn:  # ensure_user actually ran the upsert
        assert conn.execute("select login from app.users where github_id = 12345").fetchone()[0] == "a"


@pytest.mark.parametrize(
    "sub",
    ["anon", "-3", "1_000", "1" * 19, " 7 ", "١٢٣"],  # arabic-indic digits 1,2,3
)
def test_reserve_rejects_subs_that_are_not_plain_github_ids(client, sub):  # N-1
    # bare int(sub) would accept every one of these (int() strips whitespace, allows underscores
    # and unicode digits, and has no length cap).
    r = client.post(
        "/v1/quota/reserve", json={"entry_slug": "e", "units": 1, "login": "a"}, headers=auth("run", sub=sub)
    )
    assert r.status_code == 401


def test_reserve_is_paused_when_lab_live_runs_is_off(pool):
    c = TestClient(create_app(pool=pool, api_secret=SECRET, settings=_settings(lab_live_runs=False)))
    r = c.post(
        "/v1/quota/reserve",
        json={"entry_slug": "e", "units": 1, "login": "a"},
        headers=auth("run", sub="12345"),
    )
    assert r.status_code == 503
    assert r.json() == {"paused": True}


def test_reserve_over_daily_limit_is_429(client):
    for _ in range(5):
        r = client.post(
            "/v1/quota/reserve",
            json={"entry_slug": "e", "units": 1, "login": "a"},
            headers=auth("run", sub="1"),
        )
        assert r.status_code == 200
    r = client.post(
        "/v1/quota/reserve", json={"entry_slug": "e", "units": 1, "login": "a"}, headers=auth("run", sub="1")
    )
    assert r.status_code == 429
    assert r.json() == {"reason": "daily"}


def test_settle_refund_then_replay_is_404(client):
    r = client.post(
        "/v1/quota/reserve", json={"entry_slug": "e", "units": 1, "login": "a"}, headers=auth("run", sub="1")
    )
    rid = r.json()["reservation_id"]
    s = client.post(
        "/v1/quota/settle", json={"reservation_id": rid, "outcome": "refund"}, headers=auth("run")
    )
    assert s.status_code == 200
    with client.app.state.pool.connection() as conn:
        assert conn.execute("select used from app.quotas where user_id = 1").fetchone()[0] == 0
    s2 = client.post(
        "/v1/quota/settle", json={"reservation_id": rid, "outcome": "refund"}, headers=auth("run")
    )
    assert s2.status_code == 404


def test_settle_success_with_units_used_route(client):  # R-P5-5
    r = client.post(
        "/v1/quota/reserve", json={"entry_slug": "e", "units": 2, "login": "a"}, headers=auth("run", sub="1")
    )
    rid = r.json()["reservation_id"]
    s = client.post(
        "/v1/quota/settle",
        json={"reservation_id": rid, "outcome": "success", "units_used": 1},
        headers=auth("run"),
    )
    assert s.status_code == 200
    with client.app.state.pool.connection() as conn:
        assert conn.execute("select used from app.quotas where user_id = 1").fetchone()[0] == 1


def test_settle_unknown_reservation_is_404(client):
    r = client.post(
        "/v1/quota/settle",
        json={"reservation_id": "not-a-real-id", "outcome": "success"},
        headers=auth("run"),
    )
    assert r.status_code == 404


def test_settle_of_an_already_expired_entry_is_404(client):  # SF-3
    fake = Reservation(uuid.uuid4(), 1, "e", 1, date.today(), date.today().replace(day=1), remaining_today=4)
    with client.app.state.reservations_lock:
        client.app.state.reservations[str(fake.id)] = (fake, time.monotonic() - 1)  # already expired
    r = client.post(
        "/v1/quota/settle", json={"reservation_id": str(fake.id), "outcome": "refund"}, headers=auth("run")
    )
    assert r.status_code == 404


def test_expired_reservations_are_pruned_on_the_next_reserve(client):  # SF-3
    # Pin the prune, not the settle path: plant an already-expired entry directly and leave it
    # unsettled, so the only way it can disappear is _prune_locked running inside post_reserve.
    fake = Reservation(uuid.uuid4(), 1, "e", 1, date.today(), date.today().replace(day=1), remaining_today=4)
    fake_id = str(fake.id)
    with client.app.state.reservations_lock:
        client.app.state.reservations[fake_id] = (fake, time.monotonic() - 1)  # already expired

    r = client.post(
        "/v1/quota/reserve", json={"entry_slug": "e", "units": 1, "login": "a"}, headers=auth("run", sub="1")
    )
    assert r.status_code == 200
    rid = r.json()["reservation_id"]

    assert fake_id not in client.app.state.reservations  # the expired entry was pruned
    assert set(client.app.state.reservations) == {rid}  # only the fresh reservation remains


def test_admin_spend_is_owner_only(client):
    assert client.get("/v1/admin/spend", headers=auth("read", sub="2")).status_code == 403
    r = client.get("/v1/admin/spend", headers=auth("read", sub=OWNER))
    assert r.status_code == 200
    assert set(r.json()) == {"month", "units_used", "units_cap"}


def test_admin_spend_reports_the_live_cap_before_any_reservation_this_month(client):  # N-8
    r = client.get("/v1/admin/spend", headers=auth("read", sub=OWNER))
    assert r.status_code == 200
    assert r.json()["units_cap"] == 2000  # settings default, not null


def test_v1_quota_without_a_database_is_503():
    c = TestClient(create_app(api_secret=SECRET, settings=_settings()))
    assert c.get("/health").status_code == 200
    r = c.post(
        "/v1/quota/reserve",
        json={"entry_slug": "e", "units": 1, "login": "a"},
        headers=auth("run", sub="1"),
    )
    assert r.status_code == 503
    assert r.json() == {"detail": "database not configured"}  # N-6: not the paused 503 body
