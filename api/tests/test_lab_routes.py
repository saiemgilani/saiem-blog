import time
from datetime import UTC, datetime, timedelta

import pytest
from fastapi.testclient import TestClient

from saiem_api.app import create_app
from saiem_api.lab_routes import purge_lab_runs
from saiem_api.quota import spend_status
from tests.test_quota import _settings
from tests.test_views import SECRET, auth

SERIES_ODDS_PARAMS = {"p_game": 0.6, "best_of": 7, "sims": 20000}


@pytest.fixture
def client(pool):
    return TestClient(create_app(pool=pool, api_secret=SECRET, settings=_settings()))


def _quota_used(pool, github_id: str, slug: str) -> int:
    with pool.connection() as conn:
        row = conn.execute(
            "select q.used from app.quotas q join app.users u on u.id = q.user_id "
            "where u.github_id = %s and q.entry_slug = %s",
            (github_id, slug),
        ).fetchone()
    return int(row[0]) if row else 0


def test_run_reserves_a_unit_and_caches_the_result(client, pool):
    r = client.post(
        "/v1/lab/series-odds/runs",
        json=SERIES_ODDS_PARAMS,
        headers={**auth("run", sub="42"), "X-Login": "a"},
    )
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "ok"
    assert body["cached"] is False
    assert body["cost_units"] == 1
    assert _quota_used(pool, "42", "series-odds") == 1
    with pool.connection() as conn:
        assert (
            conn.execute("select status from app.lab_runs where id = %s", (body["run_id"],)).fetchone()[0]
            == "ok"
        )

    r2 = client.post(
        "/v1/lab/series-odds/runs",
        json=SERIES_ODDS_PARAMS,
        headers={**auth("run", sub="42"), "X-Login": "a"},
    )
    assert r2.status_code == 200
    body2 = r2.json()
    assert body2["cached"] is True
    assert body2["cost_units"] == 0
    assert body2["result"] == body["result"]
    assert _quota_used(pool, "42", "series-odds") == 1  # unchanged: no second reservation
    # N-11(a): a cache hit and a "reserve then refund" both leave `used` at 1 -- also pin the
    # spend ledger and the row count, which a reserve-then-refund would NOT leave unchanged.
    assert spend_status(pool)["units_used"] == 1
    with pool.connection() as conn:
        assert (
            conn.execute("select count(*) from app.lab_runs where entry_slug = 'series-odds'").fetchone()[0]
            == 1
        )


def test_missing_x_login_header_defaults_to_empty_string(client, pool):
    r = client.post("/v1/lab/series-odds/runs", json=SERIES_ODDS_PARAMS, headers=auth("run", sub="43"))
    assert r.status_code == 200
    with pool.connection() as conn:
        assert conn.execute("select login from app.users where github_id = 43").fetchone()[0] == ""


def test_angry_runner_refunds_and_records_an_error_row(client, pool, extra_lab_modules):
    r = client.post("/v1/lab/angry/runs", json={}, headers={**auth("run", sub="44"), "X-Login": "a"})
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "error"
    assert body["cost_units"] == 0
    assert _quota_used(pool, "44", "angry") == 0  # refunded
    assert spend_status(pool)["units_used"] == 0  # N-11(b): the spend ledger too, not just quotas
    with pool.connection() as conn:
        status, error = conn.execute(
            "select status, error from app.lab_runs where id = %s", (body["run_id"],)
        ).fetchone()
    assert status == "error"
    assert "angry runner always raises" in error


def test_sleepy_runner_times_out_and_refunds(pool, extra_lab_modules):
    c = TestClient(create_app(pool=pool, api_secret=SECRET, settings=_settings(lab_run_timeout_s=1)))
    t0 = time.perf_counter()
    r = c.post("/v1/lab/sleepy/runs", json={}, headers={**auth("run", sub="45"), "X-Login": "a"})
    assert time.perf_counter() - t0 < 5
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "timeout"
    assert body["cost_units"] == 0
    assert _quota_used(pool, "45", "sleepy") == 0  # refunded
    assert spend_status(pool)["units_used"] == 0  # N-11(b)
    with pool.connection() as conn:  # N-11(c): pin the persisted row, not just the response body
        assert (
            conn.execute("select status from app.lab_runs where id = %s", (body["run_id"],)).fetchone()[0]
            == "timeout"
        )


def test_execute_raising_still_refunds_and_marks_the_row_error(client, pool, monkeypatch):  # SF-1
    def _boom(*args, **kwargs):
        raise OSError("no free file descriptors")

    monkeypatch.setattr("saiem_api.lab_routes.execute", _boom)
    with pytest.raises(OSError):
        client.post(
            "/v1/lab/series-odds/runs",
            json=SERIES_ODDS_PARAMS,
            headers={**auth("run", sub="47"), "X-Login": "a"},
        )
    assert _quota_used(pool, "47", "series-odds") == 0  # refunded even though execute() itself raised
    assert spend_status(pool)["units_used"] == 0
    with pool.connection() as conn:
        status = conn.execute(
            "select status from app.lab_runs where entry_slug = 'series-odds' "
            "order by started_at desc limit 1"
        ).fetchone()[0]
    assert status == "error"  # not left "running"


def test_cache_key_uses_validated_params_not_the_raw_body(client, pool):  # SF-3
    headers = {**auth("run", sub="48"), "X-Login": "a"}
    r1 = client.post("/v1/lab/series-odds/runs", json={"p_game": 0.6, "best_of": 7}, headers=headers)
    assert r1.status_code == 200
    assert r1.json()["cached"] is False

    # Same request, with every default spelled out explicitly -- must still be the same cache key.
    r2 = client.post(
        "/v1/lab/series-odds/runs",
        json={"p_game": 0.6, "best_of": 7, "home_edge": 0.0, "sims": 20000},
        headers=headers,
    )
    assert r2.status_code == 200
    assert r2.json()["cached"] is True
    assert _quota_used(pool, "48", "series-odds") == 1  # unchanged: no second reservation


def test_best_of_outside_3_5_7_is_422_before_any_reservation(client, pool):  # SF-4
    r = client.post(
        "/v1/lab/series-odds/runs",
        json={"p_game": 0.6, "best_of": 4},
        headers={**auth("run", sub="49"), "X-Login": "a"},
    )
    assert r.status_code == 422
    with pool.connection() as conn:  # ensure_user never ran -- no reservation was attempted
        assert conn.execute("select count(*) from app.users where github_id = 49").fetchone()[0] == 0


def test_anon_is_401(client):
    r = client.post("/v1/lab/series-odds/runs", json=SERIES_ODDS_PARAMS, headers=auth("run"))
    assert r.status_code == 401


def test_paused_is_503(pool):
    c = TestClient(create_app(pool=pool, api_secret=SECRET, settings=_settings(lab_live_runs=False)))
    r = c.post(
        "/v1/lab/series-odds/runs",
        json=SERIES_ODDS_PARAMS,
        headers={**auth("run", sub="1"), "X-Login": "a"},
    )
    assert r.status_code == 503
    assert r.json() == {"paused": True}


def test_daily_quota_exceeded_is_429_and_reuses_task1s_quota_gate(pool):
    c = TestClient(create_app(pool=pool, api_secret=SECRET, settings=_settings(lab_daily_quota=1)))
    headers = {**auth("run", sub="46"), "X-Login": "a"}
    ok = c.post("/v1/lab/series-odds/runs", json={**SERIES_ODDS_PARAMS, "sims": 1000}, headers=headers)
    assert ok.status_code == 200
    over = c.post("/v1/lab/series-odds/runs", json={**SERIES_ODDS_PARAMS, "sims": 2000}, headers=headers)
    assert over.status_code == 429
    assert over.json() == {"reason": "daily"}


def test_unknown_slug_is_404(client):
    r = client.post("/v1/lab/does-not-exist/runs", json={}, headers={**auth("run", sub="1"), "X-Login": "a"})
    assert r.status_code == 404


def test_invalid_params_is_422(client):
    r = client.post(
        "/v1/lab/series-odds/runs",
        json={"p_game": 1.5},  # outside (0, 1)
        headers={**auth("run", sub="1"), "X-Login": "a"},
    )
    assert r.status_code == 422


def test_example_endpoint_returns_the_packaged_json(client):
    r = client.get("/v1/lab/series-odds/example", headers=auth("read"))
    assert r.status_code == 200
    body = r.json()
    assert body["params"] == {"best_of": 7, "home_edge": 0.0, "p_game": 0.6, "sims": 20000}
    assert body["result"]["exact"] == pytest.approx(0.7102, abs=1e-3)


def test_example_endpoint_needs_a_token(client):
    assert client.get("/v1/lab/series-odds/example").status_code == 401


def test_example_endpoint_unknown_slug_is_404(client):
    assert client.get("/v1/lab/does-not-exist/example", headers=auth("read")).status_code == 404


def test_purge_lab_runs_deletes_rows_past_retention(pool):
    with pool.connection() as conn:
        conn.execute(
            "insert into app.lab_runs (entry_slug, params_hash, status, started_at) "
            "values ('e', 'h', 'ok', %s)",
            (datetime.now(UTC) - timedelta(days=100),),
        )
        conn.execute(
            "insert into app.lab_runs (entry_slug, params_hash, status, started_at) "
            "values ('e', 'h2', 'ok', now())"
        )
    assert purge_lab_runs(pool, 90) == 1
    with pool.connection() as conn:
        assert conn.execute("select count(*) from app.lab_runs").fetchone()[0] == 1


def test_purge_lab_runs_treats_a_non_positive_retention_as_one_day(pool):  # N-10
    with pool.connection() as conn:
        conn.execute(
            "insert into app.lab_runs (entry_slug, params_hash, status, started_at) "
            "values ('e', 'h', 'running', now())"
        )
    assert purge_lab_runs(pool, 0) == 0  # would delete an in-flight row if 0 were used verbatim
    with pool.connection() as conn:
        assert conn.execute("select count(*) from app.lab_runs").fetchone()[0] == 1
