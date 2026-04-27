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
            {action}
            <ChevronRight className="size-4" />
          </Link>
        ) : (
          <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-semibold text-primary shadow-sm transition hover:bg-secondary">
            {action}
            <ChevronRight className="size-4" />
          </button>
        ))}
    </div>
  );
}
