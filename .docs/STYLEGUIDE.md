# FlamingoFE — Style Guide

## Design Language

**Ocean Blue** resort theme. Clean, airy, premium. Color palette inspired by sea and sky.

---

## Color Tokens (globals.css)

| Token                  | Light Mode (approx.)      | Usage                                 |
| ---------------------- | ------------------------- | ------------------------------------- |
| `--primary`            | Ocean blue `#1d63e8`      | CTAs, links, active states, prices    |
| `--primary-foreground` | Near-white                | Text on primary bg                    |
| `--foreground`         | Dark navy `#0c2a5a`       | Headings, important text              |
| `--muted-foreground`   | Slate blue `#6b7e9e`      | Body text, labels, descriptions       |
| `--secondary`          | Light blue `#eef3fb`      | Icon bg, hover bg, light chips        |
| `--card`               | White `#fff`              | Card backgrounds                      |
| `--background`         | Off-white `#f7fbff`       | Page background                       |
| `--border`             | Light blue-grey `#e4ebf5` | Card borders, dividers, input borders |
| `--accent`             | Medium blue               | Accent/badge bg                       |
| `--destructive`        | Red                       | Error states                          |
| `--ring`               | Primary blue              | Focus rings                           |

### How to apply

```tsx
// ✅ Correct
<h2 className="text-foreground">Title</h2>
<p className="text-muted-foreground">Description</p>
<div className="bg-card border border-border">...</div>
<button className="bg-primary text-primary-foreground">...</button>
<div className="bg-secondary text-primary">Icon bg</div>

// ❌ Never hardcode hex in class
<h2 className="text-[#15366f]">Title</h2>
<div className="bg-[#f4f7fd]">...</div>
```

---

## Typography Scale

| Token         | Size | Usage                 |
| ------------- | ---- | --------------------- |
| `text-xs`     | 12px | Tiny labels           |
| `text-sm`     | 14px | Body small, metadata  |
| `text-[15px]` | 15px | Body (no TW standard) |
| `text-base`   | 16px | Body standard         |
| `text-lg`     | 18px | Sub-headings, prices  |
| `text-xl`     | 20px | Section sub-titles    |
| `text-2xl`    | 24px | Card headings         |
| `text-4xl`    | 36px | Hero headings (md)    |
| `text-6xl`    | 60px | Hero large            |

> Always prefer Tailwind scale values. Only use `text-[Npx]` for sizes without a Tailwind equivalent (15px, 17px, 22px, 26px, 28px, 31px, etc.)

---

## Shadows — Refined Scale

Use **subtle** shadows. Avoid heavy/wide spreads.

| Variant          | Class                                      | Usage                    |
| ---------------- | ------------------------------------------ | ------------------------ |
| Card             | `shadow-[0_2px_12px_rgba(15,61,145,0.06)]` | Article cards            |
| Panel            | `shadow-[0_4px_16px_rgba(15,61,145,0.07)]` | Sidebar, aside panels    |
| Widget           | `shadow-[0_4px_20px_rgba(31,88,197,0.08)]` | Search bar, filters      |
| Button primary   | `shadow-[0_4px_12px_rgba(29,99,232,0.15)]` | CTA buttons              |
| Button secondary | `shadow-sm`                                | Outline/ghost buttons    |
| Icon badge       | `shadow-[0_2px_8px_rgba(20,73,167,0.08)]`  | Floating icon buttons    |
| Overlay pin      | `shadow-[0_4px_14px_rgba(0,0,0,0.10)]`     | Map pin, floating labels |

> Rule: y-offset max 6px, spread max 20px, opacity max 0.15 for colored shadows.

---

## Border Radius

| Usage                  | Value            |
| ---------------------- | ---------------- |
| Cards / articles       | `rounded-[18px]` |
| Large panels / aside   | `rounded-[20px]` |
| Inputs / chips         | `rounded-xl`     |
| Buttons (primary)      | `rounded-xl`     |
| Buttons (small)        | `rounded-lg`     |
| Avatars / icon circles | `rounded-full`   |
| Filter bar wrapper     | `rounded-[22px]` |
| Gallery thumb          | `rounded-[16px]` |

---

## Spacing Rhythm

- Section vertical gap: `mt-7` (home sections), `mt-8`, `mt-5` (detail sections)
- Grid gap: `gap-4` (mobile), `2xl:gap-5` (large)
- Card inner padding: `px-4 py-4` → `2xl:px-5`
- Container: uses `Container` component (max-w-[1440px] + responsive padding)

---

## Interactive States

```tsx
// Hover transitions — always add transition
className = "transition hover:bg-secondary";
className = "transition-colors hover:text-primary";
className = "transition hover:shadow-[0_4px_16px_rgba(15,61,145,0.10)]";

// Image zoom on hover
className = "object-cover transition duration-300 hover:scale-105";

// Focus ring (inherits from globals.css)
// ← automatic via @layer base { * { @apply outline-ring/50 } }
```

---

## Container

Always use the `Container` component — never repeat the max-width string:

```tsx
import { Container } from "@/components/ui/Container";

// In a section
<section>
  <Container className="mt-7">
    ...
  </Container>
</section>

// With extra className
<Container className="pt-7 pb-12">
```

---

## Breadcrumb

```tsx
import { Breadcrumb } from "@/components/ui/Breadcrumb";

<Breadcrumb
  items={[
    { label: "Trang chủ", href: routes.home },
    { label: "Phòng & Villa", href: routes.rooms },
    { label: "IB 1526" },
  ]}
/>;
```

---

## Gradient Syntax (Tailwind v4)

```tsx
// ✅ v4 syntax
"bg-linear-to-b from-background to-card";
"bg-linear-to-r from-secondary/50 via-background to-secondary/30";

// ❌ v3 syntax (DO NOT USE)
"bg-gradient-to-b ...";
```

---

## Page Background

All pages in `(main)` use the same background:

```tsx
<main className="min-h-screen bg-linear-to-b from-background via-background to-card pb-12">
```

---

## Navbar Active Underline

Use `h-0.75` (3px) not `h-[3px]`:

```tsx
<span className="absolute inset-x-0 -bottom-5 mx-auto h-0.75 w-14 rounded-full bg-primary" />
```

---

## Image Usage

- Always `next/image` with `fill` + `sizes` prop
- Cover with `object-cover`
- Hover zoom: `transition duration-300 hover:scale-105` on parent `overflow-hidden`
- Priority for hero/LCP images

---

## Icon Usage

- All icons from `lucide-react`
- Standard sizes: `size-4` (16px), `size-5` (20px), `size-6` (24px)
- Icon color in content: `text-primary/50` or `text-muted-foreground`
- Icon in icon-badge: `text-primary` on `bg-secondary`
- Always use `shrink-0` in flex containers
