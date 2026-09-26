import { Nav } from "@components/site/Nav";
import { Footer } from "@components/site/Footer";
import { site } from "@content/site";
import { listNotes } from "@lib/notes";
import { LAB } from "@content/lab/registry";
import { formatEntryNumber } from "@lib/lab/registry-schema";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const commandItems = [
    { label: "Home", href: "/", group: "Pages" },
    ...site.nav.map((n) => ({ label: n.label, href: n.href, group: "Pages" })),
    ...listNotes().map((n) => ({ label: n.title, href: `/notes/${n.slug}`, group: "Notes" })),
    ...LAB.filter((e) => e.status !== "archived").map((e) => ({ label: `${formatEntryNumber(e.n)} ${e.title}`, href: `/lab/${e.slug}`, group: "Lab" })),
  ];
  return (
    <div className="grid-paper flex min-h-dvh flex-col">
      <Nav commandItems={commandItems} />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4">{children}</main>
      <Footer />
    </div>
  );
}
