import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/mock";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0B0B0F]/70 border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
        >
          <span className="relative w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center">
            <span className="absolute inset-0 accent-gradient-bg opacity-90" />
            <span className="relative text-[13px] font-bold text-[#0B0B0F] tracking-tight">AK</span>
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[#EDEDED]">
            {profile.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-4 py-2 text-[14px] text-[#9CA3AF] hover:text-[#EDEDED] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNav(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-[14px] font-medium text-[#EDEDED] hover:bg-white/[0.08] hover:border-white/20 transition-colors"
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
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block px-2 py-3 text-[15px] text-[#9CA3AF] hover:text-[#EDEDED]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
