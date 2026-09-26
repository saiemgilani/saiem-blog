"""Compose hardening rules (spec §3). Docker-published ports bypass ufw, so every
published port must bind loopback; only Caddy on the host listens publicly."""


def _port_ok(p: object) -> bool:
    if isinstance(p, dict):
        return p.get("host_ip") == "127.0.0.1"
    return str(p).startswith("127.0.0.1:")


def violations(compose: dict) -> list[str]:
    out: list[str] = []
    for name, s in (compose.get("services") or {}).items():
        for p in s.get("ports", []):
            if not _port_ok(p):
                out.append(f"{name}: port {p!r} does not bind 127.0.0.1".replace('"', "'"))
        if s.get("network_mode") == "host":
            out.append(f"{name}: network_mode host")
        if s.get("privileged"):
            out.append(f"{name}: privileged")
        vols = [v if isinstance(v, str) else v.get("source", "") for v in s.get("volumes", [])]
        if any("docker.sock" in v for v in vols):
            out.append(f"{name}: mounts the Docker socket")
    return out
