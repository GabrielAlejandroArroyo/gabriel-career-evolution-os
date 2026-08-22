import type { Dictionary } from "@/i18n";
import { stats } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Compact proof strip: metrics + differentiation formula in one short band.
 */
export function Proof({ dict }: { dict: Dictionary }) {
  const items = [
    { value: `${stats.yearsExperience}+`, label: dict.metrics.yearsLabel },
    { value: `${stats.industries}+`, label: dict.metrics.industriesLabel },
    { value: dict.metrics.scopeValue, label: dict.metrics.scopeLabel },
  ];
  const { differentiation } = dict;

  return (
    <section className="border-b border-border bg-bg-inset">
      <div className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 60}>
              <p className="font-display text-3xl font-extrabold tracking-[-0.03em] text-accent md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-fg-muted">{item.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-fg-muted text-pretty md:text-base">
            <span className="font-semibold text-fg">{differentiation.headlineLead}</span>{" "}
            <span className="font-semibold text-accent">
              {differentiation.headlineEmphasis}
            </span>
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-base font-semibold tracking-tight md:text-lg">
            {differentiation.formula.map((factor, index) => (
              <span key={factor} className="inline-flex items-center gap-3">
                <span className="border-b-2 border-highlight pb-0.5">{factor}</span>
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
      </div>
    </section>
  );
}
