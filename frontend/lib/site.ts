/** The one canonical origin. The apex 301s here (verified 2026-09-26). */
export const SITE_URL = "https://www.saiemgilani.com";

export function absoluteUrl(pathname = "/"): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(pathname) || pathname.startsWith("//")) {
    throw new Error(`absoluteUrl expects an absolute path, got ${pathname}`);
  }
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(p, SITE_URL).toString();
}
