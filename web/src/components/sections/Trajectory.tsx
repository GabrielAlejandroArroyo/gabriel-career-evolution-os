import type { Dictionary } from "@/i18n";
import { trajectory } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Trajectory({ dict }: { dict: Dictionary }) {
  const copy = dict.trajectory;

  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
      />

      <ol className="mt-14">
        {trajectory.map((step, index) => (
          <Reveal key={step.id} delay={index * 45}>
            <li className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-border py-5 last:border-b">
              <span
                className={`font-mono text-sm ${
                  step.isTarget ? "text-highlight" : "text-fg-subtle"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span
                  className={`font-display text-xl font-semibold md:text-2xl ${
                    step.isTarget ? "text-highlight" : "text-fg"
                  }`}
                >
                  {copy.steps[step.id]}
                </span>
                {step.isTarget ? (
                  <span className="rounded-full border border-highlight/40 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wider text-highlight uppercase">
                    {copy.targetLabel}
                  </span>
                ) : null}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
