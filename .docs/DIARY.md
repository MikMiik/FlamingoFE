# FlamingoFE — Development Diary

Ghi lại các quyết định thiết kế, thay đổi quan trọng và bài học kinh nghiệm theo từng phiên làm việc.

---

## [Session 5] — 2026-04-27 — Footer Cleanup, Remove Hex Classes, Reduce Radius

### Việc đã làm

**1. Xóa phần footer theo ảnh yêu cầu**
- Xóa toàn bộ thanh màu gradient đáy footer và cụm badge `DMCA PROTECTED` / `SSL SECURED`
- Giữ lại footer tối giản: nội dung chính + dòng copyright nhẹ theo theme

**2. Loại bỏ className hardcode màu `#...`**
- Đã thay toàn bộ className chứa mã màu hex trong `src/` sang token/utility hệ thống:
  - `bg-[#2781ff]` → `bg-blue-500`
  - `bg-[#35b768]` → `bg-emerald-500`
  - `bg-[#39b86b]` → `bg-emerald-500`
  - `text/fill-[#f6b31a]`, `text-[#f9b72f]` → `text-amber-400` + `fill-current`
  - `text-[#12a56f]` → `text-emerald-600`
- Kiểm tra lại bằng search: không còn `className` nào chứa `#...`

**3. Giảm border-radius tổng thể**
- Giảm radius token toàn cục trong `globals.css`: `--radius: 0.75rem` → `0.55rem`
- Thu nhỏ các bo góc lớn ở các page chính:
  - `rounded-[22px]` → `rounded-[18px]`
  - `rounded-[20px]` → `rounded-[16px]`
  - `rounded-[18px]` → `rounded-[14px]`
- Áp dụng cho các khu vực Home cards, Rooms list/detail, Offer, Contact

### Lỗi & Bài học

| Vấn đề | Nguyên nhân | Fix |
|--------|-------------|-----|
| `SectionTitle` import không dùng trong testimonials | Sau refactor UI không còn render title block | Xóa import thừa để sạch lint |

### Kiểm tra
- `npx tsc --noEmit` → 0 errors ✅
- `ReadLints` trên các file thay đổi → không còn lỗi ✅

---

## [Session 4] — 2026-04-27 — Replace Favicon Files By Next.js Conventions

### Việc đã làm

**1. Đọc skill trước khi thao tác**
- Đọc `.agents/skills/next-best-practices/metadata.md` và áp dụng đúng mục **Metadata File Conventions**
- Chuẩn file xác nhận: `favicon.ico`, `icon.(png|svg)`, `apple-icon.png`, `manifest.json`

**2. Thay favicon hiện tại bằng bộ favicon mới**
- Nguồn: `C:\Users\minh0\Downloads\favicon-for-app`
- Đích: `src/app/` theo đúng convention của Next.js App Router
- Các file đã copy/replace:
  - `favicon.ico`
  - `apple-icon.png`
  - `manifest.json`
  - `icon0.svg` → đổi tên thành `icon.svg`
  - `icon1.png` → đổi tên thành `icon.png`

**3. Cập nhật tài liệu kiến trúc**
- Update `.docs/ARCHITECTURE.md` để phản ánh các metadata files mới ở `src/app/`

### Lỗi & Bài học

| Vấn đề | Nguyên nhân | Fix |
|--------|-------------|-----|
| Bộ icon nguồn dùng tên không đúng chuẩn Next (`icon0.svg`, `icon1.png`) | Khác naming convention của metadata files | Đổi tên về `icon.svg` và `icon.png` khi copy vào `src/app/` |

---

## [Session 3] — 2026-04-27 — Auth Pages, ThemeToggle, Navbar Redesign

### Việc đã làm

**1. Dropdown-menu component**
- Copy từ `Sep490_FE_NextU_User`, thay `@tabler/icons-react` bằng `lucide-react` (`Check`, `ChevronRight`)
- Lưu tại `src/components/ui/dropdown-menu.tsx`

**2. ThemeToggle (`src/components/layout/ThemeToggle.tsx`)**
- Client component dùng `useTheme()` từ `next-themes`
- Dùng `DropdownMenu` + `Button variant="outline" size="icon"` (shadcn)
- 3 options: Sáng / Tối / Hệ thống
- Tiếng Việt, icon Sun/Moon animate via Tailwind `rotate`/`scale` dark-mode class

**3. Navbar update**
- Xóa `<a href="tel:...">` (số điện thoại)
- Thêm `ThemeToggle` bên trái auth buttons
- Thêm `Đăng nhập` (outline) + `Đăng ký` (primary) buttons dạng `Link`
- `Đăng nhập` ẩn trên mobile nhỏ (`hidden sm:inline-flex`), `Đăng ký` luôn hiện

**4. routes.ts**
- Thêm auth routes: `login`, `register`, `forgotPassword`, `resetPassword`, `verifyEmail`

**5. Auth shared components**
- `AuthCard.tsx` — server component, layout card với logo, title, description, children, footer link
- `AuthField.tsx` — client component, input field với show/hide toggle cho password type

**6. Auth layout (`(auth)/layout.tsx`)**
- Split screen: trái = brand visual (ảnh biển + gradient overlay + features list), phải = form
- Left panel ẩn trên màn hình < xl
- Mobile: top bar với logo + back link

**7. 5 Auth pages thiết kế từ đầu**
- `login` — email + password + remember me + forgot link + Google OAuth button
- `register` — full name + phone + email + password + confirm + terms checkbox + Google button
- `forgot-password` — email + info box về 15 phút hết hạn
- `reset-password` — new password + confirm + password requirements list
- `verify-email` — email indicator + step-by-step guide + 2 action buttons + back link

### Lỗi & Bài học

| Vấn đề | Nguyên nhân | Fix |
|--------|-------------|-----|
| `shadcn CLI` không connect được | No internet | Copy component thủ công từ project khác |
| `@tabler/icons-react` không có trong project | Dependency khác biệt giữa 2 project | Thay bằng `lucide-react` tương đương (`Check`, `ChevronRight`) |

### TypeScript check
`npx tsc --noEmit` → 0 errors ✅

---

## [Session 1] — 2026-04-27 — Cấu trúc & Tinh chỉnh Home Page

### Việc đã làm

**1. Đọc & học skills**

- Đọc `.agents/skills/next-best-practices`, `tailwind-css-patterns`, `tailwind-design-system`
- Nắm rõ: RSC boundaries, Tailwind v4 syntax, design token pattern

**2. Tạo cấu trúc nền tảng**

- `src/routes/routes.ts` — tập trung toàn bộ URL constants, `navItems` array
- `src/components/ui/Container.tsx` — wrapper tái sử dụng, không lặp class container

**3. Tách Navbar & Footer**

- `Navbar.tsx` — client component, dùng `usePathname()` để highlight active item; `h-0.75` thay `h-[3px]`
- `Footer.tsx` — server component; import `NewsletterForm.tsx` (client)
- `NewsletterForm.tsx` — client, `useState` cho email input, `onSubmit` với `e.preventDefault()`

**4. Update `(main)/layout.tsx`**

- Bọc children bằng Navbar + Footer
- **Không** dùng `<main>` trong layout (tránh nested `<main>` với các page con)

**5. Tách Home components**

- Server: `HeroSection`, `DealsSection`, `ReasonsSection`, `BlogSection`, `SectionTitle`
- Client: `SearchBar`, `CategoryTabs`, `FeaturedRoomsSection`, `TestimonialsSection`

**6. Tinh chỉnh toàn bộ Tailwind**

- Thay `text-[18px]` → `text-lg`, `text-[16px]` → `text-base`, `text-[36px]` → `text-4xl`
- Thay hex hardcode → CSS variables (`text-primary`, `text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`, `bg-secondary`)
- `h-[3px]` → `h-0.75`

**7. Tạo skill**

- `.agents/skills/project/fe/SKILL.md` — quy trình chi tiết cho tất cả pages

### Lỗi & Bài học

| Vấn đề          | Nguyên nhân                                            | Fix                                                  |
| --------------- | ------------------------------------------------------ | ---------------------------------------------------- |
| Nested `<main>` | Layout dùng `<main>`, page con cũng dùng `<main>`      | Layout chỉ dùng fragment `<>`, không wrap `<main>`   |
| Routes sai      | Sử dụng `/room-list` thay vì `/rooms` (folder thực tế) | Luôn kiểm tra folder structure trước khi viết routes |

---

## [Session 2] — 2026-04-27 — Shadow Refinement, Links, All Pages

### Việc đã làm

**1. Ghi docs** (ARCHITECTURE.md, DIARY.md, STYLEGUIDE.md)

**2. Cập nhật routes.ts**

- Sửa `rooms: "/rooms"` (đúng với folder `(main)/rooms/`)
- Thêm `roomDetail: (slug: string) => \`/rooms/\${slug}\``

**3. Shadow refinement — Home components**

- Giảm spread và opacity shadow trên tất cả Home components
- Nguyên tắc mới: y-offset ≤ 6px, spread ≤ 20px, opacity ≤ 0.15 (cho colored shadows)
- Button primary: từ `0_18px_42px_rgba(29,99,232,0.28)` → `0_4px_12px_rgba(29,99,232,0.15)`

**4. Fix links — FeaturedRoomsSection, DealsSection, SectionTitle**

- Room cards link đến `/rooms/[slug]`
- "Xem tất cả" link đến `/rooms`

**5. Shared components**

- `Breadcrumb.tsx` — dùng chung cho rooms, rooms/[slug], blog, offer, contact

**6. Refine tất cả pages**

- `rooms/page.tsx` — Container, CSS vars, shadows, Link room detail
- `rooms/[slug]/page.tsx` — Container, CSS vars, shadows, `h-0.75` tab underline
- `blog/page.tsx` — Container, CSS vars, shadows
- `offer/page.tsx` — Container, CSS vars, shadows, OfferFilters client component
- `contact/page.tsx` — Container, CSS vars, shadows, ContactForm client component

### Lỗi & Bài học

| Vấn đề                               | Nguyên nhân                                                                                    | Fix                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Màu page background bị khác nhau     | Pages dùng `from-[#f7fbff]` thay vì `from-background`                                          | Thống nhất dùng `from-background via-background to-card`         |
| `Lock` icon import không dùng đến    | Offer/contact page import icon thừa                                                            | Xóa import không dùng, chuyển Lock sang ContactForm              |
| `routes.ts` type error với satisfies | `roomDetail` là function nên type `as const satisfies Record<...>` cần cho phép function value | Dùng `Record<string, string \| ((...args: string[]) => string)>` |

### TypeScript check kết quả

`npx tsc --noEmit` → 0 errors ✅
