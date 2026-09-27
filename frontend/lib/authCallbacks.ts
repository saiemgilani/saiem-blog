/** Pure Auth.js callbacks (node-testable; lib/auth.ts wires them). */
export type TokenClaims = { githubId?: string; login?: string; [k: string]: unknown };

export function jwtCallback<T extends TokenClaims>(args: { token: T; profile?: Record<string, unknown> | null }): T {
  const p = args.profile;
  if (p && (typeof p.id === "number" || typeof p.id === "string") && typeof p.login === "string") {
    args.token.githubId = String(p.id);
    args.token.login = p.login;
  }
  return args.token;
}

// `S extends object` (not `{ githubId?: string; login?: string }` as literally in the brief)
// works around a TS inference limitation: a generic constrained solely by optional properties
// infers to the constraint itself -- not the passed literal -- once the argument carries other
// properties (e.g. `user`, `expires` in test/auth.test.ts's literal call), which then fails the
// excess-property check against the constraint. An index-signature constraint fixes that literal
// call but breaks the real caller in auth.ts, where `session: Session` (next-auth's type) has no
// index signature. `object` satisfies both; the cast below is the (behavior-preserving) cost.
export function sessionCallback<S extends object>(args: { session: S; token: TokenClaims }): S {
  // Nothing else crosses to the browser — never the OAuth access token.
  const session = args.session as { githubId?: string; login?: string };
  session.githubId = args.token.githubId;
  session.login = args.token.login;
  return args.session;
}
