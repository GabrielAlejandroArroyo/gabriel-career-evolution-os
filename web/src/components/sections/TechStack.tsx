import type { Dictionary } from "@/i18n";
import { techStack } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function TechStack({ dict }: { dict: Dictionary }) {
  const copy = dict.stack;

  return (
    <Section className="border-t border-border bg-bg-inset">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
      />

      <dl className="mt-12">
        {techStack.map((group, index) => (
          <Reveal key={group.id} delay={index * 50}>
            <div className="grid gap-3 border-t border-border py-6 md:grid-cols-[200px_1fr] md:gap-8">
              <dt className="eyebrow text-fg-subtle">{copy.groups[group.id]}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-bg-elevated px-3.5 py-1.5 text-sm text-fg"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
