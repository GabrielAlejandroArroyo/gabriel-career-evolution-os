import type { CompanyLogo } from "@/data/companies";
import { experienceHash, logoSrc } from "@/data/companies";

/**
 * Logo-only mark linking to the matching experience anchor on this page.
 */
export function CompanyMark({
  company,
  inert = false,
}: {
  company: CompanyLogo;
  /** True for the duplicated marquee copy (not focusable / not announced). */
  inert?: boolean;
}) {
  const isDark = company.plate === "dark";

  return (
    <a
      href={experienceHash(company.id)}
      aria-label={company.name}
      title={company.name}
      tabIndex={inert ? -1 : undefined}
      className={
        isDark
          ? "inline-flex h-10 w-[8.5rem] shrink-0 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-2.5 py-1.5 shadow-sm ring-1 ring-white/10 transition hover:ring-white/30 md:h-11 md:w-[9.5rem]"
          : "inline-flex h-10 w-[8.5rem] shrink-0 items-center justify-center overflow-hidden rounded-md bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/8 transition hover:ring-black/20 md:h-11 md:w-[9.5rem]"
      }
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
