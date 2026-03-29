'use client';

import { siteConfig } from '@/config/site';

export default function Auditor() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
      <h2 className="text-2xl font-black italic mb-4">The Human in the System</h2>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {siteConfig.investigator.name} is an {siteConfig.investigator.role} with 10 years of Python experience and 5 years on the industrial floor. As a former skilled preloader, order selector, and member of the UPS Safety Council, he combines operational muscle with technical precision. His work focuses on humanizing the data behind modern supply chains.
      </p>
      <div className="mt-8 pt-8 border-t border-zinc-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center font-black italic text-[#FFB500]">
            {siteConfig.investigator.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-bold">{siteConfig.investigator.name}</p>
            <p className="text-xs text-zinc-500">Principal Systems Auditor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
