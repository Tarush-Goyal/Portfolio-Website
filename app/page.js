import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";
import WorkExperience from "./components/homepage/work-experience";
import Projects from "./components/homepage/projects";

export default async function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <ContactSection />
    </>
  )
};