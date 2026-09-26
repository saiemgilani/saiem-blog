# saiemgilani.com

The personal site of [Saiem Gilani](https://github.com/saiemgilani) — notes, work,
and an about page — rebuilt on Next.js 16 (App Router, Turbopack) with a cream/red
(light) and dark/gold (dark) design system. Live at
[www.saiemgilani.com](https://www.saiemgilani.com).

## Layout

```
frontend/   Next.js app (routes, components, MDX notes, tests, evidence scripts)
docs/       DESIGN.md — color tokens, type, seal usage, verification rules
scripts/    repo-wide guards (e.g. dead/non-canonical domain check)
```

`api/` and `deploy/` arrive in P3 (the platform + deployment phases); this repo is
frontend-only for now.

## Commands

Run everything from the repo root unless noted.

```bash
# install + local dev
cd frontend && npm install && npm run dev

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

## Design system

Color tokens, type, the logo/seal, and how each is verified live in
[`docs/DESIGN.md`](docs/DESIGN.md).
