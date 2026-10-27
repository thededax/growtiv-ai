import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Smartphone, 
  MessageSquare, 
  Database,
  Gauge,
  Sparkles
} from 'lucide-react';
import ShinyText from '../components/ShinyText';
import SpotlightCard from '../components/ui/spotlight-card';
import Magnet from '../components/Magnet';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#0B3215] text-white px-4 sm:px-8 md:px-12 py-10 sm:py-20 md:py-32 relative w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 md:mb-24">
          <div className="mb-2 sm:mb-3">
            <ShinyText
              text="TWO CORE SERVICES • ZERO FLUFF"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-[11px] sm:text-sm text-emerald-400"
            />
          </div>
          <h2
            className="hero-heading font-heading font-bold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.85rem, 7vw, 100px)' }}
          >
            Our Core Services
          </h2>
          <p className="font-body text-white/80 text-xs sm:text-base md:text-lg mt-2.5 sm:mt-4 leading-relaxed">
            We don’t build pretty websites that sit empty, and we don’t sell experimental AI toys that confuse your customers. We build two things: websites that turn visitors into genuine inquiries, and practical AI systems that handle daily customer communication.
          </p>
        </div>

        {/* Two Equal Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          
          {/* ── SERVICE 1: Custom Website & Software Development ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(34, 197, 94, 0.15)"
              size={550}
              className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] p-5 sm:p-8 md:p-12 flex flex-col justify-between h-full group hover:border-emerald-400/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              {/* Service Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                    <span>Service 01</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-white/50 uppercase tracking-widest">
                    Web &amp; Software Engine
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-2 sm:mb-3">
                  Custom Website &amp; Software Development
                </h3>

                <p className="font-body text-white/80 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Fast, clean websites and custom software tools designed around how Indian customers actually buy. Built to load in under 2 seconds on mobile, explain your offerings simply, and make it effortless for prospects to reach out.
                </p>

                {/* Interactive Visual Preview: Website Performance & Conversion */}
                <div className="mb-4 sm:mb-8 rounded-xl sm:rounded-2xl bg-[#07240f] border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b border-white/10 text-[11px] sm:text-xs font-mono text-white/70">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400/80" />
                      <span className="ml-1.5 sm:ml-2 text-white/90">growtivai.com/preview</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 font-semibold">
                      <Gauge className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>99 PageSpeed</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 font-mono text-[11px] sm:text-xs">
                    <div className="flex items-center justify-between text-white/80 bg-white/[0.03] p-2 sm:p-2.5 rounded-lg border border-white/5">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                        Mobile-First Layout
                      </span>
                      <span className="text-emerald-400">Optimized for 4G/5G</span>
                    </div>
                    <div className="flex items-center justify-between text-white/80 bg-white/[0.03] p-2 sm:p-2.5 rounded-lg border border-white/5">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                        Conversion Funnel
                      </span>
                      <span className="text-emerald-400">1-Tap WhatsApp &amp; Forms</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-1.5 sm:mb-2">
                    Key Deliverables Included:
                  </p>
                  {[
                    'High-Speed Custom Websites & Portals',
                    'Landing Pages Optimized for Google & Meta Ad Conversions',
                    'Custom Business Software & Internal Workflow Dashboards',
                    'Mobile-First UX Tailored for Indian 4G/5G Users',
                    '1-Tap WhatsApp, Lead Form & Direct CRM Integrations',
                    'Clean Handover with Full Code Ownership & Ongoing Support',
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2 sm:gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-body text-xs sm:text-sm text-white/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card CTA */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <span className="text-[11px] sm:text-xs font-mono text-white/60">
                  Fixed Scope • Tested Before Handover
                </span>
                <Magnet padding={40} strength={3}>
                  <Link
                    to="/services#custom-website-software"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#0B3215] font-body font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all active:scale-95 shadow-lg"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 text-[#0B3215]" />
                  </Link>
                </Magnet>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* ── SERVICE 2: AI Systems & Business Automation ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="h-full"
          >
            <SpotlightCard
              spotlightColor="rgba(34, 197, 94, 0.15)"
              size={550}
              className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] p-5 sm:p-8 md:p-12 flex flex-col justify-between h-full group hover:border-emerald-400/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              {/* Service Header */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                    <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                    <span>Service 02</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-white/50 uppercase tracking-widest">
                    Automation &amp; AI Desk
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-2 sm:mb-3">
                  AI Systems
                </h3>

                <p className="font-body text-white/80 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                  Smart WhatsApp and voice assistants that answer customer questions in seconds, share catalogs, and collect lead details 24/7. Your customers get instant replies, and your team stops typing the same messages all day.
                </p>

                {/* Interactive Visual Preview: WhatsApp Automation & CRM Pipeline */}
                <div className="mb-4 sm:mb-8 rounded-xl sm:rounded-2xl bg-[#07240f] border border-white/10 p-3 sm:p-5">
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 mb-2.5 sm:mb-3 border-b border-white/10 text-[11px] sm:text-xs font-mono text-white/70">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                      <span className="text-white/90">WhatsApp Concierge Pipeline</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Live: &lt; 30s</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2 font-mono text-[11px] sm:text-xs">
                    <div className="flex items-center justify-between text-white/80 bg-white/[0.03] p-2 sm:p-2.5 rounded-lg border border-white/5">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                        Lead Pre-Qualification
                      </span>
                      <span className="text-emerald-400">English + Hindi</span>
                    </div>
                    <div className="flex items-center justify-between text-white/80 bg-white/[0.03] p-2 sm:p-2.5 rounded-lg border border-white/5">
                      <span className="flex items-center gap-1.5 sm:gap-2">
                        <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                        CRM Sync (Zoho/Sheets)
                      </span>
                      <span className="text-emerald-400">Instant Team Alert</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-8">
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-1.5 sm:mb-2">
                    Key Deliverables Included:
                  </p>
                  {[
                    '24/7 WhatsApp AI Concierge for Instant Customer Enquiries',
                    'Configured AI Voice Agents for Routine Phone Inquiries',
                    'Official WhatsApp Cloud API Multi-Step Conversation Flows',
                    'Automatic Lead Logging to Google Sheets & CRM (Zoho/HubSpot)',
                    'Bilingual Support (English, Hindi & Hinglish)',
                    'Strict Guardrails & Seamless Handover to Human Staff',
                  ].map((feat) => (
                    <div key={feat} className="flex items-start gap-2 sm:gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-body text-xs sm:text-sm text-white/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card CTA */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <span className="text-[11px] sm:text-xs font-mono text-white/60">
                  Fixed Scope • Tested Before Handover
                </span>
                <Magnet padding={40} strength={3}>
                  <Link
                    to="/services#ai-systems"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#0B3215] font-body font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all active:scale-95 shadow-lg"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 text-[#0B3215]" />
                  </Link>
                </Magnet>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Both Services Integration Banner */}
        <div className="mt-8 sm:mt-16 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-xl uppercase text-white">
                Can you combine a custom website with automated AI systems?
              </h4>
              <p className="font-body text-white/70 text-xs sm:text-sm mt-0.5 leading-relaxed">
                Yes. That is where most businesses see the fastest return: a fast website that captures enquiries, connected directly to an automated WhatsApp desk that replies in 30 seconds.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-body font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors shrink-0 whitespace-nowrap shadow-md w-full md:w-auto"
          >
            <span>Book a Unified Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
