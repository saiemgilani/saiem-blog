import { z } from "zod";

const noPath = (s: string) => !s.includes("/") && !s.includes("\\") && !s.includes("..");

export const LabSourceSchema = z.discriminatedUnion("kind", [
  z.object({
    kind: z.literal("release"),
    repo: z.string().regex(/^[\w.-]+\/[\w.-]+$/, "owner/name"),
    tag: z.string().min(1).refine(noPath, "tag must not contain a path"),
    asset: z.string().min(1).refine(noPath, "asset must be a bare file name"),
  }),
  z.object({ kind: z.literal("sdv-api"), path: z.string().startsWith("/") }),
  z.object({ kind: z.literal("sdv-org"), path: z.string().startsWith("/") }),
  z.object({ kind: z.literal("github"), path: z.string().startsWith("/") }),
]);

const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

export const LabEntrySchema = z.object({
  n: z.number().int().positive(),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string().min(1),
  summary: z.string().min(1),
  status: z.enum(["sketch", "prototype", "shipped", "archived"]),
  kind: z.enum(["writeup", "app"]),
  runtime: z.array(z.enum(["browser", "server", "python", "llm"])).min(1),
  sources: z.array(LabSourceSchema),
  started: z.string().regex(ISO_DAY),
  updated: z.string().regex(ISO_DAY).optional(),
  repo: z.string().url().optional(),
  tags: z.array(z.string()),
  llm: z.object({ model: z.string().min(1), maxOutputTokens: z.number().int().positive() }).optional(),
  limits: z.string().min(1).optional(),
});

export const LabRegistrySchema = z.array(LabEntrySchema).superRefine((entries, ctx) => {
  const seen = { n: new Set<number>(), slug: new Set<string>() };
  entries.forEach((e, i) => {
    if (seen.n.has(e.n)) ctx.addIssue({ code: z.ZodIssueCode.custom, path: [i, "n"], message: `entry number ${e.n} reused` });
    if (seen.slug.has(e.slug)) ctx.addIssue({ code: z.ZodIssueCode.custom, path: [i, "slug"], message: `slug ${e.slug} reused` });
    seen.n.add(e.n);
    seen.slug.add(e.slug);
  });
});

export type LabSource = z.infer<typeof LabSourceSchema>;
export type LabEntry = z.infer<typeof LabEntrySchema>;
export type LabStatus = LabEntry["status"];
export type LabRuntime = LabEntry["runtime"][number];

/** Live runs of python/llm entries require sign-in (P5). */
export function isGated(e: LabEntry): boolean {
  return e.runtime.some((r) => r === "python" || r === "llm");
}

export function formatEntryNumber(n: number): string {
  return `№ ${String(n).padStart(3, "0")}`;
}
