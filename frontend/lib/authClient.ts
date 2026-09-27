/** What the nav shows from GET /api/auth/session: "off" (auth not configured or broken → render
 *  nothing), "out" (signed out), or the GitHub login. */
export function sessionLogin(status: number, body: unknown): "off" | "out" | string {
  if (status !== 200) return "off";
  if (!body || typeof body !== "object") return "out";
  const login = (body as { login?: unknown }).login;
  return typeof login === "string" && login ? login : "out";
}
