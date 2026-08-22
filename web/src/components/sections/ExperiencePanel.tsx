"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CompanyId } from "@/data/companies";
import { getCompany } from "@/data/companies";
import type { Dictionary } from "@/i18n";
import { CompanyExperienceCard } from "@/components/sections/CompanyExperienceCard";
import { Credentials } from "@/components/sections/Credentials";
import { Industries } from "@/components/sections/Industries";
import { SkillMatrix } from "@/components/sections/SkillMatrix";
import { TechStack } from "@/components/sections/TechStack";
import { Trajectory } from "@/components/sections/Trajectory";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const EXPERIENCE_HASH = /^#experience(?:-(.+))?$/;

/**
 * Master disclosure for depth content. Hash links from the logo dock
 * (`#experience-{companyId}`) open the panel and focus that company card.
 */
export function ExperiencePanel({ dict }: { dict: Dictionary }) {
  const copy = dict.experience;
  const [isOpen, setIsOpen] = useState(false);
  const [activeCompanyId, setActiveCompanyId] = useState<CompanyId | null>(null);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const match = EXPERIENCE_HASH.exec(window.location.hash);
      if (!match) return;

      setIsOpen(true);
      const companyId = match[1];
      if (companyId && getCompany(companyId)) {
        setActiveCompanyId(companyId as CompanyId);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const target = activeCompanyId && companyRef.current ? companyRef.current : panelRef.current;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [isOpen, activeCompanyId]);

  const activeCompany = activeCompanyId ? getCompany(activeCompanyId) : undefined;

  return (
    <Section id="experience" density="compact" className="border-t border-border scroll-mt-28">
      <Reveal>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent">{copy.eyebrow}</p>
            <h2 className="mt-3 font-display text-title font-bold tracking-[var(--text-title--letter-spacing)] text-balance">
              {copy.heading}
            </h2>
            <p className="mt-3 text-sm text-fg-muted text-pretty">{copy.intro}</p>
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition hover:bg-accent-hover"
          >
            {isOpen ? copy.collapse : copy.expand}
          </button>
        </div>
      </Reveal>

      {isOpen ? (
        <div
          id={panelId}
          ref={panelRef}
          className="mt-8 scroll-mt-28 space-y-2 rounded-2xl border border-border bg-bg-elevated px-5 py-6 md:px-8 md:py-8"
        >
          {activeCompany ? (
            <div ref={companyRef} className="scroll-mt-32 pb-6">
              <CompanyExperienceCard company={activeCompany} dict={dict} />
            </div>
          ) : null}
          <SkillMatrix dict={dict} embedded />
          <TechStack dict={dict} embedded />
          <Trajectory dict={dict} embedded />
          <Industries dict={dict} embedded />
          <Credentials dict={dict} embedded />
        </div>
      ) : null}
    </Section>
  );
}
