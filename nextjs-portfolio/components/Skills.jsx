'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills, tools } from '@/data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32 border-t border-[var(--border)]">
      <div className="section-container">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
                <span className="w-8 h-px bg-[var(--border-hover)]" />
                Skills & Tools
              </div>
              <h2 className="mt-5 text-[28px] md:text-[36px] leading-[1.15] font-semibold tracking-[-0.025em] text-[var(--text)]">
                A toolkit refined by shipping.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[var(--text-muted)] max-w-sm">
                The practices and tools I reach for on any given Tuesday.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8 space-y-12">
            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-5">
                Craft
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                    className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--border)] text-[13px] text-[var(--text)] hover:bg-[var(--border-hover)] hover:border-[var(--border-hover)] transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-5">
                Tools
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-5 bg-[var(--bg)] hover:bg-[var(--bg-elevated)] transition-colors duration-300"
                  >
                    <div className="text-[15px] font-semibold text-[var(--text)] tracking-tight">
                      {tool.name}
                    </div>
                    <div className="mt-1 text-[12px] text-[var(--text-muted)]">{tool.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
