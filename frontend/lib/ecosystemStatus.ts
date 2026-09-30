// The nightly SportsDataverse status snapshot, reduced to one line of counts for the home page and /work.
// No next-auth / DB imports here so `node --test` can load it directly.
export const STATUS_SUMMARY_URL = "https://raw.githubusercontent.com/sportsdataverse/.github/main/status/summary.json";
export const STATUS_BOARD_URL = "https://sportsdataverse.org/status";

const STATES = ["fresh", "idle", "stale", "failing", "unknown"] as const;
export type ProducerState = (typeof STATES)[number];
export type EcosystemStatus = { generatedAt: string; counts: Record<ProducerState, number> };
export type Fetcher = typeof fetch;

const isState = (v: unknown): v is ProducerState => (STATES as readonly unknown[]).includes(v);

/** Counts producers by state. Anything malformed is null (the strip then renders nothing);
 *  a state this site doesn't know yet is counted as unknown rather than dropped. */
export function summarizeStatus(body: unknown): EcosystemStatus | null {
  if (!body || typeof body !== "object") return null;
  const { generated_at, producers } = body as Record<string, unknown>;
  if (typeof generated_at !== "string" || !Array.isArray(producers) || producers.length === 0) return null;
  const at = new Date(generated_at);
  if (Number.isNaN(at.getTime())) return null;
  const counts: Record<ProducerState, number> = { fresh: 0, idle: 0, stale: 0, failing: 0, unknown: 0 };
  for (const p of producers) {
    const state = p && typeof p === "object" ? (p as { state?: unknown }).state : undefined;
    counts[isState(state) ? state : "unknown"] += 1;
  }
  // toISOString(): the snapshot writes microseconds + "+00:00", which isn't a valid <time dateTime>.
  return { generatedAt: at.toISOString(), counts };
}

/** A slow or broken raw.githubusercontent.com never breaks this site: every failure is null. */
export async function getEcosystemStatus(fetcher: Fetcher = fetch): Promise<EcosystemStatus | null> {
  try {
    const res = await fetcher(STATUS_SUMMARY_URL, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000) } as RequestInit);
    if (!res.ok) return null;
    return summarizeStatus(await res.json());
  } catch {
    return null;
  }
}
