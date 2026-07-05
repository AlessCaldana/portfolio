import { LocaleGate }      from "@/components/locale-gate";
import { Navbar }          from "@/components/navbar";
import { Hero }            from "@/components/sections/hero";
import { About }           from "@/components/sections/about";
import { Skills }          from "@/components/sections/skills";
import { Experience }      from "@/components/sections/experience";
import { CaseStudies }     from "@/components/sections/case-studies";
import { Projects }        from "@/components/sections/projects";
import { Education }       from "@/components/sections/education";
import { Certifications }  from "@/components/sections/certifications";
import { LanguagesSection } from "@/components/sections/languages";
import { Stats }           from "@/components/sections/stats";
import { Contact }         from "@/components/sections/contact";
import { Footer }          from "@/components/footer";

export default function Home() {
  return (
    <LocaleGate>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <Projects />
        <Education />
        <Certifications />
        <LanguagesSection />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </LocaleGate>
  );
}
