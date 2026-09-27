import psycopg
import pytest

from saiem_api.db import migrate


def test_migrate_creates_tables_and_is_idempotent(pool):
    # the fixture already ran migrate() once on an empty schema
    with pool.connection() as conn:
        tables = {
            r[0]
            for r in conn.execute(
                "select table_name from information_schema.tables where table_schema = 'app'"
            )
        }
    assert {"schema_migrations", "users", "views", "view_events", "projects"} <= tables
    assert migrate(pool) == []  # Review Focus #4: a second run has nothing left to apply


def test_migrations_are_recorded_by_name(pool):
    with pool.connection() as conn:
        names = [r[0] for r in conn.execute("select name from app.schema_migrations order by name")]
    assert names == ["0001_app.sql"]


def test_views_count_cannot_go_negative(pool):
    with pool.connection() as conn, pytest.raises(psycopg.errors.CheckViolation):
        conn.execute("insert into app.views (slug, count) values ('x', -1)")
