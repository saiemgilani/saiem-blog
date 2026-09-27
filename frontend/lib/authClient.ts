/** What the nav shows from GET /api/auth/session: "off" (auth not configured or broken → render
 *  nothing), "out" (signed out), or "in" with the GitHub login. */
export type MenuState = { kind: "off" } | { kind: "out" } | { kind: "in"; login: string };

export function sessionLogin(status: number, body: unknown): MenuState {
  if (status !== 200) return { kind: "off" };
  if (!body || typeof body !== "object") return { kind: "out" };
  const login = (body as { login?: unknown }).login;
  return typeof login === "string" && login ? { kind: "in", login } : { kind: "out" };
}
