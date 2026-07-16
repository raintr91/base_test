# CTX-e2e-boundary

E2E hub **in scope:** UI acceptance / scenario plans for client targets (`CTR-*`).

**Explicitly out of scope here** (live in **code** repos):

| Kind | Where |
|------|--------|
| Unit (Vitest / PHPUnit / …) | FE / BE code |
| API unit / deep service tests | BE / integration code |
| Playwright **scripts** / Page Objects | FE (`tests/e2e/`) — gen **output**, not SSOT plans |
| OpenAPI / Swagger serve | **Code** repo (design `API-*` stays in docs hub) |

Boundary: plans = this repo · automation runners = FE · deep API tests = BE.
