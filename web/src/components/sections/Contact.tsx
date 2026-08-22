import type { Dictionary } from "@/i18n";
import { contact } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Contact({ dict }: { dict: Dictionary }) {
  const copy = dict.contact;

  return (
    <Section id="contact" className="border-t border-border bg-bg-invert text-fg-invert">
      <Reveal>
        <p className="eyebrow text-highlight-soft">{copy.eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-display text-display font-bold tracking-[-0.02em] text-balance">
          {copy.heading}
        </h2>
        <p className="mt-6 max-w-xl text-lead text-fg-invert/70 text-pretty">
          {copy.body}
        </p>
      </Reveal>

      <Reveal delay={110}>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-full bg-highlight px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            {copy.emailCta}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-fg-invert/30 px-7 py-3.5 text-sm font-semibold transition hover:border-fg-invert/70"
          >
            {copy.linkedinCta}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-fg-invert/30 px-7 py-3.5 text-sm font-semibold transition hover:border-fg-invert/70"
          >
            {copy.githubCta}
          </a>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-14 border-t border-fg-invert/15 pt-8">
          <p className="eyebrow text-fg-invert/60">{copy.rolesLabel}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {copy.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-fg-invert/20 px-3.5 py-1.5 text-sm text-fg-invert/85"
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
