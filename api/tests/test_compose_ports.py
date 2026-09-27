from pathlib import Path

import yaml

from tests.compose_policy import violations

COMPOSE = Path(__file__).resolve().parents[2] / "deploy" / "compose.yml"
COMPOSE_DEV = COMPOSE.with_name("compose.dev.yml")


def svc(**kw):
    return {"services": {"x": {"image": "i", **kw}}}


def test_loopback_short_syntax_is_fine():
    assert violations(svc(ports=["127.0.0.1:3100:3000"])) == []


def test_short_syntax_without_host_ip_is_rejected():
    assert violations(svc(ports=["3100:3000"])) == ["x: port '3100:3000' does not bind 127.0.0.1"]
    assert violations(svc(ports=["3000"])) == ["x: port '3000' does not bind 127.0.0.1"]
    assert violations(svc(ports=["0.0.0.0:3100:3000"])) == [
        "x: port '0.0.0.0:3100:3000' does not bind 127.0.0.1"
    ]


def test_long_syntax_needs_host_ip():
    assert violations(svc(ports=[{"target": 3000, "published": 3100, "host_ip": "127.0.0.1"}])) == []
    assert violations(svc(ports=[{"target": 3000, "published": 3100}])) == [
        "x: port {'target': 3000, 'published': 3100} does not bind 127.0.0.1"
    ]


def test_host_network_privileged_and_docker_socket_are_rejected():
    assert violations(svc(network_mode="host")) == ["x: network_mode host"]
    assert violations(svc(privileged=True)) == ["x: privileged"]
    assert violations(svc(volumes=["/var/run/docker.sock:/var/run/docker.sock"])) == [
        "x: mounts the Docker socket"
    ]


def test_the_real_compose_file_passes():
    compose = yaml.safe_load(COMPOSE.read_text())
    assert set(compose["services"]) == {"web", "api"}
    assert violations(compose) == []


def test_the_dev_override_passes_too():
    dev = yaml.safe_load(COMPOSE_DEV.read_text())
    assert set(dev["services"]) == {"db", "api", "web"}
    assert violations(dev) == []
    assert dev["services"]["db"]["ports"] == ["127.0.0.1:5433:5432"]
