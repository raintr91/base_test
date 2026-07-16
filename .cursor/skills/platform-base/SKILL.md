---
name: platform-base
description: >-
  Tests hub base — landscape/contexts/targets/scenarios/cases/suites;
  vocab + cases:render. Not Nuxt/FE.
disable-model-invocation: true
---

# Platform Base (E2E plans hub)

Repo **base-tests** only — acceptance / E2E **plans** (YAML + MD). Không Playwright, không Nuxt layers.

**Vocab:** `catalog/lexicon/testcase-taxonomy.en.txt` · **Locale:** `catalog/locale.yaml`  
**Templates:** `templates/TC.example.yaml` · `CAP|SC|DT.example.md` · `SPEC-HOLE-HANDOFF.example.md`  
**Site docs (VitePress + mermaid):** `pnpm docs:dev` · `docs:build` · `docs:preview`  
**Intro / tracking:** `landscape/INTRO-base-tests.md` · `landscape/NOTE-testing-architecture.md`

## Layout

| Path | Role |
|------|------|
| `landscape/` | LND-* test landscape |
| `contexts/` | CTX-* E2E boundary |
| `targets/` | CTR-* client under test |
| `scenarios/CMP-*/` | SC-* Level 1 business |
| `cases/W-*/` | TC-* YAML (+ rendered MD) |
| `suites/` | smoke / regression packs (id lists) |
| `catalog/` | taxonomy + indexes |

## Conventions

1. IDs align design: `CMP-*` · `W-*` · `SC-*` · `TC-*` · `CTR-*`.
2. `type` + `dimensions` chỉ từ lexicon — không bịa enum.
3. Suites = pack ids, **không** phải case `type`.
4. Author YAML → `pnpm cases:render` → MD cạnh YAML cho review.
5. Bridge FE (`genType`, `feature`, `testIds`, `route`) chỉ khi cần handoff `testcase:gen` trên FE.

## Gen / handoff

| Ở hub | Ở FE |
|-------|------|
| `/testcase` · `/grill-testcase` · `pnpm cases:render` | `pnpm testcase:gen --id …` · `/test` Playwright |

Không implement `tests/e2e/**` tại repo này.

## Checklist

- [ ] Tree + ids coherent với design refs
- [ ] Vocab + `tests-index.json` cập nhật
- [ ] `cases:render` OK · grill trước khi handoff FE
