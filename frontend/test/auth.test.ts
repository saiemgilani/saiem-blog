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
  assert.deepEqual(sessionLogin(500, null), { kind: "off" }); // non-200 → off
  assert.deepEqual(sessionLogin(200, { enabled: false }), { kind: "off" }); // sign-in not configured here
  assert.deepEqual(sessionLogin(200, { enabled: true, login: null }), { kind: "out" });
  assert.deepEqual(sessionLogin(200, { enabled: true, login: "saiemgilani" }), { kind: "in", login: "saiemgilani" });
  assert.deepEqual(sessionLogin(200, {}), { kind: "off" }, "no enabled flag → off");
  assert.deepEqual(sessionLogin(200, { login: "x" }), { kind: "off" }, "login with no enabled flag → off");
});

test("jwt: provider-seeded email and picture are dropped", () => {
  const t = jwtCallback({
    token: { name: "S", email: "s@example.com", picture: "https://avatars.example/1", sub: "1" },
    profile: { id: 1, login: "saiemgilani", email: "s@example.com" },
  });
  assert.deepEqual(t, { name: "S", sub: "1", githubId: "1", login: "saiemgilani" });
});

test("session: email and image never cross to the client", () => {
  const s = sessionCallback({
    session: { user: { name: "S", email: "s@example.com", image: "https://avatars.example/1" }, expires: "x" },
    token: { githubId: "1", login: "l" },
  });
  assert.deepEqual(s, { user: { name: "S" }, expires: "x", githubId: "1", login: "l" });
});
