'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { TiltCard } from '@/components/TiltCard';

const ProjectCard = ({ project, index }) => {
  const Wrapper = ({ children }) =>
    project.link ? (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — view on Behance`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-from)]/30 rounded-[24px]"
      >
        {children}
      </a>
    ) : (
      <>{children}</>
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Wrapper>
        <TiltCard className="relative" intensity={6}>
          <article
            className="group relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[var(--border-hover)]"
            style={{
              boxShadow:
                '0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.25)',
            }}
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 p-5 md:p-8">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-contain transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 90%, ${project.accent}22, transparent 60%)`,
                    }}
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
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between gap-6 mb-14 md:mb-20"
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

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
