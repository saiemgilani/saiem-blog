// Packages on sportsdataverse.org/api/packages that list Saiem in their author metadata
// (DESCRIPTION Authors@R, pyproject authors, package.json author/contributors) AND are public
// AND either live in the SportsDataverse GitHub org or are on CRAN — checked against each
// repo's metadata on 2026-09-29. /work shows only these; the org API also lists community
// packages that are not his work. Keyed on (title, repoType) because "sportsdataverse"
// exists as an R, Python and Node.js package.
export type Contribution = { title: string; repoType: "R" | "Python" | "Node.js"; role: "author" | "maintainer" };

export const CONTRIBUTIONS: readonly Contribution[] = [
  { title: "sportsdataverse", repoType: "R", role: "author" },
  { title: "sportsdataverse", repoType: "Python", role: "author" },
  { title: "sportsdataverse", repoType: "Node.js", role: "author" },
  { title: "cfbfastR", repoType: "R", role: "author" },
  { title: "hoopR", repoType: "R", role: "author" },
  { title: "wehoop", repoType: "R", role: "author" },
  { title: "fastRhockey", repoType: "R", role: "author" },
  { title: "baseballr", repoType: "R", role: "maintainer" }, // BillPetti/baseballr, on CRAN; Saiem is aut + cre
  { title: "oddsapiR", repoType: "R", role: "author" },
  { title: "cfbseedR", repoType: "R", role: "author" },
  { title: "cfb4th", repoType: "R", role: "author" },
  { title: "cfbplotR", repoType: "R", role: "author" },
  { title: "recruitR", repoType: "R", role: "author" },
  { title: "usfootballR", repoType: "R", role: "author" },
];

export function isContribution(p: { title: string; repoType: string }): boolean {
  return CONTRIBUTIONS.some((c) => c.title === p.title && c.repoType === p.repoType);
}
