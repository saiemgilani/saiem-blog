import { isAllowedAsset } from "./allowlist.ts";
import type { LabEntry } from "./registry-schema.ts";

const SIGNED_TTL_MS = 60_000; // GitHub's signed redirect targets live for minutes; 60s is safe
const FORWARD = ["content-length", "content-range", "accept-ranges", "content-type", "etag", "last-modified"] as const;
// GitHub only ever redirects a release-asset download to one of its own signed-URL hosts.
// Anything else -- a spoofed Location, or a probe like the cloud metadata service -- must be
// refused before the second fetch ever happens; this is the proxy's only SSRF defense.
const ASSET_HOST_RE = /^https:\/\/([\w-]+\.)+githubusercontent\.com\//;

type Deps = { entries: LabEntry[]; fetcher: typeof fetch; limiter: { take(key: string): boolean }; now?: () => number };

const json = (status: number, message: string) =>
  new Response(JSON.stringify({ success: false, message }), { status, headers: { "content-type": "application/json" } });

const bare = (s: string) => s.length > 0 && !s.includes("/") && !s.includes("\\") && !s.includes("..");

export function createLabDataHandler(deps: Deps) {
  const now = deps.now ?? Date.now;
  const cache = new Map<string, { url: string; at: number }>();

  async function signedUrl(repo: string, tag: string, asset: string): Promise<string | null> {
    const key = `${repo}/${tag}/${asset}`;
    const hit = cache.get(key);
    if (hit && now() - hit.at < SIGNED_TTL_MS) return hit.url;
    const upstream = `https://github.com/${repo}/releases/download/${encodeURIComponent(tag)}/${encodeURIComponent(asset)}`;
    const res = await deps.fetcher(upstream, { method: "HEAD", redirect: "manual" });
    const location = res.headers.get("location");
    if (!location || !ASSET_HOST_RE.test(location)) return null;
    cache.set(key, { url: location, at: now() });
    return location;
  }

  return async function handle(req: Request, method: "GET" | "HEAD"): Promise<Response> {
    const ip = (req.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
    if (!deps.limiter.take(ip)) return json(429, "Too many requests.");

    const q = new URL(req.url).searchParams;
    const repo = q.get("repo") ?? "";
    const tag = q.get("tag") ?? "";
    const asset = q.get("asset") ?? "";
    if (!/^[\w.-]+\/[\w.-]+$/.test(repo) || !bare(tag) || !bare(asset)) return json(400, "repo, tag and asset are required; tag/asset must be bare names.");
    if (!isAllowedAsset(deps.entries, repo, tag, asset)) return json(403, "Not a lab data source.");

    try {
      const signed = await signedUrl(repo, tag, asset);
      if (!signed) return json(404, "Asset not found.");

      const headers: Record<string, string> = {};
      const range = req.headers.get("range");
      if (range) headers.Range = range;
      const upstream = await deps.fetcher(signed, { method, headers, redirect: "error" });
      // 416 (Range Not Satisfiable) is a legitimate upstream answer, not a failure -- pass it
      // through as-is (status + content-range) instead of masking it as a 502.
      if (!upstream.ok && upstream.status !== 416) return json(upstream.status === 404 ? 404 : 502, `Upstream ${upstream.status}`);

      const out = new Headers();
      for (const name of FORWARD) {
        const v = upstream.headers.get(name);
        if (v) out.set(name, v);
      }
      out.set("cache-control", "public, max-age=300");
      return new Response(method === "HEAD" ? null : upstream.body, { status: upstream.status, headers: out });
    } catch {
      // A thrown fetch (network error, DNS failure, redirect: "error" tripping) means the
      // answer is unknown, not "not found" -- surface it as a gateway failure, never a bare 500.
      return json(502, "Upstream fetch failed.");
    }
  };
}
