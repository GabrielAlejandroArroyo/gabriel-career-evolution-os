import type { CompanyLogo } from "@/data/companies";
import { CompanyMark } from "./CompanyMark";

/**
 * Original logo + company name tinted with the brand accent color.
 */
export function CompanyWordmark({ company }: { company: CompanyLogo }) {
  return (
    <span
      className="inline-flex items-center gap-2.5 whitespace-nowrap"
      aria-label={company.name}
    >
      <CompanyMark company={company} />
      <span
        className="font-sans text-lg font-extrabold tracking-tight md:text-xl"
        style={{ color: company.accent }}
      >
        {company.name}
      </span>
    </span>
  );
}
