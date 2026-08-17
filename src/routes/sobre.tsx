import { createFileRoute } from "@tanstack/react-router";
import sobreImg from "@/assets/sobre.jpg";
import { Shell } from "@/components/brand/Shell";
import { PageHeader } from "@/components/brand/PageHeader";
import { Section, FrameImage } from "@/components/brand/Section";
import { WhatsAppCTA } from "@/components/brand/WhatsAppCTA";
import { Footer } from "@/components/brand/Footer";
import { Pillars } from "@/components/brand/Pillars";

const TITLE = "Sobre Bernardo Bonfim | Personal Premium";
const DESCRIPTION =
  "Personal trainer com atuação em musculação, boxe, estética e performance. Conheça o método e a filosofia de treino de Bernardo Bonfim.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <Shell>
      <PageHeader
        index="06 — Sobre"
        title="Bernardo Bonfim"
        subtitle="Personal trainer dedicado a um trabalho individual, técnico e consistente — para quem quer resultado construído, não prometido."
      />

      <Section index={1}>
        <FrameImage
          src={sobreImg}
          alt="Bernardo Bonfim sentado em banco de academia, retrato editorial"
          width={1024}
          height={1280}
          ratio="aspect-[4/5]"
          caption="Método, disciplina e leitura de cada aluno"
        />
      </Section>

      <Section index={2} eyebrow="Atuação">
        <Pillars items={["Personal Trainer", "Boxe", "Musculação", "Performance", "Estética"]} />
      </Section>

      <Section index={3} eyebrow="A filosofia" title="Treino é decisão diária">
        <div className="space-y-4 text-[14px] leading-relaxed text-muted-foreground">
          <p>
            O trabalho do Bernardo une a base sólida da musculação à inteligência do boxe: força,
            controle motor, ritmo e cabeça. Cada aluno recebe um plano próprio, ajustado à sua
            rotina, ao seu histórico e ao ponto em que está hoje.
          </p>
          <p>
            Nada é feito no automático. A prioridade é a execução correta, a progressão sustentável
            e a construção de um hábito que sobreviva à semana difícil — porque é aí que o resultado
            realmente aparece.
          </p>
          <p>
            O atendimento é limitado por escolha: poucos alunos por horário, atenção real em cada
            sessão e acompanhamento próximo do início ao objetivo.
          </p>
        </div>
      </Section>

      <Section index={4}>
        <WhatsAppCTA
          label="Falar com Bernardo"
          message="Olá Bernardo! Vi sua página e gostaria de conversar sobre treinar com você."
        />
      </Section>

      <Footer />
    </Shell>
  );
}
