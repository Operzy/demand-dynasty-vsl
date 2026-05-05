import React from 'react';

const SystemTicker = () => {
  return (
    <div className="w-full bg-[#050608] border-y border-brand-accent/20 py-3 overflow-hidden flex items-center relative z-20">
      <div className="flex whitespace-nowrap animate-[ticker_30s_linear_infinite] items-center gap-8">
        {[...Array(6)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-brand-accent/70 font-mono text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              Demand Dynasty B2B
            </span>
            <span className="text-brand-border/60">///</span>
            <span className="text-brand-text/50 font-mono text-xs font-bold tracking-[0.2em] uppercase">
              Done-For-You Infrastructure
            </span>
            <span className="text-brand-border/60">///</span>
            <span className="text-brand-text/50 font-mono text-xs font-bold tracking-[0.2em] uppercase">
              Qualified Deal Flow
            </span>
            <span className="text-brand-border/60">///</span>
          </React.Fragment>
        ))}
      </div>

      <style jsx="true">{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default SystemTicker;
