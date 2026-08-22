import type { CompanyLogo } from "@/data/companies";
import { logoSrc } from "@/data/companies";
import type { Dictionary } from "@/i18n";

type CompanyExperienceCardProps = {
  company: CompanyLogo;
  dict: Dictionary;
};

/**
 * CV-sourced experience detail shown when a footer logo is selected.
 */
export function CompanyExperienceCard({ company, dict }: CompanyExperienceCardProps) {
  const copy = dict.experience.companies[company.id];
  const isDark = company.plate === "dark";

  return (
    <article className="rounded-xl border border-border bg-bg-inset px-5 py-5 md:px-6 md:py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <span
          className={`${isDark ? "logo-plate-dark" : "logo-plate"} inline-flex h-14 w-40 shrink-0 items-center justify-center rounded-lg px-3 py-2`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc(company.logo)}
            alt={company.name}
            width={160}
            height={48}
            className="max-h-10 w-auto max-w-full object-contain"
          />
        </span>

        <div className="min-w-0 flex-1">
          <p className="font-mono text-xs tracking-[0.16em] text-fg-subtle uppercase">
            {company.name}
            {company.via ? ` · ${dict.experience.viaLabel} ${company.via}` : null}
          </p>
          <h3 className="mt-2 font-display text-lg font-bold text-fg md:text-xl">
            {copy.role}
          </h3>
          <p className="mt-1 font-mono text-xs text-accent">{copy.period}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted text-pretty">
            {copy.summary}
          </p>
        </div>
      </div>
    </article>
  );
}
