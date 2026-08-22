/**
 * Employers and major clients from CV Gabriel Arroyo (072026).
 * `logo` points to original brand assets under /public/logos.
 */

export type CompanyLogo = {
  id: string;
  name: string;
  /** Color applied to the company name next to the original logo. */
  accent: string;
  /** Path relative to /public (e.g. /logos/ypf.svg). */
  logo: string;
};

export const companies: CompanyLogo[] = [
  { id: "accusys", name: "Accusys", accent: "#0B3D91", logo: "/logos/accusys.png" },
  { id: "banco-ciudad", name: "Banco Ciudad", accent: "#E30613", logo: "/logos/banco-ciudad.svg" },
  { id: "banco-macro", name: "Banco Macro", accent: "#0033A0", logo: "/logos/banco-macro.svg" },
  {
    id: "banco-patagonia",
    name: "Banco Patagonia",
    accent: "#6C1D45",
    logo: "/logos/banco-patagonia.svg",
  },
  { id: "facebank", name: "Facebank", accent: "#1A73E8", logo: "/logos/facebank.png" },
  { id: "ypf", name: "YPF", accent: "#00843D", logo: "/logos/ypf.svg" },
  { id: "inetum", name: "Inetum", accent: "#E2007A", logo: "/logos/inetum.svg" },
  { id: "techint", name: "Techint", accent: "#003366", logo: "/logos/techint.svg" },
  { id: "la-anonima", name: "La Anónima", accent: "#0047A2", logo: "/logos/la-anonima.jpg" },
  { id: "claro", name: "Claro", accent: "#DA291C", logo: "/logos/claro.svg" },
  { id: "mapfre", name: "MAPFRE", accent: "#C00", logo: "/logos/mapfre.svg" },
  { id: "coto", name: "Coto", accent: "#E31837", logo: "/logos/coto.svg" },
  { id: "banbif", name: "BANBIF", accent: "#0055A5", logo: "/logos/banbif.png" },
  { id: "nike", name: "Nike", accent: "#111111", logo: "/logos/nike.svg" },
];

/** Prefix public assets with GitHub Pages basePath when set in CI. */
export function logoSrc(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
