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
    assert any("3100/" in ln for ln in lines)
    for forbidden in ("caddy reload", "systemctl", "vercel", "dns", "ufw", "docker compose up", "-X POST"):
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
