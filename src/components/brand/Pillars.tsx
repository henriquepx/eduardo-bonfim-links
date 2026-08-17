import { cn } from "@/lib/utils";

const DEFAULT = ["Musculação", "Boxe", "Estética", "Performance"];

/** Etiquetas de posicionamento. */
export function Pillars({ items = DEFAULT, className }: { items?: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border/80 bg-[color-mix(in_oklab,var(--card)_70%,transparent)] px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
