import { Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import { Monogram } from "./Monogram";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-8">
      <div className="flex items-center gap-3">
        <Monogram />
        <div className="min-w-0">
          <p className="truncate font-display text-[13px] tracking-[0.18em]">{SITE.name}</p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {SITE.role}
          </p>
        </div>
      </div>

      <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <Link to="/" className="transition-colors hover:text-[var(--neon)]">
          Início
        </Link>
        <Link to="/sobre" className="transition-colors hover:text-[var(--neon)]">
          Sobre
        </Link>
        <Link to="/boxe" className="transition-colors hover:text-[var(--neon)]">
          Boxe
        </Link>
        <Link to="/localizacao" className="transition-colors hover:text-[var(--neon)]">
          Localização
        </Link>
      </nav>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-[12px] text-muted-foreground">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-[var(--neon)]"
        >
          <Instagram className="h-3.5 w-3.5" aria-hidden />
          Instagram
        </a>
        <span className="inline-flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          {SITE.location.district}
        </span>
      </div>

      <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-muted-foreground/60">
        © {new Date().getFullYear()} {SITE.name} · Treino, técnica e resultado
      </p>
    </footer>
  );
}
