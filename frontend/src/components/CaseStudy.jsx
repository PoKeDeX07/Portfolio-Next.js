import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { caseStudy, projects } from "../data/mock";

const stepColor = {
  problem: "#FF6A5C",
  process: "#7C5CFF",
  solution: "#00D4FF",
};

const CaseStudy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);
  const hero = projects.find((p) => p.id === caseStudy.projectId);

  return (
    <section
      id="case-study"
      ref={containerRef}
      className="relative py-24 md:py-32"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#9CA3AF]">
            <span className="w-8 h-px bg-white/20" />
            {caseStudy.label}
          </div>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[56px] leading-[1.08] font-semibold tracking-[-0.03em] text-[#EDEDED]">
            {caseStudy.title}
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] md:text-[18px] leading-[1.6] text-[#9CA3AF]">
            {caseStudy.subtitle}
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/[0.06] pt-8">
            <Meta label="Duration" value={caseStudy.duration} />
            <Meta label="Team" value={caseStudy.team} />
            <Meta label="Platforms" value={caseStudy.platforms.join(" · ")} />
            <Meta label="Role" value={hero?.role || "Design Lead"} />
          </div>
        </motion.div>

        {/* Hero visual */}
        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#13131A] aspect-[16/9] mb-24">
          <motion.img
            src={hero?.image}
            alt={caseStudy.title}
            style={{ y: imgY }}
            className="absolute inset-0 w-full h-[115%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
        </div>

        {/* Sticky storytelling */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <div className="text-[12px] tracking-[0.2em] uppercase text-[#9CA3AF]">
                How it unfolded
              </div>
              <p className="mt-4 text-[18px] leading-[1.55] text-[#EDEDED] font-medium">
                Problem → Process → Solution. A calm sequence, not a deliverable checklist.
              </p>
              <ul className="mt-8 space-y-3">
                {caseStudy.sections.map((s) => (
                  <li
                    key={s.kind}
                    className="flex items-center gap-3 text-[14px] text-[#9CA3AF]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: stepColor[s.kind] }}
                    />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-8 space-y-16">
            {caseStudy.sections.map((s, i) => (
              <motion.div
                key={s.kind}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-6 border-l border-white/[0.08]"
              >
                <span
                  className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full"
                  style={{ background: stepColor[s.kind] }}
                />
                <div
                  className="text-[11px] tracking-[0.22em] uppercase mb-3"
                  style={{ color: stepColor[s.kind] }}
                >
                  {s.title}
                </div>
                <h3 className="text-[26px] md:text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-[#EDEDED]">
                  {s.title === "Problem"
                    ? "Traders had data — not direction."
                    : s.title === "Process"
                    ? "Listen, audit, reframe."
                    : "A workspace that breathes."}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.7] text-[#9CA3AF] max-w-xl">
                  {s.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {s.stats.map((st) => (
                    <div
                      key={st.label}
                      className="px-4 py-3 rounded-xl border border-white/[0.07] bg-white/[0.02]"
                    >
                      <div className="text-[20px] font-semibold tracking-tight text-[#EDEDED]">
                        {st.value}
                      </div>
                      <div className="text-[11px] tracking-[0.15em] uppercase text-[#9CA3AF] mt-1">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Meta = ({ label, value }) => (
  <div>
    <div className="text-[11px] tracking-[0.2em] uppercase text-[#9CA3AF]">{label}</div>
    <div className="mt-2 text-[14px] text-[#EDEDED] font-medium">{value}</div>
  </div>
);

export default CaseStudy;
