import React from 'react';

const clients = [
  {
    name: "My Funding Approved",
    industry: "Finance",
    headline: "A second traffic source beyond YouTube.",
    stats: [
      { value: "200k", label: "YouTube subscribers" },
      { value: "1 → 2", label: "Traffic sources" }
    ]
  },
  {
    name: "Business plan consulting firm",
    industry: "Consulting",
    headline: "Meta became the first predictable pipeline.",
    stats: [
      { value: "54", label: "Qualified calls" },
      { value: "4.6x", label: "Return on ad spend" }
    ]
  }
];

const totals = [
  { value: "10 days", label: "Avg. first results" },
  { value: "-38%", label: "Avg. CAC reduction" },
  { value: "4.32x", label: "Average return on ad spend" }
];

const Results = ({ kicker = "Results", title, subtitle = "Real businesses we work with, and what changed for each.", className = "" }) => {
  return (
    <section className={`w-full bg-white py-20 md:py-24 relative overflow-hidden ${className}`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 md:mb-16 reveal-section">
          <p className="kicker mb-4">{kicker}</p>
          <h2 className="display text-4xl md:text-5xl mb-6">
            {title || <>Results we've driven <em className="text-brand-olive">for our clients.</em></>}
          </h2>
          {subtitle && (
            <p className="text-[17px] text-brand-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4 card-grid">
          {clients.map((client) => (
            <div key={client.name} className="media-dark text-white rounded-card p-6 md:p-8 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-10">
                <span className="kicker !text-white/55">{client.name}</span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-brand-lime-hi border border-brand-lime/40 px-3 py-1.5 rounded-full shrink-0">{client.industry}</span>
              </div>
              <h3 className="display text-2xl md:text-[28px] text-white mb-10">{client.headline}</h3>
              <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-brand-dark-line">
                {client.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em] text-brand-lime-hi mb-2">{stat.value}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 border border-brand-line rounded-card bg-brand-soft divide-y sm:divide-y-0 sm:divide-x divide-brand-line reveal-section">
          {totals.map((total) => (
            <div key={total.label} className="p-6 md:p-8 text-center">
              <div className="font-display text-4xl md:text-5xl font-medium tracking-[-0.03em] mb-2">{total.value}</div>
              <div className="kicker">{total.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
