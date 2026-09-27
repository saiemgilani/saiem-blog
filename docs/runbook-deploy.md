# Deploy runbook — saiemgilani.com containers

Covers deploying the `saiem-api` + `saiem-blog-web` containers to the droplet.
**Nothing here runs until G1 (droplet verify/rebuild + credential rotation) is
done and recorded** — see Preconditions.

## 1. Preconditions (G1 done)

1. G1 (droplet verify/rebuild + credential rotation) is recorded done —
   `ClaudeCowork/ledgers/saiem-blog/progress.md`, 2026-09-26.
2. `ssh root@161.35.59.239 'ss -ltn | grep -E ":(2375|2376)"'` — prints
   nothing (the Docker API is not listening on TCP).
3. `ssh root@161.35.59.239 'ufw status'` — confirm only `22`, `80`, `443` are
   allowed.
4. `ssh root@161.35.59.239 'docker --version && docker compose version'` —
   Docker ≥ 24, Compose ≥ 2.17.

## 2. First-time setup

1. `ssh root@161.35.59.239 'git clone https://github.com/saiemgilani/saiem-blog /opt/saiem-blog'`
2. GHCR packages (`ghcr.io/saiemgilani/saiem-blog-{web,api}`) are public — no
   `docker login` needed.
3. Add `import /opt/saiem-blog/deploy/caddy/saiemgilani.caddy` to
   `/etc/caddy/Caddyfile` on the droplet.
4. `ssh root@161.35.59.239 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'`
5. In Vercel DNS, add an `A` record: `api` → `161.35.59.239`.

## 2a. Database (once)

Generate the app role's password on this dev box and reuse it for every
command below — **do not regenerate `$PW` partway through**, the SQL step and
the verify step must use the same value.

```bash
PW=$(openssl rand -hex 24)
printf '\\set pw %s\n\\i /opt/saiem-blog/deploy/sql/00_saiem_db.sql\n' "'$PW'" | ssh root@161.35.59.239 'sudo -u sdv psql -d postgres -v ON_ERROR_STOP=1'
```

The value travels on ssh's stdin, never in a remote `ps`/argv (`$PW` stays in
the LOCAL shell's variable only): `\set pw 'value'` binds `:'pw'`, then `\i`
runs the file. `-v ON_ERROR_STOP=1` aborts the script on its first error
instead of continuing past it. If it does error, the password may already be
in the Postgres log (`log_min_error_statement` logs the failing statement) —
rotate it: pick a new `$PW` and re-run this whole step.

Insert the new `pg_hba.conf` line **above** the peer rule (line 95 today),
then reload:

```bash
ssh root@161.35.59.239 "sed -i '/^local\s\+all\s\+all\s\+peer/i local   saiem           saiem_app                               scram-sha-256' /etc/postgresql/15/main/pg_hba.conf"
ssh root@161.35.59.239 'systemctl reload postgresql'
```

Verify (as root — root's uid would fail peer auth, so success here proves the
scram line matched):

```bash
ssh root@161.35.59.239 "psql \"postgresql://saiem_app:$PW@/saiem?host=/var/run/postgresql\" -Atc 'select current_user'"
```

Expect `saiem_app`.

Harden it explicitly so the app role can never authenticate over TCP, right
after the `local` line added above (same `sed` technique):

```bash
ssh root@161.35.59.239 "sed -i '/^local\s\+saiem\s\+saiem_app\s\+scram-sha-256/a host    all             saiem_app       all                     reject' /etc/postgresql/15/main/pg_hba.conf"
ssh root@161.35.59.239 'systemctl reload postgresql'
```

Negative verify — the app role must NOT be reachable over TCP, only over the
local unix socket the `scram-sha-256` line above allows. Run this check ONLY
after the `reject` line above is in place and Postgres has reloaded: the TCP
attempt must fail, but on a box whose `pg_hba.conf` has a generic `host all
all 127.0.0.1/32 scram-sha-256` line ABOVE the per-role lines, it only fails
once the `host all saiem_app all reject` line is there to match first:

```bash
ssh root@161.35.59.239 "psql \"postgresql://saiem_app:$PW@127.0.0.1/saiem\" -Atc 'select 1'"
```

Expect this to FAIL with `no pg_hba.conf entry for host "127.0.0.1"...` (or
the `reject` line's own auth failure).

## 2b. Env file

Reuse `$PW` from §2a for `DATABASE_URL`. Generate a separate secret for
`SAIEM_API_SECRET` — record its *name*, never its value — and reuse that same
value for Vercel's `SAIEM_API_SECRET` in §6 (the two must match).

```bash
SECRET=$(openssl rand -hex 32)
ssh root@161.35.59.239 'install -m 600 /dev/null /opt/saiem-blog/deploy/.env'
ssh root@161.35.59.239 "cat > /opt/saiem-blog/deploy/.env <<ENV
TAG=latest
DATABASE_URL=postgresql://saiem_app:$PW@/saiem?host=/var/run/postgresql
SAIEM_API_SECRET=$SECRET
OWNER_GITHUB_ID=$(gh api user --jq .id)
LAB_DAILY_QUOTA=5
SPEND_UNITS_CAP=2000
LAB_RUN_TIMEOUT_S=30
RUN_RETENTION_DAYS=90
LAB_LIVE_RUNS=on
LAB_MAX_CONCURRENT_RUNS=2
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
ENV"
```

`AUTH_SECRET` / `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` are mode-B-only (the
web container signing users in itself — see §5) and stay empty in mode A.

## 3. Deploy

1. `DEPLOY_HOST=root@161.35.59.239 TAG=<sha7> deploy/deploy.sh --dry-run` —
   read the printed `DRY:` lines before doing anything else.
2. `DEPLOY_HOST=root@161.35.59.239 TAG=<sha7> deploy/deploy.sh` — run for real
   once the dry run looks right. `TAG` in `deploy/.env` (§2b) is the value
   `docker compose run` one-shots (seed, purge) use, not the `TAG` passed to
   `deploy.sh` — after a `TAG=<sha7>` rollback, also set that same `TAG` in
   `.env` so one-shots run the deployed image instead of `latest`.
3. **First deploy only** — seed the projects table:
   `ssh root@161.35.59.239 'cd /opt/saiem-blog/deploy && docker compose run --rm --no-deps api /app/.venv/bin/saiem-api seed-projects'`

## 4. Verify

1. `curl -fsS https://api.saiemgilani.com/health` — expect
   `{"status":"ok","version":"0.1.0"}` (version tracks the deployed `saiem-api`).
2. `ssh root@161.35.59.239 'ss -ltn'` — `3100` and `8100` must show
   `127.0.0.1` only, never `0.0.0.0` or `::`.
3. `ssh root@161.35.59.239 'cd /opt/saiem-blog/deploy && docker compose logs api | grep applied'`
   — on an **upgrade** (0001 already recorded) shows only `applied 1
   migration(s): 0002_lab.sql`; on a **fresh** box shows both names,
   `applied 2 migration(s): 0001_app.sql, 0002_lab.sql`. Either way,
   `select name from app.schema_migrations` should list both migration names.
4. `curl -sS -o /dev/null -w '%{http_code}' https://api.saiemgilani.com/v1/views`
   — expect `401` (no service token → unauthenticated).
5. **Mode B note:** the web image is built without API env, so on the
   `/work` page the Projects section stays empty until the page's first ISR
   revalidation (≤ 1 h) — it isn't missing, it just hasn't refreshed yet.

### Caddy `trusted_proxies` and the lab data proxy

`/api/lab/data` rate-limits per client IP, taken from the first hop of
`X-Forwarded-For`. Stock Caddy ignores an incoming `X-Forwarded-For` and sets its
own, so in mode B the key is the real client. **If you ever add `trusted_proxies`
to the Caddy config** (for example to put Cloudflare in front), the first hop
becomes client-controlled: a caller can rotate it to dodge the limit, and rotating
past 10,000 keys clears every visitor's bucket. Before enabling it, change the
limiter's key to the address Caddy verifies (`CF-Connecting-IP`, or the last
trusted hop) and add a test. In mode A the real limit is the Vercel Firewall rule
(`/api/lab/data`, 120 req/min per IP, deny); the in-process bucket is a backstop.

## 5. Mode B cutover / rollback

**Cutover** (serve the site from the droplet instead of Vercel):
1. Uncomment both commented blocks in `deploy/caddy/saiemgilani.caddy` on the
   droplet (the `www.saiemgilani.com` reverse proxy and the apex redirect).
2. `ssh root@161.35.59.239 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'`
3. In Vercel DNS, change the `www` record to point at the droplet IP.
4. In the Vercel project settings, remove `www.saiemgilani.com` from the
   project's domains (so Vercel stops trying to serve it).

**Rollback** (back to Vercel):
1. Reverse the DNS change — point `www` back at Vercel.
2. Re-add `www.saiemgilani.com` to the Vercel project's domains.
3. Re-comment the two blocks in `deploy/caddy/saiemgilani.caddy` and reload
   Caddy (optional — Mode A still works with them uncommented, but keeping
   the file matching the active mode avoids confusion later).

## 6. Vercel env (Production scope only)

Previews must not count views or sign users in, so every value below is set
on **Production only**.

1. In Vercel Project Settings → Environment Variables (Production), set:
   - `API_BASE_URL=https://api.saiemgilani.com`
   - `SAIEM_API_SECRET` — the exact value written to the droplet's
     `deploy/.env` in §2b (`$SECRET` there).
   - `AUTH_SECRET` — generate with `openssl rand -base64 32`.
   - `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` — from a GitHub OAuth app named
     "saiemgilani.com" (homepage `https://www.saiemgilani.com`, callback
     `https://www.saiemgilani.com/api/auth/callback/github`); register a
     second app, or a second callback, for local dev
     (`http://localhost:3000/api/auth/callback/github`).
   - `OWNER_GITHUB_ID` — the owner's numeric GitHub id (same value as §2b).
   - `LAB_LIVE_RUNS=on` — this Vercel value is only the **UI-side mirror**:
     `isPaused()` in `frontend/lib/lab/run.ts` short-circuits the run/chat
     routes before the API is ever called, on the same `off`/`false`/`0`/`no`
     values (case-insensitive, trimmed) as the API accepts. It is NOT the
     authoritative switch, and changing it here takes effect only after a
     Production redeploy. The droplet API's own `LAB_LIVE_RUNS` in
     `deploy/.env` is authoritative — it refuses reserve/runs/chat regardless
     of what Vercel says. To pause spend immediately: edit
     `LAB_LIVE_RUNS=off` in `/opt/saiem-blog/deploy/.env` on the droplet, then
     `ssh root@161.35.59.239 'cd /opt/saiem-blog/deploy && docker compose up -d api'`
     — a container recreate, not a code deploy (`Settings` is read once at
     process start).
   - `LAB_LLM_MODELS=anthropic/claude-haiku-4-5` — the allowlist № 003 (`ask
     the lab`) is restricted to.
   - Set the AI Gateway monthly budget in the Vercel dashboard (owner) —
     Vercel Project Settings → AI Gateway; this is a spend backstop above the
     per-user quota/cap and is not itself an env var.
   - **Mode B only:** `AI_GATEWAY_API_KEY` — on Vercel (`VERCEL=1`) the
     gateway authenticates via Vercel OIDC automatically; the droplet's web
     container is not running on Vercel, so mode B needs this key set
     explicitly (`deploy/.env` on the droplet) or `/lab/ask-the-lab` reports
     the gateway unconfigured. `LAB_LIVE_RUNS` and `LAB_LLM_MODELS` also need
     setting in `deploy/.env` for mode B (`deploy/compose.yml` passes all
     three to the `web` service) — in mode A these three live on Vercel only,
     as set above.
2. **Remove** `SUPABASE_URL` and `SUPABASE_KEY` — the Supabase project is
   NXDOMAIN and there is nothing to migrate (views start at 0, projects come
   from the committed seed).
3. Redeploy Production so the new environment takes effect.
4. Add a Firewall rule named `Views rate limit`: path starts with
   `/api/views`, 60 requests / 60 s per IP, action deny (same shape as the
   existing `/api/lab/data` rule).
5. Verify:
   - `curl -sS -X POST https://www.saiemgilani.com/api/views/intro-to-hoopR`
     → `{"count":N}` where `N` is a number; `{"count":null}` means the API
     or `SAIEM_API_SECRET` is misconfigured.
   - `/work` lists Projects.
   - Owner clicks "sign in" → `@saiemgilani` appears in the nav.

## 7. Purge timer

1. `ssh root@161.35.59.239 'cd /opt/saiem-blog && cp deploy/systemd/saiem-purge.{service,timer} /etc/systemd/system/ && systemctl daemon-reload && systemctl enable --now saiem-purge.timer'`
2. `ssh root@161.35.59.239 'systemctl list-timers saiem-purge.timer'` —
   confirm it's scheduled (`NEXT` / `LEFT` populated).
