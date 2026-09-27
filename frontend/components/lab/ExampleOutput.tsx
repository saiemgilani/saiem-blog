export function ExampleOutput({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section aria-label="example output" className="mt-6 border border-rule p-4">
      <p className="font-mono text-[11px] uppercase tracking-wide text-muted">example output · {label}</p>
      <div className="mt-3">{children}</div>
    </section>
  );
}
