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

  const scale = isLastCard ? 1 : scaleProgress;
  const opacity = isLastCard ? 1 : opacityProgress;

  const Wrapper = ({ children }) => {
    if (!project.link) {
      return <div className="block rounded-2xl h-full">{children}</div>;
    }

    if (isExternal) {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — view on Behance`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-2xl h-full"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={project.link}
        aria-label={`${project.title} — view case study`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-2xl h-full"
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
      className="sticky top-[8vh] h-[84vh] will-change-transform px-4 sm:px-8 lg:px-16 xl:px-24"
    >
      <Wrapper>
        <TiltCard className="relative h-[92%] mx-auto max-w-7xl" intensity={6}>
          <article className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm h-full transition-all duration-500 hover:border-[var(--border-hover)] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_10px_25px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_30px_60px_-30px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <div className="grid md:grid-cols-5 gap-0 h-full">
              <div className="md:col-span-3 p-5 md:p-8 flex flex-col justify-center">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2 p-5 md:p-8 flex flex-col justify-center">
                <span className="text-sm font-medium text-[var(--accent-from)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-3 text-[var(--text-secondary)]">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </article>
        </TiltCard>
      </Wrapper>
    </motion.div>
  );
};

// Mobile card — separate from the sticky desktop card.
// No scroll-linked scale/opacity, no sticky positioning.
// Just a normal card that fades up into view once.
const MobileProjectCard = ({ project, index }) => {
  const isExternal = project.link?.startsWith('http');

  const Wrapper = ({ children }) => {
    if (!project.link) {
      return <div className="block rounded-2xl h-full">{children}</div>;
    }

    if (isExternal) {
      return (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — view on Behance`}
          className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-2xl h-full"
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={project.link}
        aria-label={`${project.title} — view case study`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-2xl h-full"
      >
        {children}
      </Link>
    );
  };

  return (
    <Wrapper>
      <article className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-500 hover:border-[var(--border-hover)] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_10px_25px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,_0_30px_60px_-30px_rgba(0,0,0,0.25)]">
        <div className="p-5 flex flex-col">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--bg)]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-5">
            <span className="text-sm font-medium text-[var(--accent-from)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-[var(--text-secondary)]">
              {project.description}
            </p>
            {project.tags && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const SelectedWork = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="work" className="relative">
      {/* Header */}
      <div className="section-container pt-20 pb-8 px-4 sm:px-8 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Selected Work</h2>
        </motion.div>
      </div>

      {/* Desktop: sticky stacking cards */}
      <div
        ref={containerRef}
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

      {/* Mobile: simple stacked grid, no scroll-linked stacking */}
      <div className="px-4 sm:px-6 py-12 md:hidden">
        <div className="grid grid-cols-1 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <MobileProjectCard project={p} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
