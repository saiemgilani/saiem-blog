import { test } from "node:test";
import assert from "node:assert/strict";
import { COURT, THREE_BREAK_Y, shrunkPct, toSvg, courtPaths, binRows } from "../lib/lab/shotChart.ts";

test("court geometry: rim at origin, baseline -52.5, corner/arc junction 89.48 tenths", () => {
  assert.equal(COURT.baselineY, -52.5);
  assert.equal(THREE_BREAK_Y.toFixed(2), "89.48");
  assert.ok(Math.abs(THREE_BREAK_Y / 10 - 8.95) < 0.005, "8.95 ft");
  assert.deepEqual(toSvg(0, 0), [250, 417.5]); // hoop
  assert.deepEqual(toSvg(-250, COURT.baselineY), [0, 470]); // left baseline corner, bottom of the box
  const c = courtPaths();
  assert.equal(c.length, 5);
  assert.ok(c[1].startsWith("M170.0,470.0L170.0,280.0L330.0,280.0L330.0,470.0"), "paint 160 wide, 190 deep");
  assert.ok(c[2].startsWith("M310.0,280.0"), "free-throw circle r 60 at y 137.5");
  assert.ok(c[3].startsWith("M290.0,417.5"), "restricted area r 40");
});

test("shrinkage: 0 attempts gives the prior, many attempts gives the raw rate, k=25", () => {
  assert.equal(shrunkPct(0, 0, 0.45), 0.45);
  assert.ok(Math.abs(shrunkPct(5, 5, 0.4) - (5 + 10) / 30) < 1e-12);
  assert.ok(Math.abs(shrunkPct(500, 1000, 0.4) - 0.5) < 0.01);
});

test("binRows: 5-attempt floor, attempts desc, feet from the hoop, shrunk pct", () => {
  const rows = binRows([{ px: 250, py: 417.5, attempts: 10, makes: 7 }, { px: 150, py: 317.5, attempts: 4, makes: 4 }, { px: 350, py: 217.5, attempts: 20, makes: 8 }], 0.5);
  assert.equal(rows.length, 2);
  assert.deepEqual(rows.map((r) => r.attempts), [20, 10]);
  assert.deepEqual([rows[1].xFt, rows[1].yFt], [0, 0]);
  assert.deepEqual([rows[0].xFt, rows[0].yFt], [10, 20]);
  assert.ok(Math.abs(rows[1].shrunk - (7 + 12.5) / 35) < 1e-12);
});
