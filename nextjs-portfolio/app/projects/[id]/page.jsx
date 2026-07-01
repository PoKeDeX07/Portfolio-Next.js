'use client';

import { useParams } from 'next/navigation';
import { caseStudy, projects } from '@/data/portfolio';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudy from '@/components/CaseStudy';
import Link from 'next/link';

export default function ProjectCaseStudyPage() {
  const params = useParams();
  const projectId = params.id;

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
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              Back to Portfolio
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
      <CaseStudy />
      <Footer />
    </main>
  );
}
