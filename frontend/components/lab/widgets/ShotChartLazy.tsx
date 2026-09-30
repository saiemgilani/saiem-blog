"use client";
import dynamic from "next/dynamic";

// d3 + the widget load only on the entry that renders it, never in the shared lab chunk.
export const ShotChart = dynamic(() => import("./ShotChart").then((m) => m.ShotChart), {
  ssr: false,
  loading: () => <p className="my-6 font-mono text-xs text-muted">loading chart…</p>,
});
