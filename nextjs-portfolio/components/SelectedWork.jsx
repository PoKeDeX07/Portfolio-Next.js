'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { TiltCard } from '@/components/TiltCard';

const ProjectCard = ({ project, isActive, isNext, index, progress }) => {
  const isInternal = project.link?.startsWith('/');

  // Calculate scroll range: each card gets a dedicated scroll window
  // isActive card: full visibility and scale
  // isNext card: preview (10-15% visible at bottom)
  const cardStart = index / projects.length;
  const cardEnd = (index + 1) / projects.length;

  // Progress within this card's scroll range
  const cardProgress = useTransform(progress, [cardStart, cardEnd], [0, 1], {
    clamp: true,
  });

  // Y position: next card starts below viewport and slides up
  const yOffset = useTransform(cardProgress, [0, 1], [300, 0], {
    clamp: true,
  });

  // Scale: incoming card grows from 0.96 to 1
  const scale = useTransform(cardProgress, [0, 1], [0.96, 1], {
    clamp: true,
  });

  // Z-index: ensures proper stacking
  const zIndex = isActive ? projects.length + 1 : isNext ? projects.length : index;

  // Only render if active or next card
  if (!isActive && !isNext) return null;

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
      style={
        isNext
          ? {
              y: yOffset,
              scale,
              zIndex,
            }
          : {
              zIndex,
            }
      }
      className="absolute top-0 left-0 right-0 w-full will-change-transform"
    >
      <Wrapper>
        <TiltCard className="relative" intensity={6}>
          <article className="group relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[var(--border-hover)] shadow-none dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_30px_60px_-30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_30px_60px_-30px_rgba(0,0,0,0.25)]">
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
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Determine active card based on scroll progress
  const activeCardIndex = useTransform(scrollYProgress, (latest) => {
    return Math.min(Math.floor(latest * projects.length), projects.length - 1);
  });

  return (
    <section id="work" className="relative" ref={containerRef}>
      {/* Header */}
      <div className="section-container py-24 md:py-32">
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

      {/* Stacked cards - Desktop */}
      {isDesktop ? (
        <div
          className="relative hidden md:block overflow-hidden"
          style={{ height: `${projects.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            <div className="relative w-full max-w-6xl h-[60vh] px-6 lg:px-0">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  animate={(activeIndex) => {
                    // For active cards: show with full scale
                    // For next cards: animate entry
                    // For past cards: don't render
                  }}
                >
                  <ProjectCard
                    project={project}
                    isActive={
                      activeCardIndex.get ? activeCardIndex.get() === index : index === 0
                    }
                    isNext={
                      activeCardIndex.get
                        ? activeCardIndex.get() === index - 1
                        : index === 1
                    }
                    index={index}
                    progress={scrollYProgress}
                  />
                </motion.div>
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
                <ProjectCard
                  project={p}
                  isActive={true}
                  isNext={false}
                  index={i}
                  progress={scrollYProgress}
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SelectedWork;
