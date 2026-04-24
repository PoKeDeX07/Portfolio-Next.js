'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -50% 0px',
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = ['about', 'work', 'case-study', 'experience', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = useCallback((e, href) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace('#', '');
    
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0B0B0F]/70 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          onClick={(e) => handleNav(e, '#top')}
          className="flex items-center gap-2 group"
        >
          <img 
            src="/aniket_kulkarni_monogram.svg" 
            alt="Monogram" 
            className="w-6 h-6 object-contain"
          />
          <span className="text-[15px] font-semibold tracking-tight text-[#EDEDED] whitespace-nowrap">
            {profile.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`px-4 py-2 text-[14px] transition-all duration-300 rounded-full ${
                    isActive
                      ? 'text-[#EDEDED] bg-white/[0.05]'
                      : 'text-[#9CA3AF] hover:text-[#EDEDED]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 text-[14px] font-medium ${
            activeSection === 'contact'
              ? 'bg-white text-[#0B0B0F] border-white'
              : 'bg-white/[0.04] border-white/[0.1] text-[#EDEDED] hover:bg-white/[0.08] hover:border-white/20'
          }`}
        >
          Let’s talk
        </a>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-[#EDEDED]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] bg-[#0B0B0F]/95 backdrop-blur-xl"
          >
            <ul className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className={`block px-3 py-3 text-[15px] rounded-xl transition-colors ${
                        isActive
                          ? 'text-[#EDEDED] bg-white/[0.05]'
                          : 'text-[#9CA3AF] hover:text-[#EDEDED]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
