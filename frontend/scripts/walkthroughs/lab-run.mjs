// Signed-out: № 002 shows the example output and the sign-in prompt, never a run button. A
// deployment with no AUTH_GITHUB_* env renders the "off" state instead (no GitHub button --
// RunGatePrompt says live runs aren't enabled here), so we accept either signal.
// Signed-in (only when WALKTHROUGH_AUTH_COOKIE holds a session token copied from a real sign-in
// on the target): run once, then keep running until the UI shows the daily-quota message.
export default async function labRun(page, base) {
  await page.goto(`${base}/lab/series-odds`, { waitUntil: "networkidle" });
  await page.getByLabel("example output").waitFor();
  const signIn = page.getByRole("button", { name: /sign in with github/i });
  const notEnabled = page.getByText(/not enabled/i);
  await Promise.any([signIn.waitFor(), notEnabled.waitFor()]);
  if ((await page.getByRole("button", { name: /^run$/i }).count()) !== 0) throw new Error("signed-out page shows a run button");
  const cookie = process.env.WALKTHROUGH_AUTH_COOKIE;
  if (!cookie) { console.log("signed-in flow skipped: WALKTHROUGH_AUTH_COOKIE unset"); await page.waitForTimeout(1500); return; }
  const url = new URL(base);
  const name = process.env.WALKTHROUGH_AUTH_COOKIE_NAME ?? (url.protocol === "https:" ? "__Secure-authjs.session-token" : "authjs.session-token");
  await page.context().addCookies([{ name, value: cookie, domain: url.hostname, path: "/", httpOnly: true, secure: url.protocol === "https:", sameSite: "Lax" }]);
  await page.reload({ waitUntil: "networkidle" });
  const run = page.getByRole("button", { name: /^run$/i });
  await run.waitFor({ timeout: 15_000 });
  const status = page.getByRole("status");
  // The status line is always rendered (empty when idle, "running…" mid-fetch), so waiting on
  // its mere presence resolves immediately and races the fetch -- wait for the text to actually
  // change to a settled (non-"running") value instead.
  const pGame = page.getByLabel("p(win a game)");
  // SF-9: a fixed p_game sequence (0.55..0.62) only dodges the run cache WITHIN one invocation --
  // the cache is a database row keyed on params and lives 90 days, so a second walkthrough run
  // against the same API (preview, post-deploy, or any manual re-run) replays the same sequence
  // and hits the cache on every click. Seed off the wall clock so each invocation starts at a
  // different point on the 0.01 grid the input's `step` requires.
  const base = 0.5 + (Math.floor(Date.now() / 1000) % 40) / 100;
  for (let i = 0; i < 8; i++) {
    const prev = (await status.innerText()).trim();
    // Identical params would hit the run cache from the 2nd click on (free, no quota spend, and
    // a repeated "cached · free" status text the waitForFunction below would never see change) --
    // nudge p_game so every iteration is a fresh, quota-charged miss.
    const p_game = Math.min(base + i * 0.01, 0.99);
    await pGame.fill(p_game.toFixed(2));
    await run.click();
    await page.waitForFunction(
      (prevText) => {
        const el = document.querySelector('[role="status"]');
        const t = el?.textContent?.trim() ?? "";
        return t !== "" && t !== prevText && !/running/i.test(t);
      },
      prev,
      { timeout: 45_000 },
    );
    const text = await status.innerText();
    if (/quota used up for today/i.test(text)) { await page.waitForTimeout(1500); return; }
    await page.waitForTimeout(800);
  }
  throw new Error("quota message never appeared after 8 runs");
}
