import type { Dictionary } from "@/i18n";
import { industries } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Industries({
  dict,
  embedded = false,
}: {
  dict: Dictionary;
  embedded?: boolean;
}) {
  const copy = dict.industries;
  const body = (
    <div className={`grid md:grid-cols-[1fr_1.1fr] ${embedded ? "gap-6" : "gap-12"}`}>
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
        compact={embedded}
      />

      <ul className="grid content-start sm:grid-cols-2">
        {industries.map((id, index) => (
          <Reveal key={id} delay={index * 40}>
            <li
              className={`border-t border-border text-fg ${
                embedded ? "py-2.5 text-base" : "py-4 text-lg"
              }`}
            >
              {copy.items[id]}
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );

  if (embedded) return <div className="border-t border-border pt-8">{body}</div>;
  return <Section className="border-t border-border bg-bg-inset">{body}</Section>;
}
