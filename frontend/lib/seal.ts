export type SealVariant = "full" | "compact" | "favicon";
/** Lettering on the full seal stops being legible below this size. */
export const SEAL_FULL_MIN_PX = 96;
/** Below this the ring structure blurs; use the solid favicon plug. */
export const SEAL_COMPACT_MIN_PX = 24;

export function selectSealVariant(px: number): SealVariant {
  if (!Number.isFinite(px) || px <= 0) throw new RangeError(`seal size must be a positive number, got ${px}`);
  if (px >= SEAL_FULL_MIN_PX) return "full";
  if (px >= SEAL_COMPACT_MIN_PX) return "compact";
  return "favicon";
}
