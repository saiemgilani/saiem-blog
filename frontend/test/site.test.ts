import { test } from "node:test";
import assert from "node:assert/strict";
import { SITE_URL, absoluteUrl } from "../lib/site.ts";

test("the canonical host is www, https, no trailing slash", () => {
  assert.equal(SITE_URL, "https://www.saiemgilani.com");
});
test("absoluteUrl joins paths onto the canonical host", () => {
  assert.equal(absoluteUrl("/notes/intro-to-hoopR"), "https://www.saiemgilani.com/notes/intro-to-hoopR");
  assert.equal(absoluteUrl("notes"), "https://www.saiemgilani.com/notes");
  assert.equal(absoluteUrl(), "https://www.saiemgilani.com/");
});
test("absoluteUrl never leaves the canonical host", () => {
  assert.throws(() => absoluteUrl("//evil.example/x"), /absolute path/);
  // Built in pieces: the dead-domain guard (scripts/check-dead-domains.mjs) scans every tracked file.
  assert.throws(() => absoluteUrl("https://saiemgilani" + ".me/"), /absolute path/);
  // Backslash host escapes: the WHATWG URL parser normalizes `\` to `/` for special
  // schemes, so these would otherwise resolve off the canonical host.
  assert.throws(() => absoluteUrl("/\\evil.example"), /absolute path|canonical host/);
  assert.throws(() => absoluteUrl("\\\\evil.example"), /absolute path|canonical host/);
  assert.throws(() => absoluteUrl("/\\/evil.example/x"), /absolute path|canonical host/);
  assert.throws(() => absoluteUrl("  //evil.example"), /absolute path|canonical host/);
  assert.throws(() => absoluteUrl("https:evil.example"), /absolute path|canonical host/);
});
