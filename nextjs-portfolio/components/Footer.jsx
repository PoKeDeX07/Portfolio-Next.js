import React from 'react';
import { profile, navLinks } from '@/data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-12 md:py-14">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src="/aniket_kulkarni_monogram.svg" 
              alt="Monogram" 
              className="w-5 h-5 object-contain"
            />
            <span className="text-[14px] text-[#EDEDED] font-medium">
              {profile.name}
            </span>
            <span className="text-[13px] text-[#9CA3AF] hidden sm:inline">
              · {profile.title}
            </span>
          </div>

          <ul className="flex flex-wrap gap-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[13px] text-[#9CA3AF] hover:text-[#EDEDED] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="text-[12px] text-[#9CA3AF]">
            © {year} {profile.name}. Designed with intention in Mumbai.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
