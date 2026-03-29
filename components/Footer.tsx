'use client';

import { Linkedin, CheckCircle, Info } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-[#FFB500] transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium text-sm">Connect on LinkedIn</span>
          </a>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <a
              href={siteConfig.links.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#A6CE39] hover:text-[#8fb82e] transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="font-mono text-[10px] tracking-wider font-bold">ORCID VERIFIED</span>
            </a>

            <a
              href={siteConfig.links.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors group relative"
            >
              <span className="font-mono text-[10px] tracking-wider uppercase">DOI: 10.34740/KAGGLE/DSV/14690459</span>
              <Info className="w-3 h-3" />
              <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-64 p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-[10px] text-zinc-300 shadow-2xl z-50">
                This record is cryptographically linked to the Kaggle Open Data Registry and verified by Gaston Dana.
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
