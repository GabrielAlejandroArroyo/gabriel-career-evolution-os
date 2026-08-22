"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n";
import { capabilities, type CapabilityId } from "@/data/profile";
import { Expandable } from "@/components/ui/Expandable";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Capabilities({ dict }: { dict: Dictionary }) {
  const copy = dict.capabilities;
  const [openId, setOpenId] = useState<CapabilityId | null>(null);

  return (
    <Section id="expertise" density="compact" className="border-t border-border bg-bg-inset">
      <SectionHeading
        eyebrow={copy.eyebrow}
        heading={copy.heading}
        intro={copy.intro}
        compact
      />

      <div className="mt-8 grid gap-3">
        {capabilities.map((id, index) => {
          const item = copy.items[id];
          const isOpen = openId === id;

          return (
            <Reveal key={id} delay={index * 40}>
              <Expandable
                title={item.title}
                summary={item.teaser}
                open={isOpen}
                onToggle={() => setOpenId((current) => (current === id ? null : id))}
                expandLabel={copy.expand}
                collapseLabel={copy.collapse}
              >
                <dl className="space-y-4 text-sm leading-relaxed">
                  <div>
                    <dt className="eyebrow text-fg-subtle">{copy.challengeLabel}</dt>
                    <dd className="mt-1.5 text-fg-muted">{item.challenge}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-fg-subtle">{copy.approachLabel}</dt>
                    <dd className="mt-1.5 text-fg">{item.approach}</dd>
                  </div>
                  <div className="border-t border-border pt-4">
                    <dt className="eyebrow text-accent">{copy.outcomeLabel}</dt>
                    <dd className="mt-1.5 text-fg">{item.outcome}</dd>
                  </div>
                </dl>
              </Expandable>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
