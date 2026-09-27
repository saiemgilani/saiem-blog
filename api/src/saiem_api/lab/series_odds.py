"""№ 002 series-odds: exact + Monte-Carlo series win probability (spec §5 catalog). No data
sources (sources: []). The exact/simulated gap is the entry's teaching point, so the sim must be
reproducible -- the RNG is seeded with a constant, not from params, so identical params always
give identical output (that's what makes params_hash a safe cache key and the packaged example
byte-stable)."""

import random
from math import comb

from pydantic import BaseModel, Field

COST_UNITS = 1
_SEED = 20260927
_HOME_GAME = {7: (1, 1, 0, 0, 1, 0, 1), 5: (1, 1, 0, 0, 1), 3: (1, 0, 1)}


class Params(BaseModel):
    p_game: float = Field(gt=0, lt=1, description="single-game win probability for the team of interest")
    best_of: int = Field(default=7, description="3, 5 or 7")
    home_edge: float = Field(
        default=0.0, ge=0, le=0.2, description="added to p_game in home games (2-2-1-1-1 format)"
    )
    sims: int = Field(default=20_000, ge=1_000, le=200_000)


class Result(BaseModel):
    exact: float
    simulated: float
    distribution: dict[str, float]  # "4-0", "4-1", … share of series ending each way


def _series_exact(p: float, wins_needed: int) -> float:
    # P(win series) = Σ_k C(n-1+k, k) p^n (1-p)^k for k = 0..n-1 losses before the n-th win
    return sum(comb(wins_needed - 1 + k, k) * p**wins_needed * (1 - p) ** k for k in range(wins_needed))


def run(params: Params) -> Result:
    if params.best_of not in (3, 5, 7):
        raise ValueError("best_of must be 3, 5 or 7")
    n = params.best_of // 2 + 1
    home = _HOME_GAME[params.best_of]
    rng = random.Random(_SEED)
    wins = 0
    ends: dict[str, int] = {}
    for _ in range(params.sims):
        w = losses = 0
        for g in range(params.best_of):
            p = min(params.p_game + (params.home_edge if home[g] else 0.0), 0.999)
            if rng.random() < p:
                w += 1
            else:
                losses += 1
            if w == n or losses == n:
                break
        wins += w == n
        key = f"{w}-{losses}"
        ends[key] = ends.get(key, 0) + 1
    return Result(
        exact=round(_series_exact(params.p_game, n), 4),  # exact ignores home_edge; the gap IS the lesson
        simulated=round(wins / params.sims, 4),
        distribution={k: round(v / params.sims, 4) for k, v in sorted(ends.items())},
    )
