"""Process configuration from the environment (spec §6 env vars). Plain dataclass — no library."""

import os
from collections.abc import Mapping
from dataclasses import dataclass

MIN_SECRET_LEN = 32


@dataclass(frozen=True)
class Settings:
    database_url: str | None
    api_secret: str
    owner_github_id: str | None
    allow_dev_secret: bool

    @classmethod
    def from_env(cls, env: Mapping[str, str] = os.environ) -> "Settings":
        return cls(
            database_url=env.get("DATABASE_URL") or None,
            api_secret=env.get("SAIEM_API_SECRET", ""),
            owner_github_id=env.get("OWNER_GITHUB_ID") or None,
            allow_dev_secret=env.get("SAIEM_ALLOW_DEV_SECRET") == "1",
        )

    def secret_problem(self) -> str | None:
        if self.allow_dev_secret or len(self.api_secret) >= MIN_SECRET_LEN:
            return None
        return (
            f"SAIEM_API_SECRET must be at least {MIN_SECRET_LEN} characters "
            "(SAIEM_ALLOW_DEV_SECRET=1 is for deploy/compose.dev.yml only)"
        )
