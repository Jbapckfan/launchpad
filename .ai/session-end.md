# Session End Checklist

Before exiting:

1. Commit work-in-progress or stash it explicitly. Never leave a "shadow" diff that the next session can't discover.
2. `git push` (or document why not in `docs/STATUS.md`).
3. Update `docs/STATUS.md` "Next-session hint" if you're stopping mid-task.
4. `llm-session-end` runs automatically via launcher trap; no manual action needed unless you launched the tool without `ai-<tool>`.
