import { auth } from "@lib/auth";
import { apiEnv } from "@lib/api/client";
import { createRunHandler } from "@lib/lab/run";

export const dynamic = "force-dynamic";
export const maxDuration = 60; // a python run is synchronous, ≤ LAB_RUN_TIMEOUT_S
const handler = createRunHandler({ env: apiEnv(), auth: () => auth(), paused: () => process.env.LAB_LIVE_RUNS === "off" });

export async function POST(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  return handler(req, slug);
}
