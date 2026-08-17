import { createFileRoute } from "@tanstack/react-router";
import musculacaoImg from "@/assets/musculacao.jpg";
import { Shell } from "@/components/brand/Shell";
import { PageHeader } from "@/components/brand/PageHeader";
import { Section, FeatureList, FrameImage } from "@/components/brand/Section";
import { WhatsAppCTA } from "@/components/brand/WhatsAppCTA";
import { Footer } from "@/components/brand/Footer";

const TITLE = "Aula Presencial | Bernardo Bonfim";
const DESCRIPTION =
  "Treino presencial com condução técnica, ajuste de execução em tempo real e progressão de carga acompanhada de perto.";

export const Route = createFileRoute("/aula-presencial")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PresencialPage,
});

const ITENS = [
  { title: "Condução completa", text: "Do aquecimento ao último set, com ritmo e intenção definidos." },
  { title: "Correção em tempo real", text: "Execução ajustada movimento a movimento para proteger articulações." },
  { title: "Progressão de carga", text: "Registro de cargas e evolução planejada, sem estagnação." },
  { title: "Sessões pontuais ou pacote", text: "Aula avulsa para experimentar ou frequência semanal fixa." },
];

function PresencialPage() {
  return (
    <Shell>
      <PageHeader
        index="03 — Aula Presencial"
        title="Aula Presencial"
        subtitle="Treinar acompanhado muda o resultado. Cada série é conduzida com atenção total à sua execução, respiração e intensidade."
      />

      <Section index={1}>
        <FrameImage
          src={musculacaoImg}
          alt="Sala de musculação escura com iluminação verde"
          width={1408}
          height={1024}
          ratio="aspect-[16/11]"
          caption="Ambiente controlado, treino conduzido"
        />
      </Section>

      <Section index={2} eyebrow="Como é a sessão" title="O que está incluído">
        <FeatureList items={ITENS} />
      </Section>

      <Section index={3}>
        <WhatsAppCTA
          label="Agendar aula"
          message="Olá Bernardo! Quero agendar uma aula presencial. Quais horários estão disponíveis?"
          note="Agenda semanal com horários limitados"
        />
      </Section>

      <Footer />
    </Shell>
  );
}
