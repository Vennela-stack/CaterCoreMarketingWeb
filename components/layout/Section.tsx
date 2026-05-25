import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  /**
   * Vertical padding scale. Sections are spacing-independent so they remain
   * trivially reorderable.
   */
  padding?: "default" | "tight" | "loose" | "none";
};

const PADDING = {
  none: "py-0",
  tight: "py-16 md:py-20",
  default: "py-24 md:py-32",
  loose: "py-28 md:py-40",
} as const;

export function Section({
  id,
  className,
  innerClassName,
  children,
  padding = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative isolate", PADDING[padding], className)}
    >
      <div className={cn("container-page", innerClassName)}>{children}</div>
    </section>
  );
}
