import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

test("series-odds example matches the API's packaged example", () => {
  const root = fileURLToPath(new URL("..", import.meta.url));
  const web = JSON.parse(readFileSync(`${root}content/lab/examples/series-odds.json`, "utf8"));
  const api = JSON.parse(readFileSync(`${root}../api/src/saiem_api/lab/series_odds.example.json`, "utf8"));
  assert.deepEqual(web, api);
});
