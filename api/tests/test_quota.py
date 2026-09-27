import os
from concurrent.futures import ThreadPoolExecutor

import pytest
from fastapi.testclient import TestClient

from saiem_api.app import create_app
from saiem_api.db import make_pool
from saiem_api.quota import QuotaExceeded, ensure_user, reserve, settle, spend_status
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


def test_settle_unknown_reservation_is_404(client):
    r = client.post(
        "/v1/quota/settle",
        json={"reservation_id": "not-a-real-id", "outcome": "success"},
        headers=auth("run"),
    )
    assert r.status_code == 404


def test_admin_spend_is_owner_only(client):
    assert client.get("/v1/admin/spend", headers=auth("read", sub="2")).status_code == 403
    r = client.get("/v1/admin/spend", headers=auth("read", sub=OWNER))
    assert r.status_code == 200
    assert set(r.json()) == {"month", "units_used", "units_cap"}


def test_v1_quota_without_a_database_is_503():
    c = TestClient(create_app(api_secret=SECRET, settings=_settings()))
    assert c.get("/health").status_code == 200
    r = c.post(
        "/v1/quota/reserve",
        json={"entry_slug": "e", "units": 1, "login": "a"},
        headers=auth("run", sub="1"),
    )
    assert r.status_code == 503
