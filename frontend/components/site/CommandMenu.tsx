"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@components/ui/command";

export type CommandItemData = { label: string; href: string; group: string };

export function CommandMenu({ items }: { items: CommandItemData[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const groups = [...new Set(items.map((i) => i.group))];
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        aria-keyshortcuts="Meta+K Control+K"
        className="rounded border border-rule px-1.5 font-mono text-xs text-muted hover:text-ink"
      >
        ⌘K
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Jump to…" />
        <CommandList>
          <CommandEmpty>Nothing matches.</CommandEmpty>
          {groups.map((g) => (
            <CommandGroup key={g} heading={g}>
              {items.filter((i) => i.group === g).map((i) => (
                <CommandItem key={i.href} value={`${i.label} ${i.href}`} onSelect={() => { setOpen(false); router.push(i.href); }}>
                  {i.label}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
