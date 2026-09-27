"""Hostile lab runners for test_runner.py / test_lab_routes.py: sleepy sleeps past any sane
timeout, hungry allocates past the RLIMIT_AS memory cap, angry always raises. Registered under
SAIEM_LAB_EXTRA_MODULES=tests.lab_fixtures (see saiem_api.lab.load_runner) rather than by
mutating saiem_api.lab.RUNNERS directly -- a spawned child imports saiem_api.lab fresh and never
sees an in-process monkeypatch of that dict."""

import time

import pytest
from pydantic import BaseModel


class _EmptyParams(BaseModel):
    pass


class _EmptyResult(BaseModel):
    pass


def _sleepy(params: _EmptyParams) -> _EmptyResult:
    time.sleep(60)
    return _EmptyResult()


def _hungry(params: _EmptyParams) -> _EmptyResult:
    bytearray(2 * 1024 * 1024 * 1024)  # 2 GiB — trips RLIMIT_AS before this returns
    return _EmptyResult()


def _angry(params: _EmptyParams) -> _EmptyResult:
    raise ValueError("angry runner always raises")


RUNNERS = {
    "sleepy": {"Params": _EmptyParams, "Result": _EmptyResult, "run": _sleepy, "cost_units": 1},
    "hungry": {"Params": _EmptyParams, "Result": _EmptyResult, "run": _hungry, "cost_units": 1},
    "angry": {"Params": _EmptyParams, "Result": _EmptyResult, "run": _angry, "cost_units": 1},
}


@pytest.fixture
def extra_lab_modules(monkeypatch):
    """Registers the hostile runners above for the duration of one test, by pointing the
    SAIEM_LAB_EXTRA_MODULES env var at this module -- inherited by any child that
    runner.execute() spawns during the test."""
    monkeypatch.setenv("SAIEM_LAB_EXTRA_MODULES", "tests.lab_fixtures")
