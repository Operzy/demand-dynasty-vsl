import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

// Posts to our own serverless function (api/submit.js), which securely
// creates the lead in GoHighLevel and tags them "application submitted".
const SUBMIT_ENDPOINT = '/api/submit';

const QualifierModal = ({ onClose, onComplete }) => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    revenue: '',
    runningAds: '',
    readyToInvest: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Initial entrance animation
    const ctx = gsap.context(() => {
      gsap.from(modalRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.from('.modal-bg', {
        opacity: 0,
        duration: 0.4,
      });
    });
    return () => ctx.revert();
  }, []);

  const handleNext = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Animate transition to next step
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.2,
      onComplete: () => {
        setStep(prev => prev + 1);
        gsap.fromTo(contentRef.current, 
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Split full name into first/last for GHL contact fields
    const trimmedName = formData.name.trim();
    const firstSpace = trimmedName.indexOf(' ');
    const firstName = firstSpace === -1 ? trimmedName : trimmedName.slice(0, firstSpace);
    const lastName = firstSpace === -1 ? '' : trimmedName.slice(firstSpace + 1);

    try {
      await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          full_name: trimmedName,
          email: formData.email,
          phone: formData.phone,
          monthly_revenue: formData.revenue,
          running_meta_ads: formData.runningAds,
          ready_to_invest: formData.readyToInvest,
          tags: ['application submitted'],
          source: 'VSL Qualifier Form',
        }),
      });
    } catch (err) {
      // Don't block the booking flow if the webhook fails
      console.error('GHL webhook submission failed:', err);
    } finally {
      setSubmitting(false);
      onComplete();
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0a0c0f]/95 modal-bg cursor-pointer"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-[#14171d] rounded-3xl border border-brand-border/60 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-border">
          <div 
            className="h-full bg-brand-accent transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-brand-text hover:text-brand-light transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10 min-h-[360px] flex flex-col" ref={contentRef}>
          {step === 1 && (
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">Question 1 of 3</span>
              <h3 className="text-2xl font-serif font-bold text-brand-light mb-6">What is your current monthly revenue?</h3>
              <div className="flex flex-col gap-3">
                {['Under $10k / mo', '$10k - $50k / mo', '$50k+ / mo'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleNext('revenue', opt)}
                    className="w-full p-4 text-left rounded-xl border border-brand-border/60 hover:border-brand-accent hover:bg-brand-accent/5 text-brand-text hover:text-brand-light transition-all flex justify-between items-center group"
                  >
                    {opt}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">Question 2 of 3</span>
              <h3 className="text-2xl font-serif font-bold text-brand-light mb-6">Are you currently running Meta Ads?</h3>
              <div className="flex flex-col gap-3">
                {['Yes, actively spending', 'Tried in the past, paused', 'No, strictly organic/referrals'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleNext('runningAds', opt)}
                    className="w-full p-4 text-left rounded-xl border border-brand-border/60 hover:border-brand-accent hover:bg-brand-accent/5 text-brand-text hover:text-brand-light transition-all flex justify-between items-center group"
                  >
                    {opt}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">Question 3 of 3</span>
              <h3 className="text-2xl font-serif font-bold text-brand-light mb-6">Are you ready to invest in growth if we guarantee the performance?</h3>
              <div className="flex flex-col gap-3">
                {['Yes, I have capital ready', 'I need to see the exact mechanism first', 'No, not right now'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleNext('readyToInvest', opt)}
                    className="w-full p-4 text-left rounded-xl border border-brand-border/60 hover:border-brand-accent hover:bg-brand-accent/5 text-brand-text hover:text-brand-light transition-all flex justify-between items-center group"
                  >
                    {opt}
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-accent" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-3">Final Step</span>
              <h3 className="text-2xl font-serif font-bold text-brand-light mb-2">Where should we send the details?</h3>
              <p className="text-brand-text text-sm mb-6 font-light">Fill out your details to access the booking calendar.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  required
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0a0c0f] border border-brand-border rounded-xl px-4 py-3 text-brand-light placeholder-brand-text/50 focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input 
                  type="email" 
                  required
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0a0c0f] border border-brand-border rounded-xl px-4 py-3 text-brand-light placeholder-brand-text/50 focus:outline-none focus:border-brand-accent transition-colors"
                />
                <input 
                  type="tel" 
                  required
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#0a0c0f] border border-brand-border rounded-xl px-4 py-3 text-brand-light placeholder-brand-text/50 focus:outline-none focus:border-brand-accent transition-colors"
                />
                <Button type="submit" disabled={submitting} className="w-full mt-2">
                  {submitting ? 'Submitting…' : 'Submit & Book Call'}
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QualifierModal;
