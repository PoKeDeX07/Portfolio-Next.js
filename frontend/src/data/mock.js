// Mock data for Aniket Kulkarni's portfolio
// NOTE: All content here is mocked (frontend-only). It will be wired to the backend later.

export const profile = {
  name: "Aniket Kulkarni",
  firstName: "Aniket",
  location: "Mumbai, India",
  title: "UI/UX Designer",
  subtitle: "Mobile App Designer",
  experience: "3.5+ Years",
  email: "hello@aniketkulkarni.design",
  bio: "UI/UX designer with 3.5 years of experience crafting intuitive and engaging digital experiences. Based in Mumbai, I blend creativity with usability to build impactful designs. Outside of work, you'll find me playing football or diving into video games.",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "Behance", href: "https://behance.net/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Twitter", href: "https://twitter.com/" },
  ],
};

export const skills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Interaction Design",
  "Design Systems",
  "Mobile UX",
  "Usability Testing",
  "Motion Design",
  "Accessibility",
  "Information Architecture",
];

export const tools = [
  { name: "Figma", role: "Design & Prototyping" },
  { name: "Framer", role: "Interactive Prototypes" },
  { name: "Protopie", role: "Advanced Micro-interactions" },
  { name: "Notion", role: "Docs & Systems" },
  { name: "Miro", role: "Workshops & Flows" },
  { name: "Photoshop", role: "Visual Assets" },
];

export const projects = [
  {
    id: "furneat",
    title: "Furneat — Reimagining the way you shop furniture",
    tags: ["Landing Page", "E-commerce", "Web"],
    description:
      "A modern furniture marketplace landing page balancing editorial storytelling with high-intent conversion across hero, catalog, and checkout flows.",
    image:
      "https://images.unsplash.com/photo-1707836916010-3c4ad261936c",
    year: "2024",
    role: "Lead UI/UX Designer",
    accent: "#7C5CFF",
  },
  {
    id: "jobspot",
    title: "Jobspot — A calmer way to hire the right talent",
    tags: ["Dashboard", "SaaS", "Web App"],
    description:
      "An employer-facing dashboard that turns messy pipelines into clear, actionable snapshots — from applicants to offers with one glance.",
    image:
      "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3",
    year: "2024",
    role: "Product Designer",
    accent: "#00D4FF",
  },
  {
    id: "fintech-chat",
    title: "Fintech Chat Widget — Banking support, reimagined",
    tags: ["Mobile", "Fintech", "Conversational UI"],
    description:
      "An embeddable chat experience for a challenger bank — trimming a 14-step support journey down to a 3-minute resolution with clarity and trust.",
    image:
      "https://images.unsplash.com/photo-1720135885007-454165745e21",
    year: "2023",
    role: "Senior UX Designer",
    accent: "#7C5CFF",
  },
  {
    id: "nova-trade",
    title: "Nova Trade — A disciplined home for modern traders",
    tags: ["Fintech", "Dashboard", "Hero Case Study"],
    description:
      "A trading platform rebuilt from the ground up — information-dense yet focused, designed for traders who value signal over noise.",
    image:
      "https://images.pexels.com/photos/27141314/pexels-photo-27141314.jpeg",
    year: "2024",
    role: "Design Lead",
    accent: "#00D4FF",
    featured: true,
  },
];

export const caseStudy = {
  projectId: "nova-trade",
  label: "Selected Case Study",
  title: "Nova Trade",
  subtitle: "Turning a cluttered trading tool into a calm, decisive workspace.",
  duration: "14 weeks",
  team: "1 PM · 2 Designers · 4 Engineers",
  platforms: ["Web", "iOS", "iPadOS"],
  sections: [
    {
      kind: "problem",
      title: "Problem",
      body:
        "Traders were drowning in data. The old interface surfaced everything at once, making it hard to read market intent at a glance. Session times were long, but conversion on trades was dropping.",
      stats: [
        { value: "47%", label: "reported cognitive fatigue" },
        { value: "2.1s", label: "avg. time-to-first-insight" },
      ],
    },
    {
      kind: "process",
      title: "Process",
      body:
        "I ran eight contextual interviews, audited every surface, and mapped a new information hierarchy around intent: 'watch', 'decide', 'act'. We tested three distinct layouts with live market data before converging.",
      stats: [
        { value: "3", label: "layout hypotheses tested" },
        { value: "8", label: "contextual interviews" },
      ],
    },
    {
      kind: "solution",
      title: "Solution",
      body:
        "A modular workspace where density is earned, not assumed. Primary actions sit within thumb reach, secondary data collapses on demand, and motion is reserved for confirming trades — never to decorate.",
      stats: [
        { value: "+38%", label: "trade completion" },
        { value: "-41%", label: "support tickets" },
      ],
    },
  ],
};

export const experience = [
  {
    id: "exp-1",
    role: "Senior Product Designer",
    company: "Lumen Labs",
    location: "Mumbai · Hybrid",
    period: "2023 — Present",
    summary:
      "Leading design on two flagship fintech products. Shipping a unified design system and mentoring two junior designers.",
  },
  {
    id: "exp-2",
    role: "Product Designer",
    company: "Northwind Studio",
    location: "Remote",
    period: "2022 — 2023",
    summary:
      "Designed SaaS dashboards and consumer mobile flows for 6 startups across fintech, logistics, and healthtech.",
  },
  {
    id: "exp-3",
    role: "UI/UX Designer",
    company: "Pixelmint",
    location: "Pune",
    period: "2021 — 2022",
    summary:
      "Built interaction systems and prototyped B2B flows end-to-end — from discovery sessions to engineering handoff.",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Case Study", href: "#case-study" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
