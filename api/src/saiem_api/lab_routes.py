"""Metered lab run + example endpoints (spec §5 "Gated compute"). POST /v1/lab/{slug}/runs
executes (or serves from cache) a python lab entry via runner.execute, reusing Task 1's
reserve/settle metering and its current_user/paused dependencies verbatim. GET
/v1/lab/{slug}/example serves the packaged worked example -- a static file, so scope read and no
metering."""

import json
from importlib.resources import files
from typing import Any

from fastapi import APIRouter, Depends, HTTPException, Request
from psycopg.types.json import Jsonb
from psycopg_pool import ConnectionPool
from pydantic import ValidationError

from saiem_api.auth import Principal, require
from saiem_api.db import get_pool
from saiem_api.lab import load_runner
from saiem_api.quota import ensure_user, reserve, settle
from saiem_api.quota_routes import current_user, paused
from saiem_api.runner import execute, params_hash
from saiem_api.views import Slug

router = APIRouter(prefix="/v1/lab", tags=["lab"])

_CACHE_HIT = """
select id, result from app.lab_runs
where entry_slug = %s and params_hash = %s and status = 'ok'
order by finished_at desc limit 1
"""
_INSERT_RUNNING = """
insert into app.lab_runs (entry_slug, user_id, params_hash, status) values (%s, %s, %s, 'running')
returning id
"""
_UPDATE_FINISHED = """
update app.lab_runs set status = %s, finished_at = now(), result = %s, error = %s, cost_units = %s
where id = %s
"""


def purge_lab_runs(pool: ConnectionPool, keep_days: int) -> int:
    keep_days = max(keep_days, 1)  # N-10: a retention of 0 or less would also delete in-flight rows
    with pool.connection() as conn:
        return conn.execute(
            "delete from app.lab_runs where started_at < now() - make_interval(days => %s)", (keep_days,)
        ).rowcount


@router.post("/{slug}/runs")
def post_run(
    slug: Slug,
    params: dict[str, Any],
    request: Request,
    principal: Principal = Depends(current_user),
    _paused: None = Depends(paused),
    pool: ConnectionPool = Depends(get_pool),
) -> dict:
    spec = load_runner(slug)
    if spec is None:
        raise HTTPException(404, f"unknown lab entry {slug!r}")
    try:
        validated = spec["Params"].model_validate(params)
    except ValidationError as e:
        # include_context=False: a custom validator's ctx can carry a raw exception object,
        # which is not JSON-encodable and would turn this 422 into a 500 (N-3).
        raise HTTPException(422, e.errors(include_context=False, include_url=False)) from e
    # SF-3: hash and execute the VALIDATED, defaults-filled params, never the raw body -- two
    # requests that are semantically identical (defaults spelled out, or an ignored extra key)
    # must hit the same cache row.
    params = validated.model_dump(mode="json")

    h = params_hash(slug, params)
    with pool.connection() as conn:
        cached = conn.execute(_CACHE_HIT, (slug, h)).fetchone()
    if cached is not None:
        run_id, result = cached
        return {"run_id": str(run_id), "status": "ok", "result": result, "cost_units": 0, "cached": True}

    settings = request.app.state.settings
    login = request.headers.get("X-Login", "")[:39]  # N-8: matches Task 1's ReserveIn.login cap
    user_id = ensure_user(pool, int(principal.sub), login)
    units = spec["cost_units"]
    r = reserve(
        pool,
        user_id=user_id,
        entry_slug=slug,
        units=units,
        daily_limit=settings.lab_daily_quota,
        month_cap=settings.spend_units_cap,
    )
    with pool.connection() as conn:
        run_id = conn.execute(_INSERT_RUNNING, (slug, user_id, h)).fetchone()[0]

    # SF-1: once a unit is reserved, ANY exception here (execute raising, the row update
    # failing, JSON serialisation) must still settle the reservation and leave the row finished,
    # not stuck "running" while the ledger says charged. `ok` stays False unless the run AND its
    # persistence both succeed, so a failure anywhere here fails toward refund.
    ok = False
    try:
        out = execute(slug, params, timeout_s=settings.lab_run_timeout_s)
        cost_units = units if out.status == "ok" else 0
        with pool.connection() as conn:
            conn.execute(
                _UPDATE_FINISHED,
                (
                    out.status,
                    Jsonb(out.result) if out.result is not None else None,
                    out.error,
                    cost_units,
                    run_id,
                ),
            )
        # Fix round 2 (SF-1 residual gap): only flip to True once the row update has actually
        # committed. Setting this right after execute() returns -- before the persistence
        # attempt -- meant a failed UPDATE (PoolTimeout, a bad JSON value, ...) after a
        # genuinely-ok run still settled "success" in the finally below, charging the user for a
        # run whose result was never durably stored.
        ok = out.status == "ok"
    except Exception:
        cost_units = 0
        with pool.connection() as conn:
            conn.execute(_UPDATE_FINISHED, ("error", None, "internal error", 0, run_id))
        raise
    finally:
        settle(pool, r, "success" if ok else "refund")

    return {
        "run_id": str(run_id),
        "status": out.status,
        "result": out.result,
        "cost_units": cost_units,
        "cached": False,
    }


@router.get("/{slug}/example")
def get_example(slug: Slug, _: Principal = Depends(require("read"))) -> dict:
    try:
        text = (
            files("saiem_api")
            .joinpath(f"lab/{slug.replace('-', '_')}.example.json")
            .read_text(encoding="utf-8")
        )
    except FileNotFoundError as e:
        raise HTTPException(404, f"no example for {slug!r}") from e
    return json.loads(text)
