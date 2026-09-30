import { getEcosystemStatus, STATUS_BOARD_URL } from "@lib/ecosystemStatus";

/** One line of SportsDataverse data freshness under the home page's NOW line.
 *  Renders nothing when the snapshot can't be fetched or read. */
export async function StatusStrip() {
  const status = await getEcosystemStatus();
  if (!status) return null;
  const { fresh, idle, stale, failing, unknown } = status.counts;
  const parts = [`${fresh} fresh`, `${idle} idle`, `${stale} stale`, `${failing} failing`];
  if (unknown) parts.push(`${unknown} unknown`);
  return (
    <p className="mt-1 font-mono text-xs text-muted">
      Data status → {parts.join(" · ")} · <time dateTime={status.generatedAt}>{status.generatedAt.slice(0, 10)}</time> ·{" "}
      <a href={STATUS_BOARD_URL} className="text-brand underline underline-offset-4 hover:text-ink">see the board</a>
    </p>
  );
}
