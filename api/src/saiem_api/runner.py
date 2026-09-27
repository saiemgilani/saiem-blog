"""Run a lab entry in a child process with a wall-clock timeout and an address-space cap.
What this does NOT do: OS-level network egress filtering — the child inherits the container's
network. The only fetch helper exposed to runners is the allowlisted release-asset reader; the
entry's margin rail says so."""

import hashlib
import json
import multiprocessing as mp
import sys
import time
from dataclasses import dataclass
from multiprocessing import queues

from saiem_api.lab import load_runner


@dataclass(frozen=True)
class RunOutcome:
    status: str  # ok | error | timeout
    result: dict | None
    error: str | None
    elapsed_ms: int


def params_hash(slug: str, params: dict) -> str:
    canon = json.dumps({"slug": slug, "params": params}, sort_keys=True, separators=(",", ":"))
    return hashlib.sha256(canon.encode()).hexdigest()


def _child(slug: str, params: dict, mem_mb: int, q: "queues.Queue") -> None:  # runs in the spawned process
    try:
        if sys.platform != "win32":
            import resource

            cap = mem_mb * 1024 * 1024
            resource.setrlimit(resource.RLIMIT_AS, (cap, cap))
        spec = load_runner(slug)
        if spec is None:
            raise LookupError(f"unknown lab entry {slug!r}")
        result = spec["run"](spec["Params"].model_validate(params))
        q.put(("ok", result.model_dump(mode="json"), None))
    except BaseException as e:  # every failure must become a message, incl. MemoryError
        q.put(("error", None, f"{type(e).__name__}: {e}"[:500]))


def execute(slug: str, params: dict, *, timeout_s: int, mem_mb: int = 512) -> RunOutcome:
    ctx = mp.get_context("spawn")
    q = ctx.Queue()
    proc = ctx.Process(target=_child, args=(slug, params, mem_mb, q), daemon=True)
    t0 = time.perf_counter()
    proc.start()
    proc.join(timeout_s)
    elapsed = int((time.perf_counter() - t0) * 1000)
    if proc.is_alive():
        proc.kill()
        proc.join(5)
        return RunOutcome("timeout", None, f"exceeded {timeout_s}s", elapsed)
    try:
        status, result, error = q.get(timeout=1)
    except Exception:  # child died without reporting (e.g. OOM-killed)
        return RunOutcome("error", None, f"worker exited with code {proc.exitcode}", elapsed)
    return RunOutcome(status, result, error, elapsed)
