"use client";
import dynamic from "next/dynamic";

// DuckDB, d3 and the widget load only on № 005, never in the shared lab chunk.
export const AskInBrowser = dynamic(() => import("./AskInBrowser").then((m) => m.AskInBrowser), {
  ssr: false,
  loading: () => <p className="my-6 font-mono text-xs text-muted">loading…</p>,
});
