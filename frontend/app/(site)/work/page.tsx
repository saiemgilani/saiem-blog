import type { Metadata } from "next";
import fallback from "@content/fallback/sdv-packages.json";
import { getEcosystemStats, getSdvPackages, type SdvPackage } from "@lib/sdvOrg";
import { pageMetadata } from "@lib/metadata";

export const metadata: Metadata = { title: "Work", ...pageMetadata("/work") };
export const revalidate = 3600;

export default async function Work() {
  const [{ packages, live }, stats] = await Promise.all([getSdvPackages(fetch, fallback as SdvPackage[]), getEcosystemStats()]);
  return (
    <section className="py-12">
      <h1 className="font-display text-4xl">Work</h1>
      <p className="mt-3 max-w-[60ch] text-muted">Open-source sports data packages I created and maintain as part of the SportsDataverse.</p>
      {stats && (
        <dl className="mt-6 flex flex-wrap gap-6 font-mono text-sm">
          <div><dt className="text-muted">repos</dt><dd>{stats.repos}</dd></div>
          <div><dt className="text-muted">stars</dt><dd>{stats.githubStars.toLocaleString()}</dd></div>
          <div><dt className="text-muted">forks</dt><dd>{stats.forks.toLocaleString()}</dd></div>
        </dl>
      )}
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p) => (
          <li key={p.title} className="border border-rule bg-card p-4">
            <a href={p.docsHref ?? p.sourceHref} className="font-display text-lg hover:text-brand">{p.title}</a>
            <p className="font-mono text-[11px] text-muted">{p.repoType} · {p.sports}</p>
            <p className="mt-2 line-clamp-3 text-sm text-muted">{p.content}</p>
          </li>
        ))}
      </ul>
      {!live && <p className="mt-4 font-mono text-[11px] text-muted">Showing a saved list; sportsdataverse.org didn't answer.</p>}
    </section>
  );
}
