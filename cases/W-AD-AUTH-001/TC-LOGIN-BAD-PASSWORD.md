# Sai mật khẩu thì không vào được admin; hiện lỗi chung, vẫn ở màn đăng nhập.

Given đã có tài khoản operator
When nhập đúng email nhưng sai mật khẩu
Then thấy thông báo lỗi (không lộ chi tiết) và không có phiên đăng nhập

- **id:** `TC-LOGIN-BAD-PASSWORD`
- **Bao phủ:** `exception`
- **Scenario:** `SC-LOGIN`
- **Rule (docs):** `RUL-01-login-reject-bad-password`

## Trước khi làm

- Đã có tài khoản operator

## Các bước

1. Mở trang đăng nhập
2. Nhập email
3. Nhập mật khẩu sai
4. Bấm Đăng nhập

## Kết quả mong đợi

- Hiện lỗi không liệt kê tài khoản; vẫn ở login; không có session

<details>
<summary>Chi tiết kỹ thuật (automation)</summary>

- **title (EN):** Login with wrong password should show error and no session
- **refs:** `{"capability":"CAP-admin","component":"CMP-01","rule":"RUL-01-login-reject-bad-password","scenario":"SC-LOGIN","example":"EX-LOGIN-02","screen":"W-AD-AUTH-001","target":"CTR-admin-web","api":"API-AD-AUTH-001"}`

### Dữ liệu dùng thử

```yaml
email: admin@example.com
password: wrong-password
```

### Steps (machine)

1. as: Mở trang đăng nhập, action: goto, path: /login
2. as: Nhập email, action: fill, testId: auth-login-email-input, value: {{email}}
3. as: Nhập mật khẩu sai, action: fill, testId: auth-login-password-input, value: {{password}}
4. as: Bấm Đăng nhập, action: click, testId: auth-login-submit-btn

### Test IDs

- auth-login-email-input
- auth-login-password-input
- auth-login-submit-btn
- auth-login-alert


</details>
