/** Pure Auth.js callbacks (node-testable; lib/auth.ts wires them). */
export type TokenClaims = { githubId?: string; login?: string; [k: string]: unknown };

export function jwtCallback<T extends TokenClaims>(args: { token: T; profile?: Record<string, unknown> | null }): T {
  const p = args.profile;
  if (p && (typeof p.id === "number" || typeof p.id === "string") && typeof p.login === "string") {
    args.token.githubId = String(p.id);
    args.token.login = p.login;
  }
  // Auth.js seeds the token with the provider profile's email/picture before this callback runs;
  // never let either persist into the token (and from there, the session).
  delete args.token.email;
  delete args.token.picture;
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
  const session = args.session as { githubId?: string; login?: string; user?: { name?: string; email?: string; image?: string } };
  session.githubId = args.token.githubId;
  session.login = args.token.login;
  // Auth.js rebuilds session.user = { name, email, image } from the token before this callback
  // runs; email/image never belong on the wire — strip them here too (defense in depth).
  if (session.user && typeof session.user === "object") {
    delete session.user.email;
    delete session.user.image;
  }
  return args.session;
}
