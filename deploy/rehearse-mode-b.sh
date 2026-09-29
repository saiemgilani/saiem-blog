#!/usr/bin/env bash
# deploy/rehearse-mode-b.sh — owner-run, read-only rehearsal of a mode-B cutover.
# Usage: DEPLOY_HOST=sdv-data deploy/rehearse-mode-b.sh [--dry-run]
# Never writes production data and never reloads/restarts anything: it validates that a
# real cutover (docs/runbook-cutover-b.md) *would* work, without changing what's live.
set -euo pipefail
HOST="${DEPLOY_HOST:-sdv-data}"
DIR="${DEPLOY_DIR:-/opt/saiem-blog}"
DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

# Same guard as deploy.sh: these are interpolated into ssh args / remote shell strings.
[[ "$HOST" =~ ^[A-Za-z0-9][A-Za-z0-9._@-]*$ ]] || { echo "rehearse-mode-b.sh: refusing DEPLOY_HOST '$HOST'" >&2; exit 2; }
[[ "$DIR" =~ ^/[A-Za-z0-9._/-]+$ ]] || { echo "rehearse-mode-b.sh: refusing DEPLOY_DIR '$DIR'" >&2; exit 2; }

run() {
  if (( DRY_RUN )); then printf 'DRY: ssh %s %s\n' "$HOST" "$1"; else ssh "$HOST" "$1"; fi
}

# (a) Docker-TCP guard — identical to deploy.sh, first remote command.
run "if ss -ltn | grep -Eq ':(2375|2376)\\b'; then echo 'Docker API is listening on TCP - refusing to deploy' >&2; exit 1; fi"

# (b) both compose services must be running (not restarting/exited/starting).
run "cd $DIR/deploy && if [ \"\$(docker compose ps --format '{{.State}}' | grep -xc running)\" != 2 ]; then echo 'web/api not both running' >&2; exit 1; fi"

# (c) read-only GETs only — GET /api/views/<slug> reports the count without incrementing it
# (the route also exports POST, which does increment; never call it from here).
run "curl -fsS http://127.0.0.1:3100/ >/dev/null && curl -fsS http://127.0.0.1:3100/notes/intro-to-hoopR >/dev/null && body=\$(curl -fsS http://127.0.0.1:3100/api/views/intro-to-hoopR) && echo \"\$body\" | grep -Eq '\"count\":[0-9]+' || { echo \"views count check failed: \$body\" >&2; exit 1; }"

# (d) build a mode-B Caddyfile in /tmp and validate it — never `caddy reload` / `systemctl`.
# Uncomment only the exact commented lines from the mode-B block in the imported snippet
# (the www reverse_proxy + apex redirect); anything else starting with "# " stays a real
# comment. /opt/saiem-blog/deploy/caddy/saiemgilani.caddy is the fixed import path written
# into /etc/caddy/Caddyfile during first-time setup (docs/runbook-deploy.md §2.3).
run "cd $DIR && sed -E 's/^# (www\.saiemgilani\.com \{|\treverse_proxy|\theader -Server|\}|saiemgilani\.com \{|\tredir )/\1/' deploy/caddy/saiemgilani.caddy > /tmp/saiemgilani.modeB.caddy && sed 's#/opt/saiem-blog/deploy/caddy/saiemgilani.caddy#/tmp/saiemgilani.modeB.caddy#' /etc/caddy/Caddyfile > /tmp/Caddyfile.modeB && caddy validate --config /tmp/Caddyfile.modeB --adapter caddyfile"

# (e) confirm every mode-B secret name is set in deploy/.env — never print a value, check
# every name before exiting (don't stop at the first MISSING).
run "cd $DIR && miss=0; for n in AUTH_SECRET AUTH_GITHUB_ID AUTH_GITHUB_SECRET AI_GATEWAY_API_KEY SAIEM_API_SECRET; do if grep -qE \"^\${n}=.+\" deploy/.env; then echo \"\$n present\"; else echo \"\$n MISSING\"; miss=1; fi; done; exit \$miss"
