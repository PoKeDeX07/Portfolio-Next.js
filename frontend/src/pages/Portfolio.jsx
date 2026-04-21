import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import SelectedWork from "../components/SelectedWork";
import CaseStudy from "../components/CaseStudy";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Aniket Kulkarni — UI/UX Designer";
  }, []);

  return (
    <main className="relative z-[2]">
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
};

export default Portfolio;
