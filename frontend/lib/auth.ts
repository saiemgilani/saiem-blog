import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { jwtCallback, sessionCallback } from "./authCallbacks";

// Env (Auth.js reads these itself): AUTH_SECRET, AUTH_GITHUB_ID, AUTH_GITHUB_SECRET.
export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true, // mode B sits behind Caddy
  providers: [
    GitHub({
      authorization: { params: { scope: "read:user" } }, // no email scope: users has no email (spec §6)
      profile: (p) => ({ id: String(p.id), name: String(p.login) }), // no email/image seeded into the token at all
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt: ({ token, profile }) => jwtCallback({ token, profile: (profile as Record<string, unknown> | undefined) ?? null }),
    session: ({ session, token }) => sessionCallback({ session, token }),
  },
});
