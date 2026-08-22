import type { Dictionary } from "@/i18n";
import { identity, linkedInPresence } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * LinkedIn content mirrored on-page. Recruiters get headline, company,
 * education, credentials and real recommendations without leaving the site.
 * The external profile link is secondary and clearly labeled.
 */
export function Presence({ dict }: { dict: Dictionary }) {
  const copy = dict.presence;
  const presence = linkedInPresence;

  return (
    <Section id="presence">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
      />

      <Reveal>
        <article className="mt-12 overflow-hidden rounded-2xl border border-border bg-bg-elevated">
          <div className="border-b border-border bg-bg-inset px-6 py-8 md:px-10">
            <p className="font-display text-3xl font-bold tracking-[-0.02em] md:text-4xl">
              {identity.shortName}
            </p>
            <p className="mt-2 text-lead text-fg">{dict.meta.jobTitle}</p>
            <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          </div>

          <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.2fr_1fr] md:px-10">
            <div className="space-y-8">
              <div>
                <h3 className="eyebrow text-accent">{copy.aboutLabel}</h3>
                <p className="mt-3 text-lead text-fg-muted text-pretty">
                  {copy.about}
                </p>
              </div>

              <div>
                <h3 className="eyebrow text-accent">{copy.educationLabel}</h3>
                <p className="mt-3 text-fg">{presence.education}</p>
              </div>

              <div>
                <h3 className="eyebrow text-accent">{copy.highlightsLabel}</h3>
                <ul className="mt-3 space-y-2">
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
              <ul className="mt-4 space-y-4">
                {presence.recommendations.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-border bg-bg p-5"
                  >
                    <p className="text-sm leading-relaxed text-fg-muted text-pretty">
                      “{copy.recommendations[item.id]}”
                    </p>
                    <p className="mt-3 font-mono text-xs tracking-wider text-fg-subtle uppercase">
                      — {item.author}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-border px-6 py-5 md:px-10">
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
      <dd className="mt-1.5 text-sm font-medium text-fg">{value}</dd>
    </div>
  );
}
