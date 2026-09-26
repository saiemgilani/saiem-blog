import { test } from "node:test";
import assert from "node:assert/strict";
import { findViolations, FORBIDDEN, EXEMPT_PATHS } from "./check-dead-domains.mjs";

test("flags the unowned .me domain in any case, but not lookalikes", () => {
  const hits = findViolations([
    { path: "a.md", text: "see https://saiemgilani.me/blog\nand SAIEMGILANI.ME too" },
    { path: "b.md", text: "saiemgilani.medium.com is someone else's host" },
  ]);
  assert.deepEqual(hits.map((h) => [h.path, h.line, h.name]), [
    ["a.md", 1, "unowned-domain"],
    ["a.md", 2, "unowned-domain"],
  ]);
});

test("flags the stale vercel alias and the non-canonical apex URL", () => {
  const hits = findViolations([
    { path: "robots.txt", text: "Sitemap: https://saiem-blog.vercel.app/sitemap.xml" },
    { path: "rss.ts", text: 'const siteURL = "https://saiemgilani.com";' },
    { path: "ok.ts", text: 'const siteURL = "https://www.saiemgilani.com";' },
  ]);
  assert.deepEqual(hits.map((h) => [h.path, h.name]), [
    ["robots.txt", "stale-vercel-alias"],
    ["rss.ts", "non-canonical-apex"],
  ]);
});

test("the guard's own files are exempt (they must spell the patterns)", () => {
  assert.ok(EXEMPT_PATHS.includes("scripts/check-dead-domains.mjs"));
  assert.ok(EXEMPT_PATHS.includes("scripts/check-dead-domains.test.mjs"));
  const hits = findViolations([{ path: "scripts/check-dead-domains.mjs", text: "saiemgilani.me" }]);
  assert.equal(hits.length, 0);
});

test("every pattern has a stable name", () => {
  assert.deepEqual(FORBIDDEN.map((f) => f.name), ["unowned-domain", "stale-vercel-alias", "non-canonical-apex"]);
});
