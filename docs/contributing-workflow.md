# Contributing Workflow — One Deliverable at a Time

This repo is built incrementally so you can **review one focused unit per PR**, not whole sprint days at once.

## What is a deliverable?

One deliverable = **implementation for a single concern** + **one matching concept doc** (Why / Terraform or UI / Interview Q&A).

| Track | Includes | Typical size |
|---|---|---|
| Foundation Terraform | Focused `.tf` changes + one [concepts/](concepts/) page | ~3–8 files; read one concept page |
| Ticketing UI | One route/screen (or one component group) + brief design/ADR note if needed | One screen diff |
| Reference-only | Rare (e.g. one glossary row). Prefer pairing with code. | One section |

**Not a deliverable:** multiple modules, full doc tree restores, bootstrap + backup + workflows in one PR.

## Flow

1. Propose the next deliverable (name + Day number).
2. Implement code (or UI) for that concern only.
3. Update the **one** linked concept doc so Terraform snippets match the repo.
4. Run the deliverable verification checklist (3–6 commands).
5. Open **one PR**, then **stop** until the deliverable is merged or approved.

Do not start the next deliverable in the same PR unless you explicitly ask to continue.

## Branches and PR titles

- **Branch:** `cursor/dayN-<short-slug>-a06e` (one deliverable per branch)
- **Title:** `Deliverable: <short name> (Day N)`

Example: `Deliverable: State bucket bootstrap (Day 1)` on `cursor/day1-state-bucket-a06e`.

## PR description template

```markdown
## Deliverable
<one sentence>

## Files to review (read in this order)
1. docs/concepts/<name>.md
2. <terraform or frontend paths>

## Verify
- [ ] command 1
- [ ] command 2

## Deferred to next deliverable
- item 1
- item 2
```

## Verification

Each deliverable carries its own short checklist in the PR. Sprint **days** may span **several deliverables** and several PRs. See [sprint-plan.md](sprint-plan.md) for the Day 1 queue example.

## Agent / automation

- Max **one deliverable** per agent turn unless you say **continue**.
- Concept doc **Terraform** sections must match merged code — no placeholder snippets after the deliverable ships.
