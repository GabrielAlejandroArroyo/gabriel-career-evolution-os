import type { Dictionary } from "@/i18n";
import { trajectory } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Trajectory({
  dict,
  embedded = false,
}: {
  dict: Dictionary;
  embedded?: boolean;
}) {
  const copy = dict.trajectory;
  const body = (
    <>
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
        compact={embedded}
      />

      <ol className={embedded ? "mt-5" : "mt-14"}>
        {trajectory.map((step, index) => (
          <Reveal key={step.id} delay={index * 30}>
            <li
              className={`grid grid-cols-[2.5rem_1fr] items-baseline gap-3 border-t border-border last:border-b ${
                embedded ? "py-3" : "grid-cols-[3rem_1fr] gap-4 py-5"
              }`}
            >
              <span
                className={`font-mono text-sm ${
                  step.isTarget ? "text-highlight" : "text-fg-subtle"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className={`font-display font-semibold ${
                    embedded ? "text-lg" : "text-xl md:text-2xl"
                  } ${step.isTarget ? "text-highlight" : "text-fg"}`}
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
    </>
  );

  if (embedded) return <div className="border-t border-border pt-8">{body}</div>;
  return <Section id="experience">{body}</Section>;
}
