"use client";

import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { ExperiencePanel } from "@/components/sections/ExperiencePanel";
import { Hero } from "@/components/sections/Hero";
import { Presence } from "@/components/sections/Presence";
import { Projects } from "@/components/sections/Projects";
import { Proof } from "@/components/sections/Proof";
import { useLocale } from "@/components/i18n/LocaleProvider";

export function LandingPage() {
  const { dict } = useLocale();

  return (
    <>
      <Hero dict={dict} />
      <Proof dict={dict} />
      <Capabilities dict={dict} />
      <ExperiencePanel dict={dict} />
      <Projects dict={dict} />
      <Presence dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
