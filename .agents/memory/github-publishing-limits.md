---
name: GitHub publishing limits
description: Rate and firewall behavior to account for when publishing a large workspace snapshot to GitHub.
---

For large repository snapshots, avoid bursty per-file GitHub API writes. Replit’s connector proxy can enforce a lower per-second limit and may temporarily return Cloudflare 403 responses after sustained writes; a paced upload or authenticated Git transport is more reliable.

**Why:** A large snapshot can partially upload before the proxy starts rejecting requests, leaving dangling blobs or an incomplete branch update.

**How to apply:** Prefer a single Git commit/push when the repository’s history permits it; otherwise pace API writes, retry rate-limit responses, and verify the remote branch SHA and file count before reporting completion.