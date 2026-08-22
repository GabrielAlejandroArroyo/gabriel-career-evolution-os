import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { ExperiencePanel } from "@/components/sections/ExperiencePanel";
import { Hero } from "@/components/sections/Hero";
import { Presence } from "@/components/sections/Presence";
import { Projects } from "@/components/sections/Projects";
import { Proof } from "@/components/sections/Proof";
import { getDictionary, type Locale } from "@/i18n";

export function LandingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

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
