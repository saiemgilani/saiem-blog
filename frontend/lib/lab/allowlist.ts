import type { LabEntry } from "./registry-schema.ts";

/** The proxy's security boundary: an asset is servable only if some entry declares it. */
export function isAllowedAsset(entries: LabEntry[], repo: string, tag: string, asset: string): boolean {
  return entries.some((e) => e.sources.some((s) => s.kind === "release" && s.repo === repo && s.tag === tag && s.asset === asset));
}
