// Open entry №004, wait for the Nets hexes, switch team, then pick a player.
export default async function labShotChart(page, base) {
  await page.goto(`${base}/lab/shot-chart-from-a-release`, { waitUntil: "networkidle" });
  const drawn = page.getByText(/shots · ran in your browser/);
  await drawn.waitFor({ timeout: 60_000 });
  await page.getByRole("combobox", { name: "Team" }).selectOption("LAL");
  await page.locator('svg[aria-label*="LAL"]').waitFor({ timeout: 30_000 });
  await page.getByText(/shots · ran in your browser/).waitFor({ timeout: 30_000 });
  await page.waitForTimeout(1500);
  await page.getByRole("combobox", { name: "Player" }).selectOption({ index: 1 });
  await page.locator('svg[aria-label*="player"]').waitFor({ timeout: 30_000 });
  await page.getByText(/shots · ran in your browser/).waitFor({ timeout: 30_000 });
  await page.waitForTimeout(1500);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(1500);
}
