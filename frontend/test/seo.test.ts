import { test } from "node:test";
import assert from "node:assert/strict";
import { buildFeedXml, buildRobots, buildSitemap, STATIC_ROUTES } from "../lib/seo.ts";
import { LAB } from "../content/lab/registry.ts";

const notes = [{ slug: "intro-to-hoopR", title: "{hoopR} & friends", date: "2022-05-08", excerpt: "hoops <data>", readingMinutes: 3 }];

test("sitemap: static routes + notes, all on the canonical host", () => {
  const urls = buildSitemap(notes).map((e) => e.url);
  for (const r of STATIC_ROUTES) assert.ok(urls.includes(`https://www.saiemgilani.com${r}`), r);
  assert.ok(urls.includes("https://www.saiemgilani.com/notes/intro-to-hoopR"));
  assert.ok(urls.every((u) => u.startsWith("https://www.saiemgilani.com/")));
});

test("sitemap lists /lab and every lab entry", () => {
  const urls = buildSitemap([], LAB).map((e) => e.url);
  assert.ok(urls.includes("https://www.saiemgilani.com/lab"));
  for (const e of LAB) assert.ok(urls.includes(`https://www.saiemgilani.com/lab/${e.slug}`), e.slug);
});

test("robots points at the canonical sitemap", () => {
  assert.equal(buildRobots().sitemap, "https://www.saiemgilani.com/sitemap.xml");
});

test("feed: canonical links, escaped text, one item per note", () => {
  const xml = buildFeedXml(notes);
  assert.match(xml, /<link>https:\/\/www\.saiemgilani\.com\/notes\/intro-to-hoopR<\/link>/);
  assert.equal((xml.match(/<item>/g) ?? []).length, 1);
  assert.doesNotMatch(xml, /hoops <data>/, "raw < must be escaped");
  assert.doesNotMatch(xml, /saiemgilani\.me\b/);
});
