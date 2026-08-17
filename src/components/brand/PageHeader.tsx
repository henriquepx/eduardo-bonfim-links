import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

/** Cabeçalho comum das páginas internas. */
export function PageHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal as="header" className="pb-8 pt-2">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <Link
          to="/"
          className="inline-flex min-w-0 items-center gap-2 font-display text-[11px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-[var(--neon)]"
        >
          <ArrowLeft className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="truncate">Voltar</span>
        </Link>
        <Monogram />
      </div>

      <div className="mt-10">
        <p className="eyebrow">{index}</p>
        <h1 className="mt-3 text-[2.1rem] leading-[0.98] tracking-[0.02em] sm:text-[2.6rem]">
          {title}
        </h1>
        <div className="neon-line mt-5 w-24" />
        <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </Reveal>
  );
}
