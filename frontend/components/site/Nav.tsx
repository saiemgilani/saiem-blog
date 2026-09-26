import Link from "next/link";
import { site } from "@content/site";
import { Seal } from "@components/brand/Seal";
import { ThemeToggle } from "./ThemeToggle";
import { CommandMenu, type CommandItemData } from "./CommandMenu";

export function Nav({ commandItems }: { commandItems: CommandItemData[] }) {
  return (
    <header className="border-b border-rule bg-page">
      <nav className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-2.5">
        <Link href="/" className="flex items-center gap-2 text-brand">
          <Seal size={28} id="nav-seal" />
          <span className="whitespace-nowrap font-display text-base font-semibold text-ink">{site.name}</span>
        </Link>
        <ul className="ml-auto flex items-center gap-3 font-mono text-xs text-muted">
          {site.nav.map((n) => (
            <li key={n.href}><Link href={n.href} className="hover:text-ink">{n.label}</Link></li>
          ))}
          {/* keyboard-only feature; the shortcut still works below sm, it just has no chip */}
          <li className="hidden sm:block"><CommandMenu items={commandItems} /></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}
