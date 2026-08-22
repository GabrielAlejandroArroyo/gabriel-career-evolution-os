import type { CompanyLogo } from "@/data/companies";
import { logoSrc } from "@/data/companies";

/**
 * Original brand logo mark (SVG/PNG from /public/logos).
 * Kept on a light plate so dark/colored marks stay legible in both themes.
 */
export function CompanyMark({ company }: { company: CompanyLogo }) {
  return (
    <span className="inline-flex h-9 w-[7.25rem] shrink-0 items-center justify-center overflow-hidden rounded-md bg-white px-2 py-1 shadow-sm ring-1 ring-black/5 md:h-10 md:w-[8.25rem]">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export; local public assets */}
      <img
        src={logoSrc(company.logo)}
        alt=""
        width={132}
        height={36}
        className="max-h-7 w-auto max-w-full object-contain md:max-h-8"
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
