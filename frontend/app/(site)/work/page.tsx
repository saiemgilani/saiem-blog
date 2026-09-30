import type { Metadata } from "next";
import fallback from "@content/fallback/sdv-packages.json";
import { getEcosystemStats, getSdvPackages, type SdvPackage } from "@lib/sdvOrg";
import { pageMetadata } from "@lib/metadata";
import { apiEnv } from "@lib/api/client";
import { getProjects } from "@lib/projects";
import { contributionRank, isContribution } from "@content/work/contributions";
import { getEcosystemStatus, STATUS_BOARD_URL } from "@lib/ecosystemStatus";

export const metadata: Metadata = { title: "Work", ...pageMetadata("/work") };
export const revalidate = 3600;

export default async function Work() {
  const [{ packages: all, live }, stats, projects, status] = await Promise.all([getSdvPackages(fetch, fallback as SdvPackage[]), getEcosystemStats(), getProjects(apiEnv()), getEcosystemStatus()]);
  // The org API lists every SportsDataverse package, community ones included; this page is about mine.
  const packages = all.filter(isContribution).sort((a, b) => contributionRank(a) - contributionRank(b));
  return (
    <section className="py-12">
      {status && (
        <p className="mb-3 font-mono text-xs text-muted">
          SportsDataverse data as of <time dateTime={status.generatedAt}>{status.generatedAt.slice(0, 10)}</time> ·{" "}
          <a href={STATUS_BOARD_URL} className="text-brand underline underline-offset-4 hover:text-ink">status board</a>
        </p>
      )}
      <h1 className="font-display text-4xl">Work</h1>
      <p className="mt-3 max-w-[60ch] text-muted">Open-source sports data packages I created or help maintain, all part of the SportsDataverse — an ecosystem I started so public sports data would be easier to get at in R, Python and JavaScript.</p>
      {stats && (
        <dl className="mt-6 flex flex-wrap gap-6 font-mono text-sm" aria-label="SportsDataverse ecosystem"><div><dt className="text-muted">ecosystem</dt><dd>SportsDataverse</dd></div>
          <div><dt className="text-muted">repos</dt><dd>{stats.repos}</dd></div>
          <div><dt className="text-muted">stars</dt><dd>{stats.githubStars.toLocaleString()}</dd></div>
          <div><dt className="text-muted">forks</dt><dd>{stats.forks.toLocaleString()}</dd></div>
        </dl>
      )}
      {projects.length > 0 && (
        <>
          <h2 className="mt-10 font-display text-2xl">Projects</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {projects.map((p) => (
              <li key={p.id} className="border border-rule bg-card p-4">
                {p.url ? <a href={p.url} className="font-display text-lg hover:text-brand">{p.title}</a> : <span className="font-display text-lg">{p.title}</span>}
                {p.repo && <p className="font-mono text-[11px] text-muted"><a href={`https://github.com/${p.repo}`} className="hover:text-ink">{p.repo}</a></p>}
                <p className="mt-2 text-sm text-muted">{p.summary}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <h2 className="mt-10 font-display text-2xl">Packages</h2>
      <p className="mt-2 max-w-[60ch] text-sm text-muted">The ones with my name in the metadata — author and maintainer unless noted. The wider ecosystem lives at <a className="text-brand" href="https://sportsdataverse.org">sportsdataverse.org</a>.</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((p) => (
          <li key={p.title} className="border border-rule bg-card p-4">
            <a href={p.docsHref ?? p.sourceHref} className="font-display text-lg hover:text-brand">{p.title}</a>
            <p className="font-mono text-[11px] text-muted">{p.repoType} · {p.sports}</p>
            <p className="mt-2 line-clamp-3 text-sm text-muted">{p.content}</p>
          </li>
        ))}
      </ul>
      {!live && <p className="mt-4 font-mono text-[11px] text-muted">Showing a saved list; sportsdataverse.org didn&apos;t answer.</p>}
    </section>
  );
}
