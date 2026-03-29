'use client';

import Hero from '@/components/Hero';
import BentoGrid from '@/components/BentoGrid';
import AuditFramework from '@/components/AuditFramework';
import Auditor from '@/components/Auditor';
import LegalDisclaimer from '@/components/LegalDisclaimer';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-[#FFB500] selection:text-zinc-950">
      <Hero />
      <BentoGrid />

      {/* Research Context & Auditor Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <AuditFramework />
          <Auditor />
        </div>
      </section>

      <LegalDisclaimer />
      <TechStack />
      <Footer />
    </div>
  );
}
