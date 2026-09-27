"""Service-token auth (spec §6). Every call from Next carries a short-lived HS256 JWT:
aud=saiem-api, exp≈60 s, sub = GitHub id or "anon", scope = read | run. Nothing else is
accepted — no API keys, no cookies."""

from collections.abc import Callable
from dataclasses import dataclass

import jwt
from fastapi import Depends, HTTPException, Request
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer

AUDIENCE = "saiem-api"
SCOPES = ("read", "run")  # ordered: run ⊇ read
_bearer = HTTPBearer(auto_error=False)


class TokenError(ValueError):
    """The token is missing a claim, expired, for another audience, or not ours."""


@dataclass(frozen=True)
class Principal:
    sub: str
    scope: str

    def allows(self, scope: str) -> bool:
        return SCOPES.index(self.scope) >= SCOPES.index(scope)


def verify_service_token(token: str, secret: str) -> Principal:
    try:
        claims = jwt.decode(
            token,
            secret,
            algorithms=["HS256"],
            audience=AUDIENCE,
            leeway=5,  # Vercel ↔ droplet clock skew
            options={"require": ["exp", "sub", "scope", "aud"]},
        )
    except jwt.PyJWTError as e:
        raise TokenError(str(e)) from e
    sub, scope = claims.get("sub"), claims.get("scope")
    if not isinstance(sub, str) or scope not in SCOPES:
        raise TokenError("bad sub or scope")
    return Principal(sub=sub, scope=scope)


def require(scope: str) -> Callable[..., Principal]:
    if scope not in SCOPES:
        raise ValueError(f"unknown scope {scope!r}")

    def dep(request: Request, creds: HTTPAuthorizationCredentials | None = Depends(_bearer)) -> Principal:
        if creds is None or not creds.credentials:
            raise HTTPException(401, "missing bearer token", headers={"WWW-Authenticate": "Bearer"})
        try:
            principal = verify_service_token(creds.credentials, request.app.state.api_secret)
        except TokenError as e:
            raise HTTPException(401, f"invalid token: {e}", headers={"WWW-Authenticate": "Bearer"}) from e
        if not principal.allows(scope):
            raise HTTPException(403, f"token scope '{principal.scope}' cannot '{scope}'")
        return principal

    return dep
