"use client";
import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { parseView, viewHref, type LabView } from "@lib/lab/labView";
import { LabViewToggle } from "./LabViewToggle";

export function LabViews({ runtime, index, map }: { runtime?: string; index: ReactNode; map: ReactNode }) {
  const searchParams = useSearchParams();
  const urlView = parseView(searchParams.get("view") ?? undefined);
  const [override, setOverride] = useState<LabView | null>(null);
  // The URL is the single source of truth (R-P6-8): whenever it changes — including a
  // Back/Forward history traversal, which Next replays without remounting this component
  // via a stale useState — drop any local override so the URL drives the view again.
  // eslint-disable-next-line react-hooks/set-state-in-effect -- deliberate reset-on-prop-change (R-P6-8's own prescription), not a derived value computable during render.
  useEffect(() => setOverride(null), [urlView]);
  const view = override ?? urlView;
  const change = (v: LabView) => {
    setOverride(v);
    // Mirror the choice into the URL without a navigation; useSearchParams() then reflects
    // it (Next patches history.replaceState), so the effect above clears the override on the
    // next render and `view` keeps agreeing with the URL.
    window.history.replaceState(null, "", viewHref(v, runtime));
  };
  return (
    <>
      <LabViewToggle view={view} onChange={change} />
      {view === "map" ? map : index}
    </>
  );
}
