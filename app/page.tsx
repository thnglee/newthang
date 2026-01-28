import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Interests } from "@/components/Interests";
import { Contact } from "@/components/Contact";

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
