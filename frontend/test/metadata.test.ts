import { test } from "node:test";
import assert from "node:assert/strict";
import { baseMetadata, pageMetadata } from "../lib/metadata.ts";

test("pageMetadata sets canonical + og:url to the given path", () => {
  const m = pageMetadata("/work");
  assert.equal(m.alternates?.canonical, "/work");
  assert.equal(m.openGraph?.url, "/work");
});

test("pageMetadata keeps the RSS alternate (Next replaces, not merges, `alternates`)", () => {
  const m = pageMetadata("/notes");
  assert.deepEqual(m.alternates?.types, { "application/rss+xml": "/feed.xml" });
});

test("pageMetadata keeps og:site_name (Next replaces, not merges, `openGraph`)", () => {
  const m = pageMetadata("/about");
  assert.equal(m.openGraph?.siteName, baseMetadata.openGraph?.siteName);
});

test("pageMetadata extra openGraph fields (e.g. article type) override the base but keep url/site_name", () => {
  const m = pageMetadata("/notes/intro-to-hoopR", { type: "article" });
  const og = m.openGraph as Record<string, unknown> | undefined;
  assert.equal(og?.type, "article");
  assert.equal(og?.url, "/notes/intro-to-hoopR");
  assert.equal(og?.siteName, baseMetadata.openGraph?.siteName);
});

test("base metadata carries no canonical/og:url of its own (a page with no override, e.g. 404, must not inherit one)", () => {
  assert.equal(baseMetadata.alternates?.canonical, undefined);
  assert.equal(baseMetadata.openGraph?.url, undefined);
});
