export type RunOutcome =
  | { kind: "ok"; result: unknown; cached: boolean; costUnits: number }
  | { kind: "quota"; message: string }
  | { kind: "paused" }
  | { kind: "signin" }
  | { kind: "error"; message: string };

/** Optional per-widget shape check for a live `result`: a cache hit replays whatever shape was
 *  stored under a `params_hash`, so a future change to a widget's `Result` type can serve an
 *  old-shape row as `status:"ok"` — without a guard that would crash the render, not just fail
 *  the run. Omit it (existing callers) to keep any 200-ok body as-is. */
export type ResultGuard = (result: unknown) => boolean;

export function runOutcome(status: number, body: unknown, _dailyQuota: number, isResult?: ResultGuard): RunOutcome {
  const b = (body ?? {}) as Record<string, unknown>;
  if (status === 200 && b.status === "ok") {
    if (isResult && !isResult(b.result)) return { kind: "error", message: "the run returned something unexpected" };
    return { kind: "ok", result: b.result, cached: Boolean(b.cached), costUnits: Number(b.cost_units ?? 0) };
  }
  if (status === 200 && b.status === "timeout") return { kind: "error", message: "the run timed out — units refunded" };
  if (status === 200) return { kind: "error", message: "the run failed — units refunded" };
  if (status === 429) return b.reason === "spend_cap" ? { kind: "quota", message: "the lab's monthly budget is spent — back next month" } : { kind: "quota", message: "quota used up for today — back tomorrow" };
  if (status === 503 && b.paused === true) return { kind: "paused" };
  if (status === 503 && b.busy === true) return { kind: "error", message: "the lab is busy right now — try again in a moment" };
  if (status === 401) return { kind: "signin" };
  if (status === 422) return { kind: "error", message: "those parameters were rejected" };
  return { kind: "error", message: "the lab is unreachable right now" };
}
