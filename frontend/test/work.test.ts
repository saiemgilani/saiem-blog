import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { CONTRIBUTIONS, isContribution } from "../content/work/contributions.ts";

type Row = { title: string; repoType: string };
const fallback = JSON.parse(readFileSync(new URL("../content/fallback/sdv-packages.json", import.meta.url), "utf8")) as Row[];

test("every contribution names a real package in the saved org list (title + language)", () => {
  for (const c of CONTRIBUTIONS) {
    assert.ok(fallback.some((p) => p.title === c.title && p.repoType === c.repoType), `${c.title} [${c.repoType}] is not in content/fallback/sdv-packages.json`);
  }
});

test("no duplicate (title, language) pairs", () => {
  const keys = CONTRIBUTIONS.map((c) => `${c.title}|${c.repoType}`);
  assert.equal(new Set(keys).size, keys.length);
});

test("the filter keeps his packages and drops community ones", () => {
  assert.ok(isContribution({ title: "hoopR", repoType: "R" }));
  assert.ok(isContribution({ title: "sportsdataverse", repoType: "Python" }));
  assert.equal(isContribution({ title: "nwslR", repoType: "R" }), false);
  assert.equal(isContribution({ title: "sportyR", repoType: "R" }), false);
  assert.equal(isContribution({ title: "hoopR", repoType: "Python" }), false);
  assert.ok(isContribution({ title: "baseballr", repoType: "R" }), "on CRAN with him as maintainer — listed even though the repo is not in the org");
});
