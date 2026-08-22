import type { Dictionary } from "@/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Differentiation({ dict }: { dict: Dictionary }) {
  const { differentiation } = dict;

  return (
    <Section>
      <Reveal>
        <p className="eyebrow text-accent">{differentiation.eyebrow}</p>
        <h2 className="mt-4 max-w-4xl font-display text-display font-bold tracking-[-0.02em] text-balance">
          {differentiation.headlineLead}{" "}
          <span className="text-accent">{differentiation.headlineEmphasis}</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lead text-fg-muted text-pretty">
          {differentiation.body}
        </p>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-14 flex flex-wrap items-center gap-x-4 gap-y-5 font-display text-xl font-semibold tracking-tight md:text-2xl">
          {differentiation.formula.map((factor, index) => (
            <span key={factor} className="inline-flex items-center gap-4">
              <span className="border-b-2 border-highlight pb-1">{factor}</span>
              {index < differentiation.formula.length - 1 ? (
                <span className="text-fg-subtle" aria-hidden>
                  ×
                </span>
              ) : null}
            </span>
          ))}
          <span className="text-fg-subtle" aria-hidden>
            =
          </span>
          <span className="text-highlight">{differentiation.result}</span>
        </div>
      </Reveal>
    </Section>
  );
}
