import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/brand/Shell";
import { PageHeader } from "@/components/brand/PageHeader";
import { Section, ChipGrid, FeatureList } from "@/components/brand/Section";
import { WhatsAppCTA } from "@/components/brand/WhatsAppCTA";
import { Footer } from "@/components/brand/Footer";

const TITLE = "Treino Personalizado | Bernardo Bonfim";
const DESCRIPTION =
  "Seu objetivo, seu treino, sua evolução. Hipertrofia, emagrecimento, condicionamento, performance e estética com método individual.";

export const Route = createFileRoute("/treino-personalizado")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PersonalizadoPage,
});

const METODO = [
  { title: "Diagnóstico", text: "Entendo sua rotina, histórico e o que já travou seu progresso antes." },
  { title: "Prescrição", text: "Volume, intensidade e frequência definidos para o seu contexto real." },
  { title: "Execução", text: "Padrões de movimento treinados com critério — qualidade antes de carga." },
  { title: "Revisão", text: "Ciclos revisados com dados: cargas, medidas, desempenho e percepção." },
];

function PersonalizadoPage() {
  return (
    <Shell>
      <PageHeader
        index="05 — Treino Personalizado"
        title="Seu objetivo. Seu treino. Sua evolução."
        subtitle="Nenhuma planilha genérica. O programa nasce do seu objetivo, da sua disponibilidade e do seu nível atual."
      />

      <Section index={1} eyebrow="Objetivos" title="Para onde você quer ir">
        <ChipGrid
          items={["Hipertrofia", "Emagrecimento", "Condicionamento", "Performance", "Estética", "Saúde"]}
        />
      </Section>

      <Section index={2} eyebrow="Método" title="Quatro fases">
        <FeatureList items={METODO} />
      </Section>

      <Section index={3}>
        <WhatsAppCTA
          label="Quero começar"
          message="Olá Bernardo! Quero um treino personalizado. Podemos conversar sobre meu objetivo?"
        />
      </Section>

      <Footer />
    </Shell>
  );
}
