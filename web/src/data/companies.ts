/**
 * Employers and major clients from CV Gabriel Arroyo (072026).
 * Logos are official brand assets from company sites / Wikimedia Commons.
 */

export type CompanyLogo = {
  id: string;
  name: string;
  /** Official brand accent used for the name next to the logo. */
  accent: string;
  /** Path relative to /public. */
  logo: string;
  /** Dark plate for logos that ship white-on-black. */
  plate?: "light" | "dark";
};

export const companies: CompanyLogo[] = [
  {
    id: "accusys",
    name: "Accusys",
    accent: "#0080E0",
    logo: "/logos/accusys.png",
  },
  {
    id: "banco-ciudad",
    name: "Banco Ciudad",
    accent: "#005BAA",
    logo: "/logos/banco-ciudad.svg",
  },
  {
    id: "banco-macro",
    name: "Banco Macro",
    accent: "#0066FF",
    logo: "/logos/banco-macro.svg",
  },
  {
    id: "banco-patagonia",
    name: "Banco Patagonia",
    accent: "#004987",
    logo: "/logos/banco-patagonia.svg",
  },
  {
    id: "facebank",
    name: "Facebank",
    accent: "#3B2C8A",
    logo: "/logos/facebank.png",
    plate: "dark",
  },
  {
    id: "ypf",
    name: "YPF",
    accent: "#0063C2",
    logo: "/logos/ypf.svg",
  },
  {
    id: "inetum",
    name: "Inetum",
    accent: "#E2007A",
    logo: "/logos/inetum.svg",
  },
  {
    id: "techint",
    name: "Techint",
    accent: "#003366",
    logo: "/logos/techint.svg",
  },
  {
    id: "la-anonima",
    name: "La Anónima",
    accent: "#0047A2",
    logo: "/logos/la-anonima.jpg",
  },
  {
    id: "claro",
    name: "Claro",
    accent: "#C7251A",
    logo: "/logos/claro.svg",
  },
  {
    id: "mapfre",
    name: "MAPFRE",
    accent: "#D61A0C",
    logo: "/logos/mapfre.png",
  },
  {
    id: "coto",
    name: "Coto",
    accent: "#CC2131",
    logo: "/logos/coto.svg",
  },
  {
    id: "banbif",
    name: "BanBif",
    accent: "#00A0E3",
    logo: "/logos/banbif.png",
    plate: "dark",
  },
  {
    id: "nike",
    name: "Nike",
    accent: "#111111",
    logo: "/logos/nike.svg",
  },
];

/** Prefix public assets with GitHub Pages basePath when set in CI. */
export function logoSrc(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
