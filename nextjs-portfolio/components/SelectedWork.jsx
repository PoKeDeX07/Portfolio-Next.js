'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { TiltCard } from '@/components/TiltCard';

const ProjectCard = ({ project, index, progress, total }) => {
  const isExternal = project.link?.startsWith('http');
  const isLastCard = index === total - 1;

  // Each card gets its own slice of the overall scroll progress.
  // Hold at full size/opacity for the first half of the slice,
  // then transition down during the second half — this is what
  // creates the "lock, read, then stack" feel.
  const start = index / total;
  const end = (index + 1) / total;
  const mid = start + (end - start) * 0.5;

  const scaleProgress = useTransform(
    progress,
    [start, mid, end],
    [1, 1, 0.9],
    { clamp: true }
  );

  const opacityProgress = useTransform(
    progress,
    [start, mid, end],
    [1, 1, 0.6],
    { clamp: true }
  );

  // The last card never shrinks/fades — it just sits on top permanently.
  const scale = isLastCard ? 1 : scaleProgress;
  const opacity = isLastCard ? 1 : opacityProgress;

  const Wrapper = ({ children }) => {
    if (!project.link) {
      return <div className="block rounded-2xl">{children}</div>;
    }

    if (isExternal) {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — view on Behance`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-2xl"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={project.link}
        aria-label={`${project.title} — view case study`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-2xl"
      >
        {children}
      </Link>
    );
  };

  return (
    <motion.div
      style={{
        scale,
        opacity,
        zIndex: index + 1,
      }}
      className="sticky top-[10vh] h-[80vh] will-change-transform"
    >
      <Wrapper>
        <TiltCard className="relative h-full" intensity={6}>
          <article className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm h-full transition-all duration-500 hover:border-[var(--border-hover)] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_10px_25px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_30px_60px_-30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <div className="grid md:grid-cols-5 gap-0 h-full">
              <div className="md:col-span-3 p-5 md:p-8 flex flex-col justify-center">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
              </div>

              <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-between gap-8">
                <div>
                  <span className="text-sm font-medium text-[var(--accent-from)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-[22px] md:text-[24px] leading-[1.2] font-semibold tracking-[-0.02em] text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[var(--text-muted)]">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--border)] text-[11px] tracking-wide text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                  {project.year} · {project.role}
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
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

      {/* Stacking cards container — NOTE: no overflow-hidden, it breaks sticky */}
      <div
        className="relative hidden md:block"
        style={{ height: `${projects.length * 100}vh` }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            progress={scrollYProgress}
            total={projects.length}
          />
        ))}
      </div>

      {/* Mobile: traditional grid layout, no scroll-linked animation */}
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
              <div className="relative h-[500px]">
                <ProjectCard
                  project={p}
                  index={i}
                  progress={scrollYProgress}
                  total={projects.length}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
