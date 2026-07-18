# base-tests — nơi team thống nhất “sẽ kiểm gì”

Chào bạn 👋

Repo này không phải chỗ viết app, cũng không phải chỗ cãi nhau bằng ticket dài. Đây là **hub kế hoạch kiểm thử**: viết rõ nghiệp vụ cần kiểm, để người đọc vui vẻ review, máy thì đủ dữ liệu để sinh Playwright trên FE.

![Hero — Plans hub cho cả team](/landscape/assets/intro-hero-base-tests.png)

![Docs-first — rule rõ rồi mới plans](/landscape/assets/intro-docs-first-smile.png)

---

## Trong một hơi

Bạn đang cầm một **bản kế hoạch**, không phải script E2E.

| Người | Việc chính ở đây |
|-------|------------------|
| BA / Product / member | Đọc scenario & case bằng tiếng Việt, đối chiếu docs |
| QA | Viết / grill YAML đủ gen, theo dõi bao phủ |
| Dev FE | Nhận YAML đã chốt → `testcase:gen` → chạy test |

Ba câu nhớ là đủ sống sót:

1. **Docs giữ rule** (base-docs) — đúng/sai nghiệp vụ sống ở đó.
2. **Hub ghi cách kiểm** — thiếu bao phủ thì thêm case; rule mơ hồ thì **quay docs trước**.
3. **FE chạy máy** — Playwright đọc YAML, không lấy MD làm nguồn gen.

---

## Hai mặt của một case

![YAML cho máy · MD cho người](/landscape/assets/intro-yaml-vs-md.png)

- **MD** = chuyện kể: tóm tắt, Given / When / Then, bảng ví dụ. Dùng để bàn bạc, grill với member.
- **YAML** = thẻ máy: `coverage`, `route`, `testIds`, bước `action`… Dùng để `testcase:gen`.

Không cần YAML cho mọi tầng. Giống docs: phần “người đọc” là MD; YAML chỉ chỗ máy cần.

![Luồng Docs → Plans → Playwright](/landscape/assets/intro-flow-docs-plans-playwright.png)

---

## Cấu trúc từng tầng — tầng đó có gì?

Cây tổng quát:

```text
CAP-*                         MD  — phạm vi sản phẩm
 └── CMP-*                    (docs + folder scenarios/) — feature
      ├── RUL-*               docs only — rule nghiệp vụ
      ├── SC-*                MD  — scenario / SBE
      │     └── EX-*          bảng trong SC — ví dụ
      ├── DT-*                MD  — bảng quyết định (optional)
      └── TC-*                YAML (+ MD render) — automation
 suites/*.yaml                YAML — gói chạy (smoke, a11y…)
```

### CAP — Capability

| | |
|--|--|
| **Là gì** | Ô nghiệp vụ lớn (admin, portal khách…). Dự án nhỏ cũng **≥1** CAP. |
| **File** | `landscape/CAP-*.md` |
| **Có gì** | Mô tả phạm vi, link CMP / target, mermaid tổng quan |
| **Không có** | Steps E2E, testId, rule chi tiết |
| **Template** | [CAP.example.md](/templates/CAP.example) · Pilot: [CAP-admin](/landscape/CAP-admin) |

### CMP — Feature (Component)

| | |
|--|--|
| **Là gì** | Feature C4 / module (vd. Auth). |
| **File trên hub** | Folder `scenarios/CMP-*/` — **không** YAML CMP riêng |
| **SSOT mô tả** | base-docs (`product/components/CMP-…`) |
| **Có gì ở hub** | Gom SC / case theo feature |

### RUL — Rule

| | |
|--|--|
| **Là gì** | Quy tắc nghiệp vụ ổn định (“sai mật khẩu → không vào”). |
| **SSOT** | **Chỉ base-docs** |
| **Trên hub** | Chỉ **cite** `refs.rule: RUL-…` trong SC/TC |
| **Không** | Copy nội dung rule vào YAML để “sửa cho tiện” |

### SC — Scenario

| | |
|--|--|
| **Là gì** | Câu chuyện kiểm theo nghiệp vụ (SBE + Given/When/Then). |
| **File** | `scenarios/CMP-*/SC-*.md` |
| **Có gì** | Frontmatter (`id`, `coverage_plan`, `rules`), vì sao quan trọng, GWT, bảng EX, mermaid, bảng map → TC |
| **Không cần** | File `SC-*.yaml` riêng |
| **Template** | [SC.example.md](/templates/SC.example) · Pilot: [SC-LOGIN](/scenarios/CMP-01-auth/SC-LOGIN) |

### EX — Example

| | |
|--|--|
| **Là gì** | Một hàng dữ liệu / kết quả trong bảng SBE. |
| **Ở đâu** | Trong SC MD (cột Automation trỏ `TC-*`) |
| **Không** | File YAML riêng cho từng EX |

### DT — Decision table (optional)

| | |
|--|--|
| **Là gì** | Ma trận điều kiện → kết quả khi rule phức tạp. |
| **File** | `scenarios/CMP-*/DT-*.md` |
| **Có gì** | Cột điều kiện + **Automation** ∈ `e2e` \| `api` \| `unit` \| `none` |
| **Lưu ý** | Chỉ hàng `e2e` mới sinh TC — tránh ice-cream cone |
| **Template** | [DT.example.md](/templates/DT.example) |

### TC — Test case (automation)

| | |
|--|--|
| **Là gì** | Contract máy → Playwright. |
| **File** | `cases/W-*/TC-*.yaml` (+ MD sau `cases:render`) |
| **Có gì** | `coverage`, `summary`/`story` (VI), `refs`, steps, `route`, `testIds`, optional `a11y` |
| **MD render** | Phần member tiếng Việt + `<details>` kỹ thuật |
| **Template** | `templates/TC.example.yaml` (mở trong IDE — YAML không render trên site) |

*(YAML không mở trên VitePress — mở file trong IDE / gen FE.)*

### Suite

| | |
|--|--|
| **Là gì** | Gói id để chạy / gen theo nhóm. |
| **File** | `suites/smoke.yaml`, `a11y.yaml`, `regression-*.yaml` |
| **Có gì** | List `cases: [ TC-… ]` — **không** phải loại case |

### Coverage facets

Dùng trên SC (`coverage_plan`) và TC (`coverage[]`) — **không** dùng `type` nữa:

`happy` · `validation` · `boundary` · `authorization` · `state` · `exception` · `concurrency` · `audit` · `accessibility`

---

## Một ngày làm việc vui vẻ

```bash
pnpm docs:dev         # VitePress + render MD — http://localhost:5173
pnpm check:plans      # YAML đủ để gen chưa?
pnpm check:coverage   # SC hứa facet nào — đã có TC chưa?
pnpm cases:render     # làm mới MD tiếng Việt
pnpm check:pilot
```

Khi đã grill xong, sang FE:

```bash
pnpm testcase:gen --id TC-LOGIN-VALID
pnpm testcase:gen --id TC-LOGIN-A11Y   # a11y: → axe
```

Lỗ spec? Copy [SPEC-HOLE-HANDOFF](/templates/SPEC-HOLE-HANDOFF.example) sang chat **base-docs** + `/update-spec`.

---

## Link nội bộ (hub)

| Muốn… | Link |
|-------|------|
| Onboard | **Trang này** |
| Home VitePress | [/](/) |
| Glossary ID | [GLOSSARY](/catalog/GLOSSARY) |
| CAP-admin | [CAP-admin](/landscape/CAP-admin) |
| Bản đồ QA | [LND-qa-map](/landscape/LND-qa-map) |
| NOTE kiến trúc / todo | [NOTE-testing-architecture](/landscape/NOTE-testing-architecture) |
| Scenarios index | [scenarios/](/scenarios/) |
| Cases index | [cases/](/cases/) |
| Pilot SC-LOGIN | [SC-LOGIN](/scenarios/CMP-01-auth/SC-LOGIN) |
| Pilot cases | [W-AD-AUTH-001](/cases/W-AD-AUTH-001/) |
| Templates | [CAP](/templates/CAP.example) · [SC](/templates/SC.example) · [DT](/templates/DT.example) · [handoff](/templates/SPEC-HOLE-HANDOFF.example) |

---

## Tham khảo ngoài

| Chủ đề | Link |
|--------|------|
| Tests hub (toolchain) | Sibling repo: `docs/TESTS-HUB.md` |
| Test Pyramid | [martinfowler.com — Test Pyramid](https://martinfowler.com/bliki/TestPyramid.html) |
| Playwright best practices | [playwright.dev/docs/best-practices](https://playwright.dev/docs/best-practices) |
| Axe + Playwright | [npm @axe-core/playwright](https://www.npmjs.com/package/@axe-core/playwright) |
| MD testcase (Member pattern) | [mattermost-test-management](https://github.com/mattermost/mattermost-test-management) |
| Cấu trúc model (analogy) | [likec4/example-cloud-system](https://github.com/likec4/example-cloud-system) |
| Google Testing Blog | [testing.googleblog.com](https://testing.googleblog.com/) |

---

Plans rõ → review nhẹ → E2E đỡ đau.  
Chúc team dùng hub này như một tờ giấy chung, không như một bức tường ticket.
