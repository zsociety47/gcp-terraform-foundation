"""Bootstrap a new GCP project and Terraform remote state bucket."""

from __future__ import annotations

import subprocess
import sys

import click
from rich.console import Console

console = Console()


def _run(cmd: list[str], *, dry_run: bool) -> None:
    console.print(f"[bold blue]$ {' '.join(cmd)}[/bold blue]")
    if dry_run:
        return
    result = subprocess.run(cmd, check=False)
    if result.returncode != 0:
        raise click.ClickException(f"Command failed with exit code {result.returncode}")


@click.command()
@click.option("--project-id", required=True, help="GCP project ID to bootstrap.")
@click.option("--region", default="us-central1", show_default=True, help="Primary GCP region.")
@click.option("--environment", default="dev", show_default=True, type=click.Choice(["dev", "staging", "prod"]))
@click.option("--dry-run", is_flag=True, help="Print commands without executing.")
def main(project_id: str, region: str, environment: str, dry_run: bool) -> None:
    """Bootstrap Terraform remote state for a new GCP project."""
    console.print(f"[green]Bootstrapping project[/green] {project_id} ({environment})")

    tfvars = f'environments/{environment}/terraform.tfvars'
    _run(
        [
            "terraform",
            "init",
            f"-backend-config=bucket={project_id}-tfstate-{environment}",
        ],
        dry_run=dry_run,
    )
    _run(
        [
            "terraform",
            "apply",
            "-var-file",
            tfvars,
            "-var",
            f"project_id={project_id}",
            "-var",
            f"region={region}",
            "-var",
            f"environment={environment}",
            "-auto-approve",
        ],
        dry_run=dry_run,
    )

    console.print("[green]Bootstrap complete.[/green]")
    console.print(
        "Next: copy backend.tf.example → backend.tf, update bucket name, "
        "then run [bold]terraform init -migrate-state[/bold]."
    )


if __name__ == "__main__":
    try:
        main()
    except click.ClickException as exc:
        console.print(f"[red]{exc}[/red]")
        sys.exit(1)
