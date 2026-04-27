# FlamingoFE — Architecture

## Stack

| Layer             | Technology                      |
| ----------------- | ------------------------------- |
| Framework         | Next.js 16 (App Router)         |
| Language          | TypeScript 5                    |
| UI                | React 19                        |
| Styling           | Tailwind CSS v4                 |
| Component library | shadcn/ui (radix-ui primitives) |
| HTTP              | Axios                           |
| Validation        | Zod                             |
| Toast             | Sonner                          |
| Theme             | next-themes                     |
| Icons             | lucide-react                    |

## Directory Structure

```
src/
├── app/
│   ├── favicon.ico           ← Browser favicon (metadata file convention)
│   ├── icon.svg              ← App icon for modern browsers
│   ├── icon.png              ← PNG app icon fallback
│   ├── apple-icon.png        ← iOS home-screen icon
│   ├── manifest.json         ← PWA metadata manifest
│   ├── globals.css           ← Theme tokens (CSS variables, @theme, dark mode)
│   ├── layout.tsx            ← Root layout: html, body, ThemeProvider, ToasterClient
│   └── (main)/               ← Route group: shares Navbar + Footer layout
│       ├── layout.tsx        ← Injects Navbar + Footer (no <main> wrapper)
│       ├── page.tsx          ← Home page
│       ├── blog/page.tsx     ← Blog listing
│       ├── contact/page.tsx  ← Contact page
│       ├── offer/page.tsx    ← Offers page
│       └── rooms/
│           ├── page.tsx      ← Room listing
│           └── [slug]/
│               └── page.tsx  ← Room detail
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        ← Client (usePathname, ThemeToggle, auth buttons)
│   │   ├── Footer.tsx        ← Server
│   │   ├── NewsletterForm.tsx ← Client (email useState)
│   │   └── ThemeToggle.tsx   ← Client (useTheme, DropdownMenu Sun/Moon)
│   ├── auth/
│   │   ├── AuthCard.tsx      ← Server (layout wrapper for all auth pages)
│   │   └── AuthField.tsx     ← Client (input + password show/hide toggle)
│   ├── ui/
│   │   ├── Container.tsx     ← Max-width wrapper (1440px, 3xl: 1600px)
│   │   ├── Breadcrumb.tsx    ← Shared breadcrumb navigation
│   │   ├── dropdown-menu.tsx ← shadcn DropdownMenu (radix-ui based)
│   │   └── ...shadcn          ← button, card, input, badge, tabs, etc.
│   ├── Home/                 ← Page-scoped components for home
│   │   ├── HeroSection.tsx   ← Server
│   │   ├── SearchBar.tsx     ← Client
│   │   ├── FeaturedRoomsSection.tsx ← Client (tab state)
│   │   ├── CategoryTabs.tsx  ← Client (useState)
│   │   ├── DealsSection.tsx  ← Server
│   │   ├── ReasonsSection.tsx ← Server
│   │   ├── TestimonialsSection.tsx ← Client (future carousel)
│   │   ├── BlogSection.tsx   ← Server
│   │   └── SectionTitle.tsx  ← Server
│   └── Contact/
│       └── ContactForm.tsx   ← Client (form state)
│
├── routes/
│   └── routes.ts             ← All URL constants + navItems array
│
├── providers/
│   └── ThemeProvider.tsx     ← Client wrapper for next-themes
│
├── lib/
│   └── utils.ts              ← cn() utility
│
├── hooks/
│   └── useDebounce.ts
│
├── schemas/                  ← Zod schemas
├── services/                 ← API service layer (Axios)
├── types/                    ← TypeScript types
└── utils/
    └── httpRequest.ts        ← Axios instance config
```

## Routing

| Path            | Component                      | Notes                            |
| --------------- | ------------------------------ | -------------------------------- |
| `/`                | `(main)/page.tsx`                    | Home                             |
| `/rooms`           | `(main)/rooms/page.tsx`              | Room listing with filter sidebar |
| `/rooms/[slug]`    | `(main)/rooms/[slug]/page.tsx`       | Room detail                      |
| `/offer`           | `(main)/offer/page.tsx`              | Offers listing                   |
| `/login`           | `(auth)/login/page.tsx`              | Đăng nhập                        |
| `/register`        | `(auth)/register/page.tsx`           | Đăng ký                          |
| `/forgot-password` | `(auth)/forgot-password/page.tsx`    | Quên mật khẩu                    |
| `/reset-password`  | `(auth)/reset-password/page.tsx`     | Đặt lại mật khẩu                 |
| `/verify-email`    | `(auth)/verify-email/page.tsx`       | Xác thực email                   |
| `/blog`         | `(main)/blog/page.tsx`         | Blog listing                     |
| `/contact`      | `(main)/contact/page.tsx`      | Contact + map + form             |

## RSC Boundary Pattern

```
Server Component (default)
  └── imports Client Component ("use client")
      └── handles state, events, browser APIs
```

- Prefer server components for static display
- Client components only when: useState, useEffect, usePathname, event handlers
- Data passed from server → client as serializable props

## Theme System

All colors defined in `globals.css` via CSS custom properties:

- Use Tailwind utilities: `text-primary`, `bg-card`, `text-muted-foreground`, etc.
- Never hardcode hex values in component classes
- Shadow values remain as custom CSS (brand-specific, not tokenized)
- Dark mode via `.dark` class (next-themes)
