'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { experience } from '@/data/portfolio';

const renderSummary = (text, links = []) => {
  if (!links || links.length === 0) return text;
  const pattern = new RegExp(
    `(${links.map((l) => l.text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
  );
  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const match = links.find((l) => l.text === part);
    if (match) {
      return (
        <a
          key={i}
          href={match.href}
          target="_blank"
          rel="noreferrer"
          className="text-[var(--text)] underline decoration-[var(--border-hover)] underline-offset-[3px] hover:decoration-[var(--text)] transition-colors"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32 border-t border-[var(--border)]">
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
                Experience
              </div>
              <h2 className="mt-5 text-[28px] md:text-[36px] leading-[1.15] font-semibold tracking-[-0.025em] text-[var(--text)]">
                3.5 years, one steady throughline.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[var(--text-muted)] max-w-sm">
                Different companies, different industries — one thread of craft running through all of them.
              </p>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <ol className="relative">
              <span className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--border-hover)] via-[var(--border)] to-transparent" />

              {experience.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  className="relative pl-10 pb-12 last:pb-0"
                >
                  <span className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#00D4FF]" />
                  </span>

                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div>
                      <div className="text-[18px] md:text-[20px] font-semibold text-[var(--text)] tracking-tight">
                        {item.role}
                      </div>
                      <div className="mt-1 text-[13px] text-[var(--text-muted)]">
                        {item.companyUrl ? (
                          <a
                            href={item.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[var(--text)] hover:opacity-80 transition-colors group/link"
                          >
                            {item.company}
                            <ArrowUpRight
                              size={12}
                              className="opacity-60 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                          </a>
                        ) : (
                          <span className="text-[var(--text)]">{item.company}</span>
                        )}
                        <span className="text-[var(--text-muted)]"> · {item.location}</span>
                      </div>
                    </div>
                    <div className="text-[12px] tracking-[0.15em] uppercase text-[var(--text-muted)]">
                      {item.period}
                    </div>
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.7] text-[var(--text-muted)] max-w-xl">
                    {renderSummary(item.summary, item.links)}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
