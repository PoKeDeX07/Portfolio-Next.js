'use client';

import { useParams, useRouter } from 'next/navigation';
import { caseStudy, projects } from '@/data/portfolio';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCaseStudy() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id;

  // Find the project data
  const project = projects.find((p) => p.id === projectId);

  // For now, only Nova Trade has a full case study
  if (projectId !== 'nova-trade') {
    return (
      <main className="App relative z-[2] min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-lg text-gray-400 mb-8">
              This project case study is not available yet. Please check back soon!
            </p>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <span>←</span> Back to Work
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="App relative z-[2]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-12 transition"
          >
            <span>←</span> Back to Work
          </Link>

          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-gray-400 max-w-2xl">{caseStudy.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Duration</p>
              <p className="font-semibold">{caseStudy.duration}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Team</p>
              <p className="font-semibold">{caseStudy.team}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-2">Platforms</p>
              <p className="font-semibold">{caseStudy.platforms.join(', ')}</p>
            </div>
          </div>

          <div className="relative w-full h-96 md:h-screen mb-20 rounded-lg overflow-hidden">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      {caseStudy?.sections && Array.isArray(caseStudy.sections) && caseStudy.sections.map((section, idx) => (
        <section key={idx} className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-4">{section.title}</p>
                <h2 className="text-3xl md:text-4xl font-bold">{section.heading}</h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-lg text-gray-400 leading-relaxed mb-8">{section.body}</p>
                {section.stats && Array.isArray(section.stats) && (
                  <div className="grid grid-cols-2 gap-8">
                    {section.stats.map((stat, sidx) => (
                      <div key={sidx}>
                        <p className="text-3xl font-bold mb-2">{stat.value}</p>
                        <p className="text-sm text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Screenshots Section */}
      {caseStudy?.screensImage && (
        <section className="py-20 px-4 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <p className="text-xs text-gray-500 uppercase mb-4">Final Design</p>
              <h2 className="text-3xl md:text-4xl font-bold">Interface Showcase</h2>
            </div>
            <div className="relative w-full h-auto md:h-screen rounded-lg overflow-hidden">
              <Image
                src={caseStudy.screensImage}
                alt="Design showcase"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
