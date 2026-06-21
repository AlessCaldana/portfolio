import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { LanguagesSection } from "@/components/sections/languages";
import { Certifications } from "@/components/sections/certifications";
import { Stats } from "@/components/sections/stats";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <LanguagesSection />
        <Certifications />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
