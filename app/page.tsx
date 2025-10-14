import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionDivider from '@/components/SectionDivider';
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certs from "@/components/Certs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Formation from "@/components/Formation";

export default function Page() {
  return (
    <>
      <Navbar />
      {/* id="main" permet au lien d’évitement de la Navbar de fonctionner */}
      <main id="main">
        <Hero />
        <SectionDivider label="À propos" href="#about" />
        <About />
        <Formation />
        <Skills />
        <Projects />
      
        <Experience />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
