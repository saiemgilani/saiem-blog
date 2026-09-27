import { test } from "node:test";
import assert from "node:assert/strict";
import { parseView, viewHref } from "../lib/lab/labView.ts";

test("parseView accepts only the exact map value", () => {
  assert.equal(parseView("map"), "map");
  assert.equal(parseView("MAP"), "index");
  assert.equal(parseView("index"), "index");
  assert.equal(parseView(undefined), "index");
  assert.equal(parseView(""), "index");
});

test("viewHref keeps the runtime filter on the index and drops it on the map", () => {
  assert.equal(viewHref("index"), "/lab");
  assert.equal(viewHref("index", "python"), "/lab?runtime=python");
  assert.equal(viewHref("map"), "/lab?view=map");
  assert.equal(viewHref("map", "python"), "/lab?view=map");
});
