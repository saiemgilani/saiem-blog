# Deploy runbook — saiemgilani.com containers

Covers deploying the `saiem-api` + `saiem-blog-web` containers to the droplet.
**Nothing here runs until G1 (droplet verify/rebuild + credential rotation) is
done and recorded** — see Preconditions.

## 1. Preconditions (G1 done)

1. Confirm the droplet has been verified or rebuilt and credentials rotated
   (tracked separately as G1; do not proceed on this runbook until that's done).
2. `ssh sdv-data 'ss -ltn'` — confirm no `2375`, `2376`, or `5432` listeners on
   public interfaces (only loopback / none at all).
3. `ssh sdv-data 'ufw status'` — confirm only `22`, `80`, `443` are allowed.

## 2. First-time setup

1. `ssh sdv-data 'git clone https://github.com/saiemgilani/saiem-blog /opt/saiem-blog'`
2. `ssh sdv-data 'docker login ghcr.io'` using a **read-only** `read:packages`
   token (name it when prompted for a username/password pair; never paste the
   token value into a shell history or a committed file) — or make both GHCR
   packages public and skip this step.
3. Add `import /opt/saiem-blog/deploy/caddy/saiemgilani.caddy` to
   `/etc/caddy/Caddyfile` on the droplet.
4. `ssh sdv-data 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'`
5. In Vercel DNS, add an `A` record: `api` → `161.35.59.239` (or the rebuilt
   droplet's IP, whatever G1 recorded).

## 3. Deploy

1. `TAG=<sha7> deploy/deploy.sh --dry-run` — read the printed `DRY:` lines
   before doing anything else.
2. `TAG=<sha7> deploy/deploy.sh` — run for real once the dry run looks right.

## 4. Verify

1. `curl -fsS https://api.saiemgilani.com/health` — expect
   `{"status":"ok","version":"0.1.0"}` (version tracks the deployed `saiem-api`).
2. `ssh sdv-data 'ss -ltn'` — `3100` and `8100` must show `127.0.0.1` only,
   never `0.0.0.0` or `::`.

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
2. `ssh sdv-data 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'`
3. In Vercel DNS, change the `www` record to point at the droplet IP.
4. In the Vercel project settings, remove `www.saiemgilani.com` from the
   project's domains (so Vercel stops trying to serve it).

**Rollback** (back to Vercel):
1. Reverse the DNS change — point `www` back at Vercel.
2. Re-add `www.saiemgilani.com` to the Vercel project's domains.
3. Re-comment the two blocks in `deploy/caddy/saiemgilani.caddy` and reload
   Caddy (optional — Mode A still works with them uncommented, but keeping
   the file matching the active mode avoids confusion later).
