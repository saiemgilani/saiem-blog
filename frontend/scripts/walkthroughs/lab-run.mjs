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
  // R-P5-18(a): the settled status text repeats across PAID runs ("1 unit" -> "1 unit" every
  // time), so waiting for the text to differ from the previous value times out on every run
  // after the first. Every run passes through "running..." first (the button disables and the
  // status renders it -- Task 3's SF5 fix), so each click yields >= 2 mutations of the status
  // node even when the settled text repeats. Track those mutations instead of comparing text.
  await page.evaluate(() => {
    const el = document.querySelector('[role="status"]');
    window.__st = [];
    new MutationObserver(() => window.__st.push((el.textContent ?? "").trim())).observe(el, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  });
  const pGame = page.getByLabel("p(win a game)");
  const homeEdge = page.getByLabel("home edge");
  const sims = page.getByLabel("simulations");
  // R-P5-18(b): p_game alone has only 40 clock-derived bases (0.50..0.89 on its 0.01 grid), so a
  // re-run of the walkthrough against the same database can collide with an earlier run's exact
  // params and hit the (free, 90-day) result cache instead of a fresh paid run -- a cache hit is
  // harmless (free, never exhausts the quota) but would undercount how many paid runs this
  // walkthrough actually exercised. Spread p_game, home_edge and sims off one timestamp so the
  // combined key space makes a collision negligible; each stays inside SeriesOdds.tsx's
  // min/max/step (p_game 0.01-0.99 step 0.01, home_edge 0-0.2 step 0.01, sims 1000-200000 step 1000).
  const t = Date.now();
  for (let i = 0; i < 8; i++) {
    const n = await page.evaluate(() => window.__st.length);
    const p_game = (0.5 + ((Math.floor(t / 60_000) + i) % 40) / 100).toFixed(2);
    const home_edge = (((Math.floor(t / 1000) + i) % 20) / 100).toFixed(2);
    const simCount = String(1000 + ((t + i * 7) % 190) * 1000);
    await pGame.fill(p_game);
    await homeEdge.fill(home_edge);
    await sims.fill(simCount);
    await run.click();
    await page.waitForFunction(
      (n) => {
        const s = window.__st;
        const last = s[s.length - 1];
        return s.length > n && last !== undefined && last !== "" && !/running/i.test(last);
      },
      n,
      { timeout: 45_000 },
    );
    const text = await status.innerText();
    if (/quota used up for today/i.test(text)) { await page.waitForTimeout(1500); return; }
    await page.waitForTimeout(800);
  }
  throw new Error("quota message never appeared after 8 runs");
}
