import Link from "next/link";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footerText: string;
  footerActionLabel: string;
  footerActionHref: string;
}

export function AuthCard({
  title,
  description,
  children,
  footerText,
  footerActionLabel,
  footerActionHref,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-[440px] rounded-3xl border border-border bg-card/90 p-7 shadow-[0_8px_32px_rgba(15,61,145,0.10)] backdrop-blur-sm md:p-8">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-linear-to-b from-secondary to-card text-xl font-black text-primary">
          F
        </div>
        <div>
          <p className="text-lg font-black leading-none tracking-tight text-foreground">
            FLAMINGO
          </p>
          <p className="mt-0.5 text-xs font-semibold tracking-wide text-muted-foreground">
            HẢI TIẾN BOOKING
          </p>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Content */}
      <div className="mt-6">{children}</div>

      {/* Footer */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        {footerText}{" "}
        <Link
          href={footerActionHref}
          className="font-semibold text-primary hover:underline"
        >
          {footerActionLabel}
        </Link>
      </p>
    </div>
  );
}

