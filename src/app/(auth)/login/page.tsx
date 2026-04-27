import Link from "next/link";
import { routes } from "@/routes/routes";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthField } from "@/components/auth/AuthField";

export default function LoginPage() {
  return (
    <AuthCard
      title="Đăng nhập"
      description="Chào mừng bạn quay lại Flamingo Hải Tiến. Vui lòng điền thông tin tài khoản để tiếp tục."
      footerText="Chưa có tài khoản?"
      footerActionLabel="Đăng ký ngay"
      footerActionHref={routes.register}
    >
      <form className="space-y-4">
        <AuthField label="Email" placeholder="you@example.com" type="email" />
        <AuthField label="Mật khẩu" placeholder="Nhập mật khẩu" type="password" />

        <div className="flex items-center justify-between text-sm">
          <label className="inline-flex cursor-pointer items-center gap-2 text-muted-foreground">
            <input
              type="checkbox"
              className="size-4 rounded border-border accent-primary"
            />
            Ghi nhớ đăng nhập
          </label>
          <Link
            href={routes.forgotPassword}
            className="font-medium text-primary hover:underline"
          >
            Quên mật khẩu?
          </Link>
        </div>

        <button
          type="button"
          className="h-11 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
        >
          Đăng nhập
        </button>

        {/* Divider */}
        <div className="relative flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">hoặc tiếp tục với</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Social login */}
        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-3 rounded-xl border border-border bg-card text-sm font-medium text-foreground transition hover:bg-secondary"
        >
          <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Đăng nhập với Google
        </button>
      </form>
    </AuthCard>
  );
}
