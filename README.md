# base-tests

Hub **kế hoạch kiểm thử** (R3) — YAML cho máy, MD cho người.

**Site docs (VitePress):**

```bash
pnpm docs:dev      # render cases + http://localhost:5173
pnpm docs:build
pnpm docs:preview
```

**Bắt đầu (member):** [`landscape/INTRO-base-tests.md`](landscape/INTRO-base-tests.md) · Tracking: [`landscape/NOTE-testing-architecture.md`](landscape/NOTE-testing-architecture.md)

## Scope

| Trong hub | Không ở đây |
|-----------|-------------|
| `landscape/` · `scenarios/` · `cases/` · `suites/` · `catalog/` | Unit → code |
| MD member (`cases:render`, tiếng Việt) | Playwright → **FE** |
| `coverage` trên TC (không `type`) | Rule / acceptance → **base-docs** |

## Lanes

| Command | Repo |
|---------|------|
| `/testcase` · `/grill-testcase` | **this** |
| `/spec` · grill-docs · `/update-spec` | base-docs |
| `/test` · `testcase:gen` | FE |

## Commands

```bash
pnpm check:plans
pnpm check:coverage
pnpm cases:render   # = docs:render
pnpm check:pilot
# FE:
pnpm testcase:gen --id TC-LOGIN-VALID
```

## Pilot (Auth)

- [SC-LOGIN](scenarios/CMP-01-auth/SC-LOGIN.md)
- `cases/W-AD-AUTH-001/TC-*.yaml`
- `suites/smoke.yaml` · `a11y.yaml` · `regression-auth.yaml`

Handbook: [`docs/TESTS-HUB.md`](docs/TESTS-HUB.md) · [`docs/HUBS.md`](docs/HUBS.md)
