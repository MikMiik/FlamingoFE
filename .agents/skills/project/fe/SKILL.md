---
name: flamingo-fe-ui-refinement
description: Quy trình tinh chỉnh UI cho các page trong dự án FlamingoFE (Next.js 16, React 19, Tailwind CSS v4). Áp dụng khi thêm page mới, refactor page cũ, hoặc đảm bảo tính nhất quán theme. Bao gồm: cập nhật Tailwind v4 syntax, dùng CSS variables từ globals.css, tách components, tổ chức file chuẩn.
allowed-tools: Read, Write, Edit, Glob, Grep, Shell
---

# FlamingoFE UI Refinement Workflow

Quy trình chuẩn để tinh chỉnh UI cho từng page trong dự án FlamingoFE.
Stack: **Next.js 16**, **React 19**, **Tailwind CSS v4**, **TypeScript**, **shadcn/ui**.

---

## Bước 0: Đọc & Hiểu Context Trước Khi Làm

Trước khi chỉnh bất kỳ page nào, **bắt buộc** đọc:

1. `src/app/globals.css` — nắm theme tokens (màu primary, muted, border, card, …)
2. `src/app/layout.tsx` — root layout, providers
3. `src/app/(main)/layout.tsx` — layout chung (Navbar, Footer)
4. `src/routes/routes.ts` — danh sách routes
5. Tệp page đang làm việc

---

## Bước 1: Cập Nhật Tailwind CSS v4 Syntax

### Quy tắc chuyển đổi giá trị tùy ý → scale chuẩn

| Giá trị cũ    | Giá trị mới | Ghi chú          |
| ------------- | ----------- | ---------------- |
| `h-[3px]`     | `h-0.75`    | 3px = 0.75 × 4px |
| `h-[2px]`     | `h-0.5`     | 2px = 0.5 × 4px  |
| `h-[1px]`     | `h-px`      |                  |
| `text-[18px]` | `text-lg`   | 18px = 1.125rem  |
| `text-[16px]` | `text-base` | 16px = 1rem      |
| `text-[14px]` | `text-sm`   | 14px = 0.875rem  |
| `text-[12px]` | `text-xs`   | 12px = 0.75rem   |
| `text-[36px]` | `text-4xl`  | 36px = 2.25rem   |
| `text-[60px]` | `text-6xl`  | 60px = 3.75rem   |
| `text-[72px]` | `text-7xl`  | 72px = 4.5rem    |
| `text-[20px]` | `text-xl`   | 20px = 1.25rem   |
| `text-[24px]` | `text-2xl`  | 24px = 1.5rem    |

> **Chú ý:** Chỉ chuyển đổi khi giá trị px tương ứng chính xác với Tailwind scale.
> Giá trị không có chuẩn (15px, 17px, 22px, 26px, 28px, …) giữ nguyên dạng `text-[Npx]`.
> Giá trị kích thước lớn không có điểm tương đương (78px, 84px, 148px…) giữ nguyên.

### Quy tắc gradient v4

| Cũ                 | Mới              |
| ------------------ | ---------------- |
| `bg-gradient-to-b` | `bg-linear-to-b` |
| `bg-gradient-to-r` | `bg-linear-to-r` |

### Lưu ý quan trọng về font-size conversion

Khi convert `text-[Npx]` → `text-*`, class `text-*` trong Tailwind v4 đặt cả `font-size` và `line-height` mặc định. Nếu có class `leading-*` riêng thì an toàn để convert. Nếu không có `leading-*`, kiểm tra visual có bị lệch không.

---

## Bước 2: Áp Dụng CSS Variables Từ globals.css

Thay thế màu hex hardcode bằng semantic CSS variables. **Không dùng màu hex trực tiếp** trong Tailwind class nếu đã có biến tương ứng.

### Bảng mapping màu (FlamingoFE theme)

| Màu hex hardcode                                                            | Tailwind utility                               | Ngữ cảnh                   |
| --------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------- |
| `#1d63e8`, `#1b63e3`, `#1458d8`, `#1965ea`                                  | `text-primary` / `bg-primary`                  | Màu xanh chủ đạo           |
| `#0c3475`, `#123a82`, `#0a3578`, `#0f2958`, `#0f3e89`                       | `text-foreground`                              | Tiêu đề, text navy đậm     |
| `#f0f6ff`, `#eff6ff`, `#e8f0ff`                                             | `bg-secondary`                                 | Nền xanh nhạt              |
| `#e8eefb`, `#e7effc`, `#edf2fb`, `#d7e6ff`, `#cfe0ff`, `#dbe7ff`, `#d9e5fb` | `border-border`                                | Đường kẻ/viền              |
| `text-slate-900`                                                            | `text-foreground`                              | Text chính                 |
| `text-slate-600`, `text-slate-500`, `text-slate-700`                        | `text-muted-foreground`                        | Text phụ                   |
| `bg-white`                                                                  | `bg-card` hoặc `bg-background`                 | Nền trắng                  |
| `#5f84cc`, `#7a97cf`                                                        | `text-primary/60` hoặc `text-muted-foreground` | Icon màu xanh nhạt         |
| `#f9b72f`                                                                   | Giữ nguyên                                     | Màu vàng sao               |
| `#7ac143`                                                                   | Giữ nguyên                                     | Màu xanh lá DMCA           |
| `shadow-[0_*px_*px_rgba(15,61,145,*)]`                                      | Giữ nguyên                                     | Shadow đặc thù thương hiệu |

### Ví dụ thực tế

```tsx
// ❌ Hardcode
<div className="bg-[#1d63e8] text-white border border-[#e8eefb]">
  <h2 className="text-[#0c3475]">Title</h2>
  <p className="text-slate-500">Description</p>
</div>

// ✅ CSS Variables
<div className="bg-primary text-primary-foreground border border-border">
  <h2 className="text-foreground">Title</h2>
  <p className="text-muted-foreground">Description</p>
</div>
```

---

## Bước 3: Container Chuẩn

Luôn dùng component `Container` thay vì lặp lại class container:

```tsx
// src/components/ui/Container.tsx
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-4 sm:px-5 lg:px-6 3xl:max-w-[1600px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
```

Dùng trong tất cả section:

```tsx
// ✅ Đúng
<section>
  <Container className="mt-8">
    ...content...
  </Container>
</section>

// ❌ Sai - lặp lại class container
<section className="mx-auto w-full max-w-[1440px] px-4 ...">
  ...
</section>
```

---

## Bước 4: Tổ Chức Routes

Tạo `src/routes/routes.ts` cho tất cả URL trong app:

```ts
export const routes = {
  home: "/",
  rooms: "/rooms",
  offers: "/offer",
  blog: "/blog",
  contact: "/contact",
} as const;

export type Routes = typeof routes;
export type RoutePath = Routes[keyof Routes];

export const navItems = [
  { label: "Trang chủ", href: routes.home },
  { label: "Phòng", href: routes.rooms },
  { label: "Ưu đãi", href: routes.offers },
  { label: "Cẩm nang", href: routes.blog },
  { label: "Liên hệ", href: routes.contact },
] as const satisfies ReadonlyArray<{ label: string; href: string }>;
```

---

## Bước 5: Layout Chung - Navbar & Footer

### Navbar (`src/components/layout/Navbar.tsx`)

- **Client component** (`"use client"`) vì cần `usePathname()` để highlight active nav item.
- Dùng `Link` từ `next/link`, KHÔNG dùng `<a href>` cho internal links.
- Dùng `<header>` semantic element với `sticky top-0 z-50`.
- Active state dựa trên `pathname === item.href`.
- Underline active: `h-0.75` (3px) thay vì `h-[3px]`.

### Footer (`src/components/layout/Footer.tsx`)

- **Server component** (mặc định).
- Import `NewsletterForm` client component để handle input state.
- Không chứa logic tương tác trực tiếp.

### NewsletterForm (`src/components/layout/NewsletterForm.tsx`)

- **Client component** (`"use client"`) vì có `useState` cho email input.
- Dùng `<form onSubmit>` với `e.preventDefault()`.

### Layout (`src/app/(main)/layout.tsx`)

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
```

> **⚠️ QUAN TRỌNG:** Layout KHÔNG bọc `children` trong `<main>`. Để mỗi page tự khai báo `<main>` của mình để tránh nested `<main>` (lỗi semantic HTML).

---

## Bước 6: Tách Components - Phân Chia Server / Client

### Quy tắc phân loại

| Loại             | Khi nào                                                                 | Directive                      |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------ |
| Server Component | Static display, không có hooks, không có event handlers                 | Mặc định (không cần directive) |
| Client Component | Cần `useState`, `useEffect`, `useRouter`, `usePathname`, event handlers | `"use client"` ở đầu file      |

### Cấu trúc thư mục components

```
src/components/
├── layout/
│   ├── Navbar.tsx          (client - usePathname)
│   ├── Footer.tsx          (server)
│   ├── NewsletterForm.tsx  (client - useState)
│   └── ToasterClient.tsx   (client)
├── ui/
│   ├── Container.tsx       (server)
│   ├── button.tsx          (server/client - shadcn)
│   └── ...
└── Home/                   (hoặc tên page tương ứng)
    ├── SectionTitle.tsx    (server)
    ├── HeroSection.tsx     (server)
    ├── SearchBar.tsx       (client - future filter state)
    ├── FeaturedRoomsSection.tsx (client - tab state)
    ├── CategoryTabs.tsx    (client - useState)
    ├── DealsSection.tsx    (server)
    ├── ReasonsSection.tsx  (server)
    ├── TestimonialsSection.tsx (client - future carousel state)
    └── BlogSection.tsx     (server)
```

### SectionTitle component tái sử dụng

```tsx
// src/components/Home/SectionTitle.tsx (hoặc components/shared/)
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionTitleProps {
  title: string;
  action?: string;
  actionHref?: string;
}

export function SectionTitle({ title, action, actionHref }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
        {title}
      </h2>
      {action &&
        (actionHref ? (
          <Link
            href={actionHref}
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-semibold text-primary shadow-sm transition hover:bg-secondary"
          >
            {action} <ChevronRight className="size-4" />
          </Link>
        ) : (
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-semibold text-primary shadow-sm transition hover:bg-secondary">
            {action} <ChevronRight className="size-4" />
          </button>
        ))}
    </div>
  );
}
```

---

## Bước 7: Patterns Tailwind Đặc Thù Dự Án

### Cards & Articles

```tsx
// Pattern chuẩn cho card
<article className="overflow-hidden rounded-[18px] border border-border bg-card shadow-[0_18px_42px_rgba(15,61,145,0.08)] transition hover:shadow-[0_22px_50px_rgba(15,61,145,0.13)]">
  ...
</article>
```

### Carousel Navigation Buttons

```tsx
<button
  aria-label="Trước"
  className="absolute top-1/2 left-[-8px] z-10 hidden size-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-primary shadow-[0_10px_24px_rgba(21,74,171,0.10)] transition hover:bg-secondary 2xl:grid"
>
  <ChevronLeft className="size-5" />
</button>
```

### Primary Button

```tsx
<button className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[0_18px_42px_rgba(29,99,232,0.28)] transition hover:bg-primary/90">
  Tìm phòng
</button>
```

### Outline Button

```tsx
<button className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-semibold text-primary shadow-sm transition hover:bg-secondary">
  Xem thêm
</button>
```

### Icon Badge

```tsx
<div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
  <SomeIcon className="size-5" />
</div>
```

### Responsive Grid Sections

```tsx
// 1 → 2 → 3 → 5 cols
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 2xl:gap-5">

// 1 → 2 → 4 cols (blog)
<div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4 2xl:gap-5">

// 1 → 3 cols (deals, testimonials)
<div className="grid gap-4 xl:grid-cols-3 2xl:gap-5">
```

---

## Bước 8: Responsive & Accessibility

- Luôn thêm `aria-label` cho icon-only buttons (carousel, close, toggle).
- Dùng `shrink-0` cho icons trong flex containers để tránh icon bị co.
- Dùng `min-w-0` cho text containers trong flex để tránh overflow.
- Thêm `transition` / `transition-colors` cho interactive elements.
- Thêm `hover:` state cho mọi clickable element.
- Ảnh trong `<article>` card: thêm `transition duration-300 hover:scale-105` cho hiệu ứng zoom nhẹ.

---

## Bước 9: Kiểm Tra Sau Khi Hoàn Thành

```bash
# TypeScript check - phải 0 errors
npx tsc --noEmit

# Lint check - phải 0 errors
npx eslint src/
```

Dùng `ReadLints` tool để kiểm tra từng file sau khi edit.

---

## Lỗi Thường Gặp & Cách Xử Lý

| Lỗi                                                  | Nguyên nhân                                  | Fix                                                                                       |
| ---------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Nested `<main>`                                      | Layout wrap `<main>`, page cũng có `<main>`  | Layout dùng fragment `<>`, không wrap `<main>`                                            |
| `usePathname` không hoạt động                        | Quên `"use client"` trong Navbar             | Thêm `"use client"` đầu file                                                              |
| `useSearchParams` requires Suspense                  | Hook yêu cầu Suspense boundary               | Wrap trong `<Suspense>` ở parent                                                          |
| `bg-linear-to-*` không hoạt động                     | Dùng `bg-gradient-to-*` (Tailwind v3 syntax) | Đổi sang `bg-linear-to-*` (v4)                                                            |
| `bg-white/12` không hiển thị đúng                    | Không tương thích với oklch                  | Dùng `bg-white/20` hoặc `rgba(255,255,255,0.12)`                                          |
| Shadow color không match theme                       | Hardcode rgba trong shadow                   | Giữ nguyên shadow brand-specific, không thay bằng CSS variable                            |
| Client component import server component với `async` | RSC boundary violation                       | Async component phải là server component, đặt dữ liệu fetch ở server rồi pass props xuống |

---

## Cấu Trúc File Hoàn Chỉnh Tham Khảo

```
src/
├── app/
│   ├── globals.css                 ← Theme tokens (KHÔNG SỬA trừ khi thêm token mới)
│   ├── layout.tsx                  ← Root layout
│   └── (main)/
│       ├── layout.tsx              ← Navbar + Footer (không wrap <main>)
│       ├── page.tsx                ← Home page (import từ components/Home/)
│       ├── blog/page.tsx
│       ├── rooms/page.tsx
│       ├── offer/page.tsx
│       └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              ← client
│   │   ├── Footer.tsx              ← server
│   │   └── NewsletterForm.tsx      ← client
│   ├── ui/
│   │   └── Container.tsx           ← server
│   └── Home/                       ← Tách theo tên page
│       ├── SectionTitle.tsx
│       ├── HeroSection.tsx
│       ├── SearchBar.tsx           ← client
│       ├── CategoryTabs.tsx        ← client
│       ├── FeaturedRoomsSection.tsx ← client
│       ├── DealsSection.tsx
│       ├── ReasonsSection.tsx
│       ├── TestimonialsSection.tsx ← client
│       └── BlogSection.tsx
└── routes/
    └── routes.ts                   ← Tất cả URLs
```
