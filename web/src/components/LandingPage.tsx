import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { Credentials } from "@/components/sections/Credentials";
import { Differentiation } from "@/components/sections/Differentiation";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Metrics } from "@/components/sections/Metrics";
import { Presence } from "@/components/sections/Presence";
import { Projects } from "@/components/sections/Projects";
import { SkillMatrix } from "@/components/sections/SkillMatrix";
import { TechStack } from "@/components/sections/TechStack";
import { Trajectory } from "@/components/sections/Trajectory";
import { getDictionary, type Locale } from "@/i18n";

export function LandingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} />
      <Metrics dict={dict} />
      <Differentiation dict={dict} />
      <Capabilities dict={dict} />
      <SkillMatrix dict={dict} />
      <TechStack dict={dict} />
      <Trajectory dict={dict} />
      <Industries dict={dict} />
      <Projects dict={dict} />
      <Credentials dict={dict} />
      <Presence dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
