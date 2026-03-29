'use client';

export default function Heartbeat() {
  return (
    <div className="relative w-24 h-8 overflow-hidden">
      <svg
        viewBox="0 0 100 40"
        className="absolute inset-0 w-full h-full text-[#FFB500] stroke-current stroke-[2] fill-none"
      >
        <path
          d="M0 20 L20 20 L25 10 L30 30 L35 0 L40 40 L45 20 L100 20"
          className="animate-[heartbeat_2s_linear_infinite]"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: '200',
            animation: 'heartbeat 2s linear infinite'
          }}
        />
        <style>{`
          @keyframes heartbeat {
            0% { stroke-dashoffset: 200; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -200; }
          }
        `}</style>
      </svg>
    </div>
  );
}
