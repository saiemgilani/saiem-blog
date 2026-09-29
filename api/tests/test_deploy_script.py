import os
import shutil
import subprocess
from pathlib import Path

import pytest

SCRIPT = Path(__file__).resolve().parents[2] / "deploy" / "deploy.sh"
REHEARSAL_SCRIPT = Path(__file__).resolve().parents[2] / "deploy" / "rehearse-mode-b.sh"
# Resolve the actual bash binary (don't just check it exists): a bare "bash" in
# subprocess.run's argv can resolve to the WSL launcher stub in System32 instead
# of Git Bash (Win32 CreateProcess checks system dirs before PATH), and that
# binary needs a POSIX-slash path or its own argv parser strips the native
# backslashes.
BASH = shutil.which("bash")


@pytest.mark.skipif(BASH is None, reason="needs bash")
def test_dry_run_checks_docker_tcp_before_touching_anything():
    out = subprocess.run(
        [BASH, SCRIPT.as_posix(), "--dry-run"], capture_output=True, text=True, check=True
    ).stdout
    lines = [ln for ln in out.splitlines() if ln.startswith("DRY:")]
    assert len(lines) == 4
    assert "2375|2376" in lines[0], "the Docker-TCP guard must be the first remote command"
    assert "docker compose pull" in lines[2] and "up -d" in lines[2]
    assert "/health" in lines[3]
    assert "tcp://" not in out and "-H " not in out, "never talk to a TCP Docker daemon"


@pytest.mark.skipif(BASH is None, reason="needs bash")
@pytest.mark.parametrize(("tag", "ref"), [("latest", "origin/main"), ("abc1234", "abc1234")])
def test_deploy_config_comes_from_the_same_revision_as_the_images(tag, ref):
    out = subprocess.run(
        [BASH, SCRIPT.as_posix(), "--dry-run"],
        capture_output=True,
        text=True,
        check=True,
        env={**os.environ, "TAG": tag},
    ).stdout
    lines = [ln for ln in out.splitlines() if ln.startswith("DRY:")]
    assert f"git checkout -q {ref} -- deploy" in lines[1]
    assert f"TAG={tag} docker compose pull" in lines[2]


@pytest.mark.skipif(BASH is None, reason="needs bash")
@pytest.mark.parametrize(
    "override",
    [{"TAG": "x; rm -rf /"}, {"DEPLOY_DIR": "/opt/a b"}, {"DEPLOY_HOST": "-oProxyCommand=x"}],
)
def test_unsafe_values_are_refused_before_any_remote_command(override):
    r = subprocess.run(
        [BASH, SCRIPT.as_posix(), "--dry-run"],
        capture_output=True,
        text=True,
        env={**os.environ, **override},
    )
    assert r.returncode == 2
    assert "DRY:" not in r.stdout


@pytest.mark.skipif(BASH is None, reason="needs bash")
def test_rehearsal_dry_run_changes_nothing_public():
    out = subprocess.run(
        [BASH, REHEARSAL_SCRIPT.as_posix(), "--dry-run"],
        capture_output=True,
        text=True,
        check=True,
    ).stdout
    lines = [ln for ln in out.splitlines() if ln.startswith("DRY:")]
    assert "2375|2376" in lines[0], "the Docker-TCP guard must be the first remote command"
    assert any("caddy validate" in ln for ln in lines)
    assert any("mktemp -d" in ln for ln in lines), "concurrent runs must not share fixed /tmp paths"
    assert any("3100/" in ln for ln in lines)
    assert "grep -E" in lines[-1] and "deploy/.env" in lines[-1]
    assert 'echo "$v"' not in lines[-1], "the env check must never print a secret's resolved value"
    for forbidden in (
        "caddy reload",
        "systemctl",
        "vercel",
        "dns",
        "ufw",
        "docker compose up",
        "-X POST",
        "sed -i",
    ):
        assert not any(forbidden in ln for ln in lines), f"rehearsal must never do {forbidden!r}"


@pytest.mark.skipif(BASH is None, reason="needs bash")
def test_rehearsal_unsafe_host_is_refused_before_any_remote_command():
    r = subprocess.run(
        [BASH, REHEARSAL_SCRIPT.as_posix(), "--dry-run"],
        capture_output=True,
        text=True,
        env={**os.environ, "DEPLOY_HOST": "-oProxyCommand=x"},
    )
    assert r.returncode == 2
    assert "DRY:" not in r.stdout


def _msys_path(p: Path) -> str:
    # deploy/rehearse-mode-b.sh's DEPLOY_DIR guard requires a leading "/" (it's meant for a
    # remote POSIX path). On Windows, Git Bash understands "/c/Users/..." for a native path,
    # so convert "C:\..." accordingly; on Linux/macOS tmp_path is already a POSIX path with no
    # drive, so pass it through unchanged (resolve().as_posix() has no ":" to split on there).
    p = p.resolve()
    if p.drive:
        drive, rest = p.as_posix().split(":", 1)
        return f"/{drive.lower()}{rest}"
    return p.as_posix()


@pytest.mark.skipif(BASH is None, reason="needs bash")
def test_rehearsal_secret_check_rejects_empty_quoted_values(tmp_path):
    # A quoted-but-empty assignment (AUTH_SECRET="") must read as MISSING, not present --
    # a bare `grep NAME=` would wrongly match it (CodeRabbit). Extract the real (e) command
    # from the dry-run output (with DEPLOY_DIR pointed at a fixture dir) and run it for real.
    (tmp_path / "deploy").mkdir()
    (tmp_path / "deploy" / ".env").write_text(
        'AUTH_SECRET=""\n'
        "AUTH_GITHUB_ID='abc123'\n"
        "AUTH_GITHUB_SECRET=realvalue\n"
        "AI_GATEWAY_API_KEY=\n"
        'SAIEM_API_SECRET="realvalue2"\n'
    )
    out = subprocess.run(
        [BASH, REHEARSAL_SCRIPT.as_posix(), "--dry-run"],
        capture_output=True,
        text=True,
        check=True,
        env={**os.environ, "DEPLOY_DIR": _msys_path(tmp_path)},
    ).stdout
    lines = [ln for ln in out.splitlines() if ln.startswith("DRY:")]
    prefix = "DRY: ssh sdv-data "
    command = lines[-1][len(prefix) :]
    r = subprocess.run([BASH, "-c", command], capture_output=True, text=True)
    assert r.stdout.splitlines() == [
        "AUTH_SECRET MISSING",
        "AUTH_GITHUB_ID present",
        "AUTH_GITHUB_SECRET present",
        "AI_GATEWAY_API_KEY MISSING",
        "SAIEM_API_SECRET present",
    ]
    assert r.returncode == 1
    assert "realvalue" not in r.stdout and "abc123" not in r.stdout
