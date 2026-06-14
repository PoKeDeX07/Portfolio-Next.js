'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { TiltCard } from '@/components/TiltCard';

const ProjectCard = ({ project, index, progress }) => {
  const isInternal = project.link?.startsWith('/');
  
  // Staggered scroll ranges: each card animates over a wider window for smooth transitions
  // This allows overlap where previous card scales down as new card appears
  const cardStart = index * 0.25;
  const cardEnd = Math.min((index + 1.5) * 0.25, 1);
  
  // Map scroll progress to card animation (0 = hidden below, 1 = fully stacked)
  const cardProgress = useTransform(progress, [cardStart, cardEnd], [0, 1], {
    clamp: true,
  });

  // Y offset: cards smoothly slide up from below the viewport to their stacked position
  const yOffset = useTransform(cardProgress, [0, 1], [400, index * -18], {
    clamp: true,
  });

  // Scale: cards grow from 0.88 to 1, and shrink back when the next card takes over
  // This creates the "background card receding" effect
  const scale = useTransform(cardProgress, [0, 0.6, 1], [0.88, 1, 0.92], {
    clamp: true,
  });

  // Z-index: continuously increases to maintain proper stacking order
  const zIndex = useTransform(cardProgress, [0, 1], [index, index + projects.length]);

  // Shadow depth: increases as card comes to front, decreases as it goes to back
  const shadowOpacity = useTransform(cardProgress, [0, 0.5, 1], [0, 1, 0.5]);

  const Wrapper = ({ children }) =>
    project.link ? (
      isInternal ? (
        <Link
          href={project.link}
          aria-label={`${project.title} — view case study`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-[24px]"
        >
          {children}
        </Link>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — view on Behance`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-[24px]"
        >
          {children}
        </a>
      )
    ) : (
      <>{children}</>
    );

  return (
    <motion.div
      style={{
        y: yOffset,
        scale,
        zIndex,
        boxShadow: shadowOpacity.get ? shadowOpacity : undefined,
      }}
      className="absolute top-0 left-0 right-0 w-full opacity-100 will-change-transform"
    >
      <Wrapper>
        <TiltCard className="relative" intensity={6}>
          <article
            className="group relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[var(--border-hover)] shadow-none dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_30px_60px_-30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_30px_60px_-30px_rgba(0,0,0,0.25)]"
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-5 md:p-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--border)] text-[11px] tracking-wide text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-6 text-[22px] md:text-[24px] leading-[1.2] font-semibold tracking-[-0.02em] text-[var(--text)] line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.65] text-[var(--text-muted)] line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex items-end justify-between">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                    {project.year} · {project.role}
                  </div>

                  <span
                    aria-hidden="true"
                    className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--border)] flex items-center justify-center text-[var(--text)] transition-all duration-500 group-hover:bg-[var(--text)] group-hover:text-[var(--bg)] group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </TiltCard>
      </Wrapper>
    </motion.div>
  );
};

const SelectedWork = () => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop (md breakpoint and above)
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="work" className="relative" ref={containerRef}>
      {/* Header */}
      <div className="section-container py-24 md:py-32 mb-20 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              <span className="w-8 h-px bg-[var(--border-hover)]" />
              Selected Work
            </div>
            <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1] font-semibold tracking-[-0.03em] text-[var(--text)] max-w-3xl">
              A short reel of projects I&apos;m most proud of.
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)]">Count</div>
            <div className="text-[28px] font-semibold tracking-tight text-[var(--text)]">
              {String(projects.length).padStart(2, '0')}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stacked cards container */}
      {isDesktop ? (
        <div className="relative hidden md:block" style={{ height: `${(projects.length + 1.2) * 120}vh` }}>
          <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-6xl h-[60vh] px-6 lg:px-0">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  progress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Mobile: traditional grid layout */
        <div className="section-container py-12 md:hidden">
          <div className="grid grid-cols-1 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={p} index={i} progress={scrollYProgress} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedWork;
