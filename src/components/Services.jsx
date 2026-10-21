import React from 'react';
import { MousePointerClick, LayoutTemplate, Clapperboard, Activity, CalendarCheck, Check } from 'lucide-react';

const StepIcon = ({ children }) => (
  <div className="w-[52px] h-[52px] rounded-card bg-brand-dark flex items-center justify-center text-brand-lime-hi">
    {children}
  </div>
);

const Services = () => {
  return (
    <section className="w-full bg-white border-t border-brand-line py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-20 md:mb-24">
          <p className="kicker mb-4">Services</p>
          <h2 className="display text-4xl md:text-5xl mb-6 max-w-4xl mx-auto">What we handle <em className="text-brand-olive">for you.</em></h2>
          <p className="text-[17px] text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Four parts, one system. Each one compounds the others, which is why we do not sell them separately.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-28 max-w-6xl mx-auto">

          {/* 1: Paid Media Buying */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 flex flex-col gap-5">
              <StepIcon><MousePointerClick size={24} /></StepIcon>
              <p className="kicker">01 / 04</p>
              <h3 className="display text-3xl md:text-4xl">Paid Media Buying</h3>
              <p className="text-[16.5px] text-brand-muted leading-relaxed">
                Meta is the only channel we run. Audience testing, creative iteration and daily bid management, judged against your margins.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Audience Testing', 'Creative Iteration', 'Daily Bid Management'].map((tag) => (
                  <span key={tag} className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-brand-ink bg-brand-soft px-3 py-1.5 rounded-full border border-brand-line">{tag}</span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Ads Dashboard Mockup */}
              <div className="w-full aspect-[4/3] media-dark rounded-card p-6 relative overflow-hidden group flex flex-col">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-brand-dark-line relative z-10">
                  <div className="text-white/90 font-medium">Campaign Manager</div>
                  <div className="font-mono text-brand-lime-hi text-[10.5px] tracking-[0.12em] px-2.5 py-1 border border-brand-lime/40 rounded-full">● ACTIVE</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                  <div className="bg-white/[0.07] p-4 rounded-[10px] border border-brand-dark-line">
                    <div className="font-mono text-white/55 text-[10px] uppercase tracking-[0.14em] mb-1.5">Ad Spend</div>
                    <div className="font-display text-2xl font-medium text-white">$14,250</div>
                  </div>
                  <div className="bg-white/[0.07] p-4 rounded-[10px] border border-brand-dark-line">
                    <div className="font-mono text-white/55 text-[10px] uppercase tracking-[0.14em] mb-1.5">Qualified Clicks</div>
                    <div className="font-display text-2xl font-medium text-brand-lime-hi">1,208</div>
                  </div>
                </div>

                <div className="w-full flex-1 min-h-0 bg-white/[0.07] rounded-[10px] border border-brand-dark-line flex items-end gap-2 p-4 relative z-10">
                  {[30, 45, 60, 40, 75, 90, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-b from-brand-lime/90 to-brand-lime/30 rounded-t-[3px]" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2: Funnels & Landing Pages */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 flex flex-col gap-5">
              <StepIcon><LayoutTemplate size={24} /></StepIcon>
              <p className="kicker">02 / 04</p>
              <h3 className="display text-3xl md:text-4xl">Funnels &amp; Landing Pages</h3>
              <p className="text-[16.5px] text-brand-muted leading-relaxed">
                Traffic with nowhere good to land is wasted spend. We build the pages and funnels that turn those clicks into booked calls.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Calendar Mockup */}
              <div className="w-full aspect-[4/3] media-dark rounded-card p-6 relative">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-brand-dark-line">
                  <div className="text-white/90 font-medium flex items-center gap-2">
                    <CalendarCheck size={18} className="text-brand-lime-hi" />
                    Sales Calendar
                  </div>
                  <div className="font-mono text-brand-lime-hi text-[10.5px] tracking-[0.12em] border border-brand-lime/40 px-2.5 py-1 rounded-full">
                    TODAY
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {["9:00 AM", "11:30 AM", "2:00 PM"].map((time, i) => (
                    <div key={i} className="w-full bg-white/[0.07] rounded-[10px] p-4 border border-brand-dark-line flex justify-between items-center hover:bg-white/10 transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                        <i className="w-2.5 h-2.5 rounded-full bg-brand-lime shrink-0"></i>
                        <div>
                          <div className="text-white text-sm font-medium mb-0.5">Booked Call</div>
                          <div className="text-brand-lime-hi text-xs">Qualified</div>
                        </div>
                      </div>
                      <div className="text-white/90 font-mono text-xs">{time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3: Creative Production */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 flex flex-col gap-5">
              <StepIcon><Clapperboard size={24} /></StepIcon>
              <p className="kicker">03 / 04</p>
              <h3 className="display text-3xl md:text-4xl">Creative Production</h3>
              <p className="text-[16.5px] text-brand-muted leading-relaxed">
                Statics, UGC-style video and short-form ads made in house. New cohorts every month, tested against what is already running.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Creative Mockup */}
              <div className="w-full aspect-[4/3] media-dark rounded-card p-5 relative group flex gap-3">
                {['Static', 'UGC Video', 'Short-Form'].map((label, i) => (
                  <div key={label} className={`flex-1 rounded-[10px] border relative overflow-hidden flex items-center justify-center ${i === 1 ? 'bg-white/10 border-brand-lime/40' : 'bg-white/[0.07] border-brand-dark-line'}`}>
                    {i > 0 && (
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center ${i === 1 ? 'bg-brand-lime text-brand-dark' : 'bg-white/10 text-white/90'}`}>
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    )}
                    {i === 0 && (
                      <div className="w-full px-4 flex flex-col gap-2">
                        <div className="h-2 rounded-full bg-white/35 w-4/5"></div>
                        <div className="h-2 rounded-full bg-white/20 w-3/5"></div>
                        <div className="h-6 rounded-full bg-brand-lime/75 w-2/3 mt-2"></div>
                      </div>
                    )}
                    <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4: Tracking & Attribution */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="md:w-1/2 flex flex-col gap-5">
              <StepIcon><Activity size={24} /></StepIcon>
              <p className="kicker">04 / 04</p>
              <h3 className="display text-3xl md:text-4xl">Tracking &amp; Attribution</h3>
              <p className="text-[16.5px] text-brand-muted leading-relaxed">
                Server-side tracking and dashboards that survive iOS changes, so you can see which ads actually turned into sales.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              {/* Tracking Checklist Mockup */}
              <div className="w-full aspect-[4/3] media-dark rounded-card p-6 relative flex flex-col justify-center gap-3">
                {['Server-side events', 'CAC and LTV modelled', 'Live KPI dashboard', 'Weekly report sent'].map((item) => (
                  <div key={item} className="w-full bg-white/[0.07] rounded-[10px] px-4 py-3.5 border border-brand-dark-line flex items-center gap-3">
                    <i className="w-5 h-5 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center shrink-0">
                      <Check size={13} strokeWidth={3} />
                    </i>
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
