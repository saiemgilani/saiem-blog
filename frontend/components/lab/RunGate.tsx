"use client";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { sessionLogin, type MenuState } from "@lib/authClient";
import { runOutcome, type RunOutcome } from "@lib/lab/runClient";

export const DAILY_QUOTA = 5; // mirrors LAB_DAILY_QUOTA's default; the API is the authority

/** Session-aware run function for a gated entry. `run` is null until the viewer is signed in. */
export function useRunGate(slug: string): { state: MenuState | null; run: ((params: unknown) => Promise<RunOutcome>) | null } {
  const [state, setState] = useState<MenuState | null>(null);
  useEffect(() => {
    fetch("/api/me").then(async (r) => setState(sessionLogin(r.status, r.ok ? await r.json() : null))).catch(() => setState({ kind: "off" }));
  }, []);
  const run = state?.kind === "in"
    ? async (params: unknown) => {
        try {
          const r = await fetch(`/api/lab/${slug}/run`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(params) });
          return runOutcome(r.status, await r.json().catch(() => null), DAILY_QUOTA);
        } catch { return runOutcome(502, null, DAILY_QUOTA); }
      }
    : null;
  return { state, run };
}

/** The one-line prompt under a gated widget: sign-in button when signed out; nothing when signed in. */
export function RunGatePrompt({ state }: { state: MenuState | null }) {
  if (state === null) return <p className="mt-3 font-mono text-[11px] text-muted">checking sign-in…</p>;
  if (state.kind === "off") return <p className="mt-3 font-mono text-[11px] text-muted">live runs are not enabled on this deployment — the example output above is a real cached run.</p>;
  if (state.kind === "out")
    return (
      <p className="mt-3 font-mono text-[11px] text-muted">
        showing the example output ·{" "}
        <button type="button" onClick={() => signIn("github")} className="text-ink underline decoration-rule underline-offset-2 hover:text-brand">sign in with GitHub to run your own</button>
        {" "}({DAILY_QUOTA} runs/day)
      </p>
    );
  return null;
}
