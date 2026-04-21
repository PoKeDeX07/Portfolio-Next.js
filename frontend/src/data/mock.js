// Mock data for Aniket Kulkarni's portfolio
// Populated from the designer's resume + real project cover art and Nova Trade case study.

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
    { label: "Behance", href: "https://www.behance.net/aniketkulkarni10" },
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

// NOTE: Nova Trade intentionally removed from cards — lives only in the Case Study section.
export const projects = [
  {
    id: "fintrust",
    title: "FinTrust — Finance AI Chat Bot",
    tags: ["Mobile", "Fintech", "Conversational UI"],
    description:
      "An AI-powered chatbot built into the FinTrust finance app — giving users instant, intelligent support for financial queries and app issues. Operating 24/7 with privacy and security at its core, it trims support time, lifts engagement, and quietly nudges users toward better financial literacy.",
    image:
      "https://customer-assets.emergentagent.com/job_aniket-design/artifacts/qhtaehrr_Fintrust.jpg",
    year: "2025",
    role: "UI/UX Designer",
    accent: "#7C5CFF",
    link: "https://www.behance.net/gallery/234718733/Fintech-Chat-Widget-for-Investment-Advisory-Services",
  },
  {
    id: "jobspot",
    title: "JobSpot — Job Search Dashboard",
    tags: ["Dashboard", "SaaS", "Web App"],
    description:
      "A clean, user-focused job search & application platform. A personalized dashboard with analytics and insights, a structured applications view, powerful job search with smart filters, and seamless messaging — designed around usability, accessibility, and a calm visual hierarchy.",
    image:
      "https://customer-assets.emergentagent.com/job_aniket-design/artifacts/9untyoev_Jobspot.jpg",
    year: "2025",
    role: "UI/UX Designer",
    accent: "#00D4FF",
    link: "https://www.behance.net/gallery/230116121/Job-Search-Dashboard-UI",
  },
  {
    id: "furneat",
    title: "Furneat — Furniture Webpage Concept",
    tags: ["Landing Page", "E-commerce", "Concept"],
    description:
      "A concept UI for a boutique furniture brand — balancing editorial whitespace with lifestyle imagery. The hero pairs considered typography with a product carousel, letting the craft of each piece do the heavy lifting instead of loud visuals.",
    image:
      "https://customer-assets.emergentagent.com/job_aniket-design/artifacts/rgo1d5q9_Furneat.jpg",
    year: "2022",
    role: "UI Designer",
    accent: "#7C5CFF",
    link: "https://www.behance.net/gallery/148470345/Furniture-Webpage-UI-Design",
  },
];

// Nova Trade — lifted directly from the case study PDF.
export const caseStudy = {
  projectId: "nova-trade",
  label: "Selected Case Study",
  title: "Nova Trade",
  subtitle:
    "A beginner-friendly crypto trading platform — designed to make digital asset investing simple, safe, and educational.",
  duration: "Self-initiated",
  team: "Solo — UI/UX Designer",
  platforms: ["iOS", "Android", "Web"],
  image:
    "https://customer-assets.emergentagent.com/job_aniket-design/artifacts/07ocntqc_Nova%20Trade.jpg",
  sections: [
    {
      kind: "problem",
      title: "Problem",
      heading: "Crypto is locked behind complexity.",
      body:
        "Most crypto platforms today are overloaded with complex charts, jargon, and advanced tools. While this caters to professionals, it alienates beginners — who feel overwhelmed placing their first trade, struggle to understand risks due to lack of context, and abandon apps quickly due to poor onboarding. The result: high drop-off, abandoned accounts, and a lasting lack of trust.",
      stats: [
        { value: "3", label: "core beginner pain points" },
        { value: "High", label: "first-trade drop-off" },
      ],
    },
    {
      kind: "process",
      title: "Process",
      heading: "A persona, a journey, and a lean prototype.",
      body:
        "I analyzed beginner pain points and framed a primary persona — Akshay, 26, a junior developer comfortable with Paytm, Zerodha, and PhonePe but new to crypto. Mapped his journey end-to-end: splash, KYC, home, futures, and a dedicated Learn tab. Validated the skeleton through low-to-mid-fidelity wireframes and an interactive prototype focused on navigation and flow.",
      stats: [
        { value: "1", label: "primary persona" },
        { value: "Low–Mid", label: "fidelity wireframes" },
      ],
    },
    {
      kind: "solution",
      title: "Solution",
      heading: "Simple onboarding, calm trading, built-in learning.",
      body:
        "A clean glassmorphism UI in dark mode with neon blue accents, clean typography, and minimal charts. A trade screen with a Low / Medium / High risk meter, a simplified onboarding flow, and a built-in Learn tab with a glossary and gamified modules — so beginners build confidence before they commit. Density is earned, not assumed.",
      stats: [
        { value: "3", label: "risk levels (L / M / H)" },
        { value: "1", label: "built-in Learn tab" },
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
