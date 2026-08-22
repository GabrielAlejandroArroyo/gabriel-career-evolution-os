/**
 * Employers and major clients from CV Gabriel Arroyo (072026).
 * Wordmarks are rendered as SVG — not official trademark assets — so the
 * strip stays self-hosted and legally safer on a personal portfolio.
 */

export type CompanyLogo = {
  id: string;
  name: string;
  /** Brand-adjacent accent used by the SVG wordmark. */
  accent: string;
};

export const companies: CompanyLogo[] = [
  { id: "accusys", name: "Accusys", accent: "#0B3D91" },
  { id: "banco-ciudad", name: "Banco Ciudad", accent: "#E30613" },
  { id: "banco-macro", name: "Banco Macro", accent: "#0033A0" },
  { id: "banco-patagonia", name: "Banco Patagonia", accent: "#6C1D45" },
  { id: "facebank", name: "Facebank", accent: "#1A73E8" },
  { id: "ypf", name: "YPF", accent: "#00843D" },
  { id: "inetum", name: "Inetum", accent: "#E2007A" },
  { id: "techint", name: "Techint", accent: "#003366" },
  { id: "la-anonima", name: "La Anónima", accent: "#C8102E" },
  { id: "claro", name: "Claro", accent: "#DA291C" },
  { id: "mapfre", name: "MAPFRE", accent: "#C00" },
  { id: "coto", name: "Coto", accent: "#E31837" },
  { id: "banbif", name: "BANBIF", accent: "#0055A5" },
  { id: "nike", name: "Nike", accent: "#111111" },
];
