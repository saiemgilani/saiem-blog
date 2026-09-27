"use client";
import { cn } from "@lib/utils";
import type { LabView } from "@lib/lab/labView";

const VIEWS: LabView[] = ["index", "map"];

export function LabViewToggle({ view, onChange }: { view: LabView; onChange: (v: LabView) => void }) {
  return (
    <div role="group" aria-label="Lab view" className="mt-6 flex gap-2 font-mono text-xs">
      {VIEWS.map((v) => (
        <button
          key={v}
          type="button"
          aria-pressed={view === v}
          onClick={() => onChange(v)}
          className={cn("border px-2 py-1", view === v ? "border-brand text-brand" : "border-rule text-muted hover:text-ink")}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
