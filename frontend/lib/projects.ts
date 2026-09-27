import { apiFetch, type ApiEnv } from "./api/client.ts";

export type Project = { id: string; title: string; summary: string; url: string | null; repo: string | null; tags: string[] };

const str = (v: unknown): string => (typeof v === "string" ? v : "");
const https = (v: unknown): string | null => (typeof v === "string" && v.startsWith("https://") ? v : null);

function toProject(v: unknown): Project | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  if (!str(o.id) || !str(o.title)) return null;
  const repo = typeof o.repo === "string" && /^[\w.-]+\/[\w.-]+$/.test(o.repo) ? o.repo : null;
  const tags = Array.isArray(o.tags) ? o.tags.filter((t): t is string => typeof t === "string") : [];
  return { id: str(o.id), title: str(o.title), summary: str(o.summary), url: https(o.url), repo, tags };
}

/** Personal projects for /work. Unconfigured or failing API → [] and the section is omitted. */
export async function getProjects(env: ApiEnv | null, fetcher: typeof fetch = fetch): Promise<Project[]> {
  if (!env) return [];
  try {
    const res = await apiFetch(env, "/v1/projects", {}, fetcher);
    if (!res.ok) return [];
    const b = (await res.json()) as { projects?: unknown };
    return Array.isArray(b.projects) ? b.projects.map(toProject).filter((p): p is Project => p !== null) : [];
  } catch {
    return [];
  }
}
