import { routes } from "@/routes/routes";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthField } from "@/components/auth/AuthField";

export default function ResetPasswordPage() {
  return (
    <AuthCard
      title="Đặt lại mật khẩu"
      description="Thiết lập mật khẩu mới để tiếp tục sử dụng tài khoản của bạn."
      footerText="Bạn muốn đăng nhập ngay?"
      footerActionLabel="Đi tới trang đăng nhập"
      footerActionHref={routes.login}
    >
      <form className="space-y-4">
        <AuthField label="Mật khẩu mới" placeholder="Tối thiểu 8 ký tự" type="password" />
        <AuthField label="Xác nhận mật khẩu" placeholder="Nhập lại mật khẩu mới" type="password" />

        <ul className="space-y-1.5 rounded-2xl border border-border bg-secondary/50 px-4 py-3">
          {[
            "Tối thiểu 8 ký tự",
            "Ít nhất 1 chữ hoa",
            "Ít nhất 1 chữ số",
          ].map((req) => (
            <li key={req} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-border" />
              {req}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="h-11 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_4px_12px_rgba(29,99,232,0.15)] transition hover:bg-primary/90"
        >
          Cập nhật mật khẩu
        </button>
      </form>
    </AuthCard>
  );
}
