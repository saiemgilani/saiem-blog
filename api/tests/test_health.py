from fastapi.testclient import TestClient

from saiem_api import __version__
from saiem_api.app import create_app


def test_health_reports_ok_and_version():
    client = TestClient(create_app())
    r = client.get("/health")
    assert r.status_code == 200
    assert r.json() == {"status": "ok", "version": __version__}


def test_no_public_docs_or_schema():
    # Browsers never call this API directly; don't advertise its surface.
    client = TestClient(create_app())
    for path in ("/docs", "/redoc", "/openapi.json"):
        assert client.get(path).status_code == 404, path
