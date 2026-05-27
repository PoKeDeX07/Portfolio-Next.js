'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
};

export default function NovaTradeProject() {
  const router = useRouter();

  return (
    <main className="relative z-[2] overflow-hidden">
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[var(--nav-bg)] border-b border-[var(--border)]">
        <div className="section-container flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </button>
          <div className="text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
            Case Study
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="section-container">
          <motion.div {...fadeInUp} className="mb-8">
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#00D4FF]">
              <span className="w-8 h-px bg-[#00D4FF]" />
              Selected Case Study
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <h1 className="text-[48px] sm:text-[56px] md:text-[72px] leading-[1.05] font-bold tracking-[-0.03em] text-[var(--text)] mb-4">
              Nova Trade
            </h1>
            <p className="text-[18px] md:text-[20px] leading-[1.5] text-[var(--text-muted)] max-w-2xl">
              A beginner-friendly crypto trading platform — designed to make digital asset investing simple, safe, and educational.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-[var(--border)]"
          >
            <div>
              <div className="text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">Project</div>
              <p className="text-[16px] font-medium text-[var(--text)]">Crypto Trading App</p>
            </div>
            <div>
              <div className="text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">Duration</div>
              <p className="text-[16px] font-medium text-[var(--text)]">7–10 Days</p>
            </div>
            <div>
              <div className="text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-2">Role</div>
              <p className="text-[16px] font-medium text-[var(--text)]">UI/UX Designer</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[400px] md:h-[600px] mb-24 md:mb-32 px-4 md:px-0"
      >
        <Image
          src="/projects/nova-trade/card-cover.jpg"
          alt="Nova Trade — Hero Image"
          fill
          className="object-cover rounded-2xl md:rounded-3xl"
          priority
        />
      </motion.section>

      {/* Problem Section */}
      <section className="relative py-20 md:py-32">
        <div className="section-container">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#00D4FF] mb-6">
              <span className="w-8 h-px bg-[#00D4FF]" />
              THE CHALLENGE
            </div>
            <h2 className="text-[40px] md:text-[56px] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--text)] mb-8">
              Crypto is locked behind complexity.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--text-muted)] max-w-3xl mb-12"
          >
            Most crypto platforms today are overloaded with complex charts, jargon, and advanced tools. While this caters to professionals, it alienates beginners — who feel overwhelmed placing their first trade, struggle to understand risks due to lack of context, and abandon apps quickly due to poor onboarding. The result: high drop-off, abandoned accounts, and a lasting lack of trust.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { label: 'Core Beginner Pain Points', value: '3' },
              { label: 'First-Trade Drop-Off Rate', value: 'High' },
              { label: 'Onboarding Complexity', value: 'Extreme' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]"
              >
                <div className="text-[14px] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-2">
                  {stat.label}
                </div>
                <div className="text-[32px] font-bold text-[var(--text)]">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="section-container">
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#00D4FF] mb-6">
              <span className="w-8 h-px bg-[#00D4FF]" />
              THE SOLUTION
            </div>
            <h2 className="text-[40px] md:text-[56px] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--text)] mb-8">
              Simple onboarding, calm trading, built-in learning.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--text-muted)] max-w-3xl mb-12"
          >
            A clean glassmorphism UI in dark mode with neon blue accents. Simplified charts and a Low / Medium / High risk meter guide every trade. A guided onboarding flow meets users where they are, while a built-in Learn tab with a glossary and gamified modules builds confidence before they commit. Density is earned, not assumed.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-6 md:gap-8"
          >
            {[
              { label: 'Risk Levels (L / M / H)', value: '3 Tiers' },
              { label: 'Built-in Learn Tab', value: 'Gamified' },
              { label: 'Onboarding Steps', value: '5 Screens' },
              { label: 'Primary Color', value: '#00D4FF' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]"
              >
                <div className="text-[14px] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-2">
                  {stat.label}
                </div>
                <div className="text-[24px] font-bold text-[var(--text)]">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design System Section */}
      <section className="relative py-20 md:py-32">
        <div className="section-container">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#00D4FF] mb-6">
              <span className="w-8 h-px bg-[#00D4FF]" />
              DESIGN SYSTEM
            </div>
            <h2 className="text-[40px] md:text-[56px] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--text)]">
              Dark. Calm. Focused.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16"
          >
            {/* Colors */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-[18px] font-semibold text-[var(--text)] uppercase tracking-[0.1em] mb-8">
                Colors
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'Primary Navy Blue', hex: '#0B0B0F', code: '#0B0B0F' },
                  { name: 'Accent Cyan', hex: '#00D4FF', code: '#00D4FF' },
                  { name: 'Success Green', hex: '#10B981', code: '#10B981' },
                  { name: 'Neutral Gray', hex: '#6B7280', code: '#6B7280' },
                ].map((color, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-lg border border-[var(--border)]"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <div className="text-[14px] font-medium text-[var(--text)]">{color.name}</div>
                      <div className="text-[12px] text-[var(--text-muted)]">{color.code}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Typography */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-[18px] font-semibold text-[var(--text)] uppercase tracking-[0.1em] mb-8">
                Typography
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">Display</div>
                  <div className="text-[32px] font-bold text-[var(--text)]">Sora</div>
                  <div className="text-[13px] text-[var(--text-muted)]">Bold Headlines & Titles</div>
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">Body</div>
                  <div className="text-[16px] font-medium text-[var(--text)]">Inter</div>
                  <div className="text-[13px] text-[var(--text-muted)]">Clean, Legible Text</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies / Screenshots */}
      <section className="relative py-20 md:py-32">
        <div className="section-container">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#00D4FF] mb-6">
              <span className="w-8 h-px bg-[#00D4FF]" />
              CASE STUDIES
            </div>
            <h2 className="text-[40px] md:text-[56px] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--text)]">
              Key User Journeys
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Trading Journey */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)]">
                <Image
                  src="/projects/nova-trade/trade-screen.png"
                  alt="Trading Interface"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[var(--text)]">Trading Interface</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-[1.6]">
                Simplified trading screen with risk-level indicators, real-time charts, and one-tap actions to Receive, Send, or Swap.
              </p>
            </motion.div>

            {/* Portfolio Dashboard */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)]">
                <Image
                  src="/projects/nova-trade/dashboard-trade.png"
                  alt="Portfolio Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[var(--text)]">Portfolio Dashboard</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-[1.6]">
                At-a-glance portfolio value, open positions, and quick action buttons for Fund, Receive, Send, or Swap.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 gap-8 mt-8"
          >
            {/* PNL Chart */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)]">
                <Image
                  src="/projects/nova-trade/pnl-graph.png"
                  alt="PNL Chart"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[var(--text)]">Performance Analytics</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-[1.6]">
                Portfolio PNL tracking with interactive time-period selector and detailed allocation breakdown.
              </p>
            </motion.div>

            {/* Allocation */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)]">
                <Image
                  src="/projects/nova-trade/allocation-chart.png"
                  alt="Allocation Chart"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[20px] font-semibold text-[var(--text)]">Asset Allocation</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-[1.6]">
                Visual breakdown of holdings across DOGE, SOL, ETH, and other assets with real-time percentages.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Screens */}
      <section className="relative py-20 md:py-32 bg-[var(--bg-secondary)]">
        <div className="section-container">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--text)]">
              More Screens
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { src: '/projects/nova-trade/splash-screen.png', title: 'Splash Screen' },
              { src: '/projects/nova-trade/welcome-back.png', title: 'Authentication' },
              { src: '/projects/nova-trade/dashboard-invest.png', title: 'Watchlist' },
              { src: '/projects/nova-trade/portfolio-overview.png', title: 'Assets' },
            ].map((screen, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-[var(--border)]"
              >
                <Image
                  src={screen.src}
                  alt={screen.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-[16px] font-semibold text-white">{screen.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Back to Work CTA */}
      <section className="relative py-16 md:py-20">
        <div className="section-container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-[28px] md:text-[36px] leading-[1.2] font-bold tracking-[-0.02em] text-[var(--text)] mb-6">
              Explore More Work
            </h2>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--border)] text-[var(--text)] hover:bg-[var(--border-hover)] transition-all duration-300"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
