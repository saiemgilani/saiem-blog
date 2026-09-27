"use client";

import { useEffect, useState } from "react";

/** Notes are static pages, so the count is fetched (and recorded) client-side after hydration.
 *  React strict mode fires the effect twice in dev; the API dedups the same visitor, so that's harmless. */
export function ViewCounter({ slug }: { slug: string }) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`/api/views/${slug}`, { method: "POST", signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((b: { count?: unknown } | null) => {
        if (b && typeof b.count === "number") setCount(b.count);
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [slug]);
  if (count === null) return null;
  return (
    <span data-views={count}>
      {" · "}
      {count.toLocaleString()} {count === 1 ? "view" : "views"}
    </span>
  );
}
