import type { Dictionary } from "@/i18n";
import { stats } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

export function Metrics({ dict }: { dict: Dictionary }) {
  const items = [
    { value: `${stats.yearsExperience}+`, label: dict.metrics.yearsLabel },
    { value: `${stats.industries}+`, label: dict.metrics.industriesLabel },
    { value: dict.metrics.scopeValue, label: dict.metrics.scopeLabel },
  ];

  return (
    <section className="border-b border-border bg-bg-inset">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 sm:grid-cols-3 md:px-10">
        {items.map((item, index) => (
          <Reveal key={item.label} delay={index * 90}>
            <p className="font-display text-4xl font-extrabold tracking-[-0.03em] text-accent md:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 text-sm leading-snug text-fg-muted">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
