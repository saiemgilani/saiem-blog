import { LAB } from "@content/lab/registry";
import { createLabDataHandler } from "@lib/lab/githubAsset";
import { createRateLimiter } from "@lib/lab/rateLimit";

const perMinute = Number(process.env.LAB_DATA_RATE_PER_MIN ?? 120);
const handle = createLabDataHandler({
  entries: LAB,
  fetcher: fetch,
  limiter: createRateLimiter({ capacity: perMinute, refillPerSec: perMinute / 60 }),
});

export function GET(req: Request) {
  return handle(req, "GET");
}
export function HEAD(req: Request) {
  return handle(req, "HEAD");
}
