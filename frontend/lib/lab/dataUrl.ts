export function labDataUrl(origin: string, s: { repo: string; tag: string; asset: string }): string {
  const q = new URLSearchParams({ repo: s.repo, tag: s.tag, asset: s.asset });
  return `${origin}/api/lab/data?${q.toString()}`;
}
