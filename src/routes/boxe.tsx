import { createFileRoute } from "@tanstack/react-router";
import boxeImg from "@/assets/boxe.jpg";
import { Shell } from "@/components/brand/Shell";
import { PageHeader } from "@/components/brand/PageHeader";
import { Section, FeatureList, FrameImage } from "@/components/brand/Section";
import { WhatsAppCTA } from "@/components/brand/WhatsAppCTA";
import { Footer } from "@/components/brand/Footer";
import { Pillars } from "@/components/brand/Pillars";

const TITLE = "Treino de Boxe | Bernardo Bonfim";
const DESCRIPTION =
  "Boxe com foco em técnica, condicionamento, coordenação, defesa e movimentação. Treino individual com Bernardo Bonfim.";

export const Route = createFileRoute("/boxe")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BoxePage,
});

const PILARES = [
  { title: "Técnica", text: "Guarda, base, golpes e postura construídos do zero, com repetição consciente." },
  { title: "Condicionamento", text: "Rounds progressivos que elevam fôlego, ritmo e resistência real." },
  { title: "Coordenação", text: "Sincronia entre pés, tronco e mãos — a base de todo golpe eficiente." },
  { title: "Defesa", text: "Esquiva, bloqueio e leitura de distância aplicados em situação." },
  { title: "Movimentação", text: "Deslocamento inteligente para atacar e sair sem desperdiçar energia." },
  { title: "Performance", text: "Força, potência e recuperação integradas ao seu treino de musculação." },
];

function BoxePage() {
  return (
    <Shell>
      <PageHeader
        index="04 — Boxe"
        title="Boxe"
        subtitle="Um treino que exige presença total: técnica apurada, cabeça fria e condicionamento construído round a round."
      />

      <Section index={1}>
        <FrameImage
          src={boxeImg}
          alt="Luvas de boxe pretas com iluminação verde"
          width={1408}
          height={1024}
          ratio="aspect-[16/11]"
          caption="Técnica antes da força"
        />
      </Section>

      <Section index={2} eyebrow="O que você desenvolve" title="Seis frentes de trabalho">
        <FeatureList items={PILARES} />
      </Section>

      <Section index={3} eyebrow="Formato" title="Como funciona">
        <div className="surface rounded-2xl p-5">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Aulas individuais ou em dupla, com aquecimento específico, trabalho de manoplas,
            deslocamento e condicionamento. Nenhuma experiência prévia é necessária — o nível é
            ajustado a cada sessão.
          </p>
          <Pillars className="mt-5" items={["Individual", "Dupla", "Iniciante", "Avançado"]} />
        </div>
      </Section>

      <Section index={4}>
        <WhatsAppCTA
          label="Quero treinar boxe"
          message="Olá Bernardo! Quero treinar boxe. Como funcionam as aulas?"
          note="Resposta rápida no WhatsApp"
        />
      </Section>

      <Footer />
    </Shell>
  );
}
