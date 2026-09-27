import { z } from "zod";
import { convertToModelMessages, createUIMessageStreamResponse, gateway, isStepCount, streamText, tool, toUIMessageStream, type UIMessage } from "ai";
import { auth } from "@lib/auth";
import { apiEnv } from "@lib/api/client";
import { createChatHandler } from "@lib/lab/llm";
import { isPaused } from "@lib/lab/run";
import { LAB } from "@content/lab/registry";
import type { LabEntry } from "@lib/lab/registry-schema";

export const dynamic = "force-dynamic";
// NIT 3: coupled to the API's `_RESERVATION_TTL_S = 60` (quota_routes.py) -- an answer that ends
// right at this limit settles into a pruned/expired reservation (404, ignored) and keeps the full
// reserved units. Fails closed (no free tokens), so left coupled rather than desynced.
export const maxDuration = 60;

// Mirrors the run route's guard: without AUTH_* set, calling auth() just logs Auth.js
// "MissingSecret" noise for every POST (it already fails closed to 401, this only quiets the log).
const authConfigured = Boolean(process.env.AUTH_SECRET && process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET);

export async function POST(req: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const entry = LAB.find((e) => e.slug === slug);
  if (!entry || !entry.llm) {
    return Response.json({ error: "unknown" }, { status: 404, headers: { "cache-control": "no-store" } });
  }
  const handler = createChatHandler({
    env: apiEnv(),
    auth: () => (authConfigured ? auth() : Promise.resolve(null)),
    paused: () => isPaused(),
    // NIT 11: `||` (not `??`) so an accidentally-empty LAB_LLM_MODELS="" falls back to the
    // entry's own model instead of yielding [] and 400-ing every request.
    allowModels: (process.env.LAB_LLM_MODELS || entry.llm.model).split(",").map((s) => s.trim()).filter(Boolean),
    gatewayConfigured: () => Boolean(process.env.AI_GATEWAY_API_KEY || process.env.VERCEL === "1"),
    gateway,
    // `streamText`'s real signature is far more specific than ChatDeps's `Record<string, unknown>`
    // options bag (which exists so the test harness can pass an identity fake); cast at the
    // boundary rather than widening the shared type.
    streamText: streamText as never,
    toResponse: (result) => createUIMessageStreamResponse({ stream: toUIMessageStream({ stream: (result as { stream: unknown }).stream as never }) }),
    toModelMessages: (m) => convertToModelMessages(m as UIMessage[]),
    makeTools: (e: LabEntry) => ({
      list_sources: tool({
        description: "list the entry's declared data sources",
        inputSchema: z.object({}),
        execute: async () => e.sources,
      }),
    }),
    streamOptions: { stopWhen: isStepCount(3) },
  });
  return handler(req, entry);
}
