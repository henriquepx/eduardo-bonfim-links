export const SITE = {
  name: "Bernardo Bonfim",
  role: "Personal",
  tagline: "Treine com propósito. Evolua com performance.",
  whatsappNumber: "5521968409801",
  instagram: "https://instagram.com/bernardobonfim",
  location: {
    label: "Studio de atendimento",
    venue: "-",
    address: "-",
    district: "Rio de Janeiro",
    hours: "Seg a Sex · 06h às 21h · Sáb · 08h às 12h",
    mapsQuery: "Rio de Janeiro, RJ",
  },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE.location.mapsQuery,
  )}`;
}
