/** What the nav shows from GET /api/me: "off" (sign-in not configured here → render nothing),
 *  "out" (configured but signed out), or "in" with the GitHub login. */
export type MenuState = { kind: "off" } | { kind: "out" } | { kind: "in"; login: string };

export function sessionLogin(status: number, body: unknown): MenuState {
  if (status !== 200) return { kind: "off" };
  if (!body || typeof body !== "object") return { kind: "off" };
  const enabled = (body as { enabled?: unknown }).enabled;
  if (enabled !== true) return { kind: "off" };
  const login = (body as { login?: unknown }).login;
  return typeof login === "string" && login ? { kind: "in", login } : { kind: "out" };
}
