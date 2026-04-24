import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import ServerPing from "@/components/server-ping";

export default function Home() {
  return (
    <>
      <ServerPing />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
