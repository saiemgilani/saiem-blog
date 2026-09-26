import Link from "next/link";
export default function NotFound() {
  return (
    <main className="grid-paper grid min-h-dvh place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-sm text-muted">404</p>
        <h1 className="mt-2 font-display text-4xl">Not in the notebook.</h1>
        <Link href="/" className="mt-4 inline-block text-brand underline underline-offset-4">Back to the front page</Link>
      </div>
    </main>
  );
}
