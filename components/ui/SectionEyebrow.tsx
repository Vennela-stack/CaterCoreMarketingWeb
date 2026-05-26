import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  // `light` = used on the paper canvas (dark hairlines).
  // `dark`  = used on dark panels like the CTA (cream hairlines).
  tone?: "light" | "dark";
};

export function SectionEyebrow({ children, className, tone = "light" }: Props) {
  const line = tone === "dark" ? "bg-ink-950/35" : "bg-ink-50/20";
  const text = tone === "dark" ? "text-ink-700" : "text-ink-300";

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        className,
      )}
    >
      <span aria-hidden className={cn("block h-px w-16", line)} />
      <span
        className={cn(
          "text-[10.5px] font-semibold uppercase tracking-[0.32em]",
          text,
        )}
      >
        {children}
      </span>
      <span aria-hidden className={cn("block h-px w-16", line)} />
    </div>
  );
}
