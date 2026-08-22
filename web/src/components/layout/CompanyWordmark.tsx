import type { CompanyLogo } from "@/data/companies";

/**
 * Brand-colored wordmark. Not an official trademark asset — color + name so
 * the marquee reads as a client strip without shipping protected logo art.
 */
export function CompanyWordmark({ company }: { company: CompanyLogo }) {
  return (
    <span
      className="inline-flex items-center whitespace-nowrap font-sans text-lg font-extrabold tracking-tight md:text-xl"
      style={{ color: company.accent }}
      aria-label={company.name}
    >
      {company.name}
    </span>
  );
}
