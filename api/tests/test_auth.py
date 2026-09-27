import time

import jwt
import pytest
from fastapi import Depends, FastAPI
from fastapi.testclient import TestClient

from saiem_api.auth import Principal, TokenError, require, verify_service_token

SECRET = "x" * 32


def tok(secret: str = SECRET, **over):
    now = int(time.time())
    claims = {"aud": "saiem-api", "sub": "anon", "scope": "read", "iat": now, "exp": now + 60, **over}
    return jwt.encode(claims, secret, algorithm="HS256")


def test_valid_token_yields_principal():
    assert verify_service_token(tok(sub="123", scope="run"), SECRET) == Principal(sub="123", scope="run")
    assert verify_service_token(tok(exp=int(time.time()) - 3), SECRET).sub == "anon"  # inside the 5 s leeway


@pytest.mark.parametrize(
    "bad",
    [
        tok(exp=int(time.time()) - 30),  # expired beyond leeway
        tok(aud="other-api"),  # wrong audience
        tok(secret="y" * 32),  # forged with another secret
        jwt.encode(
            {"aud": "saiem-api", "sub": "anon", "scope": "read", "exp": int(time.time()) + 60},
            None,
            algorithm="none",
        ),
        tok(scope="admin"),  # unknown scope
        tok(sub=42),  # sub must be a string
        "not.a.jwt",
    ],
)
def test_rejected_tokens(bad):
    with pytest.raises(TokenError):
        verify_service_token(bad, SECRET)


@pytest.mark.parametrize("missing", ["sub", "scope", "exp", "aud"])
def test_missing_required_claims(missing):
    claims = {"aud": "saiem-api", "sub": "anon", "scope": "read", "exp": int(time.time()) + 60}
    del claims[missing]
    with pytest.raises(TokenError):
        verify_service_token(jwt.encode(claims, SECRET, algorithm="HS256"), SECRET)


def _client() -> TestClient:
    app = FastAPI()
    app.state.api_secret = SECRET

    @app.get("/r")
    def r(p: Principal = Depends(require("read"))) -> dict[str, str]:  # noqa: B008
        return {"sub": p.sub}

    @app.get("/run")
    def run(p: Principal = Depends(require("run"))) -> dict[str, str]:  # noqa: B008
        return {"sub": p.sub}

    return TestClient(app)


def test_dependency_status_codes():
    c = _client()
    auth = lambda t: {"Authorization": f"Bearer {t}"}  # noqa: E731
    assert c.get("/r").status_code == 401
    assert c.get("/r").headers["www-authenticate"] == "Bearer"
    assert c.get("/r", headers={"Authorization": "Bearer nope"}).status_code == 401
    assert c.get("/r", headers=auth(tok())).status_code == 200
    assert c.get("/run", headers=auth(tok())).status_code == 403  # read < run
    assert c.get("/run", headers=auth(tok(scope="run"))).status_code == 200
    assert c.get("/r", headers=auth(tok(scope="run"))).status_code == 200  # run ⊇ read
