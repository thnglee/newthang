import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Interests } from "@/sections/Interests";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white relative">
      <Header />
      <Hero />
      <section id="about">
        <LogoTicker />
        <Skills />
      </section>
      <Projects />
      <Experience />
      <Interests />
      <Contact />


    </main>
  );
}
