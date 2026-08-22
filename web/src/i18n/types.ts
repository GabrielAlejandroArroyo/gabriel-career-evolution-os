import type {
  CapabilityId,
  CredentialId,
  IndustryId,
  SkillDomainId,
  SkillId,
  StackGroupId,
  TrajectoryStepId,
} from "@/data/profile";

export type Locale = "es" | "en";

/**
 * Shared shape for every dictionary. Because the record keys are derived from
 * the union types in `profile.ts`, adding a skill or a section to the data
 * layer breaks the build until both locales are translated.
 */
export type Dictionary = {
  locale: Locale;
  htmlLang: string;
  localeName: string;
  switchTo: { href: string; label: string; hreflang: string };

  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    jobTitle: string;
  };

  nav: {
    skipToContent: string;
    expertise: string;
    experience: string;
    credentials: string;
    contact: string;
    toggleTheme: string;
  };

  hero: {
    availability: string;
    role: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };

  metrics: {
    yearsLabel: string;
    industriesLabel: string;
    scopeValue: string;
    scopeLabel: string;
  };

  differentiation: {
    eyebrow: string;
    headlineLead: string;
    headlineEmphasis: string;
    body: string;
    formula: string[];
    result: string;
  };

  capabilities: {
    eyebrow: string;
    heading: string;
    intro: string;
    challengeLabel: string;
    approachLabel: string;
    outcomeLabel: string;
    items: Record<
      CapabilityId,
      { title: string; challenge: string; approach: string; outcome: string }
    >;
  };

  skills: {
    eyebrow: string;
    heading: string;
    intro: string;
    levelLabel: string;
    legend: string[];
    domains: Record<SkillDomainId, string>;
    names: Record<SkillId, string>;
  };

  stack: {
    eyebrow: string;
    heading: string;
    intro: string;
    groups: Record<StackGroupId, string>;
  };

  trajectory: {
    eyebrow: string;
    heading: string;
    intro: string;
    targetLabel: string;
    steps: Record<TrajectoryStepId, string>;
  };

  industries: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: Record<IndustryId, string>;
  };

  credentials: {
    eyebrow: string;
    heading: string;
    intro: string;
    status: { earned: string; inProgress: string; planned: string };
    items: Record<CredentialId, { name: string; issuer: string }>;
  };

  contact: {
    eyebrow: string;
    heading: string;
    body: string;
    rolesLabel: string;
    roles: string[];
    emailCta: string;
    linkedinCta: string;
    githubCta: string;
  };

  footer: {
    tagline: string;
    builtWith: string;
  };
};
