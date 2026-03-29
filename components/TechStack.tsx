'use client';

export default function TechStack() {
  const stack = ["NEXT.JS", "PYTHON", "PANDAS", "SEABORN", "SAMSUNG BIOACTIVE"];
  const repeatedStack = Array(12).fill(stack).flat();

  return (
    <section className="border-t border-zinc-800 py-8 overflow-hidden bg-zinc-950/50">
      <div className="relative">
        <div
          className="flex items-center gap-8 text-zinc-600 font-mono text-[10px] whitespace-nowrap opacity-50"
          style={{ animation: 'scroll-fast 60s linear infinite' }}
        >
          {repeatedStack.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{tech}</span>
              <span className="text-zinc-800">|</span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes scroll-fast {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
