import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  eyebrow,
  title,
  children,
  className,
  index = 0,
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <Reveal as="section" index={index} className={cn("mt-12", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? (
        <h2 className="mt-2 text-[1.4rem] leading-tight tracking-[0.04em]">{title}</h2>
      ) : null}
      <div className={eyebrow || title ? "mt-5" : undefined}>{children}</div>
    </Reveal>
  );
}

/** Lista de benefícios / tópicos com numeração técnica. */
export function FeatureList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item, i) => (
        <li key={item.title} className="surface card-hover rounded-xl px-5 py-4">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-[11px] tracking-[0.24em] text-[color-mix(in_oklab,var(--neon)_75%,white)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-[15px] tracking-[0.08em]">{item.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Grade compacta de palavras-chave / objetivos. */
export function ChipGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="surface card-hover rounded-xl px-4 py-3.5 font-display text-[12px] uppercase tracking-[0.16em] text-foreground/90"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Imagem editorial com véu escuro e moldura verde. */
export function FrameImage({
  src,
  alt,
  width,
  height,
  ratio = "aspect-[4/3]",
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  ratio?: string;
  caption?: string;
}) {
  return (
    <figure
      className={cn(
        "grain relative overflow-hidden rounded-2xl border border-border",
        ratio,
      )}
      style={{ boxShadow: "var(--shadow-lift)" }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <div className="veil pointer-events-none absolute inset-0" />
      {caption ? (
        <figcaption className="absolute bottom-3 left-4 right-4 font-display text-[11px] uppercase tracking-[0.24em] text-foreground/80">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
