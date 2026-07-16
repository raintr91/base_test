---
name: testcase
description: >-
  /testcase — author E2E plan YAML/MD on base-tests (SC/TC/suites). Not Playwright.
disable-model-invocation: true
---

# /testcase — Plans hub (R3)

**Repo:** `base-tests` only. Design → `base-docs` `/spec`. Playwright → FE `/test`.

**Vocab:** `catalog/lexicon/testcase-taxonomy.en.txt` · **Locale:** `catalog/locale.yaml`  
**Template:** `templates/TC.example.yaml` · SC/CAP/DT + `SPEC-HOLE-HANDOFF.example.md`  
**Tracking:** `landscape/NOTE-testing-architecture.md`

## Docs-first

1. Rule / acceptance SSOT = **base-docs** only (`refs.rule` cite id — không copy nội dung rule).
2. Scope hở / rule mơ hồ → **dừng**, handoff docs (`/update-spec` · grill-docs). Không “vá” bằng TC.
3. Chỉ author/sửa TC khi docs đã rõ và thiếu **bao phủ** (`coverage`).

## In

- `landscape/CAP-*.md` (capability bắt buộc)
- `scenarios/CMP-*/SC-*.md` (member: GWT + examples)
- `cases/W-*/TC-*.yaml` (máy: đủ gen Playwright)
- `suites/*.yaml` · `registries/tests-index.json`
- `pnpm cases:render` · `pnpm check:plans`

## Out

- Design bundles / rules → docs hub
- `tests/e2e/**` / `testcase:gen` → FE

## Workflow

1. Đọc acceptance / `RUL-*` trên **base-docs** (ids).
2. `SC-*`: Given/When/Then + bảng Example + `coverage_plan` (VI).
3. `TC-*` YAML: `coverage[]` (không `type`), `summary`/`story` VI, `refs` đầy đủ, bridge FE.
4. Suites = pack ids.
5. Index + `pnpm check:plans` + `pnpm cases:render`.
6. Handoff `/grill-testcase` rồi FE `testcase:gen`.

## YAML tối thiểu (gen E2E)

`id` · `coverage` · `refs` (capability, feature/component, rule?, scenario, screen, target) · steps · expected · `feature` · `genType: e2e` · `route` · `testIds` · optional `a11y`

## Done

- Docs-first ok · YAML đủ gen · MD member đọc được · grill rồi FE.
