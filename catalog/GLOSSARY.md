# Glossary — Plans IDs (C4-aligned)

Ngôn ngữ hub: keys/id **EN** · MD member theo `catalog/locale.yaml` (`vi`).

| Prefix | Tầng | SSOT | Ví dụ |
|--------|------|------|-------|
| `CAP-*` | Capability | base-tests `landscape/` | `CAP-admin` |
| `CMP-*` | Feature (C4 component) | base-docs + `scenarios/CMP-*/` | `CMP-01` |
| `RUL-*` | Business rule | **base-docs only** | `RUL-01-login-valid-creds` |
| `SC-*` | Scenario (SBE / GWT) | base-tests MD | `SC-LOGIN` |
| `EX-*` | Example row | trong SC MD / `refs.example` | `EX-LOGIN-01` |
| `TC-*` | Automation case | YAML → Playwright | `TC-LOGIN-VALID` |
| `W-*` / `M-*` … | Screen (design Code) | base-docs | `W-AD-AUTH-001` |
| `CTR-*` | Target client | `targets/` | `CTR-admin-web` |
| `DT-*` | Decision table | optional cạnh SC | `DT-LOGIN-LOCKOUT` |

**Coverage facets** (field `coverage[]`, không dùng `type`):  
`happy` · `validation` · `boundary` · `authorization` · `state` · `exception` · `concurrency` · `audit` · `accessibility`

Chi tiết tracking: [NOTE-testing-architecture.md](./NOTE-testing-architecture.md)
