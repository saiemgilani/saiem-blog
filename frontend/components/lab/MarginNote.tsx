export function MarginNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="not-prose my-3 border-l-2 border-brand pl-2 font-mono text-[11px] leading-snug text-brand lg:float-left lg:clear-left lg:-ml-[212px] lg:w-[172px] lg:border-l-0 lg:pl-0">
      ← {children}
    </aside>
  );
}
