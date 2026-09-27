import type { Metadata } from "next";
import fallback from "@content/fallback/sdv-packages.json";
import { getEcosystemStats, getSdvPackages, type SdvPackage } from "@lib/sdvOrg";
import { pageMetadata } from "@lib/metadata";
import { apiEnv } from "@lib/api/client";
import { getProjects } from "@lib/projects";

export const metadata: Metadata = { title: "Work", ...pageMetadata("/work") };
export const revalidate = 3600;

export default async function Work() {
  const [{ packages, live }, stats, projects] = await Promise.all([getSdvPackages(fetch, fallback as SdvPackage[]), getEcosystemStats(), getProjects(apiEnv())]);
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
      <h2 className="mt-10 font-display text-2xl">SportsDataverse packages</h2>
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
