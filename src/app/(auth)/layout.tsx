import Image from "next/image";
import Link from "next/link";
import { routes } from "@/routes/routes";

const brandFeatures = [
  "Bãi biển riêng trực diện",
  "Hồ bơi vô cực view biển",
  "Dịch vụ Spa & wellness",
  "Ẩm thực hải sản đặc sắc",
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left panel — brand visual, hidden on mobile */}
      <div className="relative hidden flex-1 overflow-hidden xl:flex">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="Flamingo Hải Tiến"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/85 via-primary/60 to-foreground/40" />

        {/* Content over image */}
        <div className="relative flex flex-col justify-between p-10 2xl:p-14">
          {/* Logo */}
          <Link href={routes.home} className="inline-flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-white/20 text-2xl font-black text-white backdrop-blur-sm">
              F
            </div>
            <div>
              <p className="text-xl font-black leading-none tracking-tight text-white">
                FLAMINGO
              </p>
              <p className="mt-1 text-xs font-semibold tracking-widest text-white/70">
                HẢI TIẾN BOOKING
              </p>
            </div>
          </Link>

          {/* Tagline */}
          <div>
            <h2 className="text-[38px] font-extrabold leading-tight tracking-tight text-white 2xl:text-[46px]">
              Kỳ nghỉ hoàn hảo
              <br />
              <span className="text-white/80">bắt đầu từ đây</span>
            </h2>
            <p className="mt-4 max-w-[380px] text-base leading-7 text-white/70">
              Trải nghiệm nghỉ dưỡng đẳng cấp tại Flamingo Hải Tiến — nơi biển
              xanh gặp gỡ sự sang trọng và tiện nghi tuyệt đỉnh.
            </p>

            <ul className="mt-6 space-y-3">
              {brandFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-3 text-white/85"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-white/20 text-xs text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right panel — auth form */}
      <div className="flex flex-1 flex-col bg-background xl:max-w-[560px]">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4 xl:hidden">
          <Link href={routes.home} className="inline-flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl border border-border bg-linear-to-b from-secondary to-card text-lg font-black text-primary">
              F
            </div>
            <p className="text-lg font-black tracking-tight text-foreground">
              FLAMINGO
            </p>
          </Link>
          <Link
            href={routes.home}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            ← Trang chủ
          </Link>
        </div>

        <div className="hidden border-b border-border px-8 py-4 xl:block">
          <Link
            href={routes.home}
            className="inline-flex h-10 items-center rounded-xl border border-border bg-card px-4 text-sm font-semibold text-foreground shadow-[0_2px_8px_rgba(15,61,145,0.06)] transition hover:bg-secondary hover:text-primary"
          >
            ← Quay về trang chủ
          </Link>
        </div>

        {/* Form area */}
        <div className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
