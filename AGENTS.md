# AGENTS.md

> Shared instruction surface for Codex, Claude Code, and Gemini CLI.
> `CLAUDE.md` and `GEMINI.md` symlink to this file — edit only here.
>
> Fabric: `~/ops` on Mac Mini (`TARS-mini`, hub).

## Before you touch anything

1. **Read** `docs/STATUS.md` — what's in flight, known hazards.
2. **Read** the last entry in `docs/SESSION_HANDOFF.md` — what the prior session touched.
3. If working tree is dirty AND remote is ahead: stop and reconcile before editing.

## Session lifecycle

- **Start:** `llm-session-start --tool=<name> --model=<name>` (usually run automatically by `ai-<tool>`).
- **End:**   `llm-session-end` (runs via trap from `llm-launch`).

## Cross-machine

Mac Mini (`TARS-mini`) is the authoritative execution host. MacBook Pro is a remote cockpit over SSH. Never assume conversational memory across machines — assume only what's committed to the remote.

## Project context

<!-- Fill in 2-3 sentences: what this is, who it serves, current milestone. -->

## Entry points

<!-- e.g., `pnpm dev`, `npm test`, deploy pipeline -->

## Decisions log

See `docs/DECISIONS.md`.

## Conventions

- Commit messages: imperative mood, lowercase start, no period.
- Never commit `.env`, credentials, large binaries.
- No emojis unless the operator asks.
