import type { Dictionary } from "@/i18n";
import { contact } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Contact({ dict }: { dict: Dictionary }) {
  const copy = dict.contact;

  return (
    <Section id="contact" density="compact" className="border-t border-border bg-bg text-fg">
      <Reveal>
        <p className="eyebrow text-accent">{copy.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl font-display text-title font-bold tracking-[var(--text-title--letter-spacing)] text-balance md:text-display md:tracking-[var(--text-display--letter-spacing)]">
          {copy.heading}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-fg-muted text-pretty md:text-lead">
          {copy.body}
        </p>
      </Reveal>

      <Reveal delay={110}>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-full bg-highlight px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {copy.emailCta}
          </a>
          <a
            href="#presence"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition hover:border-border-strong"
          >
            {copy.presenceCta}
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition hover:border-border-strong"
          >
            {copy.portfolioCta}
          </a>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-10 border-t border-border pt-6">
          <p className="eyebrow text-fg-subtle">{copy.rolesLabel}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {copy.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-border px-3.5 py-1.5 text-sm text-fg-muted"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
