import React from 'react';
import { CheckCircle2, AlertTriangle, CalendarPlus, MessageSquare } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#050608] text-brand-light flex flex-col items-center">
      
      {/* TOP SUCCESS BAR */}
      <div className="w-full bg-[#10b981]/10 border-b border-[#10b981]/20 py-3 flex justify-center items-center gap-2">
        <CheckCircle2 size={18} className="text-[#10b981]" />
        <span className="text-sm font-semibold text-[#10b981] tracking-wide">Your Strategy Session Is Reserved</span>
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 py-16 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[#10b981] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            BOOKING CONFIRMED
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-2">
            Thank you for booking
            <br />
            your
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif italic text-[#10b981] lowercase">
            strategy session.
          </h2>
        </div>

        {/* WARNING BOX */}
        <div className="w-full max-w-3xl bg-yellow-500/5 border border-yellow-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 shadow-[0_0_30px_rgba(234,179,8,0.05)]">
          <div className="w-12 h-12 shrink-0 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-500">
            <AlertTriangle size={24} />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-yellow-500 font-bold text-xl mb-2">IMPORTANT: COMPLETE THESE TWO STEPS</h3>
            <p className="text-yellow-500/80 font-light">
              If you don't follow the next two steps, we will be forced to cancel your booking.
            </p>
          </div>
        </div>

        {/* VIDEO PLACEHOLDER */}
        <div className="w-full max-w-3xl aspect-video bg-[#0b0c10] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl mb-16 overflow-hidden relative group">
          <iframe 
            src="https://www.youtube.com/embed/5SZYz7lZRRI?rel=0&modestbranding=1" 
            title="Thank You Strategy Session"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* TWO STEPS GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* STEP 1 */}
          <div className="bg-[#111318] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-[#10b981]/30 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#10b981] text-black font-bold flex items-center justify-center text-lg">1</div>
              <div className="flex items-center gap-2 text-[#10b981] text-xs font-bold uppercase tracking-widest">
                <CalendarPlus size={16} /> Add to Calendar
              </div>
            </div>

            {/* Email Mockup */}
            <div className="w-full bg-white rounded-xl p-6 mb-8 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <h4 className="text-gray-900 font-medium text-lg mb-4">Your strategy session is scheduled!</h4>
              <button className="flex items-center gap-2 border border-gray-300 text-gray-800 px-4 py-2 rounded shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium">
                <CalendarPlus size={16} /> Add to Calendar
              </button>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-xs text-gray-500"><strong>Demand Dynasty</strong> &lt;info@demanddynasty.com&gt;</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Click Add to Calendar on the email we sent you</h3>
            <p className="text-brand-text font-light leading-relaxed">
              We've sent you a confirmation email for your booking. Open it and click <strong className="text-white">Add to Calendar</strong> so the session is locked into your schedule.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="bg-[#111318] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden group hover:border-[#10b981]/30 transition-colors">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#10b981] text-black font-bold flex items-center justify-center text-lg">2</div>
              <div className="flex items-center gap-2 text-[#10b981] text-xs font-bold uppercase tracking-widest">
                <MessageSquare size={16} /> Reply to our SMS
              </div>
            </div>

            {/* SMS Mockup */}
            <div className="w-full bg-black rounded-xl p-6 mb-8 shadow-inner flex flex-col gap-4 border border-white/10">
              <div className="bg-[#262629] text-gray-200 rounded-2xl rounded-tl-sm p-4 text-sm w-11/12 leading-relaxed">
                Hello! Your B2B acquisition discovery call is confirmed.
                <br/><br/>
                Please respond "Yes" to this message to confirm that you will be attending this meeting.
              </div>
              <div className="bg-[#10b981] text-black font-medium rounded-full rounded-br-sm px-5 py-2 self-end shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                Yes
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Reply YES to confirm you'll join the appointment</h3>
            <p className="text-brand-text font-light leading-relaxed">
              We've just sent you an SMS. Please reply <strong className="text-white">"YES"</strong> to confirm you're going to attend your strategy session.
            </p>
          </div>

        </div>

        {/* BOTTOM WARNING */}
        <div className="w-full max-w-2xl bg-[#111318] border border-white/5 rounded-xl p-6 md:p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <p className="text-brand-text leading-relaxed">
            If you don't do these two things, we'll be forced to cancel your appointment. <strong className="text-white font-serif italic">We only take on people who are serious about scaling.</strong>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;
