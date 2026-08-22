/**
 * Employers and major clients from CV Gabriel Arroyo (072026).
 * Logos are official brand assets; click targets `#experience-{id}`.
 */

export type CompanyId =
  | "accusys"
  | "banco-ciudad"
  | "banco-macro"
  | "banco-patagonia"
  | "facebank"
  | "ypf"
  | "inetum"
  | "techint"
  | "la-anonima"
  | "claro"
  | "mapfre"
  | "coto"
  | "banbif"
  | "nike";

export type CompanyLogo = {
  id: CompanyId;
  name: string;
  accent: string;
  logo: string;
  /**
   * How the mark should follow the page theme.
   * - color: keep brand hues (readable on both plates)
   * - invert-on-dark: dark/black mark → white version in dark theme
   * - baked-dark: asset already ships white-on-black
   */
  adapt?: "color" | "invert-on-dark" | "baked-dark";
  /**
   * Employer of record while working for this brand (when it is a client).
   * Empty when the brand itself is the employer.
   */
  via?: "Accusys" | "Inetum" | "IECISA";
};

export const companies: CompanyLogo[] = [
  {
    id: "accusys",
    name: "Accusys",
    accent: "#0080E0",
    logo: "/logos/accusys.png",
    adapt: "invert-on-dark",
  },
  {
    id: "banco-ciudad",
    name: "Banco Ciudad",
    accent: "#005BAA",
    logo: "/logos/banco-ciudad.svg",
    adapt: "color",
    via: "Accusys",
  },
  {
    id: "banco-macro",
    name: "Banco Macro",
    accent: "#0066FF",
    logo: "/logos/banco-macro.svg",
    adapt: "color",
    via: "Accusys",
  },
  {
    id: "banco-patagonia",
    name: "Banco Patagonia",
    accent: "#004987",
    logo: "/logos/banco-patagonia.svg",
    adapt: "invert-on-dark",
    via: "Accusys",
  },
  {
    id: "facebank",
    name: "Facebank",
    accent: "#3B2C8A",
    logo: "/logos/facebank.png",
    adapt: "baked-dark",
    via: "Accusys",
  },
  {
    id: "ypf",
    name: "YPF",
    accent: "#0063C2",
    logo: "/logos/ypf.svg",
    adapt: "color",
    via: "Inetum",
  },
  {
    id: "inetum",
    name: "Inetum",
    accent: "#E2007A",
    logo: "/logos/inetum.svg",
    adapt: "color",
  },
  {
    id: "techint",
    name: "Techint",
    accent: "#003366",
    logo: "/logos/techint.svg",
    adapt: "invert-on-dark",
    via: "IECISA",
  },
  {
    id: "la-anonima",
    name: "La Anónima",
    accent: "#0047A2",
    logo: "/logos/la-anonima.jpg",
    adapt: "color",
    via: "Inetum",
  },
  {
    id: "claro",
    name: "Claro",
    accent: "#C7251A",
    logo: "/logos/claro.svg",
    adapt: "color",
    via: "IECISA",
  },
  {
    id: "mapfre",
    name: "MAPFRE",
    accent: "#D61A0C",
    logo: "/logos/mapfre.png",
    adapt: "color",
    via: "IECISA",
  },
  {
    id: "coto",
    name: "Coto",
    accent: "#CC2131",
    logo: "/logos/coto.svg",
    adapt: "color",
    via: "IECISA",
  },
  {
    id: "banbif",
    name: "BanBif",
    accent: "#00A0E3",
    logo: "/logos/banbif.png",
    adapt: "baked-dark",
    via: "IECISA",
  },
  {
    id: "nike",
    name: "Nike",
    accent: "#111111",
    logo: "/logos/nike.svg",
    adapt: "invert-on-dark",
    via: "IECISA",
  },
];

export function getCompany(id: string): CompanyLogo | undefined {
  return companies.find((company) => company.id === id);
}

export function experienceHash(id: CompanyId): string {
  return `#experience-${id}`;
}

/** Prefix public assets with GitHub Pages basePath when set in CI. */
export function logoSrc(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}

export function logoPlateClass(company: CompanyLogo): string {
  return company.adapt === "baked-dark" ? "logo-plate-baked" : "logo-plate";
}

export function logoImageClass(company: CompanyLogo): string {
  return company.adapt === "invert-on-dark" ? "logo-adapt-invert" : "";
}
