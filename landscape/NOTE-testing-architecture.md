# NOTE — Testing architecture (base-tests) · tracking

Status: **in progress** · Decisions: **chốt** · Pilot Auth: migrated (`coverage` + a11y stub)  
Lane: Plans (`base-tests`) · Rule SSOT: **base-docs only**

---

## Quyết định đã chốt

| # | Topic | Chốt |
|---|--------|------|
| 1 | Rule SSOT | **Chỉ base-docs.** Grill thấy lỗ spec/scope → update docs **trước**. Không sửa TC rồi sync ngược docs. Tests chỉ bổ sung khi **thiếu case / thiếu bao phủ** so với docs đã rõ. |
| 2 | Gherkin | Given/When/Then **trong MD** (và optional `story` trên YAML). **Không** `.feature` / Cucumber. |
| 3 | Locale | `memberLocale: vi` mặc định (heading/template render). **Không** i18n full 2 bản. Keys/id/enum **EN**. |
| 4 | Facet | Base: dùng **`coverage`** ngay; **bỏ `type`**. (Không liên quan legacy-project / `/legacy-spec`.) |
| 5 | Capability | **`CAP-*` bắt buộc** (dự án nhỏ cũng ≥1 CAP). |

### Vai trò artifact

| Artifact | Vai trò |
|----------|---------|
| **YAML** | Contract máy: tags, coverage, refs, steps, route, testIds, a11y… → đủ **`testcase:gen` → Playwright** |
| **MD** | Member đọc đối chiếu **docs** (GWT, example table, mermaid) — không phải SSOT gen |

### Grill flow

```text
/grill-testcase
  ├─ coverage_gap (docs đã rõ) → /testcase cập nhật YAML + render MD
  ├─ spec_hole / rule_unclear → STOP → base-docs (/update-spec · grill-docs) trước
  └─ YAML đủ gen → FE testcase:gen → /grill-test (± axe)
```

---

## A — A11y (axe) trên hub

- [x] `coverage` gồm `accessibility` (lexicon)
- [x] Tag / bridge `#e2e:a11y-wcag` · field `a11y:` (tags WCAG, include/exclude)
- [x] Suite `suites/a11y.yaml`
- [x] Pilot `TC-LOGIN-A11Y` (Auth)
- [x] FE: `@axe-core/playwright` đã cài (lane FE) — hub chỉ giữ plan `a11y:`

Ref: https://www.npmjs.com/package/@axe-core/playwright

---

## B — MD member + YAML gen

- [x] YAML: `summary`/`story` (VI) + steps kỹ thuật EN keys
- [x] `coverage[]` thay `type`
- [x] `refs`: capability, feature (CMP), **rule** (docs id only), scenario, example?, screen, target
- [x] Bridge FE bắt buộc: `feature`, `genType: e2e`, `route`, `testIds`
- [x] `cases:render`: phần member VI trước; appendix kỹ thuật (`<details>`)
- [x] `catalog/locale.yaml` → `memberLocale: vi`
- [x] Template SC MD kiểu SBE (GWT + bảng Example + coverage matrix) — `SC-LOGIN`
- [x] Không `.feature`

---

## C — Cấu trúc / naming (C4-aligned)

```text
CAP-* (bắt buộc)
└── CMP-* Feature
      ├── RUL-* (SSOT base-docs only; tests chỉ cite)
      ├── SC-* Scenario (MD member)
      │     ├── EX-* / examples table
      │     └── TC-* Automation YAML → Playwright
      ├── DT-* Decision table (optional; cột automation: e2e|api|unit|none)
      └── coverage facets trên SC/TC/suites
```

**Coverage enum:** `happy` · `validation` · `boundary` · `authorization` · `state` · `exception` · `concurrency` · `audit` · `accessibility`

### Templates (copy từ `templates/`)

| Tầng | Template |
|------|----------|
| CAP | [`templates/CAP.example.md`](../templates/CAP.example.md) |
| SC (+ EX table) | [`templates/SC.example.md`](../templates/SC.example.md) |
| TC YAML | [`templates/TC.example.yaml`](../templates/TC.example.yaml) |
| DT | [`templates/DT.example.md`](../templates/DT.example.md) |
| RUL | **Không** template trên hub — SSOT base-docs; hub chỉ `refs.rule` |
| spec_hole → docs | [`templates/SPEC-HOLE-HANDOFF.example.md`](../templates/SPEC-HOLE-HANDOFF.example.md) |

- [x] Glossary 1 trang (CAP/CMP/RUL/SC/EX/TC) — `catalog/GLOSSARY.md`
- [x] Landscape `CAP-*` + LND map
- [x] Migrate pilot Auth: SC-LOGIN SBE + TC → `coverage` (+ A11Y)
- [x] Bộ template CAP / SC / DT / TC / SPEC-HOLE-HANDOFF

---

## D — Tool / rules / MCP support

### Đã có — siết lại

- [x] `/testcase` · `/grill-testcase`: checklist docs-first + `coverage` (bỏ check `type`)
- [x] `plans/readiness.md`: cùng gate
- [x] Router / `platform-ai.mdc`: một lane/chat (tránh vừa docs vừa TC)
- [x] `pnpm cases:render` · `pnpm check:plans`
- [x] Lexicon enum `coverage`
- [x] Artifactgraph: **không cần đổi MCP lúc này** — `parity_check` hiện = field-surface drift (FE/BE/legacy), chưa phải TC→`RUL-*`; lane `plans` đã index taxonomy. Parity rule↔docs = việc sau (optional script hub hoặc MCP mới).
- [x] Docs `spec_hole`: hub xuất **prompt text** [`templates/SPEC-HOLE-HANDOFF.example.md`](../templates/SPEC-HOLE-HANDOFF.example.md) → member mang sang base-docs + `/update-spec` (không implement skill docs tại đây)

### Bổ sung custom

- [x] JSON Schema / `pnpm check:plans` — YAML đủ gen, cấm `type`
- [x] Coverage matrix checker (SC plan ↔ TC) — `pnpm check:coverage`
- [x] Rule opt-in `plans-docs-first.mdc`
- [x] ~~artifactgraph `gaps`/`grill_check` lane plans~~ — **bỏ qua**
- [x] Mermaid trong MD · LikeC4 → docs nếu cần

### Không làm

- Cucumber / `.feature` · Zephyr SSOT · sync TC→docs · i18n full · MCP viết rule vào tests

---

## E — Thứ tự làm (tracking)

1. [x] Ghi NOTE + cập nhật skill/extract docs-first + coverage
2. [x] Schema YAML + locale + render member-first
3. [x] Glossary + CAP pilot + migrate Auth TC
4. [x] Suite a11y + TC a11y stub · [x] coverage matrix (`pnpm check:coverage`)
5. [x] Artifactgraph: không bắt buộc update MCP bây giờ (ghi chú §D)
6. [x] FE: `testcase:gen` nhận `coverage` + `testData` + `a11y` → `#e2e:a11y-wcag` / axe matcher (portal testgen)
7. [x] Templates CAP/SC/DT + SPEC-HOLE-HANDOFF · mermaid-in-MD

---

## Open / deferred

- Severity axe (critical/serious only?) — chốt khi grill-test FE
- Optional: MCP/script parity `refs.rule` ↔ file docs
- LikeC4 view Feature↔SC↔TC — optional **base-docs**

---

## Tham chiếu

- Hub: `catalog/lexicon/testcase-taxonomy.en.txt` · `testkit cases:render` · pilot `cases/W-AD-AUTH-001/`
- Docs: `docs/TESTS-HUB.md`
- Pyramid: https://martinfowler.com/bliki/TestPyramid.html
- Playwright: https://playwright.dev/docs/best-practices
- Mattermost MD pattern: https://github.com/mattermost/mattermost-test-management
- LikeC4 structure analogy: https://github.com/likec4/example-cloud-system

---

## F — Giới thiệu base-tests cho team (song song khi làm)

Vừa triển khai NOTE vừa **tổng hợp một bài giới thiệu** về hub `base-tests` để onboard / trình bày nội bộ.

### Yêu cầu

- [x] File giới thiệu `landscape/INTRO-base-tests.md` — ngôn ngữ tự nhiên, bản member
- [x] Hình minh họa trong `landscape/assets/` (hero, docs-first, flow, yaml-vs-md)
- [x] Nội dung: hub là gì · ai đọc gì · YAML vs MD · docs-first · coverage · đường tới Playwright
- [x] Cập nhật sau khi chốt format MD/YAML theo cấp
- [x] VitePress site (`pnpm docs:dev` / `docs:build`) + mermaid như base-docs

### Không

- Không thay handbook toolchain dài (`TESTS-HUB`) — intro = cửa vào ngắn cho member
