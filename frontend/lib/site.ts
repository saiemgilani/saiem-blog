/** The one canonical origin. The apex 301s here (verified 2026-09-26). */
export const SITE_URL = "https://www.saiemgilani.com";

export function absoluteUrl(pathname = "/"): string {
  // The WHATWG URL parser strips leading ASCII whitespace/control chars before
  // tokenizing, so check the same normalized form it will actually see — otherwise
  // "  //evil.example" slips past a raw startsWith("//") check.
  const normalized = pathname.trimStart();
  if (
    /^[a-z][a-z0-9+.-]*:/i.test(normalized) ||
    normalized.startsWith("//") ||
    // No normalization needed here: trimStart() only strips leading whitespace, which
    // can't hide or reveal a backslash, so checking the raw input catches the same
    // "\evil.example" (WHATWG treats \ as / in a special-scheme URL) either way.
    pathname.includes("\\")
  ) {
    throw new Error(`absoluteUrl expects an absolute path, got ${pathname}`);
  }
  const p = normalized.startsWith("/") ? normalized : `/${normalized}`;
  const url = new URL(p, SITE_URL);
  if (url.origin !== new URL(SITE_URL).origin) {
    throw new Error(`absoluteUrl would leave the canonical host: ${pathname}`);
  }
  return url.toString();
}
