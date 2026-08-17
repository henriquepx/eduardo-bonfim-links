import { cn } from "@/lib/utils";

/** Monograma BB — marca gráfica proprietária usada no header e no footer. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-[10px] border font-display text-[13px] tracking-[0.08em]",
        "border-[color-mix(in_oklab,var(--neon)_45%,transparent)] text-[var(--neon)]",
        className,
      )}
      style={{ background: "var(--gradient-edge)", boxShadow: "var(--glow-soft)" }}
    >
      BB
    </span>
  );
}
