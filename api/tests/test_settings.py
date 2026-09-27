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
