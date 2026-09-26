// Open entry №001, run the default query, wait for rows computed in-browser.
export default async function labPeek(page, base) {
  await page.goto(`${base}/lab/peek-inside-a-release`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: /run/i }).click();
  await page.getByText(/rows · .* ms · ran in your browser/).waitFor({ timeout: 45_000 });
  await page.mouse.wheel(0, 600);
  await page.waitForTimeout(1500);
}
