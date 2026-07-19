---
layout: home

hero:
  name: Base Tests
  text: Plans hub cho cả team
  tagline: YAML cho máy · MD cho người · Docs giữ rule · FE chạy Playwright
  image:
    src: /landscape/assets/intro-hero-base-tests.png
    alt: Plans hub
  actions:
    - theme: brand
      text: Đọc giới thiệu
      link: /landscape/INTRO-base-tests
    - theme: alt
      text: Scenario pilot
      link: /scenarios/CMP-01-auth/SC-LOGIN
    - theme: alt
      text: Cases Auth
      link: /cases/W-AD-AUTH-001/

features:
  - title: Member-first
    details: Scenario và case render tiếng Việt — Given/When/Then, bảng ví dụ, mermaid. Review nhẹ, ít tranh luận.
    link: /landscape/INTRO-base-tests
  - title: Docs-first
    details: Rule sống ở base-docs. Lỗ spec → handoff /update-spec. Hub chỉ bổ sung khi thiếu bao phủ.
    link: /landscape/INTRO-base-tests#cấu-trúc-từng-tầng--tầng-đó-có-gì
  - title: Sẵn sàng gen E2E
    details: TC YAML đủ route · testIds · coverage · a11y → pnpm testcase:gen trên FE (Playwright + axe).
    link: /cases/W-AD-AUTH-001/
  - title: Pyramid nhẹ
    details: Không YAML mọi tầng. CAP/SC = MD · TC/suites = YAML. Chi tiết từng tầng trong Intro.
    link: /landscape/INTRO-base-tests#cấu-trúc-từng-tầng--tầng-đó-có-gì
---

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

## Agent guidance

- Plans lane tại repo này dùng `/platform-ai`, `/platform-base`, `/testcase`, `/grill-testcase`.
- Author trong `landscape/`, `contexts/`, `targets/`, `scenarios/`, `cases/`, `suites/`.
- Dùng vocab tại `catalog/lexicon/testcase-taxonomy.en.txt`; render bằng `testkit cases:render` (sau `testkit init`).
- Design (`/spec`, grill-docs) thuộc **base-docs**.
- Playwright (`/test`, `/grill-test`, `testcase:gen`) thuộc repo **FE**.

## Commands

```bash
# After testkit init (scripts sync into package.json):
pnpm check:plans
pnpm check:coverage
pnpm cases:render   # or: pnpm docs:render
# FE:
pnpm testcase:gen --id TC-LOGIN-VALID
```

## Pilot (Auth)

- [SC-LOGIN](scenarios/CMP-01-auth/SC-LOGIN.md)
- `cases/W-AD-AUTH-001/TC-*.yaml`
- `suites/smoke.yaml` · `a11y.yaml` · `regression-auth.yaml`

Handbook: [`docs/TESTS-HUB.md`](docs/TESTS-HUB.md) · [`docs/HUBS.md`](docs/HUBS.md)
