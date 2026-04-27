"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, routes } from "@/routes/routes";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <Container className="flex items-center justify-between gap-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-linear-to-b from-secondary to-card text-2xl font-bold text-primary">
            F
          </div>
          <div>
            <p className="text-[28px] leading-none font-black tracking-tight text-foreground">
              FLAMINGO
            </p>
            <p className="mt-1 text-sm font-semibold tracking-wide text-muted-foreground">
              HẢI TIẾN BOOKING
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 xl:flex 2xl:gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] font-semibold transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-5 mx-auto h-0.75 w-14 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2.5">
          {/* Theme toggle — left of auth buttons */}
          <ThemeToggle />

          {/* Auth buttons */}
          <Link
            href={routes.login}
            className="hidden h-10 items-center rounded-xl border border-border bg-card px-4 text-sm font-semibold text-foreground transition hover:bg-secondary sm:inline-flex"
          >
            Đăng nhập
          </Link>
          <Link
            href={routes.register}
            className="inline-flex h-10 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
          >
            Đăng ký
          </Link>
        </div>
      </Container>
    </header>
  );
}
