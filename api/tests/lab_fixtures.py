"""Hostile lab runners for test_runner.py / test_lab_routes.py: sleepy sleeps past any sane
timeout, hungry allocates past the RLIMIT_AS memory cap, angry always raises, big returns a
result larger than an OS pipe buffer (SF-2 regression). Registered under
SAIEM_LAB_EXTRA_MODULES=tests.lab_fixtures (see saiem_api.lab.load_runner and the
extra_lab_modules fixture in conftest.py) rather than by mutating saiem_api.lab.RUNNERS directly
-- a spawned child imports saiem_api.lab fresh and never sees an in-process monkeypatch of that
dict."""

import time

from pydantic import BaseModel


class _EmptyParams(BaseModel):
    pass


class _EmptyResult(BaseModel):
    pass


class _BigResult(BaseModel):
    values: list[float]


def _sleepy(params: _EmptyParams) -> _EmptyResult:
    time.sleep(60)
    return _EmptyResult()


def _hungry(params: _EmptyParams) -> _EmptyResult:
    bytearray(2 * 1024 * 1024 * 1024)  # 2 GiB — trips RLIMIT_AS before this returns
    return _EmptyResult()


def _angry(params: _EmptyParams) -> _EmptyResult:
    raise ValueError("angry runner always raises")


def _big(params: _EmptyParams) -> _BigResult:
    return _BigResult(values=[0.5] * 200_000)  # well past any OS pipe buffer (64 KiB on Linux)


RUNNERS = {
    "sleepy": {"Params": _EmptyParams, "Result": _EmptyResult, "run": _sleepy, "cost_units": 1},
    "hungry": {"Params": _EmptyParams, "Result": _EmptyResult, "run": _hungry, "cost_units": 1},
    "angry": {"Params": _EmptyParams, "Result": _EmptyResult, "run": _angry, "cost_units": 1},
    "big": {"Params": _EmptyParams, "Result": _BigResult, "run": _big, "cost_units": 1},
}
