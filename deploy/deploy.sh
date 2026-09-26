#!/usr/bin/env bash
# deploy/deploy.sh — owner-run deploy of saiemgilani.com containers to the droplet.
# Usage: DEPLOY_HOST=sdv-data TAG=<sha7|latest> deploy/deploy.sh [--dry-run]
# Refuses to deploy if the Docker API listens on TCP (the 2026-07-08 breach vector).
set -euo pipefail
HOST="${DEPLOY_HOST:-sdv-data}"
DIR="${DEPLOY_DIR:-/opt/saiem-blog}"
TAG="${TAG:-latest}"
DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

run() {
  if (( DRY_RUN )); then printf 'DRY: ssh %s %s\n' "$HOST" "$1"; else ssh "$HOST" "$1"; fi
}

run "if ss -ltn | grep -Eq ':(2375|2376)\\b'; then echo 'Docker API is listening on TCP - refusing to deploy' >&2; exit 1; fi"
run "cd $DIR && git fetch -q origin && git checkout -q origin/main -- deploy"
run "cd $DIR/deploy && TAG=$TAG docker compose pull && TAG=$TAG docker compose up -d --remove-orphans"
run "curl -fsS http://127.0.0.1:8100/health"
