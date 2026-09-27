"use client";
import { useState, type ReactNode } from "react";
import { viewHref, type LabView } from "@lib/lab/labView";
import { LabViewToggle } from "./LabViewToggle";

export function LabViews({ initial, runtime, index, map }: { initial: LabView; runtime?: string; index: ReactNode; map: ReactNode }) {
  const [view, setView] = useState<LabView>(initial);
  const change = (v: LabView) => {
    setView(v);
    // Mirror the choice into the URL without a navigation (the page stays as rendered); nothing
    // on the server depends on this — the server only uses ?view for the FIRST render.
    if (typeof window !== "undefined") window.history.replaceState(null, "", viewHref(v, runtime));
  };
  return (
    <>
      <LabViewToggle view={view} onChange={change} />
      {view === "map" ? map : index}
    </>
  );
}
