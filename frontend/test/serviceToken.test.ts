import { test } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { mintServiceToken } from "../lib/api/serviceToken.ts";

const decode = (part: string) => JSON.parse(Buffer.from(part, "base64url").toString("utf8"));

test("mints a compact HS256 JWT with the spec's claims", () => {
  const t = mintServiceToken({ secret: "k".repeat(32), sub: "123", scope: "read", now: 1_700_000_000_000 });
  const [h, p, s] = t.split(".");
  assert.deepEqual(decode(h), { alg: "HS256", typ: "JWT" });
  assert.deepEqual(decode(p), { aud: "saiem-api", sub: "123", scope: "read", iat: 1_700_000_000, exp: 1_700_000_060 });
  assert.equal(s, createHmac("sha256", "k".repeat(32)).update(`${h}.${p}`).digest("base64url"));
  assert.doesNotMatch(t, /[+/=]/, "base64url only");
});

test("a different secret or claim changes the signature", () => {
  const a = mintServiceToken({ secret: "a".repeat(32), sub: "anon", scope: "read", now: 0 });
  const b = mintServiceToken({ secret: "b".repeat(32), sub: "anon", scope: "read", now: 0 });
  const c = mintServiceToken({ secret: "a".repeat(32), sub: "anon", scope: "run", now: 0 });
  assert.notEqual(a.split(".")[2], b.split(".")[2]);
  assert.notEqual(a.split(".")[2], c.split(".")[2]);
});
