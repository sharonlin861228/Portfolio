"use client";

import About from "@/common/components/sections/about";
import Contact from "@/common/components/sections/contact";
import Experience from "@/common/components/sections/experience";
import Hero from "@/common/components/sections/hero";
import Projects from "@/common/components/sections/projects";
import Certificates from "@/common/components/sections/certificates";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </main>
  );
}
