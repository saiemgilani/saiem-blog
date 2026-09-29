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
affect production and don't need mode B. Note the limit of this design: the
cutover procedure itself edits Vercel DNS and the Vercel project's domains,
so it needs Vercel's API/dashboard to be reachable even though it's aimed at
a Vercel outage — a Vercel API/DNS outage (as opposed to a serving/billing
one) isn't recoverable through this runbook.

## Preconditions

1. `deploy/rehearse-mode-b.sh` (no `--dry-run`) has passed within the last 7
   days — check the ledger entry's timestamp. If it's older, run it now
   before cutting over: it's read-only, takes about a minute, and needs
   nothing from Vercel.
2. `deploy/.env` on the droplet has the five secrets the rehearsal script's
   step (e) checks by name (`present`): `AUTH_SECRET`, `AUTH_GITHUB_ID`,
   `AUTH_GITHUB_SECRET`, `AI_GATEWAY_API_KEY`, `SAIEM_API_SECRET`. It also
   needs `LAB_LIVE_RUNS` and `LAB_LLM_MODELS` set — the rehearsal script
   does not check those two by name, confirm them by eye.
3. A fresh `TAG` is deployed (`docs/runbook-deploy.md` §3) — mode B serves
   whatever image is currently running, so don't cut over onto a stale one.

## Cutover

1. Record the DNS you're about to change, so rollback restores the exact
   values instead of guessing — **and note the exact record `name` Vercel
   prints for the apex row.** `vercel dns ls saiemgilani.com --scope
   saiemgilanis-projects`. Note the `www` and apex entries — type, value,
   and TTL — and paste them into this run's ledger entry. Vercel lists the
   apex with an **empty** `name` column, not `@`; `@` is not documented as
   an accepted value for `vercel dns add`/`rm`. Copy whatever the listing
   actually shows for the apex row's name (below, that's the empty string
   `""`) rather than assuming a convention.
2. On the droplet, uncomment both commented blocks in
   `/opt/saiem-blog/deploy/caddy/saiemgilani.caddy` (the
   `www.saiemgilani.com` reverse proxy to `127.0.0.1:3100` and the apex
   redirect block), then check the syntax without touching anything live:
   `ssh root@161.35.59.239 'caddy validate --config /etc/caddy/Caddyfile'`.
   **Don't reload yet** — see step 5.
3. In Vercel DNS, point BOTH records at the droplet — the apex needs this
   too, since Caddy's redirect block (step 2) only fires for traffic that
   reaches Caddy, and today the apex resolves to Vercel, not the droplet.
   **Use `www` for the www record's name and `""` (empty, the exact value
   step 1's listing showed) for the apex's name — `saiemgilani.com` is the
   zone argument to every `vercel dns` command, never the record name, and
   passing it as the name too creates a record for
   `saiemgilani.com.saiemgilani.com` instead of the apex:**
   - `www` → `A` record → `161.35.59.239` (`vercel dns rm` the existing
     record if one is listed — today `www` has no explicit record, so there
     may be nothing to remove — then `vercel dns add saiemgilani.com www A
     161.35.59.239`).
   - apex → `A` record → `161.35.59.239` (`vercel dns rm` the existing apex
     record, then `vercel dns add saiemgilani.com "" A 161.35.59.239`).
   Sanity-check both landed with the right name (full propagation is step
   5, so these may still show Vercel's old answer briefly):
   ```sh
   dig +short saiemgilani.com
   dig +short www.saiemgilani.com
   ```
4. In the Vercel project settings, remove both `www.saiemgilani.com` and
   `saiemgilani.com` from the project's domains — otherwise Vercel keeps
   trying to answer for them and the two answers race.
5. **Wait for DNS to actually propagate before reloading Caddy.** Reloading
   while resolvers still point at Vercel makes Caddy's ACME request fail and
   back off for 10-20 minutes. Poll until both return the droplet's IP
   (expect roughly the TTL noted in step 1 as the lag):
   ```sh
   dig +short www.saiemgilani.com @1.1.1.1
   dig +short saiemgilani.com @1.1.1.1
   ```
6. Now reload: `ssh root@161.35.59.239 'systemctl reload caddy'`. Watch for
   the certificate: `ssh root@161.35.59.239 'journalctl -u caddy -f'` until
   `certificate obtained successfully` appears for `www.saiemgilani.com`
   (and the apex) — that's when TLS is actually ready, not just the DNS.
7. Verify: `curl -sSI https://www.saiemgilani.com | grep -i server` shows no
   `Vercel` header, and a views count still comes back —
   `curl -fsS https://www.saiemgilani.com/api/views/intro-to-hoopR` returns
   `{"count":N}`.

## What changes in mode B

> **After every `deploy/deploy.sh` run, re-apply the cutover's Caddy edit
> before the next reload.** `deploy.sh` does `git checkout <TAG> -- deploy`,
> which restores the *committed* snippet — both mode-B blocks commented out
> — but does not itself reload Caddy, so the site keeps working until the
> next reload/reboot/package upgrade silently drops `www` and the apex back
> to mode A. Re-apply the same uncomment the rehearsal script uses, then
> validate, then reload:
> ```sh
> ssh root@161.35.59.239 "sed -i -E 's/^# (www\.saiemgilani\.com \{|\treverse_proxy|\theader -Server|\}|saiemgilani\.com \{|\tredir )/\1/' /opt/saiem-blog/deploy/caddy/saiemgilani.caddy"
> ssh root@161.35.59.239 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'
> ```
> The durable fix — a committed `saiemgilani.modeB.caddy` variant that the
> Caddyfile's `import` line selects instead of hand-editing the checked-out
> snippet — is a follow-up, not implemented here.

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

None of these steps depend on the droplet being healthy — they only touch
DNS and the Vercel project — so rollback works even if mode B was cut over
*because* the droplet had a problem. Use the values captured in Cutover
step 1's ledger entry; don't guess what they were.

1. In Vercel DNS, restore both records to what Cutover step 1 recorded —
   typically `www` → `CNAME` → `cname.vercel-dns.com`, and the apex → back
   to Vercel's original `A` record. Remove the `A` record this cutover
   added (`vercel dns rm <id of the record you added>`) and re-add whatever
   was there before — same record-name rule as Cutover step 3: `www` for
   the www record, `""` (empty, exactly as step 1's listing showed) for the
   apex, never `saiemgilani.com` itself as the name. Confirm:
   ```sh
   dig +short saiemgilani.com
   dig +short www.saiemgilani.com
   ```
2. Re-add both `www.saiemgilani.com` and `saiemgilani.com` to the Vercel
   project's domains.
3. Optionally, on the droplet, re-comment the two blocks in
   `/opt/saiem-blog/deploy/caddy/saiemgilani.caddy` and
   `ssh root@161.35.59.239 'caddy validate --config /etc/caddy/Caddyfile && systemctl reload caddy'`
   — mode A still works with them left uncommented (Caddy just proxies
   hosts nothing points at), so this step is cleanup, not a requirement for
   rollback to take effect.

## Rehearsal cadence

Quarterly, run `deploy/rehearse-mode-b.sh --dry-run` first, read the printed
commands, then `deploy/rehearse-mode-b.sh` for real
(`DEPLOY_HOST=root@161.35.59.239`). It's entirely read-only: it never writes
a view count, never reloads Caddy, and never touches DNS or Vercel — it only
proves the cutover *would* work right now. Each real run builds its mode-B
Caddyfile under a fresh `mktemp -d`-created directory (never a fixed `/tmp`
name, so two rehearsals never clobber each other) and removes it when done;
the printed `mode-B config validated from /tmp/modeB.XXXXXX` line is the
evidence a specific run passed, not the path itself, which won't exist
afterward. Paste the full output into this runbook's ledger entry with the
date.
