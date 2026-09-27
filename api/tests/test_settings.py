import pytest

from saiem_api.__main__ import main
from saiem_api.settings import Settings


def test_from_env_reads_the_documented_names():
    s = Settings.from_env(
        {"DATABASE_URL": "postgresql://x", "SAIEM_API_SECRET": "k" * 40, "OWNER_GITHUB_ID": "1"}
    )
    assert s == Settings(
        database_url="postgresql://x", api_secret="k" * 40, owner_github_id="1", allow_dev_secret=False
    )
    assert Settings.from_env({}) == Settings(
        database_url=None, api_secret="", owner_github_id=None, allow_dev_secret=False
    )


def test_lab_settings_have_defaults_and_parse_from_env():
    defaults = Settings.from_env({})
    assert defaults.lab_daily_quota == 5
    assert defaults.spend_units_cap == 2000
    assert defaults.lab_live_runs is True
    assert defaults.lab_run_timeout_s == 30
    assert defaults.run_retention_days == 90

    s = Settings.from_env(
        {
            "LAB_DAILY_QUOTA": "10",
            "SPEND_UNITS_CAP": "500",
            "LAB_RUN_TIMEOUT_S": "45",
            "RUN_RETENTION_DAYS": "30",
        }
    )
    assert s.lab_daily_quota == 10
    assert s.spend_units_cap == 500
    assert s.lab_run_timeout_s == 45
    assert s.run_retention_days == 30


@pytest.mark.parametrize("value,expected", [("off", False), ("on", True), ("1", True), ("", True)])
def test_lab_live_runs_is_off_only_for_the_exact_string_off(value, expected):
    assert Settings.from_env({"LAB_LIVE_RUNS": value}).lab_live_runs is expected


@pytest.mark.parametrize("secret", ["", "short", "x" * 31])
def test_weak_secret_is_a_problem_unless_dev_is_allowed(secret):
    assert Settings.from_env({"SAIEM_API_SECRET": secret}).secret_problem()
    assert (
        Settings.from_env({"SAIEM_API_SECRET": secret, "SAIEM_ALLOW_DEV_SECRET": "1"}).secret_problem()
        is None
    )
    assert Settings.from_env({"SAIEM_API_SECRET": "x" * 32}).secret_problem() is None


def test_serve_refuses_a_weak_secret_before_binding(monkeypatch):
    monkeypatch.delenv("SAIEM_API_SECRET", raising=False)
    monkeypatch.delenv("SAIEM_ALLOW_DEV_SECRET", raising=False)
    bound = []
    monkeypatch.setattr("uvicorn.run", lambda *a, **k: bound.append(1))
    with pytest.raises(SystemExit) as e:
        main(["serve"])
    assert e.value.code == 2 and bound == []
