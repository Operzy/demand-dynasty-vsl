import React from 'react';
import { Target, CircleCheck } from 'lucide-react';

const points = [
  {
    icon: Target,
    title: "Qualified calls at a low cost.",
    paragraphs: [
      "Most of our effort goes into the first thing people see. We are not after anyone who will click. We are after your ideal customer, the one who fits the offer and can afford it.",
      "Sharp copy, creative and messaging bring those people in at volume, which is what keeps the cost of every call down."
    ]
  },
  {
    icon: CircleCheck,
    title: "Calls that show up and close.",
    paragraphs: [
      "Our job does not end when the call is booked. It does not end when the call shows up either. It ends when the money is in your bank.",
      "Every lead is nurtured between booking and the call, so prospects arrive warmed up and ready to buy. And we track through to the sale, so we optimise for calls that close, not calls that only get booked."
    ]
  }
];

const Difference = () => {
  return (
    <section className="w-full bg-brand-soft border-t border-brand-line py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-14 md:mb-16 text-center reveal-section">
          <p className="kicker mb-4">The Difference</p>
          <h2 className="display text-4xl md:text-5xl max-w-3xl mx-auto">We're the best at turning ad spend into <em className="text-brand-olive">calls that close.</em></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 card-grid">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div key={i} className="bg-white border border-brand-line rounded-card p-6 md:p-8 hover:border-brand-line-strong transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <span className="w-[52px] h-[52px] rounded-card bg-brand-dark text-brand-lime-hi flex items-center justify-center shrink-0">
                    <Icon size={24} />
                  </span>
                  <span className="kicker !text-[10px]">0{i + 1} / 0{points.length}</span>
                </div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.02em] mb-4">{point.title}</h3>
                <div className="flex flex-col gap-3">
                  {point.paragraphs.map((text, j) => (
                    <p key={j} className="text-brand-muted text-[15.5px] leading-relaxed">{text}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Difference;
