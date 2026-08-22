"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Dictionary } from "@/i18n";
import { Credentials } from "@/components/sections/Credentials";
import { Industries } from "@/components/sections/Industries";
import { SkillMatrix } from "@/components/sections/SkillMatrix";
import { TechStack } from "@/components/sections/TechStack";
import { Trajectory } from "@/components/sections/Trajectory";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

/**
 * Master disclosure for depth content. Closed by default so the landing
 * stays short; opening reveals skills, stack, path, industries and credentials.
 */
export function ExperiencePanel({ dict }: { dict: Dictionary }) {
  const copy = dict.experience;
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    panelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [isOpen]);

  return (
    <Section id="experience" density="compact" className="border-t border-border">
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
