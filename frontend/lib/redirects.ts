export type Redirect = { source: string; destination: string; permanent: true };

/** Legacy URLs from the pages-router site. Order matters: specific before `:slug`. */
export const REDIRECTS: Redirect[] = [
  { source: "/blog", destination: "/notes", permanent: true },
  { source: "/blog/bookmark", destination: "/notes", permanent: true },
  { source: "/blog/:slug", destination: "/notes/:slug", permanent: true },
  { source: "/projects", destination: "/work", permanent: true },
  { source: "/stats", destination: "/work", permanent: true },
  { source: "/utilities", destination: "/about", permanent: true },
  { source: "/snippets", destination: "/notes", permanent: true },
  { source: "/snippets/:slug", destination: "/notes", permanent: true },
  { source: "/home", destination: "/", permanent: true },
  { source: "/rss", destination: "/feed.xml", permanent: true },
];

/** Mirrors Next's matching for these simple rules (single-segment `:slug`, trailing slash ignored). */
export function resolveRedirect(pathname: string): string | null {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  for (const r of REDIRECTS) {
    if (!r.source.includes(":slug")) {
      if (path === r.source) return r.destination;
      continue;
    }
    const prefix = r.source.slice(0, r.source.indexOf(":slug"));
    if (path.startsWith(prefix)) {
      const slug = path.slice(prefix.length);
      if (slug && !slug.includes("/")) return r.destination.replace(":slug", slug);
    }
  }
  return null;
}
