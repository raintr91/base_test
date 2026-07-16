---
name: platform-ai
extractBundle: platform-ai
description: /platform-ai — maintain AI harness for base-tests (plans lane).
disable-model-invocation: true
---

# /platform-ai — AI harness (tests hub)

Chỉ khi **sửa** skills / rules / extracts trong **base-tests** — không author plans (`/testcase`) và không viết app/Playwright.

## SSOT (repo này)

| Giữ | Không giữ ở đây |
|-----|-----------------|
| `/testcase` `/grill-testcase` · plans YAML/MD · `cases:render` | Design bundles → **base-docs** |
| DNA: `/platform-ai` · `/platform-base` | Playwright `/test` → **FE** |
| Router + extracts plans | FE/BE skills (prototype, api, wire, …) |

Profile `tests` trong `platform-repos.json` → skills allowlist:

`platform-ai` · `platform-base` · `testcase` · `grill-testcase`

## Workflow harness

Edit `.cursor/` tại **base-tests** (đúng lane Plans). Một chat = một lane — không nhồi Plans + FE/Docs trong cùng turn.

## Commands (this hub)

| | |
|--|--|
| `/platform-ai` | this — harness meta |
| `/platform-base` | hub layout · vocab · render conventions |
| `/testcase` | author SC/TC/suites |
| `/grill-testcase` | audit plans |

Hub handbook: `../base-docs/platform/toolchain/TESTS-HUB.md` · router: `team-flow-router.mdc`.

## Done

- [ ] Skills = profile `tests` only; không DNA FE
- [ ] `extract-registry.json` khớp bundles plans; router đúng commands hub
