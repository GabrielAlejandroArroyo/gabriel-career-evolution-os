import type { Dictionary } from "@/i18n";
import { credentials, type CredentialStatus } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

const statusStyles: Record<CredentialStatus, string> = {
  earned: "border-accent/40 bg-accent-subtle text-accent",
  inProgress: "border-highlight/40 text-highlight",
  planned: "border-border text-fg-subtle",
};

export function Credentials({
  dict,
  embedded = false,
}: {
  dict: Dictionary;
  embedded?: boolean;
}) {
  const copy = dict.credentials;
  const body = (
    <>
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
        compact={embedded}
      />

      <ul
        className={`grid gap-3 md:grid-cols-2 lg:grid-cols-3 ${
          embedded ? "mt-5" : "mt-12 gap-4"
        }`}
      >
        {credentials.map((credential, index) => {
          const item = copy.items[credential.id];
          return (
            <Reveal key={credential.id} delay={(index % 3) * 50}>
              <li className="flex h-full flex-col justify-between gap-3 rounded-xl border border-border bg-bg-elevated p-5">
                <div>
                  <h3 className="font-display text-base leading-snug font-semibold text-balance">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">{item.issuer}</p>
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
    </>
  );

  if (embedded) return <div className="border-t border-border pt-8">{body}</div>;
  return <Section id="credentials">{body}</Section>;
}
