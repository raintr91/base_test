# Để trống email thì form chặn gửi; không tạo phiên đăng nhập.

Given đang ở màn đăng nhập
When để trống email (có thể đã nhập mật khẩu) và bấm Đăng nhập
Then thấy lỗi email và không gọi đăng nhập thành công

- **id:** `TC-LOGIN-EMPTY-EMAIL`
- **Bao phủ:** `validation`
- **Scenario:** `SC-LOGIN`
- **Rule (docs):** `RUL-01-login-email-required`

## Trước khi làm

_Không có_

## Các bước

1. Mở trang đăng nhập
2. Nhập mật khẩu (bỏ trống email)
3. Bấm Đăng nhập

## Kết quả mong đợi

- Lỗi validation trên email; không có session

<details>
<summary>Chi tiết kỹ thuật (automation)</summary>

- **title (EN):** Login with empty email should block submit with validation
- **refs:** `{"capability":"CAP-admin","component":"CMP-01","rule":"RUL-01-login-email-required","scenario":"SC-LOGIN","example":"EX-LOGIN-03","screen":"W-AD-AUTH-001","target":"CTR-admin-web"}`

### Dữ liệu dùng thử

```yaml
email: ""
password: "********"
```

### Steps (machine)

1. as: Mở trang đăng nhập, action: goto, path: /login
2. as: Nhập mật khẩu (bỏ trống email), action: fill, testId: auth-login-password-input, value: {{password}}
3. as: Bấm Đăng nhập, action: click, testId: auth-login-submit-btn

### Test IDs

- auth-login-email-input
- auth-login-submit-btn


</details>
