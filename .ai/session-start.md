# Session Start Checklist

Run before any significant edit:

1. `git status` — clean?
2. `git fetch origin && git log HEAD..@{u} --oneline` — empty? If not, `git pull --rebase --autostash`.
3. Read `docs/STATUS.md` and the latest entry in `docs/SESSION_HANDOFF.md`.
4. If the prior session ended on a different machine, trust the handoff — not conversational memory.

If you are about to edit a file that someone else (or you, on another machine) touched within the last 48h and the change has not been reconciled, pause.
