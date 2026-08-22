"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";
import { identity, linkedInPresence } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Presence({ dict }: { dict: Dictionary }) {
  const copy = dict.presence;
  const presence = linkedInPresence;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section id="presence" density="compact">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
        compact
      />

      <Reveal>
        <article className="mt-8 overflow-hidden rounded-2xl border border-border bg-bg-elevated">
          <div className="bg-bg-inset px-5 py-6 md:px-8">
            <p className="font-display text-2xl font-bold tracking-[-0.02em] md:text-3xl">
              {identity.shortName}
            </p>
            <p className="mt-1 text-fg">{dict.meta.jobTitle}</p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Fact label={copy.locationLabel} value={presence.location} />
              <Fact label={copy.companyLabel} value={presence.currentCompany} />
              <Fact
                label={copy.followersLabel}
                value={String(presence.followers)}
              />
              <Fact
                label={copy.connectionsLabel}
                value={presence.connections}
              />
            </dl>

            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
              className="mt-5 text-sm font-semibold text-accent transition hover:text-accent-hover"
            >
              {isOpen ? copy.collapse : copy.expand}
            </button>
          </div>

          {isOpen ? (
            <div className="grid gap-8 border-t border-border px-5 py-6 md:grid-cols-[1.2fr_1fr] md:px-8">
              <div className="space-y-6">
                <div>
                  <h3 className="eyebrow text-accent">{copy.aboutLabel}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted text-pretty md:text-base">
                    {copy.about}
                  </p>
                </div>

                <div>
                  <h3 className="eyebrow text-accent">{copy.educationLabel}</h3>
                  <p className="mt-2 text-sm text-fg">{presence.education}</p>
                </div>

                <div>
                  <h3 className="eyebrow text-accent">{copy.highlightsLabel}</h3>
                  <ul className="mt-2 space-y-2">
                    {presence.highlights.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-highlight pl-3 text-sm text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="eyebrow text-accent">{copy.recommendationsLabel}</h3>
                <ul className="mt-3 space-y-3">
                  {presence.recommendations.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-xl border border-border bg-bg p-4"
                    >
                      <p className="text-sm leading-relaxed text-fg-muted text-pretty">
                        “{copy.recommendations[item.id]}”
                      </p>
                      <p className="mt-2 font-mono text-xs tracking-wider text-fg-subtle uppercase">
                        — {item.author}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}

          <div className="border-t border-border px-5 py-4 md:px-8">
            <a
              href={presence.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm font-semibold text-accent transition hover:text-accent-hover"
            >
              {copy.openExternally} →
            </a>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-fg-subtle">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-fg">{value}</dd>
    </div>
  );
}
