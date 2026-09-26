// Reads the rendered HTML that `npm run build` writes to .next/server/app/*.html and asserts
// on what Next actually resolved -- unlike test/metadata.test.ts, this catches the class of bug
// where pageMetadata()'s RETURN VALUE looks right in isolation but Next's per-segment metadata
// merge (file-convention opengraph-image.tsx vs. a page's own `openGraph` object) still drops
// something once every layer is composed. Requires a fresh build; run `npm run build` first.
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const APP_DIR = path.join(process.cwd(), ".next", "server", "app");
const SITE = "https://www.saiemgilani.com";

function readBuiltHtml(routeFile: string): string {
  const file = path.join(APP_DIR, `${routeFile}.html`);
  if (!existsSync(file)) {
    throw new Error(
      `Missing ${file} -- test:built reads the production build's rendered HTML; run "npm run build" first.`,
    );
  }
  return readFileSync(file, "utf8");
}

function attr(html: string, re: RegExp): string | null {
  return html.match(re)?.[1] ?? null;
}

const CANONICAL_RE = /<link rel="canonical" href="([^"]+)"/;
const OG_URL_RE = /<meta property="og:url" content="([^"]+)"/;
const OG_IMAGE_RE = /<meta property="og:image" content="([^"]+)"/;
const TWITTER_IMAGE_RE = /<meta name="twitter:image" content="([^"]+)"/;
const RSS_ALTERNATE_RE = /<link rel="alternate" type="application\/rss\+xml"/;

const PAGES: { file: string; path: string }[] = [
  { file: "index", path: "" },
  { file: "work", path: "/work" },
  { file: "notes", path: "/notes" },
  { file: "about", path: "/about" },
  { file: "privacy", path: "/privacy" },
];

for (const { file, path: p } of PAGES) {
  test(`${p || "/"}: canonical + og:url are its own URL; og:image/twitter:image/RSS present`, () => {
    const html = readBuiltHtml(file);
    assert.equal(attr(html, CANONICAL_RE), `${SITE}${p}`);
    assert.equal(attr(html, OG_URL_RE), `${SITE}${p}`);
    assert.ok(attr(html, OG_IMAGE_RE), "expected an og:image meta tag");
    assert.ok(attr(html, TWITTER_IMAGE_RE), "expected a twitter:image meta tag");
    assert.match(html, RSS_ALTERNATE_RE);
  });
}

test("/notes/intro-to-hoopR: og:image/twitter:image are the note's OWN hashed image, not the root one", () => {
  const html = readBuiltHtml("notes/intro-to-hoopR");
  assert.equal(attr(html, CANONICAL_RE), `${SITE}/notes/intro-to-hoopR`);
  assert.equal(attr(html, OG_URL_RE), `${SITE}/notes/intro-to-hoopR`);
  const ogImage = attr(html, OG_IMAGE_RE);
  const twitterImage = attr(html, TWITTER_IMAGE_RE);
  assert.ok(ogImage?.includes("/notes/intro-to-hoopR/opengraph-image"), `og:image was ${ogImage}`);
  assert.ok(twitterImage?.includes("/notes/intro-to-hoopR/opengraph-image"), `twitter:image was ${twitterImage}`);
  assert.match(html, RSS_ALTERNATE_RE);
});

test("_not-found: no canonical", () => {
  const html = readBuiltHtml("_not-found");
  assert.equal(attr(html, CANONICAL_RE), null);
});
