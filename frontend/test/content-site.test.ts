import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { site } from "../content/site.ts";

test("stay-in-touch points at the SDV join flow (no email backend here)", () => {
  assert.equal(site.joinUrl, "https://sportsdataverse.org/join");
});
test("every internal nav href has a route file (catches /lab before P2 ships it)", () => {
  for (const { href } of site.nav) {
    assert.ok(href.startsWith("/"), href);
    const file = new URL(`../app/(site)${href}/page.tsx`, import.meta.url);
    assert.ok(existsSync(file), `no route for ${href}`);
  }
});
test("every external link is https and none is a dead host", () => {
  for (const { href } of [...site.socials, ...site.support]) {
    assert.match(href, /^https:\/\//);
    assert.doesNotMatch(href, /saiemgilani\.me\b/i);
  }
});
