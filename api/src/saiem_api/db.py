"""Postgres access: one psycopg3 pool per process and plain-SQL migrations (spec §6: no ORM)."""

from importlib.resources import files

from fastapi import HTTPException, Request
from psycopg_pool import ConnectionPool

MIGRATIONS = files("saiem_api").joinpath("migrations")


def make_pool(url: str, *, max_size: int = 4, wait_timeout: float = 10) -> ConnectionPool:
    # open=True starts connecting in the background; wait() blocks until min_size connections are
    # up (or raises PoolTimeout) so a bad DATABASE_URL fails at startup, not on the first request.
    pool = ConnectionPool(url, min_size=1, max_size=max_size, open=True, timeout=10)
    pool.wait(timeout=wait_timeout)
    return pool


def migrate(pool: ConnectionPool) -> list[str]:
    """Apply every migrations/*.sql not yet recorded, in name order, in ONE transaction."""
    applied: list[str] = []
    with pool.connection() as conn:
        # Transaction-scoped advisory lock, released at commit: two `migrate` runs racing (e.g.
        # a `compose run` beside `up`) apply in sequence instead of racing on `create table`.
        conn.execute("select pg_advisory_xact_lock(7264930001)")
        conn.execute("create schema if not exists app")
        conn.execute(
            "create table if not exists app.schema_migrations "
            "(name text primary key, applied_at timestamptz not null default now())"
        )
        done = {r[0] for r in conn.execute("select name from app.schema_migrations")}
        pending = sorted((p for p in MIGRATIONS.iterdir() if p.name.endswith(".sql")), key=lambda p: p.name)
        for f in pending:
            if f.name in done:
                continue
            # No parameters → psycopg uses the simple query protocol, so a multi-statement file works.
            conn.execute(f.read_text(encoding="utf-8"))
            conn.execute("insert into app.schema_migrations (name) values (%s)", (f.name,))
            applied.append(f.name)
    return applied


def get_pool(request: Request) -> ConnectionPool:
    """FastAPI dependency: the app's pool, or 503 when the API runs without a database."""
    pool = request.app.state.pool
    if pool is None:
        raise HTTPException(status_code=503, detail="database not configured")
    return pool
