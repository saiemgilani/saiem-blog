export type LabView = "index" | "map";
export const parseView = (param: string | undefined): LabView => (param === "map" ? "map" : "index");
export function viewHref(view: LabView, runtime?: string): string {
  if (view === "map") return "/lab?view=map";
  return runtime ? `/lab?runtime=${encodeURIComponent(runtime)}` : "/lab";
}
