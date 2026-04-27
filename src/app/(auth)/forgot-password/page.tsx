import { routes } from "@/routes/routes";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthField } from "@/components/auth/AuthField";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Quên mật khẩu"
      description="Nhập email đã đăng ký. Chúng tôi sẽ gửi liên kết đặt lại mật khẩu cho bạn trong vài phút."
      footerText="Nhớ lại mật khẩu rồi?"
      footerActionLabel="Quay lại đăng nhập"
      footerActionHref={routes.login}
    >
      <form className="space-y-4">
        <AuthField label="Email" placeholder="you@example.com" type="email" />

        <button
          type="button"
          className="h-11 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
        >
          Gửi liên kết đặt lại
        </button>
      </form>
    </AuthCard>
  );
}
