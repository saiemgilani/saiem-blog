"""Metering (spec §5 "Gating"): one transaction holds BOTH conditional upserts, so a spend-cap
refusal leaves the user's daily row untouched and concurrent reserves serialize on the row lock."""

import uuid
from dataclasses import dataclass
from datetime import UTC, date, datetime
from typing import Literal

from psycopg_pool import ConnectionPool


class QuotaExceeded(Exception):
    def __init__(self, reason: Literal["daily", "spend_cap"]) -> None:
        super().__init__(reason)
        self.reason = reason


@dataclass(frozen=True)
class Reservation:
    id: uuid.UUID
    user_id: int
    entry_slug: str
    units: int
    day: date
    month: date
    remaining_today: int


_USER = """
insert into app.users (github_id, login) values (%s, %s)
on conflict (github_id) do update set login = excluded.login, last_seen = now()
returning id
"""
# The conditional UPDATE is the whole trick: the row lock taken by the upsert serializes racers,
# and the WHERE makes the loser's update affect zero rows → no RETURNING row → QuotaExceeded.
# R-P5-6: also refresh "limit"/units_cap from THIS call's request (excluded.*) on every conflict,
# and gate the WHERE on that fresh value, not the possibly-stale stored one — the env is the
# authority for caps, so a lowered LAB_DAILY_QUOTA/SPEND_UNITS_CAP is enforced on the very next
# reservation instead of waiting for the day/month to roll over. Note: when the WHERE is false,
# Postgres's ON CONFLICT DO UPDATE ... WHERE leaves the row completely untouched (no partial
# SET) — so the persisted column only catches up to the new value on an ACCEPTED reservation,
# not a rejected one; see tests/test_quota.py for the verified behavior.
_QUOTA = """
insert into app.quotas (user_id, entry_slug, day, used, "limit") values (%(u)s, %(e)s, %(d)s, %(n)s, %(lim)s)
on conflict (user_id, entry_slug, day) do update
  set used = app.quotas.used + %(n)s, "limit" = excluded."limit"
  where app.quotas.used + %(n)s <= excluded."limit"
returning used, "limit"
"""
_SPEND = """
insert into app.spend (month, units_used, units_cap) values (%(m)s, %(n)s, %(cap)s)
on conflict (month) do update set units_used = app.spend.units_used + %(n)s, units_cap = excluded.units_cap
  where app.spend.units_used + %(n)s <= excluded.units_cap
returning units_used
"""


def ensure_user(pool: ConnectionPool, github_id: int, login: str) -> int:
    with pool.connection() as conn:
        return int(conn.execute(_USER, (github_id, login)).fetchone()[0])


def reserve(
    pool: ConnectionPool, *, user_id: int, entry_slug: str, units: int, daily_limit: int, month_cap: int
) -> Reservation:
    if units < 1 or units > daily_limit:
        raise QuotaExceeded("daily")
    # Controller ruling: the _SPEND upsert's cap check only fires on the UPDATE path (the WHERE
    # clause), so the first-ever reservation of a calendar month would insert unconditionally and
    # bypass the cap outright if it alone exceeds it.
    if units > month_cap:
        raise QuotaExceeded("spend_cap")
    today = datetime.now(UTC).date()
    month = today.replace(day=1)
    with pool.connection() as conn:  # one transaction: both rows or neither
        q = conn.execute(
            _QUOTA, {"u": user_id, "e": entry_slug, "d": today, "n": units, "lim": daily_limit}
        ).fetchone()
        if q is None:
            conn.rollback()
            raise QuotaExceeded("daily")
        s = conn.execute(_SPEND, {"m": month, "n": units, "cap": month_cap}).fetchone()
        if s is None:
            conn.rollback()  # undoes the quota increment too
            raise QuotaExceeded("spend_cap")
        used, limit = q
    return Reservation(
        uuid.uuid4(), user_id, entry_slug, units, today, month, remaining_today=int(limit) - int(used)
    )


def settle(
    pool: ConnectionPool,
    r: Reservation,
    outcome: Literal["success", "refund"],
    *,
    units_used: int | None = None,
) -> None:
    # R-P5-5: a "success" with units_used refunds reserved - units_used (partial refund for
    # usage-based metering); units_used=None keeps the original all-or-nothing behavior (no
    # refund). Never charges more than what was reserved -- give_back floors at 0.
    give_back = (
        r.units
        if outcome == "refund"
        else max(r.units - (units_used if units_used is not None else r.units), 0)
    )
    if give_back == 0:
        return
    with pool.connection() as conn:
        conn.execute(
            "update app.quotas set used = greatest(used - %s, 0) "
            "where user_id = %s and entry_slug = %s and day = %s",
            (give_back, r.user_id, r.entry_slug, r.day),
        )
        conn.execute(
            "update app.spend set units_used = greatest(units_used - %s, 0) where month = %s",
            (give_back, r.month),
        )


def purge_quotas(pool: ConnectionPool, keep_days: int) -> int:
    """SF-7: `app.quotas` rows are per-entry daily usage counters, kept alongside `app.lab_runs`
    under the same RUN_RETENTION_DAYS -- otherwise they accumulate forever and the privacy page's
    retention claim covers only run results/hashes, not the daily counts."""
    keep_days = max(keep_days, 1)  # N-10 parity: never delete today's row even at retention <= 0
    with pool.connection() as conn:
        return conn.execute(
            "delete from app.quotas where day < current_date - make_interval(days => %s)", (keep_days,)
        ).rowcount


def spend_status(pool: ConnectionPool) -> dict:
    month = datetime.now(UTC).date().replace(day=1)
    with pool.connection() as conn:
        row = conn.execute(
            "select units_used, units_cap from app.spend where month = %s", (month,)
        ).fetchone()
    return {
        "month": month.isoformat(),
        "units_used": int(row[0]) if row else 0,
        "units_cap": int(row[1]) if row else None,
    }
