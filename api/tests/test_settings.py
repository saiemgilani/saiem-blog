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
    assert defaults.lab_max_concurrent_runs == 2  # SF-2 (R-P5-14)

    s = Settings.from_env(
        {
            "LAB_DAILY_QUOTA": "10",
            "SPEND_UNITS_CAP": "500",
            "LAB_RUN_TIMEOUT_S": "45",
            "RUN_RETENTION_DAYS": "30",
            "LAB_MAX_CONCURRENT_RUNS": "4",
        }
    )
    assert s.lab_daily_quota == 10
    assert s.spend_units_cap == 500
    assert s.lab_run_timeout_s == 45
    assert s.run_retention_days == 30
    assert s.lab_max_concurrent_runs == 4


@pytest.mark.parametrize(
    "name",
    [
        "LAB_DAILY_QUOTA",
        "SPEND_UNITS_CAP",
        "LAB_RUN_TIMEOUT_S",
        "RUN_RETENTION_DAYS",
        "LAB_MAX_CONCURRENT_RUNS",
    ],
)
def test_int_lab_settings_fall_back_to_the_default_when_set_but_empty(name):  # N-7
    # compose's `X: ${X:-}` idiom yields an empty string, not an unset var; `int("")` would crash.
    defaults = Settings.from_env({})
    assert getattr(Settings.from_env({name: ""}), name.lower()) == getattr(defaults, name.lower())


@pytest.mark.parametrize("value", ["0", "-3"])
def test_capacity_settings_clamp_non_positive_values_to_one(value):
    s = Settings.from_env({"LAB_MAX_CONCURRENT_RUNS": value, "LAB_DAILY_QUOTA": value})
    assert s.lab_max_concurrent_runs == 1
    assert s.lab_daily_quota == 1


@pytest.mark.parametrize(
    "value,expected",
    [
        ("off", False),
        ("OFF", False),
        (" off", False),
        ("false", False),
        ("False", False),
        ("0", False),
        ("no", False),
        ("NO", False),
        ("on", True),
        ("1", True),
        ("true", True),
        ("", True),
    ],
)
def test_lab_live_runs_is_paused_for_any_spelling_of_off_false_0_no(value, expected):  # R-P5-7
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
