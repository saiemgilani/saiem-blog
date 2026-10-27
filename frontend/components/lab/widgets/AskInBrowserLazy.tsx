"use client";
import dynamic from "next/dynamic";

// DuckDB, d3 and the widget load only on № 005, never in the shared lab chunk. The placeholder
// holds the widget's first-paint size (question rows, court, legend and model rows) so the
// writeup below doesn't jump when it arrives.
export const AskInBrowser = dynamic(() => import("./AskInBrowser").then((m) => m.AskInBrowser), {
  ssr: false,
  loading: () => (
    <div className="not-prose my-6 border border-rule bg-card">
      <p className="h-[153px] px-3 py-2 font-mono text-xs text-muted">loading…</p>
      <div className="p-3"><div className="mx-auto aspect-[500/470] w-full max-w-xl" /></div>
      <div className="h-[158px]" />
    </div>
  ),
});
