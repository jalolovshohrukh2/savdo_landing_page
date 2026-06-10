---
name: no-claude-coauthor
description: Never add Claude as a Co-Authored-By trailer on git commits in this project — the user wants commits attributed only to them.
metadata:
  type: feedback
---

When creating git commits in this project, do NOT append the `Co-Authored-By: Claude ...` trailer that the default workflow adds. Use `git commit -m "<message>"` with just the message body — no trailer, no HEREDOC with the Anthropic line.

**Why:** User explicitly asked to "keep claude out of co author" — they want git history to read as their own work.

**How to apply:** Whenever committing in this repo (Savdo Landing Page), omit the trailer step. If a skill or default flow tries to inject it, strip it before running `git commit`.
