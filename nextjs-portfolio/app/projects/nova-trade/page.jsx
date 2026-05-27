"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Zap, Palette, Type } from "lucide-react";
import { Sora, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Section({ children, className = "", id = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`w-full px-6 md:px-12 lg:px-24 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function InfoBlock({ label, value }) {
  return (
    <div className="flex flex-col gap-1.5 items-center text-center">
      <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]">{label}</span>
      <span className="text-[15px] font-medium text-[var(--text)]">{value}</span>
    </div>
  );
}

export default function NovaTradeCaseStudy() {
  return (
    <main className={`min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased selection:bg-[#4E7BFF]/30 overflow-x-hidden ${inter.className}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <Link 
          href="/" 
          className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--nav-bg)]/80 border border-[var(--border)] backdrop-blur-xl text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-all duration-300 shadow-xl shadow-black/20"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full min-h-[95vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden text-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] left-[15%] w-[70vw] h-[70vw] rounded-full bg-[#4E7BFF]/10 blur-[120px] mix-blend-screen" />
          <div className="absolute top-[40%] right-[15%] w-[60vw] h-[60vw] rounded-full bg-[#7C5CFF]/10 blur-[120px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuODUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgibm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] opacity-[0.03] mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/50 to-[var(--bg)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="px-3 py-1.5 rounded-full bg-[#4E7BFF]/10 border border-[#4E7BFF]/20 text-[#4E7BFF] text-[11px] font-semibold tracking-widest uppercase">
              Case Study
            </span>
            <span className="text-[11px] text-[var(--text-muted)] tracking-[0.15em] uppercase font-medium">Fintech / Mobile App</span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tight mb-8 leading-[1] ${sora.className}`}>
            Nova Trade
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed mb-12 font-light">
            A beginner-friendly crypto trading platform — designed to make digital asset investing simple, safe, and educational.
          </p>

          <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-10 border-t border-[var(--border)] w-full">
            <InfoBlock label="Role" value="UI/UX Designer" />
            <InfoBlock label="Timeline" value="3 Months" />
            <InfoBlock label="Platforms" value="iOS & Android" />
            <InfoBlock label="Focus" value="Onboarding & Simplicity" />
          </div>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mt-20 w-full max-w-4xl mx-auto flex justify-center"
        >
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="w-[280px] md:w-[320px] aspect-[9/19] rounded-[40px] bg-[#4E7BFF]/30 blur-[80px] opacity-60" />
          </div>
          <div className="relative w-[280px] md:w-[320px] aspect-[9/19] rounded-[40px] border-[8px] border-[#2A2D3A] overflow-hidden shadow-2xl shadow-[#4E7BFF]/20 bg-black">
            <Image
              src="/projects/nova-trade/dashboard-invest.png"
              alt="Nova Trade Hero App Screen"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </header>

      {/* The Challenge */}
      <Section className="border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-6">
            <span className="w-8 h-px bg-[var(--border)]" />
            The Challenge
            <span className="w-8 h-px bg-[var(--border)]" />
          </div>
          <h2 className={`text-[32px] md:text-[40px] leading-[1.2] font-semibold tracking-tight text-[var(--text)] mb-8 ${sora.className}`}>
            Crypto is locked behind complexity.
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.7] text-[var(--text-muted)] max-w-3xl mx-auto">
            Most crypto platforms today are overloaded with complex charts, jargon, and advanced tools. While this caters to professionals, it alienates beginners who feel overwhelmed placing their first trade, struggle to understand risks, and abandon apps quickly during onboarding.
          </p>
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              { 
                icon: ShieldCheck, 
                title: "Risk Education", 
                desc: "Built-in risk meters to help users understand their exposure before placing any trade." 
              },
              { 
                icon: Zap, 
                title: "Guided Onboarding", 
                desc: "A simplified, step-by-step approach for KYC and wallet setup to reduce drop-offs." 
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-[var(--border)]/30 border border-[var(--border)] backdrop-blur-sm group hover:bg-[var(--border)] hover:border-[var(--border-hover)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#4E7BFF]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-[#4E7BFF]" size={24} />
                </div>
                <h3 className={`text-[18px] font-semibold text-[var(--text)] mb-3 ${sora.className}`}>{item.title}</h3>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Visual Identity */}
      <Section className="bg-[var(--bg-secondary)]">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
            <span className="w-8 h-px bg-[var(--border)]" />
            Visual Identity
            <span className="w-8 h-px bg-[var(--border)]" />
          </div>
          <h2 className={`mt-6 text-[36px] md:text-[48px] font-bold tracking-tight text-[var(--text)] ${sora.className}`}>
            Dark. Calm. Focused.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Colors */}
          <div className="p-8 rounded-[24px] bg-[var(--bg)] border border-[var(--border)]">
            <div className="flex items-center gap-3 mb-8">
              <Palette className="text-[#4E7BFF]" size={20} />
              <h3 className={`text-[16px] font-semibold uppercase tracking-widest text-[var(--text)] ${sora.className}`}>Colors</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "Primary Navy Blue", hex: "#1A2847" },
                { name: "Accent Blue", hex: "#4E7BFF" },
                { name: "Dark Gray", hex: "#1E1F24" },
                { name: "Gray", hex: "#A0A5B9" },
              ].map((c) => (
                <div key={c.name} className="flex items-center justify-between p-4 rounded-xl bg-[var(--border)]/50 border border-[var(--border)]">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg shadow-inner border border-[var(--border)]" style={{ backgroundColor: c.hex }} />
                    <span className="text-[15px] font-medium text-[var(--text)]">{c.name}</span>
                  </div>
                  <span className="text-[13px] font-mono text-[var(--text-muted)]">{c.hex}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="p-8 rounded-[24px] bg-[var(--bg)] border border-[var(--border)] flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <Type className="text-[#7C5CFF]" size={20} />
              <h3 className={`text-[16px] font-semibold uppercase tracking-widest text-[var(--text)] ${sora.className}`}>Typography</h3>
            </div>
            
            <div className="mb-8">
              <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Headings</span>
              <p className={`text-[36px] font-bold leading-tight tracking-tight text-[var(--text)] ${sora.className}`}>
                Sora
              </p>
            </div>
            
            <div>
              <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-widest mb-2 block">Body & Data</span>
              <p className={`text-[28px] font-medium leading-tight text-[var(--text)] ${inter.className}`}>
                Inter
              </p>
            </div>
            
            <p className="mt-8 text-[14px] leading-relaxed text-[var(--text-muted)]">
              Sora is used for headings to give a modern, geometric feel that builds trust. Inter is used for all body text and numerical data because of its high legibility on small screens.
            </p>
          </div>
        </div>
      </Section>

      {/* Screen Showcase Gallery */}
      <Section className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[var(--text-muted)] mb-12">
            <span className="w-8 h-px bg-[var(--border)]" />
            Final Designs
            <span className="w-8 h-px bg-[var(--border)]" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/projects/nova-trade/splash-screen.png", label: "Splash Screen" },
              { src: "/projects/nova-trade/welcome-back.png", label: "Login Screen" },
              { src: "/projects/nova-trade/dashboard-invest.png", label: "Invest Dashboard" },
              { src: "/projects/nova-trade/dashboard-trade.png", label: "Trade Dashboard" },
              { src: "/projects/nova-trade/portfolio-overview.png", label: "Portfolio Screen" },
              { src: "/projects/nova-trade/trade-screen.png", label: "Trade Screen" },
              { src: "/projects/nova-trade/allocation-chart.png", label: "Allocation Screen" },
              { src: "/projects/nova-trade/pnl-graph.png", label: "P&L Graph" },
            ].map((screen, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col items-center"
              >
                <div className="relative w-full aspect-[9/19] rounded-[24px] md:rounded-[32px] overflow-hidden border-[4px] md:border-[6px] border-[var(--border-dark)] shadow-xl bg-black">
                  <Image
                    src={screen.src}
                    alt={screen.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[12px] md:text-[13px] font-medium tracking-wide text-[var(--text-muted)] uppercase text-center">
                  {screen.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Next Project Footer */}
      <footer className="w-full px-6 md:px-12 lg:px-24 py-32 border-t border-[var(--border)] bg-[var(--bg)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#4E7BFF]/5 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-[11px] text-[var(--text-muted)] uppercase tracking-[0.25em] mb-6 block">Continue the journey</span>
          <h2 className={`text-[40px] md:text-[64px] font-bold tracking-tight mb-10 leading-none text-[var(--text)] ${sora.className}`}>
            JobSpot
          </h2>
          <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-10 text-[16px] leading-relaxed">
            A responsive job search dashboard that helps candidates track applications and visualize their job hunt progress.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--text)] text-[var(--bg)] font-semibold text-[15px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-white/5"
          >
            View More Projects
            <ExternalLink size={18} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
