'use client';

import Heartbeat from './Heartbeat';
import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-4 px-4 py-2 mb-8 bg-zinc-900 border border-zinc-800 rounded-full">
          <div className="flex items-center gap-2">
            <span className="text-sm font-mono text-zinc-400">Independent Audit 2025</span>
            <span className="text-zinc-700">•</span>
            <span className="text-sm font-mono text-[#A6CE39]">ORCID Verified</span>
          </div>
          <div className="hidden md:block h-4 w-px bg-zinc-800" />
          <div className="hidden md:flex items-center gap-2">
            <Heartbeat />
            <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">Live EKG Feed</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic mb-6 tracking-tight leading-none">
          {siteConfig.name}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl leading-relaxed">
          {siteConfig.description}
        </p>
      </div>
    </section>
  );
}
