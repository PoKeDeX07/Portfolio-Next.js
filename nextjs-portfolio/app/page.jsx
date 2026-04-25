import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWork from '@/components/SelectedWork';
import CaseStudy from '@/components/CaseStudy';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="App relative z-[2]">
      <Navigation />
      <Hero />
      <About />
      <SelectedWork />
      <CaseStudy />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
