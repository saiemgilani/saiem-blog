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
