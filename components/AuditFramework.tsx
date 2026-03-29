'use client';

import { Info } from 'lucide-react';
import { useState } from 'react';

const metrics = [
  {
    title: "Intensity Density",
    description: "Caloric expenditure normalized against sortation volume.",
    details: "Measured using metabolic equivalent of task (MET) values derived from PPG heart-rate variability."
  },
  {
    title: "The Sortation Strain Index",
    description: "A proprietary correlation model (r=0.84) linking heart-rate zones to package-per-hour (PPH) velocity.",
    details: "Uses Pearson correlation coefficient to validate the relationship between physical throughput and physiological stress."
  },
  {
    title: "Telemetry Normalization",
    description: "Transforming raw Samsung BioActive JSON into actionable Operational Ergonomics data.",
    details: "Automated data pipeline cleaning noise from motion artifacts and sensor occlusion."
  }
];

export default function AuditFramework() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
      <h2 className="text-2xl font-black italic mb-4 text-[#FFB500]">The Biometric Audit Framework</h2>
      <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
        This study utilizes Biometric Telemetry to map the Allostatic Load of Tier-1 logistics. By shifting the focus from traditional KPIs to Metabolic Flux Analysis, we&apos;ve identified critical thresholds where operational demand exceeds human physiological recovery.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h3 className="text-sm font-bold text-zinc-300 mb-1">Key Metrics Tracked:</h3>
        </div>

        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="pl-4 border-l-2 border-[#FFB500] relative group cursor-help"
            onMouseEnter={() => setActiveTooltip(idx)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div className="flex items-center gap-2">
              <p className="text-zinc-300 font-semibold mb-1">{metric.title}</p>
              <Info className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#FFB500] transition-colors" />
            </div>
            <p className="text-zinc-500 text-xs">{metric.description}</p>

            {activeTooltip === idx && (
              <div
                className="absolute left-0 bottom-full mb-2 z-10 w-64 p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-xs text-zinc-300 shadow-2xl"
                style={{
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                <p className="font-bold text-[#FFB500] mb-1">Deep Dive:</p>
                {metric.details}
                <style>{`
                  @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Glossary */}
      <div className="pt-4 border-t border-zinc-800">
        <h4 className="text-xs font-mono text-zinc-500 mb-3 tracking-wider">GLOSSARY</h4>
        <div className="space-y-2 text-[10px]">
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
  );
}
