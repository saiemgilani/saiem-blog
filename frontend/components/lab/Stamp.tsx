import type { LabStatus } from "@lib/lab/registry-schema";
import { cn } from "@lib/utils";

// archived uses text-muted at full opacity + line-through (not opacity-60, which fell to
// ~2.5:1 contrast) -- struck-through still reads as "retired" without failing WCAG AA.
const TONE: Record<LabStatus, string> = { sketch: "text-muted", prototype: "text-brand", shipped: "text-shipped", archived: "text-muted line-through" };
const TILT: Record<LabStatus, string> = { sketch: "rotate-2", prototype: "-rotate-3", shipped: "-rotate-1", archived: "rotate-1" };

export function Stamp({ status, className }: { status: LabStatus; className?: string }) {
  return (
    <span className={cn("inline-block border-[1.5px] border-current px-1.5 py-px font-mono text-[10px] uppercase tracking-[.08em]", TONE[status], TILT[status], className)}>
      {status}
    </span>
  );
}
