"use client";

import { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { sessionLogin } from "@lib/authClient";

export function AuthMenu() {
  const [state, setState] = useState<"unknown" | "off" | "out" | string>("unknown");
  useEffect(() => {
    fetch("/api/auth/session")
      .then(async (r) => setState(sessionLogin(r.status, r.ok ? await r.json() : null)))
      .catch(() => setState("off"));
  }, []);
  if (state === "unknown" || state === "off") return null;
  if (state === "out") return <button type="button" onClick={() => signIn("github")} className="hover:text-ink">sign in</button>;
  return <button type="button" onClick={() => signOut()} title="sign out" className="hover:text-ink">@{state}</button>;
}
