import { test } from "node:test";
import assert from "node:assert/strict";
import { LabRegistrySchema, formatEntryNumber, isGated, type LabEntry } from "../lib/lab/registry-schema.ts";
import { LAB } from "../content/lab/registry.ts";

const base: LabEntry = {
  n: 1, slug: "peek", title: "Peek", summary: "s", status: "prototype", kind: "writeup", runtime: ["browser"],
  sources: [{ kind: "release", repo: "sportsdataverse/sportsdataverse-data", tag: "espn_nba_rosters", asset: "rosters_2026.parquet" }],
  started: "2026-09-26", tags: [],
};
const bad = (patch: Partial<LabEntry> | Record<string, unknown>) => LabRegistrySchema.safeParse([{ ...base, ...patch }]).success;

test("the committed registry parses", () => {
  assert.ok(LAB.length >= 1);
  assert.equal(LAB[0].n, 1);
});

test("duplicate numbers or slugs are rejected", () => {
  assert.equal(LabRegistrySchema.safeParse([base, { ...base, slug: "other" }]).success, false);
  assert.equal(LabRegistrySchema.safeParse([base, { ...base, n: 2 }]).success, false);
});

test("slugs are lowercase kebab; dates are ISO days; runtime is non-empty", () => {
  assert.equal(bad({ slug: "Peek" }), false);
  assert.equal(bad({ slug: "peek_1" }), false);
  assert.equal(bad({ started: "Sept 26" }), false);
  assert.equal(bad({ runtime: [] }), false);
});

test("release sources cannot smuggle paths", () => {
  const src = (s: Record<string, string>) => bad({ sources: [{ kind: "release", repo: "a/b", tag: "t", asset: "x.parquet", ...s }] });
  assert.equal(src({}), true);
  assert.equal(src({ asset: "../x.parquet" }), false);
  assert.equal(src({ asset: "dir/x.parquet" }), false);
  assert.equal(src({ tag: "a/b" }), false);
  assert.equal(src({ repo: "not-a-repo" }), false);
});

test("gating and numbering", () => {
  assert.equal(isGated(base), false);
  assert.equal(isGated({ ...base, runtime: ["browser", "llm"] }), true);
  assert.equal(isGated({ ...base, runtime: ["python"] }), true);
  assert.equal(formatEntryNumber(1), "№ 001");
  assert.equal(formatEntryNumber(14), "№ 014");
  assert.equal(formatEntryNumber(1234), "№ 1234");
});
