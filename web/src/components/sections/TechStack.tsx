import type { Dictionary } from "@/i18n";
import { techStack } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function TechStack({
  dict,
  embedded = false,
}: {
  dict: Dictionary;
  embedded?: boolean;
}) {
  const copy = dict.stack;
  const body = (
    <>
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
        compact={embedded}
      />

      <dl className={embedded ? "mt-5" : "mt-12"}>
        {techStack.map((group, index) => (
          <Reveal key={group.id} delay={index * 40}>
            <div
              className={`grid gap-2 border-t border-border md:grid-cols-[160px_1fr] md:gap-6 ${
                embedded ? "py-3.5" : "gap-3 py-6 md:gap-8"
              }`}
            >
              <dt className="eyebrow text-fg-subtle">{copy.groups[group.id]}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-sm text-fg"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </>
  );

  if (embedded) return <div className="border-t border-border pt-8">{body}</div>;
  return <Section className="border-t border-border bg-bg-inset">{body}</Section>;
}
