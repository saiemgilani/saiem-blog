"""Note view counter (spec §6). Dedup key = (slug, visitor, day); `visitor` is an HMAC of the
client IP computed by Next, so the API never stores an address."""

from typing import Annotated

from fastapi import APIRouter, Depends, Path
from psycopg_pool import ConnectionPool
from pydantic import BaseModel, Field

from saiem_api.auth import Principal, require
from saiem_api.db import get_pool

SLUG = r"^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$"  # filename-derived note slugs keep their case (intro-to-hoopR)
VISITOR = r"^[0-9a-f]{64}$"  # sha256 hex
Slug = Annotated[str, Path(pattern=SLUG)]
router = APIRouter(prefix="/v1/views", tags=["views"])


class ViewIn(BaseModel):
    visitor: str = Field(pattern=VISITOR)


# One statement, one round trip: insert the dedup row; only if that inserted, bump the counter.
_RECORD = """
with ins as (
  insert into app.view_events (slug, visitor) values (%(slug)s, %(visitor)s)
  on conflict do nothing returning 1
), bump as (
  insert into app.views (slug, count) select %(slug)s, 1 from ins
  on conflict (slug) do update set count = app.views.count + 1
  returning count
)
select coalesce((select count from bump), (select count from app.views where slug = %(slug)s), 0),
       exists (select 1 from ins)
"""


def record_view(pool: ConnectionPool, slug: str, visitor: str) -> tuple[int, bool]:
    with pool.connection() as conn:
        row = conn.execute(_RECORD, {"slug": slug, "visitor": visitor}).fetchone()
    assert row is not None
    return int(row[0]), bool(row[1])


def purge_view_events(pool: ConnectionPool, keep_days: int = 2) -> int:
    # Keeps today + the previous `keep_days` calendar days. Run daily at 09:20 UTC
    # (deploy/systemd/saiem-purge.timer), so right before that run a hash can be up to
    # keep_days + 1 (~3) calendar days old — see privacy.mdx's "View counts" paragraph.
    with pool.connection() as conn:
        return conn.execute(
            "delete from app.view_events where day < current_date - %s", (keep_days,)
        ).rowcount


@router.get("")
def list_views(_: Principal = Depends(require("read")), pool: ConnectionPool = Depends(get_pool)) -> dict:
    with pool.connection() as conn:
        rows = conn.execute("select slug, count from app.views order by count desc, slug").fetchall()
    return {"views": [{"slug": s, "count": int(c)} for s, c in rows]}


@router.get("/{slug}")
def get_view(
    slug: Slug, _: Principal = Depends(require("read")), pool: ConnectionPool = Depends(get_pool)
) -> dict:
    with pool.connection() as conn:
        row = conn.execute("select count from app.views where slug = %s", (slug,)).fetchone()
    return {"slug": slug, "count": int(row[0]) if row else 0}


@router.post("/{slug}")
def post_view(
    slug: Slug,
    body: ViewIn,
    _: Principal = Depends(require("read")),
    pool: ConnectionPool = Depends(get_pool),
) -> dict:
    count, counted = record_view(pool, slug, body.visitor)
    return {"slug": slug, "count": count, "counted": counted}
