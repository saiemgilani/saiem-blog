import { auth } from "@lib/auth";

export const dynamic = "force-dynamic";
const json = (body: unknown) => Response.json(body, { headers: { "cache-control": "no-store" } });

/** What the nav needs: is sign-in configured here, and who (if anyone) is signed in.
 *  Never calls Auth.js when the env is missing, so unconfigured deployments produce no 500s. */
export async function GET() {
  const enabled = Boolean(process.env.AUTH_SECRET && process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET);
  if (!enabled) return json({ enabled: false });
  const session = await auth();
  return json({ enabled: true, login: session?.login ?? null });
}
