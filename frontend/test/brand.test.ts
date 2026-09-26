import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const icon = readFileSync(new URL("../app/icon.svg", import.meta.url), "utf8");

test("favicon has no ball/ring terminal (spec D11: none on small icons)", () => {
  assert.equal(/<circle/i.test(icon), false);
});
test("favicon follows the OS theme: red on light, gold on dark", () => {
  assert.match(icon, /#9B1B1E/i);
  assert.match(icon, /prefers-color-scheme:\s*dark/);
  assert.match(icon, /#D6B874/i);
});
