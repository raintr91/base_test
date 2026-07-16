# DT-{SLUG} — Bảng quyết định ({Feature / Rule})

Optional. Đặt cạnh scenario: `scenarios/CMP-*/DT-{SLUG}.md`.  
Cột **Automation** quyết định có sinh `TC-*` E2E hay không (pyramid: không mọi ô → UI).

| Điều kiện A | Điều kiện B | Kết quả nghiệp vụ | Rule (docs) | Automation |
|-------------|_------------|-------------------|-------------|------------|
| … | … | … | `RUL-…` | `e2e` → `TC-…` |
| … | … | … | `RUL-…` | `api` |
| … | … | … | `RUL-…` | `unit` |
| … | … | … | `RUL-…` | `none` (manual / backlog) |

`automation` ∈ `e2e` | `api` | `unit` | `none`
