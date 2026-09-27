"""Lab entry registry (spec §5 "Gated compute"). Each module under saiem_api.lab exports
Params, Result, run, COST_UNITS; this builds RUNNERS by discovering those modules. The slug is
the module name with "_" -> "-" (series_odds -> series-odds).

Must never import saiem_api.runner -- runner imports this module, so the reverse import would
be circular."""

import os
from collections.abc import Callable
from importlib import import_module
from types import ModuleType
from typing import TypedDict

from pydantic import BaseModel

_ENTRY_MODULES = ["series_odds"]


class Runner(TypedDict):
    Params: type[BaseModel]
    Result: type[BaseModel]
    run: Callable[[BaseModel], BaseModel]
    cost_units: int


def _slug(module_name: str) -> str:
    return module_name.replace("_", "-")


def _from_module(mod: ModuleType) -> Runner:
    return {"Params": mod.Params, "Result": mod.Result, "run": mod.run, "cost_units": mod.COST_UNITS}


RUNNERS: dict[str, Runner] = {
    _slug(name): _from_module(import_module(f"{__name__}.{name}")) for name in _ENTRY_MODULES
}


def load_runner(slug: str) -> Runner | None:
    """RUNNERS, plus every module named in SAIEM_LAB_EXTRA_MODULES (comma-separated import
    paths, each exporting its own module-level RUNNERS dict in the same shape). A spawned
    `runner._child` imports this package fresh and never sees an in-process monkeypatch of
    RUNNERS, so tests register hostile fixtures through this env var instead."""
    if slug in RUNNERS:
        return RUNNERS[slug]
    for path in filter(None, (p.strip() for p in os.environ.get("SAIEM_LAB_EXTRA_MODULES", "").split(","))):
        extra: dict[str, Runner] = import_module(path).RUNNERS
        if slug in extra:
            return extra[slug]
    return None
