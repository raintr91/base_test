# Operator đăng nhập đúng email và mật khẩu thì vào được khu vực admin.

Given đã có tài khoản operator hợp lệ
When nhập đúng email/mật khẩu và đăng nhập
Then thấy shell admin đã xác thực

- **id:** `TC-LOGIN-VALID`
- **Bao phủ:** `happy`
- **Scenario:** `SC-LOGIN`
- **Rule (docs):** `RUL-01-login-valid-creds`

## Trước khi làm

- Đã có tài khoản operator còn hiệu lực

## Các bước

1. Mở trang đăng nhập
2. Nhập email hợp lệ
3. Nhập mật khẩu đúng
4. Bấm Đăng nhập

## Kết quả mong đợi

- Thấy khu vực admin đã đăng nhập

<details>
<summary>Chi tiết kỹ thuật (automation)</summary>

- **title (EN):** Login with valid credentials should succeed
- **refs:** `{"capability":"CAP-admin","component":"CMP-01","rule":"RUL-01-login-valid-creds","scenario":"SC-LOGIN","example":"EX-LOGIN-01","screen":"W-AD-AUTH-001","target":"CTR-admin-web","api":"API-AD-AUTH-001"}`

### Dữ liệu dùng thử

```yaml
email: admin@example.com
password: "********"
```

### Steps (machine)

1. as: Mở trang đăng nhập, action: goto, path: /login
2. as: Nhập email hợp lệ, action: fill, testId: auth-login-email-input, value: {{email}}
3. as: Nhập mật khẩu đúng, action: fill, testId: auth-login-password-input, value: {{password}}
4. as: Bấm Đăng nhập, action: click, testId: auth-login-submit-btn

### Test IDs

- auth-login-email-input
- auth-login-password-input
- auth-login-submit-btn


</details>
