import { useState } from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  Instagram,
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  MapPin, 
  AlertCircle 
} from 'lucide-react';
import SEO from '../components/SEO';
import SpotlightCard from '../components/ui/spotlight-card';
import Magnet from '../components/Magnet';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Both Custom Website + AI Automation',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim())) {
      setErrorMessage('Please provide your name along with an email address or phone number.');
      return;
    }

    setSubmitting(true);
    // Simulate robust async submission / storage
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact Us & Book Discovery Call — GrowtivAI"
        description="Book a 30-minute discovery call with GrowtivAI to discuss your website or AI automation requirements. Direct engineer consultation with clear roadmap."
        canonicalPath="/contact"
      />

      <div className="w-full pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Direct Engineer Consultation</span>
          </div>

          <h1 className="font-heading font-bold uppercase tracking-tight text-white leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Let&rsquo;s Talk About Your Business.
          </h1>

          <p className="font-body text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
            Tell us what is costing your business the most time or money. We’ll look at your enquiry flow and show you an honest, practical way forward.
          </p>
        </div>

        {/* Main Grid: Contact Channels (Left) & Form / Booking (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          
          {/* Left Column: Direct Communication Channels & Commitments */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* WhatsApp Priority Desk */}
            <div className="p-6 sm:p-7 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-300 font-semibold mb-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Fastest Response Channel</span>
              </div>
              <h2 className="font-heading font-bold text-xl uppercase text-white mb-2">
                Chat Directly on WhatsApp
              </h2>
              <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed mb-5">
                Have a quick question about website scope or want to see a live demo on your phone? Message our direct enquiry desk.
              </p>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors shadow-md active:scale-95 text-center"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Email & Phone Details */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 space-y-4">
              <h3 className="font-heading font-bold text-base uppercase text-white mb-3">
                Direct Contact Information
              </h3>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-white/80">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-white/80">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
                <span className="text-[10px] text-white/50 font-mono">(Mon–Sat, 10am–7pm IST)</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-white/80">
                <Instagram className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white underline"
                >
                  @growtivai on Instagram
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm font-body text-white/80">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>

            {/* Delivery Guarantees */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3.5">
              <h3 className="font-heading font-bold text-base uppercase text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Our Delivery Commitments</span>
              </h3>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/75 font-body">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Transparent technical scope and architecture before financial commitment</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/75 font-body">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Milestone-based delivery: verify working functionality before final payment</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/75 font-body">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Complete team handover, staff video tutorials, and administrative ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-7">
            <SpotlightCard
              spotlightColor="rgba(34, 197, 94, 0.15)"
              size={550}
              className="bg-[#07240f] text-white rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl"
            >
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-white text-[#0B3215] flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="font-heading font-bold text-2xl uppercase mb-2 text-white">
                    Discovery Request Received
                  </h3>
                  <p className="font-body text-white/80 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
                    Thank you! Our systems architect will review your business requirements and contact you within 24 hours with an actionable roadmap.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs uppercase tracking-widest text-emerald-300 hover:text-white underline font-mono"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <PhoneCall className="w-4 h-4 text-emerald-400" />
                      <h2 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-white">
                        Book a Discovery Call
                      </h2>
                    </div>
                    <p className="text-white/70 font-body text-xs sm:text-sm">
                      Tell us about your requirements. No spam. Direct engineer consultation within 24 hours.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-300" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-white/75 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-white/75 mb-1.5">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-white/75 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@company.in"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-white/75 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Type of help needed */}
                  <div>
                    <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-white/75 mb-1.5">
                      Type of Help Needed *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B3215] border border-white/20 text-white focus:outline-none focus:border-emerald-400 transition-colors text-sm"
                    >
                      <option value="Both Custom Website + AI Automation">Both Custom Website + AI Automation</option>
                      <option value="Custom Website Development">Custom Website &amp; Portal Development</option>
                      <option value="Custom Business Software">Custom Business Software &amp; Dashboards</option>
                      <option value="AI WhatsApp & Voice Agents">AI WhatsApp &amp; Voice Agents</option>
                      <option value="General Discovery / Operational Audit">General Discovery / Workflow Audit</option>
                    </select>
                  </div>

                  {/* Short message */}
                  <div>
                    <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-white/75 mb-1.5">
                      What would you like to improve?
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your enquiry bottlenecks or current systems..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-emerald-400 transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Magnet padding={40} strength={3.5} className="w-full block pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-full bg-white text-[#0B3215] font-body font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-neutral-100 transition-all duration-300 shadow-xl active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      <span>{submitting ? 'Sending Request...' : 'Book Discovery Call'}</span>
                      <ArrowRight className="w-4 h-4 text-[#0B3215]" />
                    </button>
                  </Magnet>

                  <p className="text-center text-white/50 text-[11px] font-mono">
                    Confidential • Zero spam • Direct engineer consultation within 24 hours
                  </p>
                </form>
              )}
            </SpotlightCard>
          </div>

        </div>

      </div>
    </>
  );
}
