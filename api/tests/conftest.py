import os

import pytest

from saiem_api.db import make_pool, migrate


@pytest.fixture
def pool():
    url = os.environ.get("TEST_DATABASE_URL")
    if not url:
        pytest.skip(
            "TEST_DATABASE_URL not set — start deploy/compose.dev.yml's db and export "
            "postgresql://saiem_app:saiem_dev@127.0.0.1:5439/saiem"
        )
    with make_pool(url, max_size=2) as p:
        with p.connection() as conn:
            conn.execute("drop schema if exists app cascade")
        migrate(p)
        yield p


@pytest.fixture
def extra_lab_modules(monkeypatch):
    """Registers tests/lab_fixtures.py's hostile runners (sleepy/hungry/angry/big) for the
    duration of one test, by pointing SAIEM_LAB_EXTRA_MODULES at that module -- inherited by any
    child that runner.execute() spawns during the test. Lives here (N-12) rather than in
    lab_fixtures.py itself, since a conftest fixture is auto-discovered for every test module
    without an import -- no `# noqa: F401` or `usefixtures` workaround needed."""
    monkeypatch.setenv("SAIEM_LAB_EXTRA_MODULES", "tests.lab_fixtures")
