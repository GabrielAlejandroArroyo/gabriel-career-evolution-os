import type { CompanyLogo } from "@/data/companies";
import { experienceHash, logoSrc } from "@/data/companies";

/**
 * Logo-only mark linking to the matching experience anchor on this page.
 * Plate color follows the asset: light tile for dark marks, dark tile for
 * white-on-black marks — so they stay readable in both themes.
 */
export function CompanyMark({
  company,
  inert = false,
}: {
  company: CompanyLogo;
  /** True for the duplicated marquee copy (not focusable / not announced). */
  inert?: boolean;
}) {
  const isDarkPlate = company.plate === "dark";

  return (
    <a
      href={experienceHash(company.id)}
      aria-label={company.name}
      title={company.name}
      tabIndex={inert ? -1 : undefined}
      className={`${isDarkPlate ? "logo-plate-dark" : "logo-plate"} inline-flex h-10 w-[8.5rem] shrink-0 items-center justify-center overflow-hidden rounded-md px-2.5 py-1.5 transition hover:brightness-[1.04] md:h-11 md:w-[9.5rem]`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export; local public assets */}
      <img
        src={logoSrc(company.logo)}
        alt=""
        width={152}
        height={40}
        className="max-h-8 w-auto max-w-full object-contain md:max-h-9"
        loading="lazy"
        decoding="async"
      />
    </a>
  );
}
