import type { Dictionary } from "@/i18n";
import { credentials, type CredentialStatus } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Status styling deliberately makes "planned" read as a roadmap item and never
 * as an obtained credential (docs/ADR/004-evidence-first-claims.md).
 */
const statusStyles: Record<CredentialStatus, string> = {
  earned: "border-accent/40 bg-accent-subtle text-accent",
  inProgress: "border-highlight/40 text-highlight",
  planned: "border-border text-fg-subtle",
};

export function Credentials({ dict }: { dict: Dictionary }) {
  const copy = dict.credentials;

  return (
    <Section id="credentials">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
      />

      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {credentials.map((credential, index) => {
          const item = copy.items[credential.id];
          return (
            <Reveal key={credential.id} delay={(index % 3) * 70}>
              <li className="flex h-full flex-col justify-between gap-4 rounded-xl border border-border bg-bg-elevated p-6">
                <div>
                  <h3 className="font-display text-lg leading-snug font-semibold text-balance">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-fg-muted">{item.issuer}</p>
                </div>
                <span
                  className={`inline-flex w-fit rounded-full border px-3 py-1 font-mono text-[0.65rem] tracking-wider uppercase ${statusStyles[credential.status]}`}
                >
                  {copy.status[credential.status]}
                </span>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
