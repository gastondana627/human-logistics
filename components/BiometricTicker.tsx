'use client';

import { useState, useEffect } from 'react';
import { Activity, Package, Zap } from 'lucide-react';

export default function BiometricTicker() {
  const [metrics, setMetrics] = useState({
    bpm: 112,
    pph: 425,
    strain: 0.76
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        bpm: Math.floor(105 + Math.random() * 20),
        pph: Math.floor(410 + Math.random() * 30),
        strain: parseFloat((0.70 + Math.random() * 0.15).toFixed(2))
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 mb-1">
          <Activity className="w-3.5 h-3.5 text-[#FFB500] animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tight">Heart Rate</span>
        </div>
        <div className="text-xl font-black font-mono text-zinc-100 tabular-nums">
          {metrics.bpm}<span className="text-[10px] ml-0.5 text-zinc-500 font-normal">BPM</span>
        </div>
      </div>

      <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 mb-1">
          <Package className="w-3.5 h-3.5 text-[#A6CE39]" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tight">Velocity</span>
        </div>
        <div className="text-xl font-black font-mono text-zinc-100 tabular-nums">
          {metrics.pph}<span className="text-[10px] ml-0.5 text-zinc-500 font-normal">PPH</span>
        </div>
      </div>

      <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center">
        <div className="flex items-center gap-1.5 mb-1">
          <Zap className="w-3.5 h-3.5 text-orange-500" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tight">Strain</span>
        </div>
        <div className="text-xl font-black font-mono text-zinc-100 tabular-nums">
          {metrics.strain}<span className="text-[10px] ml-0.5 text-zinc-500 font-normal">IDX</span>
        </div>
      </div>
    </div>
  );
}
