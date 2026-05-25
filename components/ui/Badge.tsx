import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "ember" | "sage" | "azure";
};

const TONE = {
  neutral: "bg-[rgba(11,13,16,0.05)] text-ink-200 border-[rgba(11,13,16,0.15)]",
  ember: "bg-ember-500/10 text-ember-200 border-ember-400/20",
  sage:  "bg-sage-500/10  text-sage-400  border-sage-500/20",
  azure: "bg-azure-500/10 text-azure-400 border-azure-500/20",
} as const;

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
        "text-[11px] font-medium uppercase tracking-[0.14em]",
        TONE[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Dot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-block h-1.5 w-1.5 rounded-full bg-current",
        className,
      )}
    />
  );
}
