import Link from "next/link";
import { CircleCheckBig, Mail, RefreshCcw } from "lucide-react";
import { routes } from "@/routes/routes";
import { AuthCard } from "@/components/auth/AuthCard";

export default function VerifyEmailPage() {
  return (
    <AuthCard
      title="Xác thực email"
      description="Chúng tôi đã gửi email xác thực. Hãy kiểm tra hộp thư để kích hoạt tài khoản của bạn."
      footerText="Không nhận được email?"
      footerActionLabel="Gửi lại"
      footerActionHref={routes.verifyEmail}
    >
      <div className="space-y-4">
        {/* Email indicator */}
        <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 px-4 py-3.5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="size-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">you@example.com</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Liên kết xác thực có hiệu lực trong{" "}
              <span className="font-semibold text-foreground">15 phút</span>
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-2.5 rounded-2xl border border-border bg-card p-4">
          {[
            "Kiểm tra hộp thư đến hoặc thư rác",
            "Nhấn vào liên kết xác thực trong email",
            "Tài khoản sẽ được kích hoạt ngay lập tức",
          ].map((step, index) => (
            <div key={step} className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                {index + 1}
              </span>
              {step}
            </div>
          ))}
        </div>

        {/* Info banner */}
        <div className="flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3.5">
          <CircleCheckBig className="mt-0.5 size-4 shrink-0 text-primary" />
          <p className="text-sm leading-6 text-foreground">
            Sau khi xác thực, bạn có thể đăng nhập và bắt đầu đặt phòng ngay hôm nay.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
          >
            Tôi đã xác thực
          </button>
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            <RefreshCcw className="size-4" />
            Gửi lại
          </button>
        </div>

        <Link
          href={routes.login}
          className="flex items-center justify-center text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          ← Quay về đăng nhập
        </Link>
      </div>
    </AuthCard>
  );
}
