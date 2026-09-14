"""Validate bootstrap module Terraform configuration."""

from __future__ import annotations

import subprocess
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent


def test_terraform_fmt_check() -> None:
    result = subprocess.run(
        ["terraform", "fmt", "-check", "-recursive"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    assert result.returncode == 0, f"terraform fmt failed:\n{result.stdout}\n{result.stderr}"


def test_terraform_validate() -> None:
    init = subprocess.run(
        ["terraform", "init", "-backend=false"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    assert init.returncode == 0, f"terraform init failed:\n{init.stderr}"

    validate = subprocess.run(
        ["terraform", "validate"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=False,
    )
    assert validate.returncode == 0, f"terraform validate failed:\n{validate.stderr}"
