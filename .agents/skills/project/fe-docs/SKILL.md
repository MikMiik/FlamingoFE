---
name: flamingo-fe-docs-update
description: Quy trình ghi chép và cập nhật tài liệu dự án FlamingoFE vào thư mục .docs/. Áp dụng sau mỗi phiên làm việc lớn (thêm feature, refactor, chỉnh UI). Đảm bảo ARCHITECTURE.md, STYLEGUIDE.md và DIARY.md luôn phản ánh đúng trạng thái hiện tại.
allowed-tools: Read, Write, Edit
---

# FlamingoFE Docs Update Workflow

Sau mỗi phiên làm việc quan trọng, cập nhật 3 file trong `.docs/`.

## Cấu Trúc Docs

```
.docs/
├── ARCHITECTURE.md  ← Cấu trúc dự án, routing, stack, RSC boundaries
├── STYLEGUIDE.md    ← Design tokens, shadow scale, typography, patterns
└── DIARY.md         ← Nhật ký phiên làm việc: việc đã làm, lỗi gặp, bài học
```

---

## Khi Nào Cần Cập Nhật

### ARCHITECTURE.md — cập nhật khi:
- Thêm/đổi tên folder, page, component
- Thay đổi routing (thêm route mới, đổi slug pattern)
- Thêm dependency mới quan trọng
- Thay đổi RSC pattern (server ↔ client boundary)
- Thêm provider, middleware, config

### STYLEGUIDE.md — cập nhật khi:
- Thêm/đổi token màu trong globals.css
- Thiết lập quy ước shadow, spacing mới
- Thêm component pattern tái sử dụng
- Thay đổi quy ước đặt tên class
- Thêm breakpoint mới

### DIARY.md — cập nhật sau **mỗi phiên làm việc lớn**:
- Luôn thêm entry mới vào đầu file (mới nhất ở trên)
- Ghi ngày tháng theo format `[Session N] — YYYY-MM-DD — Tiêu đề ngắn`
- Ghi lại: việc đã làm, lỗi gặp, cách fix, bài học

---

## Format DIARY Entry

```markdown
## [Session N] — YYYY-MM-DD — Mô tả ngắn

### Việc đã làm

**1. Tên nhóm việc**
- Chi tiết việc 1
- Chi tiết việc 2

**2. Tên nhóm việc tiếp theo**
- ...

### Lỗi & Bài học

| Vấn đề | Nguyên nhân | Fix |
|--------|-------------|-----|
| Mô tả lỗi | Lý do xảy ra | Cách đã fix |
```

---

## Quy Trình Cập Nhật

1. **Đọc file hiện tại** trước khi sửa để không ghi đè nội dung cũ
2. **DIARY**: thêm entry mới ở đầu, giữ nguyên các entries cũ phía dưới
3. **ARCHITECTURE / STYLEGUIDE**: cập nhật đúng section liên quan, không xóa section khác
4. **Viết cụ thể**: tên file, tên component, lý do quyết định — không viết chung chung
5. **Lỗi cần ghi rõ**: bao gồm cả lỗi TypeScript, lint, runtime, visual glitch

---

## Checklist Sau Phiên Làm Việc

- [ ] DIARY.md có entry mới với đầy đủ: việc làm + lỗi/bài học
- [ ] ARCHITECTURE.md cập nhật nếu có thay đổi cấu trúc/routing
- [ ] STYLEGUIDE.md cập nhật nếu có quy ước mới
- [ ] TypeScript check: `npx tsc --noEmit` — 0 errors
- [ ] Lint check: `ReadLints` — 0 errors

---

## Ví Dụ Thực Tế

### Thêm route mới → update ARCHITECTURE.md

```markdown
| `/rooms/[slug]` | `(main)/rooms/[slug]/page.tsx` | Room detail |
```

### Thêm shadow token → update STYLEGUIDE.md

```markdown
| Booking widget | `shadow-[0_4px_20px_rgba(31,88,197,0.08)]` | Sidebar booking form |
```

### Ghi lỗi nested `<main>` → update DIARY.md

```markdown
| Nested `<main>` | Layout dùng `<main>`, page con cũng dùng `<main>` | Layout chỉ dùng fragment `<>` |
```
