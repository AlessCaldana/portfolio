import fs   from "node:fs";
import path from "node:path";

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

/** Runs at build time (Server Component). Scans /public/projects/ and
 *  returns a manifest like { emdupar: ["/projects/emdupar/01.png", ...] }
 *  Each key is a folder name; values are sorted image paths. */
function getImageManifest(): Record<string, string[]> {
  try {
    const base = path.join(process.cwd(), "public", "projects");
    if (!fs.existsSync(base)) return {};

    const manifest: Record<string, string[]> = {};
    for (const key of fs.readdirSync(base)) {
      const dir = path.join(base, key);
      if (!fs.statSync(dir).isDirectory()) continue;
      manifest[key] = fs.readdirSync(dir)
        .filter((f) => /\.(png|jpe?g|webp|gif|avif)$/i.test(f))
        .sort()
        .map((f) => `/projects/${key}/${f}`);
    }
    return manifest;
  } catch {
    return {};
  }
}

export default function Home() {
  const imageManifest = getImageManifest();

  return (
    <LocaleGate>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <Projects imageManifest={imageManifest} />
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
