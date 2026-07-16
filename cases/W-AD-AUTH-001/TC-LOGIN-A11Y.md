# Sau khi đăng nhập thành công, khu vực admin không còn lỗi accessibility nghiêm trọng (WCAG 2A/2AA).

Given đã đăng nhập thành công vào admin
When chạy kiểm tra accessibility (axe) trên shell
Then không còn violation mức critical/serious theo tag wcag2a/wcag2aa

- **id:** `TC-LOGIN-A11Y`
- **Bao phủ:** `accessibility`
- **Scenario:** `SC-LOGIN`
- **Rule (docs):** `RUL-01-login-valid-creds`

## Trước khi làm

- Đã có tài khoản operator hợp lệ (reuse happy path hoặc storageState)

## Các bước

1. Đăng nhập thành công (happy path)
2. Nhập vào `auth-login-email-input`
3. Nhập vào `auth-login-password-input`
4. Bấm `auth-login-submit-btn`

## Kết quả mong đợi

- Axe không báo critical/serious trên shell đã đăng nhập

<details>
<summary>Chi tiết kỹ thuật (automation)</summary>

- **title (EN):** Authenticated admin shell should have no serious WCAG A/AA axe violations
- **refs:** `{"capability":"CAP-admin","component":"CMP-01","rule":"RUL-01-login-valid-creds","scenario":"SC-LOGIN","example":"EX-LOGIN-04","screen":"W-AD-AUTH-001","target":"CTR-admin-web"}`

### Dữ liệu dùng thử

```yaml
email: admin@example.com
password: "********"
```

### Steps (machine)

1. as: Đăng nhập thành công (happy path), action: goto, path: /login
2. action: fill, testId: auth-login-email-input, value: {{email}}
3. action: fill, testId: auth-login-password-input, value: {{password}}
4. action: click, testId: auth-login-submit-btn

### Test IDs

- auth-login-email-input
- auth-login-password-input
- auth-login-submit-btn

### a11y

```yaml
tags:
  - wcag2a
  - wcag2aa
include: []
exclude: []
disableRules: []
```

</details>
