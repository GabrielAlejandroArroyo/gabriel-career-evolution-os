import type { Dictionary } from "@/i18n";
import { MAX_LEVEL, skillMatrix } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function SkillMatrix({ dict }: { dict: Dictionary }) {
  const copy = dict.skills;

  return (
    <Section>
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
      />

      <Reveal>
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-fg-subtle">
          {copy.legend.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
        {skillMatrix.map((domain, index) => (
          <Reveal key={domain.id} delay={(index % 2) * 80}>
            <div>
              <h3 className="eyebrow border-b border-border pb-3 text-accent">
                {copy.domains[domain.id]}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {domain.skills.map((skill) => (
                  <li key={skill.id} className="flex items-center justify-between gap-6">
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
    </Section>
  );
}

function LevelMeter({ level, label }: { level: number; label: string }) {
  return (
    <span className="flex shrink-0 items-center gap-1" role="img" aria-label={label}>
      {Array.from({ length: MAX_LEVEL }, (_, index) => (
        <span
          key={index}
          className={`h-1.5 w-6 rounded-full ${
            index < level ? "bg-accent" : "bg-border"
          }`}
        />
      ))}
    </span>
  );
}
