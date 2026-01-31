'use client';

import { Activity, UserCheck, Database, Cpu, Linkedin, ExternalLink, CheckCircle, Info } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-900 border border-zinc-800 rounded-full">
            <span className="text-sm font-mono text-zinc-400">Independent Audit 2025</span>
            <span className="text-zinc-700">•</span>
            <span className="text-sm font-mono text-[#A6CE39]">ORCID Verified</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black italic mb-6 tracking-tight leading-none">
            HUMAN LOGISTICS
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-zinc-400 max-w-4xl leading-relaxed">
            The Front Door to a comprehensive biometric audit ecosystem. 
            Bridging warehouse floor operations and data science through high-fidelity telemetry.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Card 1: Live Analysis Dashboard (8 cols) - CLICKABLE */}
          <a 
            href="https://logistics-performance-analysis-2025.vercel.app/" 
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
            href="https://orcid.org/0009-0007-1011-860X"
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
                <p className="text-2xl font-bold mb-2">Gaston Dana</p>
                
                {/* ORCID Verified Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-[#A6CE39]/10 border border-[#A6CE39]/30 rounded-lg">
                  <CheckCircle className="w-3.5 h-3.5 text-[#A6CE39]" />
                  <span className="text-xs font-mono font-bold text-[#A6CE39]">Verified via ORCID iD</span>
                </div>
                
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  AI Engineer & Systems Auditor conducting a Longitudinal Biometric Audit of Tier-1 logistics operations.
                </p>
                
                <div className="inline-flex items-center gap-2 px-3 py-2 border-2 border-[#FFB500] text-[#FFB500] rounded-lg font-mono text-xs font-bold group-hover:bg-[#FFB500]/10 transition-colors">
                  ORCID: 0009-0007-1011-860X
                </div>
              </div>
            </div>
          </a>

          {/* Card 3: Public Dataset (4 cols) - CLICKABLE */}
          <a 
            href="https://www.kaggle.com/datasets/gastondana/human-logistics-biometric-audit-2025-2026"
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
            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-800 rounded-lg">
                <Cpu className="w-7 h-7 text-zinc-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black italic mb-6">Field Kit</h2>
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
            </div>
          </div>

        </div>
      </section>

      {/* Research Context & Auditor Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Section 1: The Biometric Audit Framework */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black italic mb-4 text-[#FFB500]">The Biometric Audit Framework</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              This study utilizes Biometric Telemetry to map the Allostatic Load of Tier-1 logistics. By shifting the focus from traditional KPIs to Metabolic Flux Analysis, we've identified critical thresholds where operational demand exceeds human physiological recovery.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-bold text-zinc-300 mb-1">Key Metrics Tracked:</h3>
              </div>
              
              <div className="pl-4 border-l-2 border-[#FFB500]">
                <p className="text-zinc-300 font-semibold mb-1">Intensity Density</p>
                <p className="text-zinc-500 text-sm">Caloric expenditure normalized against sortation volume.</p>
              </div>
              
              <div className="pl-4 border-l-2 border-[#FFB500]">
                <p className="text-zinc-300 font-semibold mb-1">The Sortation Strain Index</p>
                <p className="text-zinc-500 text-sm">A proprietary correlation model (r=0.84) linking heart-rate zones to package-per-hour (PPH) velocity.</p>
              </div>
              
              <div className="pl-4 border-l-2 border-[#FFB500]">
                <p className="text-zinc-300 font-semibold mb-1">Telemetry Normalization</p>
                <p className="text-zinc-500 text-sm">Transforming raw Samsung BioActive JSON into actionable Operational Ergonomics data.</p>
              </div>
            </div>
            
            {/* Glossary */}
            <div className="pt-4 border-t border-zinc-800">
              <h4 className="text-xs font-mono text-zinc-500 mb-3 tracking-wider">GLOSSARY</h4>
              <div className="space-y-2 text-xs">
                <div className="flex gap-2">
                  <span className="font-mono text-[#FFB500] font-bold">PPG:</span>
                  <span className="text-zinc-500">Photoplethysmogram (Heart rate sensing).</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[#FFB500] font-bold">HSI:</span>
                  <span className="text-zinc-500">Human-Systems Integration.</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[#FFB500] font-bold">Peak Flux:</span>
                  <span className="text-zinc-500">Maximum metabolic output during the 2025-2026 sortation window.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: The Auditor */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-black italic mb-4">The Human in the System</h2>
            <p className="text-zinc-400 leading-relaxed">
              Gaston Dana is an AI Engineer and Systems Auditor with 10 years of Python experience and 5 years on the industrial floor. As a former skilled preloader, order selector, and member of the UPS Safety Council, he combines operational muscle with technical precision. His work focuses on humanizing the data behind modern supply chains.
            </p>
          </div>

        </div>
      </section>

      {/* Section 3: Legal Disclaimer */}
      <section className="container mx-auto px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-zinc-800 pt-8">
            <p className="text-center text-xs font-mono text-zinc-500 leading-relaxed max-w-4xl mx-auto">
              DISCLAIMER: This project is an independent research study conducted by Gaston Dana. It is not commissioned, endorsed, or affiliated with United Parcel Service (UPS). All biometric data was captured from the author's personal devices during active duty. The analysis is intended for educational and human-factors research purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Decal */}
      <section className="border-t border-zinc-800 py-8 overflow-hidden">
        <div className="relative">
          <div className="flex items-center gap-8 text-zinc-600 font-mono text-sm whitespace-nowrap animate-scroll">
            <span>NEXT.JS</span>
            <span>|</span>
            <span>PYTHON</span>
            <span>|</span>
            <span>PANDAS</span>
            <span>|</span>
            <span>SEABORN</span>
            <span>|</span>
            <span>SAMSUNG BIOACTIVE</span>
            <span>|</span>
            <span>NEXT.JS</span>
            <span>|</span>
            <span>PYTHON</span>
            <span>|</span>
            <span>PANDAS</span>
            <span>|</span>
            <span>SEABORN</span>
            <span>|</span>
            <span>SAMSUNG BIOACTIVE</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/gaston-dana" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>
            
            {/* Researcher Verification */}
            <div className="flex items-center gap-4">
              {/* ORCID Link */}
              <a 
                href="https://orcid.org/0009-0007-1011-860X"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#A6CE39] hover:text-[#8fb82e] transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                <span className="font-mono text-xs tracking-wider">ORCID Verified</span>
              </a>
              
              {/* DOI Link */}
              <a 
                href="https://doi.org/10.34740/kaggle/dsv/14690459"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors group"
              >
                <span className="font-mono text-xs tracking-wider">DOI: 10.34740/KAGGLE/DSV/14690459</span>
                <div className="relative">
                  <Info className="w-3 h-3" />
                  <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-64 p-2 bg-zinc-800 border border-zinc-700 rounded-lg text-xs text-zinc-300 shadow-xl">
                    This record is cryptographically linked to the Kaggle Open Data Registry.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
