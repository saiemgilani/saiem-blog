import time
from datetime import UTC, datetime, timedelta

import pytest
from fastapi.testclient import TestClient

from saiem_api.app import create_app
from saiem_api.lab_routes import purge_lab_runs
from tests.lab_fixtures import extra_lab_modules  # noqa: F401 -- pytest fixture import
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


def test_missing_x_login_header_defaults_to_empty_string(client, pool):
    r = client.post("/v1/lab/series-odds/runs", json=SERIES_ODDS_PARAMS, headers=auth("run", sub="43"))
    assert r.status_code == 200
    with pool.connection() as conn:
        assert conn.execute("select login from app.users where github_id = 43").fetchone()[0] == ""


@pytest.mark.usefixtures("extra_lab_modules")
def test_angry_runner_refunds_and_records_an_error_row(client, pool):
    r = client.post("/v1/lab/angry/runs", json={}, headers={**auth("run", sub="44"), "X-Login": "a"})
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "error"
    assert body["cost_units"] == 0
    assert _quota_used(pool, "44", "angry") == 0  # refunded
    with pool.connection() as conn:
        status, error = conn.execute(
            "select status, error from app.lab_runs where id = %s", (body["run_id"],)
        ).fetchone()
    assert status == "error"
    assert "angry runner always raises" in error


@pytest.mark.usefixtures("extra_lab_modules")
def test_sleepy_runner_times_out_and_refunds(pool):
    c = TestClient(create_app(pool=pool, api_secret=SECRET, settings=_settings(lab_run_timeout_s=1)))
    t0 = time.perf_counter()
    r = c.post("/v1/lab/sleepy/runs", json={}, headers={**auth("run", sub="45"), "X-Login": "a"})
    assert time.perf_counter() - t0 < 5
    assert r.status_code == 200
    body = r.json()
    assert body["status"] == "timeout"
    assert body["cost_units"] == 0
    assert _quota_used(pool, "45", "sleepy") == 0  # refunded


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
