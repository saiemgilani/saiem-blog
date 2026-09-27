"""Quota + spend routes (spec §5 "Gating"). A reservation is settled within the same
request/stream (reserve -> run -> settle), so the pending-reservation store is a short-TTL
in-process dict on app.state, not a table -- see app.py's exception handlers for the 429/503
bodies these routes raise. Sync routes run in Starlette's threadpool, so every read/write of
that dict goes through app.state.reservations_lock (set up in app.py)."""

import time
from typing import Literal

from fastapi import APIRouter, Depends, HTTPException, Request
from psycopg_pool import ConnectionPool
from pydantic import BaseModel, Field

from saiem_api.auth import Principal, require
from saiem_api.db import get_pool
from saiem_api.quota import Reservation, ensure_user, reserve, settle, spend_status
from saiem_api.views import SLUG

router = APIRouter(prefix="/v1", tags=["quota"])
_RESERVATION_TTL_S = 60
_MAX_GITHUB_ID_DIGITS = 18  # bigint headroom; a longer numeric string can't be a real github_id


class Paused(Exception):
    """Raised when settings.lab_live_runs is off; app.py's handler turns it into 503 {"paused": true}."""


class ReserveIn(BaseModel):
    entry_slug: str = Field(pattern=SLUG)
    units: int = Field(1, ge=1)
    login: str = Field(min_length=1, max_length=39)  # GitHub login max length


class SettleIn(BaseModel):
    reservation_id: str
    outcome: Literal["success", "refund"]
    units_used: int | None = Field(None, ge=0)


def _looks_like_github_id(sub: str) -> bool:
    # N-1: plain int(sub) also accepts " 7 ", "1_000", "-3", and non-ASCII Unicode digits.
    return sub.isascii() and sub.isdigit() and len(sub) <= _MAX_GITHUB_ID_DIGITS


def current_user(principal: Principal = Depends(require("run"))) -> Principal:
    if not _looks_like_github_id(principal.sub):
        raise HTTPException(401, "sign in to run")
    return principal


def require_owner(request: Request, principal: Principal = Depends(require("read"))) -> Principal:
    # any scope: read ⊆ run. Runs before get_pool so a non-owner sees 403, not a DB-dependent 503.
    if principal.sub != request.app.state.settings.owner_github_id:
        raise HTTPException(403, "owner only")
    return principal


def paused(request: Request) -> None:
    if not request.app.state.settings.lab_live_runs:
        raise Paused()


def _prune_locked(reservations: dict[str, tuple[Reservation, float]]) -> None:
    """Caller must hold app.state.reservations_lock."""
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
    lock = request.app.state.reservations_lock
    # Prune BEFORE the DB call: a race here costs nothing. Pruning after reserve() would risk an
    # already-paid-for reservation on a concurrent-mutation error (SF-1).
    with lock:
        _prune_locked(request.app.state.reservations)
    user_id = ensure_user(pool, int(principal.sub), body.login)
    r = reserve(
        pool,
        user_id=user_id,
        entry_slug=body.entry_slug,
        units=body.units,
        daily_limit=settings.lab_daily_quota,
        month_cap=settings.spend_units_cap,
    )
    with lock:
        request.app.state.reservations[str(r.id)] = (r, time.monotonic() + _RESERVATION_TTL_S)
    return {"reservation_id": str(r.id), "remaining_today": r.remaining_today}


@router.post("/quota/settle")
def post_settle(
    body: SettleIn,
    request: Request,
    _: Principal = Depends(require("run")),
    pool: ConnectionPool = Depends(get_pool),
) -> dict:
    lock = request.app.state.reservations_lock
    with lock:
        # SF-2: a single atomic pop under the lock — no separate get/check/del TOCTOU, so a
        # duplicate settle (e.g. a client retry) 404s instead of 500ing.
        entry = request.app.state.reservations.pop(body.reservation_id, None)
    if entry is None or entry[1] <= time.monotonic():
        raise HTTPException(404, "unknown or expired reservation")
    try:
        settle(pool, entry[0], body.outcome, units_used=body.units_used)
    except Exception:
        # N-4: a transient DB failure shouldn't burn the reservation — put it back for a retry.
        with lock:
            request.app.state.reservations[body.reservation_id] = entry
        raise
    return {"ok": True}


@router.get("/admin/spend")
def get_admin_spend(
    request: Request,
    _: Principal = Depends(require_owner),
    pool: ConnectionPool = Depends(get_pool),
) -> dict:
    status = spend_status(pool)
    if status["units_cap"] is None:  # N-8: no spend row yet this month — report the live cap
        status["units_cap"] = request.app.state.settings.spend_units_cap
    return status
