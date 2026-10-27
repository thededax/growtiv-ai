import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import ShinyText from '../components/ShinyText';
import Magnet from '../components/Magnet';
import SpotlightCard from '../components/ui/spotlight-card';
import { Mail, MessageSquare, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';

export default function CTASection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: 'Both Services',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="stack-section bg-white rounded-t-[28px] sm:rounded-t-[48px] md:rounded-t-[56px] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-black/5 px-4 sm:px-8 md:px-12 py-10 sm:py-20 md:py-32 relative text-[#0B3215] w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Value Props & Direct Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="mb-2 sm:mb-3">
                <ShinyText
                  text="READY TO STOP LOSING INQUIRIES?"
                  speed={3.5}
                  className="font-body font-semibold uppercase tracking-widest text-[11px] sm:text-sm text-emerald-800"
                />
              </div>

              <h2
                className="font-heading font-bold uppercase leading-[0.98] sm:leading-[0.94] tracking-tight mb-3 sm:mb-6 text-[#0B3215]"
                style={{ fontSize: 'clamp(1.75rem, 5vw, 68px)' }}
              >
                Let’s Build the Right System for Your Business.
              </h2>

              <p className="font-body text-[#0B3215]/80 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-8 max-w-xl">
                Tell us what is costing your business the most time or money right now. We’ll look at your enquiry flow and show you a practical next step—with zero pressure.
              </p>
            </div>

            {/* Clear Guarantees / Delivery Commitments */}
            <div className="space-y-2.5 sm:space-y-4 border-t border-[#0B3215]/15 pt-4 sm:pt-6 mb-5 sm:mb-8">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="font-body font-medium text-xs sm:text-base text-[#0B3215]">
                  Detailed technical architecture &amp; scope before any commitment
                </span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="font-body font-medium text-xs sm:text-base text-[#0B3215]">
                  Milestone-based delivery: verify working functionality before final payment
                </span>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="font-body font-medium text-xs sm:text-base text-[#0B3215]">
                  Comprehensive team handover, staff training, and video walkthroughs
                </span>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div>
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#0B3215]/60 font-semibold mb-2 sm:mb-3">
                Prefer immediate communication?
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full transition-all duration-300 shadow-md active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200" />
                  <span>WhatsApp Discovery Desk</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-[#0B3215] border border-[#0B3215]/20 hover:bg-[#0B3215] hover:text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full transition-all duration-300 active:scale-95"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Discovery Call Booking Form */}
          <div className="lg:col-span-6 w-full">
            <FadeIn delay={0.1} y={20}>
              <SpotlightCard
                spotlightColor="rgba(34, 197, 94, 0.15)"
                size={550}
                className="bg-[#0B3215] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl border border-white/10"
              >
                {formSubmitted ? (
                  <div className="text-center py-8 sm:py-12">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white text-[#0B3215] flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-3 sm:mb-4">
                      ✓
                    </div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase mb-1.5 sm:mb-2">
                      Discovery Request Received
                    </h3>
                    <p className="font-body text-white/80 text-xs sm:text-base max-w-sm mx-auto leading-relaxed">
                      Thank you! Our systems architect will review your details and contact you within 24 hours with an actionable roadmap.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 sm:mt-6 text-xs uppercase tracking-widest text-emerald-300 hover:text-white underline font-mono"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <PhoneCall className="w-4 h-4 text-emerald-400" />
                        <h3 className="font-heading font-bold text-lg sm:text-2xl uppercase tracking-tight">
                          Book a Discovery Call
                        </h3>
                      </div>
                      <p className="text-white/60 font-body text-xs sm:text-sm">
                        Tell us about your requirements. No spam. Direct engineer consultation.
                      </p>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs uppercase font-mono font-semibold tracking-wider text-white/70 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikram Mehta"
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs uppercase font-mono font-semibold tracking-wider text-white/70 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="vikram@company.in"
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs uppercase font-mono font-semibold tracking-wider text-white/70 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] sm:text-xs uppercase font-mono font-semibold tracking-wider text-white/70 mb-1">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Real Estate"
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-[11px] sm:text-xs uppercase font-mono font-semibold tracking-wider text-white/70 mb-1">
                        Primary Interest *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#07240f] border border-white/20 text-white focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                      >
                        <option value="Both Services">Both Custom Website + AI Automation</option>
                        <option value="Custom Website Development">Custom Website Development</option>
                        <option value="AI Systems & Automation">AI Systems &amp; WhatsApp Automation</option>
                        <option value="Other Exploration">General Discovery / Operational Audit</option>
                      </select>
                    </div>

                    {/* Message / Bottlenecks */}
                    <div>
                      <label className="block text-[11px] sm:text-xs uppercase font-mono font-semibold tracking-wider text-white/70 mb-1">
                        What would you like to improve?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your current website or enquiry bottlenecks..."
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit CTA Button with Magnet */}
                    <Magnet padding={40} strength={3.5} className="w-full block pt-1 sm:pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 sm:py-4 rounded-full bg-white text-[#0B3215] font-body font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-neutral-100 transition-all duration-300 shadow-xl active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        <span>Book a Discovery Call</span>
                        <ArrowRight className="w-4 h-4 text-[#0B3215]" />
                      </button>
                    </Magnet>

                    <p className="text-center text-white/50 text-[10px] sm:text-[11px] font-mono">
                      Confidential • No spam • Architect consultation within 24 hours
                    </p>
                  </form>
                )}
              </SpotlightCard>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
