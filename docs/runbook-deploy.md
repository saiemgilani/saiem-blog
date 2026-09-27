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
ssh root@161.35.59.239 "sudo -u sdv psql -d postgres -v pw='$PW' -f /opt/saiem-blog/deploy/sql/00_saiem_db.sql"
```

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
   once the dry run looks right.
3. **First deploy only** — seed the projects table:
   `ssh root@161.35.59.239 'cd /opt/saiem-blog/deploy && docker compose run --rm --no-deps api /app/.venv/bin/saiem-api seed-projects'`

## 4. Verify

1. `curl -fsS https://api.saiemgilani.com/health` — expect
   `{"status":"ok","version":"0.1.0"}` (version tracks the deployed `saiem-api`).
2. `ssh root@161.35.59.239 'ss -ltn'` — `3100` and `8100` must show
   `127.0.0.1` only, never `0.0.0.0` or `::`.
3. `ssh root@161.35.59.239 'cd /opt/saiem-blog/deploy && docker compose logs api | grep applied'`
   — shows `0001_app.sql` (the migration ran at container start).
4. `curl -sS -o /dev/null -w '%{http_code}' https://api.saiemgilani.com/v1/views`
   — expect `401` (no service token → unauthenticated).

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
2. **Remove** `SUPABASE_URL` and `SUPABASE_KEY` — the Supabase project is
   NXDOMAIN and there is nothing to migrate (views start at 0, projects come
   from the committed seed).
3. Redeploy Production so the new environment takes effect.
4. Add a Firewall rule named `Views rate limit`: path starts with
   `/api/views`, 60 requests / 60 s per IP, action deny (same shape as the
   existing `/api/lab/data` rule).
5. Verify:
   - `curl -sS -X POST https://www.saiemgilani.com/api/views/intro-to-hoopR`
     → `{"count":N}`
   - `/work` lists Projects.
   - Owner clicks "sign in" → `@saiemgilani` appears in the nav.

## 7. Purge timer

1. `ssh root@161.35.59.239 'cd /opt/saiem-blog && cp deploy/systemd/saiem-purge.{service,timer} /etc/systemd/system/ && systemctl daemon-reload && systemctl enable --now saiem-purge.timer'`
2. `ssh root@161.35.59.239 'systemctl list-timers saiem-purge.timer'` —
   confirm it's scheduled (`NEXT` / `LEFT` populated).
