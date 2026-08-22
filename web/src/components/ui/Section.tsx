import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-(--spacing-section) ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  heading: ReactNode;
  intro?: string;
  tone?: "default" | "invert";
};

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  tone = "default",
}: SectionHeadingProps) {
  const eyebrowTone = tone === "invert" ? "text-highlight-soft" : "text-accent";
  const introTone = tone === "invert" ? "text-fg-invert/70" : "text-fg-muted";

  return (
    <Reveal>
      <p className={`eyebrow ${eyebrowTone}`}>{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-balance font-display text-display font-bold tracking-[-0.02em]">
        {heading}
      </h2>
      {intro ? (
        <p className={`mt-5 max-w-2xl text-lead ${introTone}`}>{intro}</p>
      ) : null}
    </Reveal>
  );
}
