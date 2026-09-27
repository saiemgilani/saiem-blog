import json
from importlib.resources import files

import pytest
from fastapi.testclient import TestClient
from pydantic import ValidationError

from saiem_api.app import create_app
from saiem_api.projects import seed
from tests.test_views import SECRET, auth

ROWS = [
    {
        "id": "b-proj",
        "title": "B",
        "summary": "second",
        "url": "https://b.example",
        "repo": "o/b",
        "tags": ["x"],
        "sort": 20,
    },
    {"id": "a-proj", "title": "A", "url": "https://a.example", "sort": 10},
    {"id": "hidden", "title": "Hidden", "published": False},
]


@pytest.fixture
def client(pool):
    return TestClient(create_app(pool=pool, api_secret=SECRET))


def test_seed_is_an_upsert_and_list_is_published_sorted(client, pool):
    assert seed(pool, ROWS) == 3
    assert seed(pool, [{**ROWS[1], "title": "A2"}]) == 1  # same id → update, not a duplicate
    r = client.get("/v1/projects", headers=auth())
    assert r.status_code == 200
    assert r.json() == {
        "projects": [
            {
                "id": "a-proj",
                "title": "A2",
                "summary": "",
                "url": "https://a.example/",
                "repo": None,
                "tags": [],
            },
            {
                "id": "b-proj",
                "title": "B",
                "summary": "second",
                "url": "https://b.example/",
                "repo": "o/b",
                "tags": ["x"],
            },
        ]
    }


def test_seed_validates_every_row_before_writing(client, pool):
    with pytest.raises(ValidationError):
        seed(pool, [ROWS[0], {"id": "Bad Id", "title": "x"}])
    assert client.get("/v1/projects", headers=auth()).json() == {"projects": []}


def test_the_committed_seed_file_is_valid(pool):
    rows = json.loads(files("saiem_api").joinpath("seed/projects.json").read_text(encoding="utf-8"))
    assert seed(pool, rows) == len(rows) >= 1
