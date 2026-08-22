import type { Dictionary } from "@/i18n";
import { identity } from "@/data/profile";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="blueprint-grid absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_75%_15%,var(--accent-subtle),transparent_70%)]"
        aria-hidden
      />

      <BlueprintArtwork />

      <div className="mx-auto w-full max-w-6xl px-6 pt-20 pb-24 md:px-10 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <p className="enter inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elevated/70 px-3.5 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs tracking-wider text-fg-muted">
              {dict.hero.availability}
            </span>
          </p>

          <h1 className="enter mt-7 font-display text-hero font-extrabold tracking-[var(--text-hero--letter-spacing)] text-balance">
            {identity.shortName}
          </h1>

          <div className="rule-grow mt-6 h-0.5 w-28 bg-highlight" />

          <p className="enter mt-6 font-display text-title font-semibold tracking-[var(--text-title--letter-spacing)] text-fg">
            {dict.hero.role}
          </p>

          <p className="enter mt-5 max-w-2xl text-lead text-fg-muted text-pretty">
            {dict.hero.tagline}
          </p>

          <div className="enter mt-10 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition hover:bg-accent-hover"
            >
              {dict.hero.primaryCta}
            </a>
            <a
              href="#expertise"
              className="inline-flex items-center justify-center rounded-full border border-border-strong px-7 py-3.5 text-sm font-semibold text-fg transition hover:bg-bg-inset"
            >
              {dict.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Decorative elevation drawing that echoes an architecture blueprint. Purely
 * ornamental, so it is hidden from assistive technology.
 */
function BlueprintArtwork() {
  return (
    <svg
      className="pointer-events-none absolute -right-16 top-0 -z-10 hidden h-full w-[46%] text-fg opacity-[0.07] lg:block"
      viewBox="0 0 640 720"
      fill="none"
      aria-hidden
    >
      <path d="M80 660V190L230 100l150 90v470" stroke="currentColor" strokeWidth="2" />
      <path d="M230 100v560M80 300h300M80 420h300M80 540h300" stroke="currentColor" strokeWidth="1" />
      <path d="M420 660V250l110-64 110 64v410" stroke="currentColor" strokeWidth="1.5" />
      <path d="M530 186v474M420 360h220M420 470h220" stroke="currentColor" strokeWidth="1" />
      <circle cx="530" cy="300" r="22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="230" cy="360" r="34" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 660h640" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
