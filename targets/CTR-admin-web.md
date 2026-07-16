# CTR-admin-web

E2E **target** ≈ design container `CTR-admin-web` (base-docs architecture).

| | |
|--|--|
| **ID** | `CTR-admin-web` |
| **Client** | Admin Web (Nuxt / FE base — default **portal**) |
| **Runs** | `pnpm testcase:gen` + `pnpm test:e2e` **in FE repo** |
| **Plans SSOT** | this tests hub (`cases/`, `suites/`) |
| **Design refs** | `base-docs` · `W-*` / `CMP-*` / `API-*` |

Out of scope on this target: API unit, Playwright source of truth (scripts stay in FE).
