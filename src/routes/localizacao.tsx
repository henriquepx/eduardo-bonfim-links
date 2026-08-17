import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Navigation } from "lucide-react";
import { Shell } from "@/components/brand/Shell";
import { PageHeader } from "@/components/brand/PageHeader";
import { Section } from "@/components/brand/Section";
import { Action } from "@/components/brand/Action";
import { WhatsAppCTA } from "@/components/brand/WhatsAppCTA";
import { Footer } from "@/components/brand/Footer";
import { SITE, mapsUrl } from "@/lib/site";

const TITLE = "Localização | Bernardo Bonfim";
const DESCRIPTION =
  "Onde Bernardo Bonfim atende: endereço, horários de atendimento e rota direta no Google Maps.";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: LocalizacaoPage,
});

function LocalizacaoPage() {
  const { venue, address, district, hours, label } = SITE.location;

  return (
    <Shell>
      <PageHeader
        index="07 — Localização"
        title="Onde treinamos"
        subtitle="Atendimento presencial em estrutura completa para musculação e boxe, com horários definidos por agendamento."
      />

      <Section index={1}>
        <div className="surface relative overflow-hidden rounded-2xl p-6">
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, color-mix(in oklab, var(--neon) 70%, transparent), transparent)",
            }}
          />
          <div className="flex items-start gap-4">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border"
              style={{ boxShadow: "var(--glow-soft)" }}
            >
              <MapPin className="h-5 w-5 text-[var(--neon)]" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{label}</p>
              <h2 className="mt-2 text-[1.25rem] leading-tight">{venue}</h2>
              <address className="mt-2 text-[14px] not-italic leading-relaxed text-muted-foreground">
                {address}
                <br />
                {district}
              </address>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-5 text-[13px] text-muted-foreground">
            <Clock className="h-4 w-4 shrink-0 text-[var(--neon)]" aria-hidden />
            <span>{hours}</span>
          </div>
        </div>
      </Section>

      <Section index={2} className="mt-6">
        <Action href={mapsUrl()} variant="outline" ariaLabel="Abrir localização no Google Maps">
          <span className="inline-flex items-center gap-2.5">
            <Navigation className="h-4 w-4" aria-hidden />
            Abrir no Google Maps
          </span>
        </Action>
      </Section>

      <Section index={3} className="mt-3">
        <WhatsAppCTA
          label="Agendar aula"
          message="Olá Bernardo! Quero saber sobre o local de atendimento e agendar uma aula."
          note="Confirme o horário antes de ir"
        />
      </Section>

      <Footer />
    </Shell>
  );
}
