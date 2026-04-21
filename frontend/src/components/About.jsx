import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/mock";

const fact = [
  { label: "Experience", value: "3.5+ Years" },
  { label: "Based in", value: "Mumbai" },
  { label: "Focus", value: "Mobile · SaaS · Fintech" },
  { label: "Available", value: "Q3 2025" },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-12 gap-10 md:gap-16"
        >
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#9CA3AF]">
              <span className="w-8 h-px bg-white/20" />
              About
            </div>
            <p className="mt-5 text-[13px] text-[#9CA3AF]">
              A designer who cares about the quiet details most teams overlook.
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-[30px] sm:text-[38px] md:text-[46px] leading-[1.15] font-semibold tracking-[-0.025em] text-[#EDEDED]">
              I design calm, considered interfaces — the kind you don’t have to think about.
            </h2>

            <p className="mt-8 text-[16px] md:text-[17px] leading-[1.7] text-[#9CA3AF] max-w-2xl">
              {profile.bio}
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.06] pt-10">
              {fact.map((f) => (
                <div key={f.label}>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#9CA3AF]">
                    {f.label}
                  </div>
                  <div className="mt-2 text-[15px] text-[#EDEDED] font-medium">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
