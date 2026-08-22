import type { Dictionary } from "@/i18n";
import { industries } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Industries({ dict }: { dict: Dictionary }) {
  const copy = dict.industries;

  return (
    <Section className="border-t border-border bg-bg-inset">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
        <SectionHeading
          eyebrow={copy.eyebrow}
          heading={copy.heading}
          intro={copy.intro}
        />

        <ul className="grid content-start sm:grid-cols-2">
          {industries.map((id, index) => (
            <Reveal key={id} delay={index * 60}>
              <li className="border-t border-border py-4 text-lg text-fg">
                {copy.items[id]}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
