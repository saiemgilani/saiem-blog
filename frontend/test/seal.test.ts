import { test } from "node:test";
import assert from "node:assert/strict";
import { selectSealVariant, SEAL_FULL_MIN_PX, SEAL_COMPACT_MIN_PX } from "../lib/seal.ts";

test("thresholds are the spec's size ladder", () => {
  assert.equal(SEAL_FULL_MIN_PX, 96);
  assert.equal(SEAL_COMPACT_MIN_PX, 24);
});
test("boundaries: 96 full, 95 compact, 24 compact, 23 favicon", () => {
  assert.equal(selectSealVariant(96), "full");
  assert.equal(selectSealVariant(95), "compact");
  assert.equal(selectSealVariant(64), "compact");
  assert.equal(selectSealVariant(24), "compact");
  assert.equal(selectSealVariant(23), "favicon");
  assert.equal(selectSealVariant(16), "favicon");
});
test("non-positive or non-finite sizes are programmer errors", () => {
  for (const bad of [0, -1, Number.NaN, Number.POSITIVE_INFINITY]) {
    assert.throws(() => selectSealVariant(bad), RangeError);
  }
});
