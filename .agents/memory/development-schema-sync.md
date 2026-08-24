---
name: Development schema sync
description: Development preview failures caused by database schema drift
---

New database-backed features must have their Drizzle schema applied to the development database before preview validation.

**Why:** The server can compile and start successfully while a missing table or column still causes a route-level 500 on first use.

**How to apply:** After schema changes, run the development-only schema push, restart the API workflow, and exercise the affected route before declaring the feature complete. Production schema changes belong to the publish flow.