export type SdvPackage = { title: string; repoType: string; sports: string; content: string; sourceHref: string; docsHref: string | null; logoHref: string | null };
export type EcosystemStats = { repos: number; followers: number; githubStars: number; forks: number };
export type Fetcher = typeof fetch;

export const SDV_ORG = "https://sportsdataverse.org";
const TIMEOUT_MS = 5000;
const REVALIDATE_S = 3600;

const str = (v: unknown): string => (typeof v === "string" ? v : "");
// Every href this module hands to a page renders as a plain <a href> or <img src> --
// a relative or http: value would resolve on-site or over plaintext. Same rule for
// sourceHref (required) and docsHref/logoHref (optional, so a bad value drops to null
// rather than failing the whole package).
const isHttpsUrl = (v: unknown): v is string => typeof v === "string" && v.startsWith("https://");
const strOrNull = (v: unknown): string | null => (isHttpsUrl(v) ? v : null);

function toPackage(v: unknown): SdvPackage | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  if (!str(o.title) || !isHttpsUrl(o.sourceHref)) return null;
  return { title: str(o.title), repoType: str(o.repoType), sports: str(o.sports), content: str(o.content), sourceHref: o.sourceHref, docsHref: strOrNull(o.docsHref), logoHref: strOrNull(o.logoHref) };
}

async function getJson(fetcher: Fetcher, path: string): Promise<unknown> {
  const res = await fetcher(`${SDV_ORG}${path}`, { signal: AbortSignal.timeout(TIMEOUT_MS), next: { revalidate: REVALIDATE_S } } as RequestInit);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

/** SDV packages for /work. A slow or broken sportsdataverse.org never breaks this site. */
export async function getSdvPackages(fetcher: Fetcher = fetch, fallback: SdvPackage[] = []): Promise<{ packages: SdvPackage[]; live: boolean }> {
  try {
    const body = (await getJson(fetcher, "/api/packages")) as { message?: unknown };
    if (!Array.isArray(body.message)) throw new Error("unexpected shape");
    const packages = body.message.map(toPackage).filter((p): p is SdvPackage => p !== null).sort((a, b) => a.title.localeCompare(b.title));
    if (!packages.length) throw new Error("empty");
    return { packages, live: true };
  } catch {
    return { packages: fallback.map(toPackage).filter((p): p is SdvPackage => p !== null), live: false };
  }
}

export async function getEcosystemStats(fetcher: Fetcher = fetch): Promise<EcosystemStats | null> {
  try {
    const b = (await getJson(fetcher, "/api/stats/github")) as Record<string, unknown>;
    const keys = ["repos", "followers", "githubStars", "forks"] as const;
    if (!keys.every((k) => typeof b[k] === "number")) return null;
    return { repos: b.repos as number, followers: b.followers as number, githubStars: b.githubStars as number, forks: b.forks as number };
  } catch {
    return null;
  }
}
