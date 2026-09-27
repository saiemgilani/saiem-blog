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
_QUOTA = """
insert into app.quotas (user_id, entry_slug, day, used, "limit") values (%(u)s, %(e)s, %(d)s, %(n)s, %(lim)s)
on conflict (user_id, entry_slug, day) do update set used = app.quotas.used + %(n)s
  where app.quotas.used + %(n)s <= app.quotas."limit"
returning used, "limit"
"""
_SPEND = """
insert into app.spend (month, units_used, units_cap) values (%(m)s, %(n)s, %(cap)s)
on conflict (month) do update set units_used = app.spend.units_used + %(n)s
  where app.spend.units_used + %(n)s <= app.spend.units_cap
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


def settle(pool: ConnectionPool, r: Reservation, outcome: Literal["success", "refund"]) -> None:
    if outcome == "success":
        return
    with pool.connection() as conn:
        conn.execute(
            "update app.quotas set used = greatest(used - %s, 0) "
            "where user_id = %s and entry_slug = %s and day = %s",
            (r.units, r.user_id, r.entry_slug, r.day),
        )
        conn.execute(
            "update app.spend set units_used = greatest(units_used - %s, 0) where month = %s",
            (r.units, r.month),
        )


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
