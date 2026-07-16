# Handoff `spec_hole` → base-docs `/update-spec`

Dùng khi `/grill-testcase` (hoặc review) thấy **scope hở / rule mơ hồ**.  
**Không** vá bằng TC trên hub. Copy khối dưới sang chat **base-docs** kèm `/update-spec` (hoặc grill-docs).

---

## Prompt mẫu (copy)

```text
/update-spec

## Nguồn
- Hub plans: base-tests
- Scenario: SC-____
- Screen / CMP: W-____ / CMP-____
- Capability: CAP-____
- Phát hiện bởi: /grill-testcase (spec_hole)

## Lỗ hổng cần làm rõ trên docs (SSOT)
1. Rule / acceptance còn thiếu hoặc mơ hồ:
   - Id đề xuất (nếu có): RUL-____
   - Hiện tượng: …
   - Câu hỏi cần docs trả lời: …
2. Scope / biên hệ thống:
   - In scope? …
   - Out of scope? …
3. Ảnh hưởng kế hoạch kiểm:
   - Coverage facet đang chờ: happy | validation | … 
   - TC tạm chưa author / giữ backlog: TC-____ (nếu có)

## Evidence từ plans (chỉ cite, không coi là SSOT rule)
- File SC: scenarios/…/SC-____.md
- File TC liên quan (nếu có): cases/…/TC-____.yaml
- Expected member đang giả định: …

## Việc nhờ docs
- [ ] Bổ sung / sửa acceptance hoặc RUL-* trên bundle/spec
- [ ] Chốt scope rõ (in/out)
- [ ] Trả lại id rule + đường dẫn docs để hub cite `refs.rule`

## Sau khi docs xong
Quay lại base-tests `/testcase` để bổ sung coverage / TC (docs-first).
```

---

## Checklist trước khi gửi

- [ ] Đã mô tả **câu hỏi** (không đề xuất tự ý sửa rule trên tests)
- [ ] Có id SC / CMP / W / CAP
- [ ] Liệt kê facet coverage đang bị chặn
- [ ] Không đính kèm patch YAML “tạm đúng”
