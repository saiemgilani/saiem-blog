import argparse
import os
import sys

import uvicorn


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(prog="saiem-api")
    sub = parser.add_subparsers(dest="cmd", required=True)
    serve = sub.add_parser("serve", help="run the HTTP server")
    serve.add_argument("--host", default="127.0.0.1")
    serve.add_argument("--port", type=int, default=8000)
    sub.add_parser("migrate", help="apply pending SQL migrations to DATABASE_URL")
    args = parser.parse_args(argv)
    if args.cmd == "serve":
        uvicorn.run("saiem_api.app:create_app", factory=True, host=args.host, port=args.port)
    elif args.cmd == "migrate":
        url = os.environ.get("DATABASE_URL")
        if not url:
            print("saiem-api migrate: DATABASE_URL is not set", file=sys.stderr)
            sys.exit(2)
        from saiem_api.db import make_pool, migrate

        with make_pool(url) as pool:
            applied = migrate(pool)
        print(f"applied {len(applied)} migration(s): {', '.join(applied) or '-'}")


if __name__ == "__main__":
    main()
