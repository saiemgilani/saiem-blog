# DESIGN.md — saiemgilani.com

The design system for the site: color tokens, type, the logo, the rules that keep it
consistent, and how to verify it. Tokens live in `frontend/styles/globals.css`
(`:root` / `.dark`) and are pinned by `frontend/test/tokens.test.ts` — change a value
in both places or the test fails.

## Color

| Role | Light | Dark |
|---|---|---|
| page | `#FAF7F0` cream | `#0E0D0C` |
| card | `#FFFFFF` | `#1A1916` |
| grid | `#ECE6D9` | `#1B1915` |
| rule | `#DDD5C4` | `#2E2B26` |
| ink | `#1C1B19` | `#EDE6D6` |
| muted | `#6B6457` | `#8A857B` |
| **brand** | **`#9B1B1E` red** | **`#D6B874` gold** |
| on-brand | `#FAF7F0` | `#0E0D0C` |
| shipped | `#1D6B4F` | `#7CC49A` |

Status colors reuse the roles above rather than adding new ones: sketch = `muted`,
prototype = `brand`, shipped = `shipped`.

**`brand` vs `accent`:** `brand` is the one red/gold token — the seal, links, focus
rings, primary actions. `accent` (mapped to `grid` in the Tailwind `@theme` block) is
a *quiet hover fill* for shadcn/ui components (`--color-accent`), never the brand
color and never a large fill. Don't reach for `accent` when you mean `brand`, and
don't give `accent` a saturated value — it exists to be nearly invisible.

Every `{ink, muted, brand, shipped}` foreground clears WCAG AA (4.5:1) against both
`page` and `card` in both themes, and `on-brand` clears 4.5:1 against `brand`. This is
enforced by `test/tokens.test.ts`, not just documented — a token edit that regresses
contrast fails CI.

## Type

- **Fraunces** — display / headings, self-hosted via `next/font/google` (opsz axis,
  normal + italic).
- **Inter** — body copy.
- **JetBrains Mono** — metadata and data (dates, counts, code, the `№` entry number).
- Prose measure: **65–75 characters** per line (`ch` units), not the viewport width.

## Logo

Three renderings of the same plug-G mark, selected by rendered size — never hand-pick
one, let `<Seal size>` choose:

- **Full seal (≥ 96px)** — outer ring + hairline + inner ring, top text clockwise
  **SAIEM GILANI**, bottom text upright **SPORTS · DATA · SOFTWARE**, diamond
  separators at 9 and 3 o'clock, the shallow plug-G centered. The **ring terminal**
  (the plug's round contact point) appears **only** on this rendering. Hero, footer,
  OG images.
- **Compact seal (24–95px)** — rings + plug-G, no lettering, no ring terminal. Nav,
  avatar, app icon.
- **Favicon (< 24px)** — heavier stroke, solid plug body, no terminal. `icon.svg`.

Colors follow the theme: red on cream in light, gold on near-black in dark.

## Rules

- **≤ 1 large seal per page.** The full seal is a signature, not a pattern.
- **`accent` never sits behind body text as a large fill.** It is a quiet hover state.
- **No gradient text.** No glassmorphism (blurred translucent panels).
- **Motion is the stamp "thunk"** — one settle-in on first view — **and nothing
  else**; it is disabled entirely under `prefers-reduced-motion: reduce`.
- **Body text always clears WCAG AA** (4.5:1), in both themes, checked by
  `tokens.test.ts`.

## Verification

`npm run visual-check` renders every public route through the 4-way matrix — light
and dark, desktop and mobile — and is the mechanical check that the rules above hold
in practice (contrast, seal count, motion) rather than just in the token file.

## Status

Shipped 2026-09-29 — phases P0–P7 complete; the /lab wiring map ships as hybrid
(index default, map behind the toggle; D10 ruled 2026-09-27).
