import { test } from "node:test";
import assert from "node:assert/strict";
import { entryLabel, layoutWiring, sourceKey, sourceLabel } from "../lib/lab/wiring.ts";
import type { LabEntry } from "../lib/lab/registry-schema.ts";
import { LAB } from "../content/lab/registry.ts";

const rel = (asset: string) => ({ kind: "release" as const, repo: "sportsdataverse/sportsdataverse-data", tag: "espn_nba_rosters", asset });
const e = (n: number, slug: string, sources: LabEntry["sources"], status: LabEntry["status"] = "prototype"): LabEntry =>
  ({ n, slug, title: slug, summary: "", status, kind: "app", runtime: ["browser"], sources, started: "2026-09-26", tags: [] });

test("shared sources collapse to one node with one wire per entry", () => {
  const L = layoutWiring([e(1, "a", [rel("rosters_2026.parquet")]), e(2, "b", [rel("rosters_2026.parquet"), { kind: "github", path: "/repos/x" }])]);
  assert.equal(L.sources.length, 2);
  assert.equal(L.wires.length, 3);
  assert.deepEqual(L.wires.map((w) => w.from), ["a", "b", "b"]);
});

test("an entry with no sources is still a node; archived entries are excluded", () => {
  const L = layoutWiring([e(1, "solo", []), e(2, "old", [], "archived")]);
  assert.deepEqual(L.entries.map((x) => x.slug), ["solo"]);
  assert.equal(L.wires.length, 0);
});

test("labels are bounded and keys are stable", () => {
  const long = rel("a_very_long_asset_name_that_would_overflow_the_column_2026.parquet");
  assert.ok(sourceLabel(long).length <= 28);
  assert.match(sourceLabel(long), /…/);
  assert.equal(sourceKey(long), "release:sportsdataverse/sportsdataverse-data@espn_nba_rosters/a_very_long_asset_name_that_would_overflow_the_column_2026.parquet");
});

test("rows sit on the grid and the box fits every node", () => {
  const L = layoutWiring(LAB, { rowGap: 40 });
  for (const n of [...L.entries, ...L.sources]) {
    assert.equal(n.y % 40, 0);
    assert.ok(n.x >= 0 && n.x <= L.width && n.y <= L.height);
  }
});

test("entryLabel carries the number and bounds the title", () => {
  assert.equal(entryLabel(2, "Series odds, two ways"), "№ 002 Series odds, two ways");
  const long = entryLabel(14, "A title so long that it would run straight through the source column");
  assert.ok(long.length <= 30);
  assert.match(long, /^№ 014 /);
  assert.match(long, /…/);
});
