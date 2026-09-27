from fastapi import FastAPI
from psycopg_pool import ConnectionPool

from saiem_api import __version__, projects, views


def create_app(*, pool: ConnectionPool | None = None, api_secret: str = "") -> FastAPI:
    """App factory. Tests inject a pool bound to a throwaway database; production builds one from
    Settings (see __main__). Without a pool every /v1 route answers 503 and /health still works."""
    app = FastAPI(title="saiem-api", version=__version__, docs_url=None, redoc_url=None, openapi_url=None)
    app.state.pool = pool
    app.state.api_secret = api_secret
    app.include_router(views.router)
    app.include_router(projects.router)

    @app.get("/health")
    def health() -> dict[str, str]:
        return {"status": "ok", "version": __version__}

    return app
