"use client";

import { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { sessionLogin, type MenuState } from "@lib/authClient";

export function AuthMenu() {
  const [state, setState] = useState<MenuState | null>(null); // null = still loading
  useEffect(() => {
    fetch("/api/auth/session")
      .then(async (r) => setState(sessionLogin(r.status, r.ok ? await r.json() : null)))
      .catch(() => setState({ kind: "off" }));
  }, []);
  if (state === null) return null; // unknown (still loading)
  switch (state.kind) {
    case "off":
      return null;
    case "out":
      return <li><button type="button" onClick={() => signIn("github")} className="hover:text-ink">sign in</button></li>;
    case "in":
      return <li><button type="button" onClick={() => signOut()} title="sign out" className="hover:text-ink">@{state.login}</button></li>;
  }
}
