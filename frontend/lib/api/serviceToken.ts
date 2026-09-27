import { createHmac } from "node:crypto";

/** The short-lived HS256 JWT every Next → saiem-api call carries (spec §6 "Service auth").
 *  Signing is ~10 lines of node:crypto, so no JWT library on this side; the API verifies with PyJWT. */
export type Scope = "read" | "run";
const b64u = (s: string) => Buffer.from(s, "utf8").toString("base64url");

export function mintServiceToken(opts: { secret: string; sub: string; scope: Scope; now?: number; ttlSeconds?: number }): string {
  const iat = Math.floor((opts.now ?? Date.now()) / 1000);
  const header = b64u(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = b64u(JSON.stringify({ aud: "saiem-api", sub: opts.sub, scope: opts.scope, iat, exp: iat + (opts.ttlSeconds ?? 60) }));
  const sig = createHmac("sha256", opts.secret).update(`${header}.${payload}`).digest("base64url");
  return `${header}.${payload}.${sig}`;
}
