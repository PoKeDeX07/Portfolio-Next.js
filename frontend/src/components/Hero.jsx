import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const Hero = () => {
  const handleViewWork = (e) => {
    e.preventDefault();
    const el = document.querySelector("#work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20"
    >
      {/* Ambient mesh gradient */}
      <div className="mesh-gradient" aria-hidden="true" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 grid-bg opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(124,92,255,0.15), transparent 60%)",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[12px] text-[#9CA3AF]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00D4FF]" />
            </span>
            Available for select projects — Q3 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl text-[44px] leading-[1.02] sm:text-[60px] md:text-[78px] lg:text-[92px] font-bold tracking-[-0.035em] text-[#EDEDED]"
        >
          Designing Experiences
          <br className="hidden sm:block" />
          <span className="text-gradient">Beyond Gravity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-[17px] md:text-[19px] leading-[1.55] text-[#9CA3AF]"
        >
          UI/UX Designer crafting intuitive, engaging, and human-centered digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex items-center gap-6 flex-wrap"
        >
          <a href="#work" onClick={handleViewWork} className="btn-primary group">
            View Work
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>

          <div className="flex items-center gap-2 text-[13px] text-[#9CA3AF]">
            <MapPin size={14} />
            Mumbai, India
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[11px] tracking-[0.2em] text-[#9CA3AF] uppercase"
        >
          <span>Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent scroll-hint" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
