import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const action = cva(
  "group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-4 font-display text-[13px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-[0.985]",
  {
    variants: {
      variant: {
        solid:
          "bg-primary text-primary-foreground shadow-[var(--glow-soft)] hover:bg-[var(--neon)]",
        outline:
          "border border-border bg-[color-mix(in_oklab,var(--card)_60%,transparent)] text-foreground hover:border-[color-mix(in_oklab,var(--neon)_50%,transparent)] hover:text-[var(--neon)]",
        ghost: "text-muted-foreground hover:text-[var(--neon)]",
      },
      size: {
        md: "",
        sm: "px-4 py-3 text-[11px] tracking-[0.18em]",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type Props = VariantProps<typeof action> & {
  children: ReactNode;
  className?: string;
  href?: string;
  to?: string;
  external?: boolean;
  ariaLabel?: string;
};

function Sheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,white_28%,transparent),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:sweep_0.9s_var(--ease-brand)]"
    />
  );
}

export function Action({ children, className, href, to, variant, size, ariaLabel }: Props) {
  const classes = cn(action({ variant, size }), className);
  const inner = (
    <>
      <Sheen />
      <span className="relative">{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to as "/"} className={classes} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      aria-label={ariaLabel}
    >
      {inner}
    </a>
  );
}
