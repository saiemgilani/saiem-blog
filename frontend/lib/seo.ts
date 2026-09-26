import { SITE_URL, absoluteUrl } from "./site.ts";
import type { NoteMeta } from "./notes.ts";

export const STATIC_ROUTES = ["/", "/work", "/notes", "/about", "/privacy"];

export function buildSitemap(notes: NoteMeta[]): { url: string; lastModified?: string }[] {
  return [
    ...STATIC_ROUTES.map((r) => ({ url: absoluteUrl(r) })),
    ...notes.map((n) => ({ url: absoluteUrl(`/notes/${n.slug}`), ...(n.date ? { lastModified: n.date } : {}) })),
  ];
}

export function buildRobots() {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: absoluteUrl("/sitemap.xml"), host: SITE_URL };
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function buildFeedXml(notes: NoteMeta[]): string {
  const items = notes.map((n) => [
    "<item>",
    `<title>${esc(n.title)}</title>`,
    `<link>${absoluteUrl(`/notes/${n.slug}`)}</link>`,
    `<guid>${absoluteUrl(`/notes/${n.slug}`)}</guid>`,
    n.date ? `<pubDate>${new Date(`${n.date}T00:00:00Z`).toUTCString()}</pubDate>` : "",
    `<description>${esc(n.excerpt)}</description>`,
    "</item>",
  ].join(""));
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Saiem Gilani</title><link>${absoluteUrl("/")}</link><description>Notes from the workbench.</description><language>en</language>${items.join("")}</channel></rss>`;
}
