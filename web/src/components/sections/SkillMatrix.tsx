import type { Dictionary } from "@/i18n";
import { MAX_LEVEL, skillMatrix } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function SkillMatrix({
  dict,
  embedded = false,
}: {
  dict: Dictionary;
  embedded?: boolean;
}) {
  const copy = dict.skills;
  const body = (
    <>
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
        compact={embedded}
      />

      <Reveal>
        <ul className={`flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-fg-subtle ${embedded ? "mt-4" : "mt-8"}`}>
          {copy.legend.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </Reveal>

      <div className={`grid gap-x-10 gap-y-8 md:grid-cols-2 ${embedded ? "mt-6" : "mt-12 gap-y-12"}`}>
        {skillMatrix.map((domain, index) => (
          <Reveal key={domain.id} delay={(index % 2) * 60}>
            <div>
              <h3 className="eyebrow border-b border-border pb-2 text-accent">
                {copy.domains[domain.id]}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {domain.skills.map((skill) => (
                  <li key={skill.id} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-fg">{copy.names[skill.id]}</span>
                    <LevelMeter
                      level={skill.level}
                      label={`${copy.names[skill.id]}: ${copy.levelLabel} ${skill.level} / ${MAX_LEVEL}`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );

  if (embedded) return <div>{body}</div>;
  return <Section>{body}</Section>;
}

function LevelMeter({ level, label }: { level: number; label: string }) {
  return (
    <span className="flex shrink-0 items-center gap-1" role="img" aria-label={label}>
      {Array.from({ length: MAX_LEVEL }, (_, index) => (
        <span
          key={index}
          className={`h-1.5 w-5 rounded-full ${index < level ? "bg-accent" : "bg-border"}`}
        />
      ))}
    </span>
  );
}
