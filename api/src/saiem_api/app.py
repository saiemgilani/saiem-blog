from fastapi import FastAPI

from saiem_api import __version__


def create_app() -> FastAPI:
    """App factory. P4 injects database engines here (sdv-db pattern) so tests never touch the droplet."""
    app = FastAPI(title="saiem-api", version=__version__, docs_url=None, redoc_url=None, openapi_url=None)

    @app.get("/health")
    def health() -> dict[str, str]:
        return {"status": "ok", "version": __version__}

    return app
