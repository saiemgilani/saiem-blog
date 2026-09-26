import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { contrastRatio } from "../lib/contrast.ts";

const css = readFileSync(new URL("../styles/globals.css", import.meta.url), "utf8");
function block(selector: string): Record<string, string> {
  const m = css.match(new RegExp(`${selector.replace(".", "\\.")}\\s*\\{([^}]*)\\}`));
  assert.ok(m, `missing ${selector} block`);
  return Object.fromEntries([...m[1].matchAll(/--([a-z-]+):\s*(#[0-9A-Fa-f]{6})/g)].map((x) => [x[1], x[2].toUpperCase()]));
}
const light = block(":root");
const dark = block(".dark");

test("token values match the spec exactly", () => {
  assert.deepEqual(light, { page: "#FAF7F0", card: "#FFFFFF", grid: "#ECE6D9", rule: "#DDD5C4", ink: "#1C1B19", muted: "#6B6457", brand: "#9B1B1E", "on-brand": "#FAF7F0", shipped: "#1D6B4F" });
  assert.deepEqual(dark, { page: "#0E0D0C", card: "#1A1916", grid: "#1B1915", rule: "#2E2B26", ink: "#EDE6D6", muted: "#8A857B", brand: "#D6B874", "on-brand": "#0E0D0C", shipped: "#7CC49A" });
});

for (const [name, t] of [["light", light], ["dark", dark]] as const) {
  test(`${name}: every text color clears WCAG AA (4.5:1) on page and card`, () => {
    for (const fg of ["ink", "muted", "brand", "shipped"]) {
      for (const bg of ["page", "card"]) {
        const r = contrastRatio(t[fg], t[bg]);
        assert.ok(r >= 4.5, `${name} ${fg} on ${bg} = ${r.toFixed(2)}`);
      }
    }
    assert.ok(contrastRatio(t["on-brand"], t.brand) >= 4.5, `${name} on-brand on brand`);
  });
}

test("contrastRatio is symmetric and hits the known extremes", () => {
  assert.equal(Math.round(contrastRatio("#000000", "#FFFFFF")), 21);
  assert.equal(contrastRatio("#123456", "#123456"), 1);
  assert.equal(contrastRatio("#9B1B1E", "#FAF7F0"), contrastRatio("#FAF7F0", "#9B1B1E"));
});
