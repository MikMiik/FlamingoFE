import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-360 px-4 sm:px-5 lg:px-6 3xl:max-w-400",
        className,
      )}
    >
      {children}
    </div>
  );
}
