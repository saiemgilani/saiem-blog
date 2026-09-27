import { test } from "node:test";
import assert from "node:assert/strict";
import { jwtCallback, sessionCallback } from "../lib/authCallbacks.ts";
import { sessionLogin } from "../lib/authClient.ts";

test("jwt: GitHub id + login are captured on the sign-in leg and kept afterwards", () => {
  const t1 = jwtCallback({ token: {}, profile: { id: 12345, login: "saiemgilani", email: "x@y" } });
  assert.deepEqual(t1, { githubId: "12345", login: "saiemgilani" });
  const t2 = jwtCallback({ token: { ...t1 }, profile: null }); // later requests carry no profile
  assert.deepEqual(t2, t1);
  assert.deepEqual(jwtCallback({ token: {}, profile: { login: "no-id" } }), {}, "no id → nothing claimed");
});

test("session: only githubId and login cross to the client", () => {
  const s = sessionCallback({ session: { user: { name: "S" }, expires: "x" }, token: { githubId: "1", login: "l", accessToken: "SECRET", sub: "1" } });
  assert.deepEqual(s, { user: { name: "S" }, expires: "x", githubId: "1", login: "l" });
  assert.equal("accessToken" in s, false);
});

test("menu decision table", () => {
  assert.equal(sessionLogin(500, null), "off"); // MissingSecret → auth not configured → hide
  assert.equal(sessionLogin(200, null), "out");
  assert.equal(sessionLogin(200, {}), "out");
  assert.equal(sessionLogin(200, { user: { name: "S" }, login: "saiemgilani" }), "saiemgilani");
  assert.equal(sessionLogin(200, { user: { name: "S" } }), "out", "a session without a login can't act");
});
