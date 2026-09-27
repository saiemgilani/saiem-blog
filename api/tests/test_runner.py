import json
import multiprocessing as mp
import sys
import time
from importlib.resources import files

import pytest

from saiem_api.lab.series_odds import Params, run
from saiem_api.runner import execute, params_hash


def test_sleepy_times_out_and_leaves_no_zombie(extra_lab_modules):
    t0 = time.perf_counter()
    out = execute("sleepy", {}, timeout_s=1)
    elapsed = time.perf_counter() - t0
    assert out.status == "timeout"
    assert elapsed < 3
    assert mp.active_children() == []


@pytest.mark.skipif(sys.platform == "win32", reason="resource.RLIMIT_AS is POSIX-only")
def test_hungry_hits_the_memory_cap(extra_lab_modules):
    out = execute("hungry", {}, timeout_s=10, mem_mb=256)
    assert out.status == "error"
    assert "MemoryError" in out.error


def test_angry_raises_and_the_message_survives_the_queue(extra_lab_modules):
    out = execute("angry", {}, timeout_s=10)
    assert out.status == "error"
    assert "angry runner always raises" in out.error


def test_large_result_does_not_deadlock_on_the_pipe_buffer(extra_lab_modules):  # SF-2 regression
    t0 = time.perf_counter()
    out = execute("big", {}, timeout_s=10)
    elapsed = time.perf_counter() - t0
    assert out.status == "ok"
    assert len(out.result["values"]) == 200_000
    assert elapsed < 5  # well under the 10s timeout budget -- a deadlock would time out at 10s


def test_series_odds_exact_and_simulated_agree():
    out = execute("series-odds", {"p_game": 0.6, "best_of": 7, "sims": 20000}, timeout_s=10)
    assert out.status == "ok"
    assert abs(out.result["exact"] - out.result["simulated"]) < 0.02
    assert out.result["exact"] == pytest.approx(0.7102, abs=1e-3)


def test_unknown_slug_is_an_error_not_a_crash():
    out = execute("does-not-exist", {}, timeout_s=10)
    assert out.status == "error"


def test_params_hash_is_order_independent():
    a = params_hash("series-odds", {"p_game": 0.6, "best_of": 7})
    b = params_hash("series-odds", {"best_of": 7, "p_game": 0.6})
    assert a == b


def test_params_hash_is_slug_sensitive():
    a = params_hash("series-odds", {"p_game": 0.6})
    b = params_hash("other-entry", {"p_game": 0.6})
    assert a != b


def test_packaged_example_matches_a_fresh_run():  # N-11(d): pin the example file to run()
    payload = json.loads(
        files("saiem_api").joinpath("lab/series_odds.example.json").read_text(encoding="utf-8")
    )
    fresh = run(Params(**payload["params"]))
    assert fresh.model_dump(mode="json") == payload["result"]
