import { test } from "node:test";
import assert from "node:assert/strict";
import { COURT, THREE_BREAK_Y, shrunkPct, toSvg, courtPaths } from "../lib/lab/shotChart.ts";

test("court geometry: rim at origin, baseline -52.5, corner/arc junction 89.48 tenths", () => {
  assert.equal(COURT.baselineY, -52.5);
  assert.equal(THREE_BREAK_Y.toFixed(2), "89.48");
  assert.ok(Math.abs(THREE_BREAK_Y / 10 - 8.95) < 0.005, "8.95 ft");
  assert.deepEqual(toSvg(0, 0), [250, 417.5]); // hoop
  assert.deepEqual(toSvg(-250, COURT.baselineY), [0, 470]); // left baseline corner, bottom of the box
  assert.equal(courtPaths().length, 5);
});

test("shrinkage: 0 attempts gives the prior, many attempts gives the raw rate, k=25", () => {
  assert.equal(shrunkPct(0, 0, 0.45), 0.45);
  assert.ok(Math.abs(shrunkPct(5, 5, 0.4) - (5 + 10) / 30) < 1e-12);
  assert.ok(Math.abs(shrunkPct(500, 1000, 0.4) - 0.5) < 0.01);
});
