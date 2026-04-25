'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

const Hero = () => {
  const handleViewWork = (e) => {
    e.preventDefault();
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 md:pt-32 pb-36 md:pb-40"
    >
      <div className="mesh-gradient" aria-hidden="true" />
      <div
        className="absolute inset-0 grid-bg opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 120%, rgba(124,92,255,0.15), transparent 60%)',
        }}
      />

      <div className="section-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8 sm:mb-10"
        >
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--border)] border border-[var(--border)] text-[12px] sm:text-[13px] text-[var(--text-muted)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#F59E0B]/80" />
            </span>
            Heads-down at work — not taking new projects
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[32px] sm:text-[42px] md:text-[52px] font-medium tracking-[-0.005em] text-[var(--text-muted)] mb-4 sm:mb-5"
        >
          I&apos;m <span className="text-[var(--text)]">Aniket</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center text-[46px] xs:text-[54px] leading-[1.04] sm:text-[68px] md:text-[84px] lg:text-[96px] font-bold tracking-[-0.035em] text-[var(--text)]"
        >
          Designing Experiences
          <br />
          <span className="text-gradient whitespace-nowrap">Beyond Gravity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-10 mx-auto max-w-2xl text-center text-[18px] sm:text-[19px] md:text-[20px] leading-[1.55] text-[var(--text-muted)]"
        >
          UI/UX Designer crafting intuitive, engaging, and human-centered digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 flex items-center justify-center gap-5 sm:gap-6 flex-wrap"
        >
          <a href="#work" onClick={handleViewWork} className="btn-primary group">
            View Work
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>

          <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-[var(--text-muted)]">
            <MapPin size={14} />
            Mumbai, India
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        aria-hidden="true"
        className="flex absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 text-[11px] tracking-[0.2em] text-[var(--text-muted)] uppercase pointer-events-none"
      >
        <span>Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-[var(--text-muted)]/50 to-transparent scroll-hint" />
      </motion.div>
    </section>
  );
};

export default Hero;
