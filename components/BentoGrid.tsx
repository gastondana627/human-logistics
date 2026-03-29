'use client';

import { Activity, UserCheck, Database, Cpu, ExternalLink, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import BiometricTicker from './BiometricTicker';

export default function BentoGrid() {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* Card 1: Live Analysis Dashboard (8 cols) - CLICKABLE */}
        <a
          href={siteConfig.links.dashboard}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-[#FFB500] hover:shadow-2xl hover:shadow-[#FFB500]/30 hover:scale-[1.02] cursor-pointer group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#FFB500]/10 transition-colors">
              <Activity className="w-7 h-7 text-[#FFB500]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl font-black italic">Live Analysis Dashboard</h2>
                <ExternalLink className="w-5 h-5 text-[#FFB500] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-zinc-400 text-lg mb-4">
                Interactive metabolic telemetry and WatchBot AI assistant.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFB500] text-zinc-950 rounded-lg font-bold text-sm group-hover:bg-[#e6a300] transition-colors">
                Enter Audit Interface
              </div>
            </div>
          </div>
        </a>

        {/* Card 2: Principal Investigator (4 cols) - CLICKABLE */}
        <a
          href={siteConfig.links.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-[#FFB500] hover:shadow-2xl hover:shadow-[#FFB500]/30 hover:scale-[1.02] cursor-pointer group"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-[#FFB500]/10 transition-colors">
                <UserCheck className="w-6 h-6 text-[#FFB500]" />
              </div>
              <ExternalLink className="w-4 h-4 text-[#FFB500] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-black italic mb-3 text-[#FFB500]">Principal Investigator</h2>
              <p className="text-2xl font-bold mb-2">{siteConfig.investigator.name}</p>

              {/* ORCID Verified Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-[#A6CE39]/10 border border-[#A6CE39]/30 rounded-lg">
                <CheckCircle className="w-3.5 h-3.5 text-[#A6CE39]" />
                <span className="text-xs font-mono font-bold text-[#A6CE39]">Verified via ORCID iD</span>
              </div>

              <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                {siteConfig.investigator.role} conducting a Longitudinal Biometric Audit of Tier-1 logistics operations.
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-2 border-2 border-[#FFB500] text-[#FFB500] rounded-lg font-mono text-xs font-bold group-hover:bg-[#FFB500]/10 transition-colors">
                ORCID: {siteConfig.investigator.orcid}
              </div>
            </div>
          </div>
        </a>

        {/* Card 3: Public Dataset (4 cols) - CLICKABLE */}
        <a
          href={siteConfig.links.kaggle}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-zinc-600 hover:shadow-2xl hover:shadow-zinc-600/30 hover:scale-[1.02] cursor-pointer group"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-zinc-800 rounded-lg group-hover:bg-zinc-700 transition-colors">
                <Database className="w-6 h-6 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-black italic mb-3">Public Dataset</h2>
              <p className="text-sm text-zinc-400 mb-4">
                Python EDA and raw JSON archived on Kaggle.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 group-hover:bg-zinc-700 rounded-lg text-sm font-semibold transition-colors">
                View Repository
              </div>
            </div>
          </div>
        </a>

        {/* Card 4: Field Kit (8 cols) */}
        <div className="md:col-span-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-600/20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-zinc-800 rounded-lg">
                  <Cpu className="w-7 h-7 text-zinc-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black italic mb-1">Field Kit</h2>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Active Sensor Suite</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <span className="text-xs text-zinc-500 font-mono tracking-wider">HARDWARE</span>
                  <p className="text-zinc-200 text-lg mt-1">Samsung BioActive™ Sensors</p>
                </div>
                <div>
                  <span className="text-xs text-zinc-500 font-mono tracking-wider">CONTEXT</span>
                  <p className="text-zinc-200 text-lg mt-1">Tier-1 Logistics (Peak Season)</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-80 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-zinc-800 md:pl-8">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Live Telemetry Simulation</span>
              <BiometricTicker />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
