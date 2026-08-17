import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import heroImg from "/duducoach.jpg";
import { Shell } from "@/components/brand/Shell";
import { Reveal } from "@/components/brand/Reveal";
import { Monogram } from "@/components/brand/Monogram";
import { Pillars } from "@/components/brand/Pillars";
import { LinkCard, type LinkItem } from "@/components/brand/LinkCard";
import { Footer } from "@/components/brand/Footer";
import { Action } from "@/components/brand/Action";
import { SITE, whatsappUrl } from "@/lib/site";

const TITLE = "Bernardo Bonfim — Personal Premium | Boxe & Musculação";
const DESCRIPTION =
  "Personal trainer premium: musculação, boxe, estética e performance. Agende sua aula presencial ou o acompanhamento online com Bernardo Bonfim.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const LINKS: LinkItem[] = [
  {
    index: "02",
    title: "Personal Online",
    description: "Consultoria e acompanhamento remoto com planejamento individual.",
    to: "/personal-online",
  },
  {
    index: "03",
    title: "Aula Presencial",
    description: "Treino conduzido de perto, com correção técnica em tempo real.",
    to: "/aula-presencial",
  },
  {
    index: "04",
    title: "Treino de Boxe",
    description: "Técnica, condicionamento, coordenação e movimentação.",
    to: "/boxe",
  },
  {
    index: "05",
    title: "Treino Personalizado",
    description: "Protocolo desenhado a partir do seu objetivo e da sua rotina.",
    to: "/treino-personalizado",
  },
  {
    index: "06",
    title: "Sobre o Bernardo",
    description: "Método, formação e a filosofia por trás de cada treino.",
    to: "/sobre",
  },
  {
    index: "07",
    title: "Localização",
    description: "Onde treinamos, horários e rota no mapa.",
    to: "/localizacao",
  },
];

function Index() {
  return (
    <Shell>
      <Reveal as="header" className="flex items-center justify-between">
        <Monogram />
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 font-display text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-[color-mix(in_oklab,var(--neon)_45%,transparent)] hover:text-[var(--neon)]"
        >
          <Instagram className="h-3.5 w-3.5" aria-hidden />
          Instagram
        </a>
      </Reveal>

      {/* HERO */}
      <Reveal index={1} className="mt-6">
        <div
          className="grain relative overflow-hidden rounded-[26px] border border-border"
          style={{ boxShadow: "var(--shadow-lift)" }}
        >
          <img
            src={heroImg}
            alt="Bernardo Bonfim, personal trainer, em academia com iluminação verde"
            width={1024}
            height={1408}
            className="aspect-[4/4] w-full object-cover object-top"
          />
          <div className="veil pointer-events-none absolute inset-0" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "var(--gradient-edge)", mixBlendMode: "soft-light" }}
          />

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <p className="eyebrow">{SITE.role}</p>
            <h1 className="text-glow mt-2 text-[2.6rem] leading-[0.9] tracking-[0.01em] sm:text-[3.2rem]">
              Bernardo
              <br />
              Bonfim
            </h1>
            <div className="neon-line mt-4 w-28" />
          </div>

          <span
            aria-hidden
            className="absolute right-5 top-5 font-display text-[10px] uppercase tracking-[0.3em] text-foreground/50"
          >
            EST. Performance
          </span>
        </div>
      </Reveal>

      <Reveal index={2} className="mt-6">
        <p className="font-display text-[15px] uppercase leading-relaxed tracking-[0.1em] text-foreground/90">
          Treine com propósito.
          <br />
          <span className="text-[var(--neon)]">Evolua com performance.</span>
        </p>
        <p className="mt-3 max-w-[46ch] text-[14px] leading-relaxed text-muted-foreground">
          Treinamento individual conduzido com método, disciplina e leitura precisa do seu corpo —
          do primeiro movimento ao resultado.
        </p>
        <Pillars className="mt-5" />
      </Reveal>

      {/* CTA PRINCIPAL */}
      <Reveal index={3} className="mt-8">
        <div
          className="surface relative overflow-hidden rounded-2xl p-5"
          style={{ boxShadow: "var(--glow-soft)" }}
        >
          <div className="flex items-baseline justify-between gap-4">
            <p className="eyebrow">01 — Agende sua aula</p>
            <span className="font-display text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Vagas limitadas
            </span>
          </div>
          <h2 className="mt-3 text-[1.5rem] leading-tight">Comece pelo WhatsApp</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
            Conversa rápida para entender seu objetivo e montar o próximo passo.
          </p>
          <div className="mt-5">
            <Action
              href={whatsappUrl(
                "Olá Bernardo! Quero agendar uma aula. Pode me passar os horários?",
              )}
              ariaLabel="Agendar aula pelo WhatsApp"
            >
              <span className="inline-flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4" aria-hidden />
                Agendar pelo WhatsApp
              </span>
            </Action>
          </div>
        </div>
      </Reveal>

      {/* LINKS */}
      <nav aria-label="Navegação principal" className="mt-8">
        <Reveal index={4} className="mb-4 flex items-center gap-3">
          <span className="eyebrow">Explorar</span>
          <span className="neon-line flex-1" />
        </Reveal>
        <ul className="grid gap-3">
          {LINKS.map((item, i) => (
            <LinkCard key={item.title} item={item} order={i + 5} />
          ))}
        </ul>
      </nav>

      <Footer />
    </Shell>
  );
}
