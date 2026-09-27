"""Quota + spend routes (spec §5 "Gating"). A reservation is settled within the same
request/stream (reserve -> run -> settle), so the pending-reservation store is a short-TTL
in-process dict on app.state, not a table -- see app.py's exception handlers for the 429/503
bodies these routes raise."""

import time
from typing import Literal

from fastapi import APIRouter, Depends, HTTPException, Request
from psycopg_pool import ConnectionPool
from pydantic import BaseModel, Field

from saiem_api.auth import Principal, require
from saiem_api.db import get_pool
from saiem_api.quota import Reservation, ensure_user, reserve, settle, spend_status

router = APIRouter(prefix="/v1", tags=["quota"])
_RESERVATION_TTL_S = 60


class Paused(Exception):
    """Raised when settings.lab_live_runs is off; app.py's handler turns it into 503 {"paused": true}."""


class ReserveIn(BaseModel):
    entry_slug: str = Field(min_length=1)
    units: int = Field(1, ge=1)
    login: str = Field(min_length=1)


class SettleIn(BaseModel):
    reservation_id: str
    outcome: Literal["success", "refund"]


def current_user(principal: Principal = Depends(require("run"))) -> Principal:
    try:
        int(principal.sub)
    except ValueError:
        raise HTTPException(401, "sign in to run") from None
    return principal


def paused(request: Request) -> None:
    if not request.app.state.settings.lab_live_runs:
        raise Paused()


def _prune(reservations: dict[str, tuple[Reservation, float]]) -> None:
    now = time.monotonic()
    for key in [k for k, (_, expires_at) in reservations.items() if expires_at <= now]:
        del reservations[key]


@router.post("/quota/reserve")
def post_reserve(
    body: ReserveIn,
    request: Request,
    principal: Principal = Depends(current_user),
    _paused: None = Depends(paused),
    pool: ConnectionPool = Depends(get_pool),
) -> dict:
    settings = request.app.state.settings
    user_id = ensure_user(pool, int(principal.sub), body.login)
    r = reserve(
        pool,
        user_id=user_id,
        entry_slug=body.entry_slug,
        units=body.units,
        daily_limit=settings.lab_daily_quota,
        month_cap=settings.spend_units_cap,
    )
    reservations = request.app.state.reservations
    _prune(reservations)
    reservations[str(r.id)] = (r, time.monotonic() + _RESERVATION_TTL_S)
    return {"reservation_id": str(r.id), "remaining_today": r.remaining_today}


@router.post("/quota/settle")
def post_settle(
    body: SettleIn,
    request: Request,
    _: Principal = Depends(require("run")),
    pool: ConnectionPool = Depends(get_pool),
) -> dict:
    reservations = request.app.state.reservations
    entry = reservations.get(body.reservation_id)
    if entry is None or entry[1] <= time.monotonic():
        reservations.pop(body.reservation_id, None)
        raise HTTPException(404, "unknown or expired reservation")
    del reservations[body.reservation_id]
    settle(pool, entry[0], body.outcome)
    return {"ok": True}


@router.get("/admin/spend")
def get_admin_spend(
    request: Request,
    principal: Principal = Depends(require("read")),  # any scope: read ⊆ run
    pool: ConnectionPool = Depends(get_pool),
) -> dict:
    if principal.sub != request.app.state.settings.owner_github_id:
        raise HTTPException(403, "owner only")
    return spend_status(pool)
