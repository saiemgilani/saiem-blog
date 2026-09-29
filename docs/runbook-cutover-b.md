# Mode B cutover runbook — serving saiemgilani.com from the droplet

Mode A (default) serves `www.saiemgilani.com` from Vercel and only
`api.saiemgilani.com` from the droplet. Mode B is the fallback: the droplet's
`web` container serves the whole site, fronted by Caddy. This is the
step-by-step for cutting over, rolling back, and rehearsing the cutover
without changing anything live. See `docs/runbook-deploy.md` for first-time
droplet setup, the env file, and normal container deploys.

## When to cut over

Only for a Vercel-side outage or a Vercel billing/account problem that takes
`www.saiemgilani.com` down or unreachable. **Not** for a preview-deployment
problem, a single failed build, or anything scoped to a PR — those don't
affect production and don't need mode B.

## Preconditions

1. `deploy/rehearse-mode-b.sh` (no `--dry-run`) has passed within the last 7
   days — check the ledger entry's timestamp.
2. `deploy/.env` on the droplet has every mode-B name set (the rehearsal
   script's step (e) prints `present` for all five:
   `AUTH_SECRET`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`,
   `AI_GATEWAY_API_KEY`, `SAIEM_API_SECRET`).
3. A fresh `TAG` is deployed (`docs/runbook-deploy.md` §3) — mode B serves
   whatever image is currently running, so don't cut over onto a stale one.

## Cutover

1. On the droplet, uncomment both commented blocks in
   `/opt/saiem-blog/deploy/caddy/saiemgilani.caddy` (the
   `www.saiemgilani.com` reverse proxy to `127.0.0.1:3100` and the apex
   redirect block).
2. `ssh root@161.35.59.239 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'`
3. In Vercel DNS (`vercel dns ls saiemgilani.com --scope saiemgilanis-projects`),
   change the `www` record to an `A` record pointing at `161.35.59.239`
   (`vercel dns rm` the existing record, then `vercel dns add`). The apex is
   already handled by Caddy's redirect block from step 1, not by Vercel.
4. In the Vercel project settings, remove `www.saiemgilani.com` from the
   project's domains — otherwise Vercel keeps trying to serve it and the two
   answers race.
5. Verify: `curl -sSI https://www.saiemgilani.com | grep -i server` shows no
   `Vercel` header, and a views count still comes back —
   `curl -fsS https://www.saiemgilani.com/api/views/intro-to-hoopR` returns
   `{"count":N}`.

## What changes in mode B

- **Rate limits are in-process limiters only** — there is no Vercel Firewall
  rule fronting the droplet. `/api/lab/data` is capped at 120 requests/min
  per IP (env `LAB_DATA_RATE_PER_MIN`, default 120 if unset), and
  `/api/views/<slug>` uses a 30-token bucket refilling at 0.5/s per IP. Both
  keys come from the first hop of `X-Forwarded-For`, which Caddy sets itself
  (see `docs/runbook-deploy.md`'s `trusted_proxies` note) — safe as long as
  no reverse proxy is added in front of Caddy without also changing that key.
  If either limit needs to be enforced at the edge instead, the upgrade path
  is Caddy's `rate_limit` module (`github.com/mholt/caddy-ratelimit`), not a
  return to Vercel's Firewall.
- **PR previews** stop being Vercel preview deployments and become the CI
  compose stack (`deploy/compose.dev.yml`) — there is no per-PR public URL
  in mode B.
- **The AI Gateway** authenticates via `AI_GATEWAY_API_KEY` instead of
  Vercel OIDC (`VERCEL=1` isn't set on the droplet), so that key — plus
  `LAB_LIVE_RUNS` and `LAB_LLM_MODELS` — must be set in `deploy/.env`, not
  just on Vercel.
- **Sign-in keeps working** — `AUTH_TRUST_HOST=true` is already set in
  `deploy/compose.yml`'s `web` service, and the GitHub OAuth callback URL is
  host-based (`https://www.saiemgilani.com/api/auth/callback/github`), which
  is unchanged by which backend answers that host.

## Rollback

Every step below only touches DNS and the Vercel project — none of it
depends on the droplet being healthy, so rollback works even if mode B was
cut over *because* the droplet had a problem.

1. In Vercel DNS, change the `www` record back to a `CNAME` pointing at
   `cname.vercel-dns.com`.
2. Re-add `www.saiemgilani.com` to the Vercel project's domains.
3. Optionally, on the droplet, re-comment the two blocks in
   `/opt/saiem-blog/deploy/caddy/saiemgilani.caddy` and
   `caddy validate && systemctl reload caddy` — mode A still works with them
   left uncommented (Caddy just proxies a host nothing points at), so this
   step is cleanup, not a requirement for rollback to take effect.

## Rehearsal cadence

Quarterly, run `deploy/rehearse-mode-b.sh --dry-run` first, read the printed
commands, then `deploy/rehearse-mode-b.sh` for real
(`DEPLOY_HOST=root@161.35.59.239`). It's entirely read-only: it never writes
a view count, never reloads Caddy, and never touches DNS or Vercel — it only
proves the cutover *would* work right now. Paste the output into the ledger
(`ClaudeCowork/ledgers/saiem-blog/progress.md`) with the date.
