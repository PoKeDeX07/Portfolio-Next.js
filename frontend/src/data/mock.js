// Mock data for Aniket Kulkarni's portfolio
// Populated from the designer's resume. Projects remain curated case studies.

export const profile = {
  name: "Aniket Kulkarni",
  firstName: "Aniket",
  location: "Mumbai, India",
  title: "UI/UX Designer",
  subtitle: "Product Designer",
  experience: "3.5+ Years",
  email: "Kulkarnianiket0715@gmail.com",
  phone: "+91 90046 48041",
  bio: "UI/UX designer with 3.5 years of experience designing user-friendly digital products across fintech, e-commerce, and lifestyle domains. Based in Mumbai, I translate complex ideas into clean, functional interfaces — focused on user empathy, responsive design, and collaborative problem-solving. Outside of work, you'll find me playing football or diving into video games.",
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "Behance", href: "https://behance.net/aniketkulkarni10" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Email", href: "mailto:Kulkarnianiket0715@gmail.com" },
  ],
};

export const skills = [
  "User Research",
  "Usability Testing",
  "Journey Mapping",
  "Personas",
  "Storyboarding",
  "Information Architecture",
  "Design Systems",
  "Wireframing",
  "High-fidelity UI",
  "Responsive Design",
  "Interaction Design",
  "3D Assets",
];

export const tools = [
  { name: "Figma", role: "Design & Prototyping" },
  { name: "Adobe XD", role: "Wireframes & Flows" },
  { name: "Sketch", role: "UI Design" },
  { name: "FigJam", role: "Workshops & Mapping" },
  { name: "Miro", role: "Research & Systems" },
  { name: "Photoshop", role: "Visual Assets" },
  { name: "Illustrator", role: "Iconography & Vectors" },
  { name: "Blender", role: "3D Assets" },
  { name: "ChatGPT", role: "Docs & Exploration" },
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
    role: "Product Designer",
    company: "ScaleUp Software",
    location: "Mumbai · Full-time",
    period: "Oct 2025 — Present",
    summary:
      "Designing product experiences end-to-end — from discovery and wireframes to high-fidelity UI. Partnering with product and engineering to ship considered, measurable work.",
  },
  {
    id: "exp-2",
    role: "UI/UX Designer",
    company: "Cargoflash Infotech",
    location: "Mumbai · Full-time",
    period: "Aug 2023 — Oct 2025",
    summary:
      "Designed user-friendly interfaces for aviation SaaS products, handling wireframes through high-fidelity UI. Contributed to the live project Octoloop.com and helped build a consistent Figma design system.",
  },
  {
    id: "exp-3",
    role: "UI/UX Consultant",
    company: "Cargoflash Infotech",
    location: "Mumbai · Contract",
    period: "Aug 2022 — Aug 2023",
    summary:
      "Shaped early-stage product design by creating wireframes, user flows, and UI concepts. Worked with stakeholders to translate requirements into intuitive experiences for aviation platforms.",
  },
  {
    id: "exp-4",
    role: "3D Design Intern",
    company: "Iqonic Designs",
    location: "Remote · Internship",
    period: "Sep 2021 — Dec 2021",
    summary:
      "Used Blender and Illustrator to create 3D assets and UI elements for digital product packs — shipped as commercial design offerings on the company's website.",
  },
];

export const education = [
  {
    id: "edu-1",
    institution: "Arena Animation",
    degree: "Design & Visualisation",
    period: "2019 — 2023",
  },
  {
    id: "edu-2",
    institution: "Thakur Ramnarayan College",
    degree: "Higher Secondary",
    period: "2017 — 2019",
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Case Study", href: "#case-study" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
