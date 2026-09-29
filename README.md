# saiemgilani.com

The personal site of [Saiem Gilani](https://github.com/saiemgilani) — notes, work,
and an about page — rebuilt on Next.js 16 (App Router, Turbopack) with a cream/red
(light) and dark/gold (dark) design system. Live at
[www.saiemgilani.com](https://www.saiemgilani.com).

## Layout

```
frontend/   Next.js 16 App Router site — routes, components, MDX notes, the lab
            entries and their gated run/chat routes, tests, evidence scripts
api/        FastAPI `saiem-api` on Postgres (psycopg3) — view counter, projects,
            quotas/spend, the python runner and lab endpoints; uv-managed
deploy/     Dockerfiles, compose.yml + compose.dev.yml, deploy.sh,
            rehearse-mode-b.sh, the Caddy snippet, the purge timer, sql/
docs/       DESIGN.md, runbook-deploy.md, runbook-cutover-b.md
scripts/    repo-wide guards (e.g. dead/non-canonical domain check)
```

## Commands

Run everything from the repo root unless noted.

```bash
# frontend: install + local dev
cd frontend && npm install && npm run dev

# full dev stack (Postgres + api + web) via Docker
docker compose -f deploy/compose.yml -f deploy/compose.dev.yml up -d
# -> db 127.0.0.1:5439, api 127.0.0.1:8100, web 127.0.0.1:3100
# reset: docker compose -f deploy/compose.yml -f deploy/compose.dev.yml down -v

# api: install + tests (needs the dev stack's Postgres running)
cd api && uv sync && TEST_DATABASE_URL=postgresql://saiem_app:saiem_dev@127.0.0.1:5439/saiem uv run pytest

# unit tests (components, lib, SEO, tokens)
cd frontend && npm run test:lib

# type-check / lint / production build
cd frontend && npm run tsc
cd frontend && npm run lint
cd frontend && npm run build

# PR evidence tooling (screenshot matrix, walkthrough clip, Lighthouse compare)
cd frontend && npm run visual-check -- / /notes
cd frontend && npm run walkthrough -- / /notes
cd frontend && npm run lighthouse-compare -- --base-url <url> --head-url <url>

# repo-wide guard: no dead/non-canonical domain references
node scripts/check-dead-domains.mjs
```

The `pr-evidence` and `unit-tests` GitHub workflows run the evidence tooling and the
unit suite on every pull request.

## Deployment

Production runs **mode A**: the frontend on Vercel (`www.saiemgilani.com`), the API
in a container on a DigitalOcean droplet behind Caddy at `api.saiemgilani.com`.
`.github/workflows/images.yml` publishes both images to GHCR on every merge to
`main`. **Mode B** (the whole site served from the droplet) is a rehearsed
fallback, exercised quarterly via `deploy/rehearse-mode-b.sh`.

- [`docs/runbook-deploy.md`](docs/runbook-deploy.md) — deploying the containers
- [`docs/runbook-cutover-b.md`](docs/runbook-cutover-b.md) — cutover, rollback,
  and the mode B rehearsal

## Design system

Color tokens, type, the logo/seal, and how each is verified live in
[`docs/DESIGN.md`](docs/DESIGN.md).
