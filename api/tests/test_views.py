import time

import jwt
import pytest
from fastapi.testclient import TestClient

from saiem_api.app import create_app
from saiem_api.views import purge_view_events

SECRET = "s" * 32
V1, V2 = "a" * 64, "b" * 64


def auth(scope: str = "read", sub: str = "anon") -> dict[str, str]:
    now = int(time.time())
    t = jwt.encode(
        {"aud": "saiem-api", "sub": sub, "scope": scope, "iat": now, "exp": now + 60},
        SECRET,
        algorithm="HS256",
    )
    return {"Authorization": f"Bearer {t}"}


@pytest.fixture
def client(pool):
    return TestClient(create_app(pool=pool, api_secret=SECRET))


def test_post_view_counts_once_per_visitor_per_day(client):
    r = client.post("/v1/views/intro-to-hoopR", json={"visitor": V1}, headers=auth())
    assert r.status_code == 200 and r.json() == {"slug": "intro-to-hoopR", "count": 1, "counted": True}
    r = client.post("/v1/views/intro-to-hoopR", json={"visitor": V1}, headers=auth())
    assert r.json() == {"slug": "intro-to-hoopR", "count": 1, "counted": False}  # replay, same day
    r = client.post("/v1/views/intro-to-hoopR", json={"visitor": V2}, headers=auth())
    assert r.json()["count"] == 2
    assert client.get("/v1/views/intro-to-hoopR", headers=auth()).json() == {
        "slug": "intro-to-hoopR",
        "count": 2,
    }
    assert client.get("/v1/views", headers=auth()).json() == {
        "views": [{"slug": "intro-to-hoopR", "count": 2}]
    }


def test_same_visitor_counts_again_on_a_new_day(client, pool):
    client.post("/v1/views/n", json={"visitor": V1}, headers=auth())
    with pool.connection() as conn:  # age yesterday's event: the dedup key includes the day
        conn.execute("update app.view_events set day = current_date - 1 where visitor = %s", (V1,))
    assert client.post("/v1/views/n", json={"visitor": V1}, headers=auth()).json()["count"] == 2


def test_unknown_slug_reads_zero(client):
    assert client.get("/v1/views/never-opened", headers=auth()).json() == {"slug": "never-opened", "count": 0}


@pytest.mark.parametrize(
    "slug", ["..x", "a" * 101, "-leading", "x%20y"]
)  # a "/" inside would 404 at routing, so keep these single-segment
def test_bad_slug_is_rejected_before_any_write(client, pool, slug):
    assert client.post(f"/v1/views/{slug}", json={"visitor": V1}, headers=auth()).status_code == 422
    with pool.connection() as conn:
        assert conn.execute("select count(*) from app.view_events").fetchone()[0] == 0


def test_bad_visitor_is_rejected(client):
    for visitor in ["abc", "A" * 64, "z" * 64, 7]:
        assert client.post("/v1/views/ok", json={"visitor": visitor}, headers=auth()).status_code == 422


def test_views_need_a_token(client):
    assert client.get("/v1/views").status_code == 401
    assert client.post("/v1/views/ok", json={"visitor": V1}).status_code == 401


def test_purge_keeps_recent_events(client, pool):
    client.post("/v1/views/p", json={"visitor": V1}, headers=auth())
    client.post("/v1/views/p", json={"visitor": V2}, headers=auth())
    with pool.connection() as conn:
        conn.execute("update app.view_events set day = current_date - 3 where visitor = %s", (V1,))
    assert purge_view_events(pool) == 1
    with pool.connection() as conn:
        assert conn.execute("select count(*) from app.view_events").fetchone()[0] == 1
        assert (
            conn.execute("select count from app.views where slug = 'p'").fetchone()[0] == 2
        )  # totals survive purges


def test_v1_without_a_database_is_503_but_health_is_200():
    c = TestClient(create_app(api_secret=SECRET))
    assert c.get("/health").status_code == 200
    assert c.get("/v1/views", headers=auth()).status_code == 503
    assert c.get("/v1/projects", headers=auth()).status_code == 503
    assert c.get("/v1/views").status_code == 401  # auth runs before the pool dependency, even with no pool
