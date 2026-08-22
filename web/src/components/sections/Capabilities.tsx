import type { Dictionary } from "@/i18n";
import { capabilities } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Capabilities({ dict }: { dict: Dictionary }) {
  const copy = dict.capabilities;

  return (
    <Section id="expertise" className="border-t border-border bg-bg-inset">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {capabilities.map((id, index) => {
          const item = copy.items[id];
          return (
            <Reveal key={id} delay={(index % 2) * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-7 transition hover:border-border-strong md:p-8">
                <h3 className="font-display text-title font-bold text-balance">
                  {item.title}
                </h3>
                <dl className="mt-6 space-y-5 text-sm leading-relaxed">
                  <div>
                    <dt className="eyebrow text-fg-subtle">{copy.challengeLabel}</dt>
                    <dd className="mt-1.5 text-fg-muted">{item.challenge}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-fg-subtle">{copy.approachLabel}</dt>
                    <dd className="mt-1.5 text-fg">{item.approach}</dd>
                  </div>
                  <div className="border-t border-border pt-5">
                    <dt className="eyebrow text-accent">{copy.outcomeLabel}</dt>
                    <dd className="mt-1.5 text-fg">{item.outcome}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
