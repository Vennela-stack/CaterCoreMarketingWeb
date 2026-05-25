import * as React from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const VARIANT: Record<Variant, string> = {
  primary: [
    "bg-ember-400 text-ink-950",
    "hover:bg-ember-300",
    "shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_10px_28px_-10px_rgba(239,68,68,0.55)]",
    "active:translate-y-px",
  ].join(" "),
  secondary: [
    "bg-[rgba(11,13,16,0.05)] text-ink-50",
    "border border-[rgba(11,13,16,0.15)]",
    "hover:bg-[rgba(11,13,16,0.08)] hover:border-[rgba(11,13,16,0.20)]",
  ].join(" "),
  ghost: [
    "bg-transparent text-ink-100",
    "hover:bg-[rgba(11,13,16,0.05)] hover:text-ink-50",
  ].join(" "),
};

const SIZE: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm rounded-lg",
  md: "h-11 px-5 text-[15px] rounded-xl",
  lg: "h-12 px-6 text-[15px] rounded-xl",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: never;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", size = "md", children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium",
          "transition-all duration-200 ease-out",
          "focus-ring",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          VARIANT[variant],
          SIZE[size],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export function LinkButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium",
        "transition-all duration-200 ease-out",
        "focus-ring",
        VARIANT[variant],
        SIZE[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
