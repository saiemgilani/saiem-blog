import { site } from "@content/site";
import { Seal } from "@components/brand/Seal";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule bg-page">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:grid-cols-3">
        <div className="flex items-start gap-3 text-brand">
          <Seal size={44} id="footer-seal" />
          <p className="text-sm text-muted">{site.tagline}</p>
        </div>
        <div>
          <p className="font-display text-base">Stay in touch</p>
          <a href={site.joinUrl} className="text-sm text-brand underline underline-offset-4">Join the SportsDataverse list →</a>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {[...site.socials, ...site.support].map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-ink" rel="me noopener">{l.label}</a></li>
          ))}
        </ul>
      </div>
      <p className="pb-8 text-center font-mono text-[11px] text-muted">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
