// Pure helpers for lab № 004 (shot chart). Legacy shot frame: tenths of a foot, hoop at the
// origin, y toward half court, x in [-250, 250]. Ported (minimally) from the Blazing the Nets
// rebuild's court.ts; no imports so node --test can load it.

export const COURT = {
  halfWidth: 250, // 50 ft wide
  baselineY: -52.5, // rim centre is 5.25 ft in from the baseline
  halfCourtY: 417.5, // 47 ft from the baseline
  laneHalfWidth: 80, // 16 ft lane
  freeThrowY: 137.5, // 19 ft from the baseline
  circleRadius: 60, // free-throw circle, 6 ft
  restrictedRadius: 40, // 4 ft
  threeCornerX: 220, // 22 ft
  threeRadius: 237.5, // 23.75 ft
} as const;

/** Where the 22-ft corner line meets the 23.75-ft arc: sqrt(237.5^2 - 220^2) = 89.48 tenths. */
export const THREE_BREAK_Y = Math.sqrt(COURT.threeRadius ** 2 - COURT.threeCornerX ** 2);

/** Legacy frame -> SVG user units (same scale, y flipped, x shifted so the sideline is 0). */
export function toSvg(x: number, y: number): [number, number] {
  return [x + COURT.halfWidth, COURT.halfCourtY - y];
}

/** FG% shrunk toward `prior` with `k` pseudo-attempts: (makes + k*prior) / (attempts + k). */
export function shrunkPct(makes: number, attempts: number, prior: number, k = 25): number {
  return (makes + k * prior) / (attempts + k);
}

function arcPath(cx: number, cy: number, r: number, from: number, to: number, steps = 48): string {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const a = from + ((to - from) * i) / steps;
    const [sx, sy] = toSvg(cx + r * Math.cos(a), cy + r * Math.sin(a));
    d += `${i === 0 ? "M" : "L"}${sx.toFixed(1)},${sy.toFixed(1)}`;
  }
  return d;
}

function poly(points: [number, number][]): string {
  return points.map(([x, y], i) => { const [sx, sy] = toSvg(x, y); return `${i === 0 ? "M" : "L"}${sx.toFixed(1)},${sy.toFixed(1)}`; }).join("");
}

/** Court markings as SVG path strings in the viewBox `0 0 500 470`. */
export function courtPaths(): string[] {
  const { halfWidth: w, baselineY: b, halfCourtY: h, laneHalfWidth: l, freeThrowY: f, threeCornerX: cx, threeRadius: r } = COURT;
  const ang = Math.atan2(THREE_BREAK_Y, cx);
  return [
    poly([[-w, h], [-w, b], [w, b], [w, h], [-w, h]]),
    poly([[-l, b], [-l, f], [l, f], [l, b]]),
    arcPath(0, f, COURT.circleRadius, 0, Math.PI),
    arcPath(0, 0, COURT.restrictedRadius, 0, Math.PI),
    poly([[-cx, b], [-cx, THREE_BREAK_Y]]) + arcPath(0, 0, r, Math.PI - ang, ang, 64).replace("M", "L") + poly([[cx, b]]).replace("M", "L"),
  ];
}

export type BinRow = { xFt: number; yFt: number; attempts: number; makes: number; pct: number; shrunk: number };

/** One row per hexagon with at least `minAttempts` shots, most attempts first. `px`/`py` are SVG units (see toSvg). */
export function binRows(bins: { px: number; py: number; attempts: number; makes: number }[], prior: number, k = 25, minAttempts = 5): BinRow[] {
  return bins
    .filter((b) => b.attempts >= minAttempts)
    .map((b) => ({
      xFt: +((b.px - COURT.halfWidth) / 10).toFixed(1),
      yFt: +((COURT.halfCourtY - b.py) / 10).toFixed(1),
      attempts: b.attempts,
      makes: b.makes,
      pct: b.makes / b.attempts,
      shrunk: shrunkPct(b.makes, b.attempts, prior, k),
    }))
    .sort((a, b) => b.attempts - a.attempts);
}
