// Open entry № 005 and walk the rules path only (CI has no WebGPU): the default question
// draws, a typed question becomes chips + ignored words, and removing a chip edits the question.
export default async function labAskInBrowser(page, base) {
  await page.goto(`${base}/lab/ask-in-your-browser`, { waitUntil: "networkidle" });
  await page.getByText(/shots · ran in your browser/).waitFor({ timeout: 60_000 });
  const box = page.getByRole("textbox", { name: "Ask about 2025-26 NBA shots" });
  await box.fill("made dunks in the 4th, vibes only");
  await page.waitForTimeout(800);
  await page.getByRole("button", { name: "ask", exact: true }).click();
  await page.getByText("ignored: vibes, only").waitFor({ timeout: 30_000 });
  await page.getByText(/Mobley/).first().waitFor({ timeout: 30_000 });
  await page.waitForTimeout(1500);
  await page.getByRole("button", { name: "remove Q4" }).click();
  await page.waitForFunction(() => new URLSearchParams(location.search).get("q") === "made dunks, vibes only", null, { timeout: 30_000 });
  await page.getByText(/shots · ran in your browser/).waitFor({ timeout: 30_000 });
  await page.waitForTimeout(1500);
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(1500);
}
