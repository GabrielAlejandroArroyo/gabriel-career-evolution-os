import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionDensity = "default" | "compact" | "embedded";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  density?: SectionDensity;
};

const densityPadding: Record<SectionDensity, string> = {
  default: "py-(--spacing-section)",
  compact: "py-(--spacing-section-compact)",
  embedded: "py-8 md:py-10",
};

export function Section({
  id,
  children,
  className = "",
  density = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${densityPadding[density]} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  heading: ReactNode;
  intro?: string;
  tone?: "default" | "invert";
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  tone = "default",
  compact = false,
}: SectionHeadingProps) {
  const eyebrowTone = tone === "invert" ? "text-highlight-soft" : "text-accent";
  const introTone = tone === "invert" ? "text-fg-invert/70" : "text-fg-muted";

  return (
    <Reveal>
      <p className={`eyebrow ${eyebrowTone}`}>{eyebrow}</p>
      <h2
        className={`mt-3 max-w-3xl text-balance font-display font-bold tracking-[var(--text-display--letter-spacing)] ${
          compact ? "text-title" : "mt-4 text-display"
        }`}
      >
        {heading}
      </h2>
      {intro ? (
        <p className={`mt-3 max-w-2xl text-pretty ${compact ? "text-sm text-fg-muted" : `mt-5 text-lead ${introTone}`}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
