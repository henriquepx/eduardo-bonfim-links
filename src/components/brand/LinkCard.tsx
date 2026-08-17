import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export type LinkItem = {
  index: string;
  title: string;
  description: string;
  to?: string;
  href?: string;
  featured?: boolean;
};

export function LinkCard({ item, order = 0 }: { item: LinkItem; order?: number }) {
  const content = (
    <>
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 bg-[var(--neon)] transition-transform duration-500 [transition-timing-function:var(--ease-brand)] group-hover:scale-y-100"
      />
      <span className="font-display text-[11px] tracking-[0.28em] text-[color-mix(in_oklab,var(--neon)_75%,white)]">
        {item.index}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-lg leading-tight tracking-[0.06em] text-foreground transition-colors duration-300 group-hover:text-[var(--neon)]">
          {item.title}
        </span>
        <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">
          {item.description}
        </span>
      </span>
      <ArrowUpRight
        aria-hidden
        className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--neon)]"
      />
    </>
  );

  const base =
    "surface card-hover group relative flex items-start gap-4 overflow-hidden rounded-2xl px-5 py-5";

  return (
    <Reveal as="li" index={order}>
      {item.to ? (
        <Link to={item.to as "/"} className={base}>
          {content}
        </Link>
      ) : (
        <a href={item.href} target="_blank" rel="noopener noreferrer" className={base}>
          {content}
        </a>
      )}
    </Reveal>
  );
}
