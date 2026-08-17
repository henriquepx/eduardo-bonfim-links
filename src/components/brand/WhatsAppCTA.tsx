import { MessageCircle } from "lucide-react";
import { Action } from "./Action";
import { whatsappUrl } from "@/lib/site";

/** CTA principal de conversão — presente em todas as rotas. */
export function WhatsAppCTA({
  label = "Falar com Bernardo",
  message = "Olá Bernardo! Vim pelo seu Instagram e quero saber mais sobre os treinos.",
  note,
}: {
  label?: string;
  message?: string;
  note?: string;
}) {
  return (
    <div className="space-y-3">
      <Action href={whatsappUrl(message)} ariaLabel={`${label} pelo WhatsApp`}>
        <span className="inline-flex items-center gap-2.5">
          <MessageCircle className="h-4 w-4" aria-hidden />
          {label}
        </span>
      </Action>
      {note ? (
        <p className="text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {note}
        </p>
      ) : null}
    </div>
  );
}
