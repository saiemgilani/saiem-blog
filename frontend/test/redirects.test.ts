import { test } from "node:test";
import assert from "node:assert/strict";
import { REDIRECTS, resolveRedirect } from "../lib/redirects.ts";

const cases: [string, string][] = [
  ["/blog", "/notes"],
  ["/blog/intro-to-hoopR", "/notes/intro-to-hoopR"],
  ["/blog/intro-to-hoopR/", "/notes/intro-to-hoopR"], // trailing slash
  ["/blog/bookmark", "/notes"], // old page, not a post
  ["/blog/js-cheatsheet", "/notes"], // deleted post
  ["/projects", "/work"], ["/stats", "/work"], ["/utilities", "/about"],
  ["/snippets", "/notes"], ["/snippets/supabase-policy", "/notes"],
  ["/home", "/"], ["/rss", "/feed.xml"], ["/sitemap", "/sitemap.xml"],
];
for (const [from, to] of cases) {
  test(`${from} → ${to}`, () => assert.equal(resolveRedirect(from), to));
}

test("current routes are never redirected", () => {
  for (const p of ["/", "/notes", "/notes/intro-to-hoopR", "/work", "/about", "/privacy", "/feed.xml", "/sitemap.xml"]) {
    assert.equal(resolveRedirect(p), null, p);
  }
});

test("no redirect lands on another redirect's source (no chains)", () => {
  for (const r of REDIRECTS) {
    const probe = r.destination.replace(":slug", "x");
    assert.equal(resolveRedirect(probe), null, `${r.source} → ${r.destination} chains`);
  }
});

test("all permanent (308)", () => assert.ok(REDIRECTS.every((r) => r.permanent === true)));
