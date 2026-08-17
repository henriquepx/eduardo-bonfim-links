import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList, LineChart, Compass, Repeat } from "lucide-react";
import { Shell } from "@/components/brand/Shell";
import { PageHeader } from "@/components/brand/PageHeader";
import { Section } from "@/components/brand/Section";
import { WhatsAppCTA } from "@/components/brand/WhatsAppCTA";
import { Footer } from "@/components/brand/Footer";

const TITLE = "Personal Online | Bernardo Bonfim";
const DESCRIPTION =
  "Acompanhamento online premium: avaliação, planejamento, acompanhamento e evolução com Bernardo Bonfim, onde você estiver.";

export const Route = createFileRoute("/personal-online")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: OnlinePage,
});

const ETAPAS = [
  {
    step: "01",
    title: "Avaliação",
    text: "Anamnese completa, histórico de treino, rotina, limitações e objetivo real.",
    Icon: ClipboardList,
  },
  {
    step: "02",
    title: "Planejamento",
    text: "Periodização montada para a sua semana e para a estrutura que você tem disponível.",
    Icon: Compass,
  },
  {
    step: "03",
    title: "Acompanhamento",
    text: "Ajustes contínuos, correção de execução por vídeo e contato direto comigo.",
    Icon: Repeat,
  },
  {
    step: "04",
    title: "Evolução",
    text: "Revisões periódicas com métricas claras — carga, medidas e desempenho.",
    Icon: LineChart,
  },
];

function OnlinePage() {
  return (
    <Shell>
      <PageHeader
        index="02 — Personal Online"
        title="Personal Online"
        subtitle="O mesmo método do presencial, entregue de forma remota: planejamento individual, correção técnica e acompanhamento de perto."
      />

      <Section index={1} eyebrow="O processo" title="Quatro etapas">
        <ol className="grid gap-3 sm:grid-cols-2">
          {ETAPAS.map(({ step, title, text, Icon }) => (
            <li key={step} className="surface card-hover relative rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-[var(--neon)]" aria-hidden />
                <span className="font-display text-[11px] tracking-[0.26em] text-muted-foreground">
                  {step}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[16px] tracking-[0.08em]">{title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section index={2} eyebrow="Incluso" title="O que você recebe">
        <ul className="grid gap-2.5 text-[14px] text-muted-foreground">
          {[
            "Programa de treino individual atualizado periodicamente",
            "Vídeos e orientações de execução para cada exercício",
            "Análise dos seus vídeos de treino com feedback direto",
            "Canal aberto no WhatsApp para dúvidas durante a semana",
          ].map((item) => (
            <li key={item} className="surface rounded-xl px-4 py-3.5 leading-snug">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section index={3}>
        <WhatsAppCTA
          label="Quero conhecer o personal online"
          message="Olá Bernardo! Quero conhecer o acompanhamento online. Como funciona?"
          note="Vagas por turma de acompanhamento"
        />
      </Section>

      <Footer />
    </Shell>
  );
}
