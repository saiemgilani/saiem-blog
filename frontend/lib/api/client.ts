import { mintServiceToken, type Scope } from "./serviceToken.ts";

export type ApiEnv = { baseUrl: string; secret: string; viewsHashSecret: string };
const TIMEOUT_MS = 5000;

/** null when the API isn't configured (previews, CI builds, a fresh clone): callers render without it. */
export function apiEnv(env: NodeJS.ProcessEnv = process.env): ApiEnv | null {
  const baseUrl = env.API_BASE_URL?.replace(/\/$/, "");
  const secret = env.SAIEM_API_SECRET;
  // VIEWS_HASH_SECRET is optional: falling back to SAIEM_API_SECRET keeps existing deploys working.
  return baseUrl && secret ? { baseUrl, secret, viewsHashSecret: env.VIEWS_HASH_SECRET || secret } : null;
}

export async function apiFetch(
  env: ApiEnv,
  path: string,
  init: { method?: "GET" | "POST"; body?: unknown; sub?: string; scope?: Scope; timeoutMs?: number; headers?: Record<string, string> } = {},
  fetcher: typeof fetch = fetch,
): Promise<Response> {
  const token = mintServiceToken({ secret: env.secret, sub: init.sub ?? "anon", scope: init.scope ?? "read" });
  // Lowercase every caller-supplied key before adding the bearer: fetch's Headers merges
  // case-insensitively but a mismatched-case caller key (e.g. "Authorization") would otherwise
  // sit beside our lowercase one instead of being overridden by it.
  const headers: Record<string, string> = {};
  for (const [k, v] of Object.entries(init.headers ?? {})) headers[k.toLowerCase()] = v;
  headers.authorization = `Bearer ${token}`;
  if (init.body !== undefined) headers["content-type"] = "application/json";
  return fetcher(`${env.baseUrl}${path}`, {
    method: init.method ?? "GET",
    headers,
    body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
    signal: AbortSignal.timeout(init.timeoutMs ?? TIMEOUT_MS),
  });
}
