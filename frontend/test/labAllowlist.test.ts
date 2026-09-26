import { test } from "node:test";
import assert from "node:assert/strict";
import { createRateLimiter } from "../lib/lab/rateLimit.ts";
import { isAllowedAsset } from "../lib/lab/allowlist.ts";
import { LAB } from "../content/lab/registry.ts";

test("allowlist: only exactly-declared release assets", () => {
  const R = "sportsdataverse/sportsdataverse-data";
  assert.equal(isAllowedAsset(LAB, R, "espn_nba_rosters", "rosters_2026.parquet"), true);
  assert.equal(isAllowedAsset(LAB, R, "espn_nba_rosters", "rosters_2025.parquet"), false, "same tag, undeclared asset");
  assert.equal(isAllowedAsset(LAB, R, "espn_wnba_rosters", "rosters_2026.parquet"), false, "same asset, other tag");
  assert.equal(isAllowedAsset(LAB, "someone/else", "espn_nba_rosters", "rosters_2026.parquet"), false);
  assert.equal(isAllowedAsset(LAB, R, "espn_nba_rosters", "ROSTERS_2026.parquet"), false, "case-exact");
});

test("token bucket: capacity, then refusal, then refill over time", () => {
  let t = 0;
  const rl = createRateLimiter({ capacity: 3, refillPerSec: 1, now: () => t });
  assert.deepEqual([rl.take("ip"), rl.take("ip"), rl.take("ip"), rl.take("ip")], [true, true, true, false]);
  assert.equal(rl.take("other-ip"), true, "keys are independent");
  t += 1000;
  assert.equal(rl.take("ip"), true, "one token back after one second");
  assert.equal(rl.take("ip"), false);
});
