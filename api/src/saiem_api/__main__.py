import argparse
import sys

import uvicorn
from fastapi import FastAPI
from psycopg_pool import ConnectionPool

from saiem_api.app import create_app
from saiem_api.db import make_pool
from saiem_api.settings import Settings


def _pool_from_env() -> ConnectionPool:
    """DATABASE_URL, read via Settings. Callers use it as a context manager so the pool always
    closes."""
    url = Settings.from_env().database_url
    if not url:
        print("saiem-api: DATABASE_URL is not set", file=sys.stderr)
        sys.exit(2)
    return make_pool(url)


def create_app_from_env() -> FastAPI:
    s = Settings.from_env()
    pool = make_pool(s.database_url) if s.database_url else None
    return create_app(pool=pool, api_secret=s.api_secret, settings=s)


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(prog="saiem-api")
    sub = parser.add_subparsers(dest="cmd", required=True)
    serve = sub.add_parser("serve", help="run the HTTP server")
    serve.add_argument("--host", default="127.0.0.1")
    serve.add_argument("--port", type=int, default=8000)
    sub.add_parser("migrate", help="apply pending SQL migrations to DATABASE_URL")
    sp = sub.add_parser("seed-projects", help="upsert projects from a JSON file (default: the packaged seed)")
    sp.add_argument("path", nargs="?")
    sub.add_parser(
        "purge",
        help="delete view_events older than 2 days, plus lab_runs and quotas past RUN_RETENTION_DAYS",
    )
    args = parser.parse_args(argv)
    if args.cmd == "serve":
        problem = Settings.from_env().secret_problem()
        if problem:
            print(f"saiem-api serve: {problem}", file=sys.stderr)
            sys.exit(2)
        uvicorn.run(create_app_from_env(), host=args.host, port=args.port)
    elif args.cmd == "migrate":
        from saiem_api.db import migrate

        with _pool_from_env() as pool:
            applied = migrate(pool)
        print(f"applied {len(applied)} migration(s): {', '.join(applied) or '-'}")
    elif args.cmd == "seed-projects":
        import json
        from importlib.resources import files

        from saiem_api.projects import seed

        text = (
            open(args.path, encoding="utf-8").read()
            if args.path
            else files("saiem_api").joinpath("seed/projects.json").read_text(encoding="utf-8")
        )
        with _pool_from_env() as pool:
            print(f"seeded {seed(pool, json.loads(text))} project(s)")
    elif args.cmd == "purge":
        from saiem_api.lab_routes import purge_lab_runs
        from saiem_api.quota import purge_quotas
        from saiem_api.views import purge_view_events

        settings = Settings.from_env()
        with _pool_from_env() as pool:
            views_n = purge_view_events(pool)
            runs_n = purge_lab_runs(pool, settings.run_retention_days)
            quotas_n = purge_quotas(pool, settings.run_retention_days)
        print(f"purged {views_n} view event(s), {runs_n} lab run(s), {quotas_n} quota day(s)")


if __name__ == "__main__":
    main()
