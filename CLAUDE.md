@AGENTS.md

## Model routing policy

Two roles in this repo, mapped to two Claude tiers:

- **Opus (main agent)** — planning, delegation, code review/audit, design-doc reconciliation, evaluating tradeoffs. Opus produces the spec, dispatches Sonnet to implement it, then reads the diff and either accepts or sends Sonnet back with corrections. Opus does not write production code directly except for trivial one-line corrections during audit.
- **Sonnet (delegated via the Agent tool with `model: "sonnet"`)** — code writing: new components, refactors, file edits, fixing lint / typecheck / build errors. Sonnet writes; Opus audits.

How to apply:
- Coding tasks → Opus writes a self-contained spec (paths, behaviour, constraints, what *not* to touch) and dispatches Sonnet. Multiple independent file edits in the same phase can be parallel Sonnet dispatches.
- Audit pass → Opus reads back the diff (git status / git diff or direct file reads), checks against the spec, and re-dispatches Sonnet on any gaps.
- Lint / typecheck / build failures → Sonnet fixes under Opus' direction, not Opus directly.
- Trivial exceptions Opus may handle without delegation: a single-line typo, opening a file to read, running a shell command for evidence, editing tracking files (PLAN.md, CLAUDE.md itself).

Autonomous mode: when the user says "don't come back until evals pass" or similar, Opus loops Sonnet on each failing check (lint, typecheck, build) until all are green.
