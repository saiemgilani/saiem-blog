import argparse
import os
import sys

import uvicorn
from psycopg_pool import ConnectionPool


def _pool_from_env() -> ConnectionPool:
    """DATABASE_URL, read once here; Task 4 moves this onto Settings. Callers use it as a
    context manager so the pool always closes."""
    url = os.environ.get("DATABASE_URL")
    if not url:
        print("saiem-api: DATABASE_URL is not set", file=sys.stderr)
        sys.exit(2)
    from saiem_api.db import make_pool

    return make_pool(url)


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(prog="saiem-api")
    sub = parser.add_subparsers(dest="cmd", required=True)
    serve = sub.add_parser("serve", help="run the HTTP server")
    serve.add_argument("--host", default="127.0.0.1")
    serve.add_argument("--port", type=int, default=8000)
    sub.add_parser("migrate", help="apply pending SQL migrations to DATABASE_URL")
    sp = sub.add_parser("seed-projects", help="upsert projects from a JSON file (default: the packaged seed)")
    sp.add_argument("path", nargs="?")
    sub.add_parser("purge", help="delete view_events older than 2 days")
    args = parser.parse_args(argv)
    if args.cmd == "serve":
        uvicorn.run("saiem_api.app:create_app", factory=True, host=args.host, port=args.port)
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
        from saiem_api.views import purge_view_events

        with _pool_from_env() as pool:
            print(f"purged {purge_view_events(pool)} view event(s)")


if __name__ == "__main__":
    main()
