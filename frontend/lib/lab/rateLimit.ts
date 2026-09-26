/** In-process token bucket. Effective in mode B (one long-lived Node); in mode A a
 *  Vercel Firewall rule on /api/lab/data is the real limit (see runbook). */
export function createRateLimiter(opts: { capacity: number; refillPerSec: number; now?: () => number }) {
  const now = opts.now ?? Date.now;
  const buckets = new Map<string, { tokens: number; at: number }>();
  return {
    take(key: string): boolean {
      const t = now();
      const b = buckets.get(key) ?? { tokens: opts.capacity, at: t };
      b.tokens = Math.min(opts.capacity, b.tokens + ((t - b.at) / 1000) * opts.refillPerSec);
      b.at = t;
      const ok = b.tokens >= 1;
      if (ok) b.tokens -= 1;
      buckets.set(key, b);
      if (buckets.size > 10_000) buckets.clear(); // ponytail: crude memory cap; a real LRU if this ever matters
      return ok;
    },
  };
}
