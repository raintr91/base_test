---
name: grill-testcase
description: >-
  /grill-testcase — audit E2E plan YAML/MD on base-tests (not Playwright code).
disable-model-invocation: true
---

# /grill-testcase — Plans audit

After `/testcase`. **Do not** edit `tests/e2e/` here — that is FE `/grill-test`.

## Phân loại finding

| Loại | Việc |
|------|------|
| `coverage_gap` | Docs đã rõ, thiếu TC/facet → được thêm/sửa YAML trên hub |
| `spec_hole` / `rule_unclear` | **STOP** → copy `templates/SPEC-HOLE-HANDOFF.example.md` sang chat **base-docs** + `/update-spec`; cấm vá TC |

Không sync ngược: sửa TC rồi bắt docs theo.

## Checks

- [ ] `coverage[]` dùng enum lexicon (không dùng `type`)
- [ ] `refs.capability` / feature / scenario / screen / target resolve; `refs.rule` nếu có → tồn tại trên docs
- [ ] `summary` hoặc `story` (VI) đủ member đọc; MD render tươi
- [ ] Bridge FE đủ: `genType`, `route`, `testIds` (và `a11y` nếu coverage có accessibility)
- [ ] Suites + `tests-index.json` khớp ids
- [ ] `pnpm check:plans` · `pnpm cases:render` OK
- [ ] Không edit design bundle tại lane này

## Handoff

FE `/test` → `testcase:gen --id …` → `/grill-test` (± axe).
