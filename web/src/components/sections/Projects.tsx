"use client";

import { useId, useState } from "react";
import type { Dictionary } from "@/i18n";
import { projects, type ProjectId } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Projects({ dict }: { dict: Dictionary }) {
  const copy = dict.projects;
  const [activeId, setActiveId] = useState<ProjectId | null>(null);
  const panelId = useId();
  const active = projects.find((project) => project.id === activeId) ?? null;
  const activeCopy = active ? copy.items[active.id] : null;

  return (
    <Section id="portfolio" className="border-t border-border bg-bg-inset">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const item = copy.items[project.id];
          const isActive = activeId === project.id;

          return (
            <Reveal key={project.id} delay={(index % 2) * 70}>
              <li>
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() =>
                    setActiveId((current) =>
                      current === project.id ? null : project.id,
                    )
                  }
                  className={`flex w-full flex-col items-start rounded-2xl border bg-bg-elevated p-6 text-left transition ${
                    isActive
                      ? "border-accent shadow-[0_0_0_1px_var(--accent)]"
                      : "border-border hover:border-border-strong"
                  }`}
                >
                  <span className="font-display text-xl font-semibold text-balance">
                    {item.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {item.summary}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {project.languages.map((language) => (
                      <span
                        key={language}
                        className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wider text-fg-subtle uppercase"
                      >
                        {language}
                      </span>
                    ))}
                  </span>
                  <span className="mt-5 text-sm font-semibold text-accent">
                    {isActive ? copy.closePreview : copy.openPreview}
                  </span>
                </button>
              </li>
            </Reveal>
          );
        })}
      </ul>

      {active && activeCopy ? (
        <div
          id={panelId}
          className="mt-8 overflow-hidden rounded-2xl border border-border bg-bg-elevated"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border px-6 py-5 md:px-8">
            <div>
              <p className="eyebrow text-accent">{copy.languagesLabel}</p>
              <h3 className="mt-2 font-display text-title font-bold tracking-[var(--text-title--letter-spacing)]">
                {activeCopy.title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setActiveId(null)}
              className="rounded-full border border-border px-4 py-2 text-sm text-fg-muted transition hover:border-border-strong hover:text-fg"
            >
              {copy.closePreview}
            </button>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-5 px-6 py-6 md:px-8">
              <p className="text-lead text-fg-muted text-pretty">{activeCopy.detail}</p>
              <p className="eyebrow text-fg-subtle">{copy.languagesLabel}</p>
              <ul className="flex flex-wrap gap-2">
                {active.languages.map((language) => (
                  <li
                    key={language}
                    className="rounded-full border border-border bg-bg-inset px-3 py-1 text-sm"
                  >
                    {language}
                  </li>
                ))}
              </ul>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm text-fg-subtle underline-offset-4 transition hover:text-fg hover:underline"
              >
                {copy.repoHint} →
              </a>
            </div>

            {active.demoUrl ? (
              <div className="border-t border-border lg:border-t-0 lg:border-l">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <p className="font-mono text-xs tracking-wider text-fg-subtle uppercase">
                    {copy.viewDemo}
                  </p>
                </div>
                <iframe
                  title={`${activeCopy.title} demo`}
                  src={active.demoUrl}
                  className="h-[28rem] w-full bg-bg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <div className="flex items-center border-t border-border px-6 py-10 text-sm text-fg-muted lg:border-t-0 lg:border-l md:px-8">
                <p>
                  {activeCopy.detail}
                </p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </Section>
  );
}
