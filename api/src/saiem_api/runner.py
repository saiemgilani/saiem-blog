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


def _child(slug: str, params: dict, mem_mb: int, conn) -> None:  # runs in the spawned process
    # A Connection.send() is a direct write, not a background feeder thread flushing a pipe --
    # unlike multiprocessing.Queue, the child can exit right after sending even a large payload
    # (see SF-2: Queue.put() only queues for a feeder thread, so join()-before-get() can deadlock
    # once a result exceeds the OS pipe buffer).
    try:
        if sys.platform != "win32":
            import resource

            cap = mem_mb * 1024 * 1024
            resource.setrlimit(resource.RLIMIT_AS, (cap, cap))
        spec = load_runner(slug)
        if spec is None:
            raise LookupError(f"unknown lab entry {slug!r}")
        result = spec["run"](spec["Params"].model_validate(params))
        conn.send(("ok", result.model_dump(mode="json"), None))
    except BaseException as e:  # every failure must become a message, incl. MemoryError
        conn.send(("error", None, f"{type(e).__name__}: {e}"[:500]))
    finally:
        conn.close()


def execute(slug: str, params: dict, *, timeout_s: int, mem_mb: int = 512) -> RunOutcome:
    ctx = mp.get_context("spawn")
    reader, writer = ctx.Pipe(duplex=False)
    proc = ctx.Process(target=_child, args=(slug, params, mem_mb, writer), daemon=True)
    t0 = time.perf_counter()
    proc.start()
    writer.close()  # the parent's copy; once the child's copy also closes, reader.poll() sees EOF
    try:
        if not reader.poll(timeout_s):
            proc.kill()
            proc.join(5)
            status, result, error = "timeout", None, f"exceeded {timeout_s}s"
        else:
            try:
                status, result, error = reader.recv()
            except EOFError:  # the child died without reporting (e.g. OOM-killed)
                proc.join(5)
                status, result, error = "error", None, f"worker exited with code {proc.exitcode}"
            else:
                proc.join()
    finally:
        reader.close()
    elapsed = int((time.perf_counter() - t0) * 1000)
    return RunOutcome(status, result, error, elapsed)
