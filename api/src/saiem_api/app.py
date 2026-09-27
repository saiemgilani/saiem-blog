import threading

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from psycopg_pool import ConnectionPool

from saiem_api import __version__, lab_routes, projects, quota_routes, views
from saiem_api.quota import QuotaExceeded
from saiem_api.settings import Settings


def create_app(
    *, pool: ConnectionPool | None = None, api_secret: str = "", settings: Settings | None = None
) -> FastAPI:
    """App factory. Tests inject a pool bound to a throwaway database; production builds one from
    Settings (see __main__). Without a pool every /v1 route answers 503 and /health still works."""
    app = FastAPI(title="saiem-api", version=__version__, docs_url=None, redoc_url=None, openapi_url=None)
    app.state.pool = pool
    app.state.api_secret = api_secret
    app.state.settings = settings or Settings(
        database_url=None, api_secret=api_secret, owner_github_id=None, allow_dev_secret=False
    )
    # reservation_id -> (Reservation, expires_at_monotonic); see quota_routes.post_reserve/post_settle.
    # Sync routes run in Starlette's threadpool, so every read/write of this dict is under this lock.
    app.state.reservations = {}
    app.state.reservations_lock = threading.Lock()
    app.include_router(views.router)
    app.include_router(projects.router)
    app.include_router(quota_routes.router)
    app.include_router(lab_routes.router)

    @app.exception_handler(QuotaExceeded)
    def _quota_exceeded(_: Request, exc: QuotaExceeded) -> JSONResponse:
        return JSONResponse(status_code=429, content={"reason": exc.reason})

    @app.exception_handler(quota_routes.Paused)
    def _paused(_: Request, __: quota_routes.Paused) -> JSONResponse:
        return JSONResponse(status_code=503, content={"paused": True})

    @app.get("/health")
    def health() -> dict[str, str]:
        return {"status": "ok", "version": __version__}

    return app
