import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Entrada suave em sequência. `index` controla o atraso do stagger. */
export function Reveal({
  children,
  index = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  as?: "div" | "section" | "header" | "li" | "footer";
}) {
  return (
    <Tag
      className={cn("rise-in", className)}
      style={{ animationDelay: `${Math.min(index, 14) * 80}ms` }}
    >
      {children}
    </Tag>
  );
}
