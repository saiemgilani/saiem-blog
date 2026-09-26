import shutil
import subprocess
from pathlib import Path

import pytest

SCRIPT = Path(__file__).resolve().parents[2] / "deploy" / "deploy.sh"
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
