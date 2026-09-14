"""Tear down GCP resources to control costs after dev/recording sessions."""

from __future__ import annotations

import subprocess
import sys

import click
from rich.console import Console
from rich.prompt import Confirm

console = Console()


def _run(cmd: list[str], *, dry_run: bool) -> None:
    console.print(f"[bold blue]$ {' '.join(cmd)}[/bold blue]")
    if dry_run:
        return
    result = subprocess.run(cmd, check=False)
    if result.returncode != 0:
        raise click.ClickException(f"Command failed with exit code {result.returncode}")


@click.command()
@click.option("--project-id", required=True, help="GCP project ID to tear down.")
@click.option("--environment", default="dev", show_default=True, type=click.Choice(["dev", "staging", "prod"]))
@click.option("--dry-run", is_flag=True, help="Print commands without executing.")
@click.option("--force", is_flag=True, help="Skip confirmation prompt.")
def main(project_id: str, environment: str, dry_run: bool, force: bool) -> None:
    """Destroy all Terraform-managed resources in the target project."""
    if environment == "prod" and not force:
        raise click.ClickException("Refusing to tear down prod without --force.")

    if not force and not dry_run:
        if not Confirm.ask(f"Destroy all resources in {project_id} ({environment})?"):
            console.print("[yellow]Aborted.[/yellow]")
            return

    tfvars = f"environments/{environment}/terraform.tfvars"
    _run(["terraform", "init"], dry_run=dry_run)
    _run(
        [
            "terraform",
            "destroy",
            "-var-file",
            tfvars,
            "-var",
            f"project_id={project_id}",
            "-var",
            f"environment={environment}",
            "-auto-approve",
        ],
        dry_run=dry_run,
    )
    console.print("[green]Teardown complete.[/green]")


if __name__ == "__main__":
    try:
        main()
    except click.ClickException as exc:
        console.print(f"[red]{exc}[/red]")
        sys.exit(1)
