import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Moldura de todas as rotas: fundo preto, luz verde periférica e largura controlada. */
export function Shell({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--ink)]">
      <Ambience />
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-[560px] px-5 pb-24 pt-6 sm:px-7 lg:max-w-[680px]",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

function Ambience() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div
        className="breathe absolute -left-44 top-[-14rem] h-[28rem] w-[28rem] rounded-full blur-[130px]"
        style={{ background: "color-mix(in oklab, var(--primary) 20%, transparent)" }}
      />
      <div
        className="breathe absolute -right-52 top-1/3 h-[26rem] w-[26rem] rounded-full blur-[140px]"
        style={{
          background: "color-mix(in oklab, var(--moss) 26%, transparent)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[34vh]"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklab, var(--primary) 7%, transparent), transparent)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--neon) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "84px 100%",
          maskImage: "radial-gradient(ellipse at 50% 20%, black, transparent 72%)",
        }}
      />
      <div className="grain absolute inset-0" />
    </div>
  );
}
