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
  for (let i = 0; i < 8; i++) {
    await run.click();
    await page.getByRole("status").waitFor({ timeout: 45_000 });
    const text = await page.getByRole("status").innerText();
    if (/quota used up for today/i.test(text)) { await page.waitForTimeout(1500); return; }
    await page.waitForTimeout(800);
  }
  throw new Error("quota message never appeared after 8 runs");
}
