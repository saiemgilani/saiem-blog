Steps modules for `npm run walkthrough -- --steps scripts/walkthroughs/<name>.mjs`.
Each exports `default async (page, base) => { ... }` using the plain Playwright page API.
Keep one flow per file, under ~60 s of recording; the clip is named `flow-<file>`.
`lab-run.mjs` walks № 002 (`/lab/series-odds`) sign-in prompt → run → daily-quota message; the
signed-in half only runs when `WALKTHROUGH_AUTH_COOKIE` holds a session token copied from a real
sign-in on the target (`WALKTHROUGH_AUTH_COOKIE_NAME` overrides the cookie name, default
`authjs.session-token` / `__Secure-authjs.session-token` over https).
