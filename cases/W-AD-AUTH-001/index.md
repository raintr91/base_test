# Cases — W-AD-AUTH-001

Level 3 plans for screen **W-AD-AUTH-001** (design Code in `base-docs`).

| ID | type | automation |
|----|------|------------|
| [TC-LOGIN-VALID](./TC-LOGIN-VALID.yaml) | positive | automated |
| [TC-LOGIN-BAD-PASSWORD](./TC-LOGIN-BAD-PASSWORD.yaml) | negative | automated |
| [TC-LOGIN-EMPTY-EMAIL](./TC-LOGIN-EMPTY-EMAIL.yaml) | negative | automated |

Playwright emits to **portal** `tests/e2e/` via `testcase:gen` (see hub README). Plans remain SSOT here.
