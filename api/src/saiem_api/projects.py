"""Personal projects for /work (spec D3). The DB is the source the site reads; the committed
seed file is what the owner edits, then re-runs `saiem-api seed-projects` (upsert by id)."""

from fastapi import APIRouter, Depends
from psycopg_pool import ConnectionPool
from pydantic import BaseModel, Field, HttpUrl

from saiem_api.auth import Principal, require
from saiem_api.db import get_pool

router = APIRouter(prefix="/v1/projects", tags=["projects"])
_COLS = ("id", "title", "summary", "url", "repo", "tags")


class ProjectIn(BaseModel):
    id: str = Field(pattern=r"^[a-z0-9][a-z0-9-]{0,59}$")
    title: str = Field(min_length=1, max_length=120)
    summary: str = ""
    url: HttpUrl | None = None
    repo: str | None = Field(default=None, pattern=r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$")
    tags: list[str] = []
    sort: int = 0
    published: bool = True


_UPSERT = """
insert into app.projects (id, title, summary, url, repo, tags, sort, published)
values (%s, %s, %s, %s, %s, %s, %s, %s)
on conflict (id) do update set title = excluded.title, summary = excluded.summary, url = excluded.url,
  repo = excluded.repo, tags = excluded.tags, sort = excluded.sort, published = excluded.published
"""


def seed(pool: ConnectionPool, rows: list[dict]) -> int:
    items = [ProjectIn.model_validate(r) for r in rows]  # all-or-nothing: validate before the first write
    with pool.connection() as conn:
        for p in items:
            url = str(p.url) if p.url else None
            conn.execute(_UPSERT, (p.id, p.title, p.summary, url, p.repo, p.tags, p.sort, p.published))
    return len(items)


@router.get("")
def list_projects(_: Principal = Depends(require("read")), pool: ConnectionPool = Depends(get_pool)) -> dict:
    with pool.connection() as conn:
        rows = conn.execute(
            "select id, title, summary, url, repo, tags from app.projects where published "
            "order by sort, title"
        ).fetchall()
    return {"projects": [dict(zip(_COLS, r, strict=True)) for r in rows]}
