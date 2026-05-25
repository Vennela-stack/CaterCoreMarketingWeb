import { cn } from "@/lib/cn";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 select-none",
        className,
      )}
    >
      {/* Bell icon — bare on canvas, matches reference */}
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] text-ember-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 17h14l-1.4-1.6a3 3 0 0 1-.6-1.8V11a5 5 0 0 0-10 0v2.6c0 .66-.22 1.3-.6 1.8L5 17z" />
        <path d="M10 20a2 2 0 0 0 4 0" />
      </svg>
      {showWordmark && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink-50">
          CaterCore
        </span>
      )}
    </span>
  );
}
