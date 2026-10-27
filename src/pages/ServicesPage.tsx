import { Link } from 'react-router-dom';
import { 
  Globe, 
  Bot, 
  PhoneCall, 
  MessageSquare, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  ArrowDown, 
  Layout, 
  Database, 
  Sparkles 
} from 'lucide-react';
import Magnet from '../components/Magnet';
import SEO from '../components/SEO';
import { getWhatsAppUrl } from '../data/siteConfig';

export default function ServicesPage() {
  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Services — Custom Websites, Software & AI Systems"
        description="Two ways GrowtivAI helps Indian businesses grow: Custom Website & Software Development and Practical AI Systems for customer enquiry handling and business automation."
        canonicalPath="/services"
      />

      <div className="w-full pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-24">
        
        {/* ── 1. Page Header & Introduction ─────────────────────────── */}
        <section className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto mb-10 sm:mb-18 md:mb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Two Core Pillars of Practical Growth</span>
            </div>

            <h1 className="font-heading font-bold uppercase tracking-tight text-white leading-[0.98] sm:leading-[0.95] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">
              Two Ways We Help Your Business Grow.
            </h1>

            <p className="font-body text-white/80 text-sm sm:text-lg md:text-xl leading-relaxed">
              Build a fast website that turns visitors into genuine enquiries, or deploy smart WhatsApp and voice AI that answers customers and cuts repetitive work. Choose what fits your business today.
            </p>

            {/* Quick Service Anchor Navigation Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-6 sm:mt-10">
              <button
                type="button"
                onClick={() => scrollToAnchor('custom-website-software')}
                className="group p-4 sm:p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-emerald-400/50 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest font-semibold">
                      Service 01
                    </span>
                    <ArrowDown className="w-4 h-4 text-white/40 group-hover:text-emerald-400 group-hover:translate-y-0.5 transition-all" />
                  </div>
                  <h2 className="font-heading font-bold text-base sm:text-xl uppercase text-white mb-1">
                    Custom Website &amp; Software Development
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                    Fast, high-converting websites and tailored internal software designed around your workflows.
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
                  <span>Jump to Section</span>
                  <span>↓</span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => scrollToAnchor('ai-systems')}
                className="group p-4 sm:p-6 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-emerald-400/50 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-xs font-mono text-emerald-300 uppercase tracking-widest font-semibold">
                      Service 02
                    </span>
                    <ArrowDown className="w-4 h-4 text-white/40 group-hover:text-emerald-400 group-hover:translate-y-0.5 transition-all" />
                  </div>
                  <h2 className="font-heading font-bold text-base sm:text-xl uppercase text-white mb-1">
                    AI Systems &amp; Automation
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                    WhatsApp concierges, voice agents, and workflow automations that answer customers 24/7.
                  </p>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">
                  <span>Jump to Section</span>
                  <span>↓</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* ── 2. SERVICE ONE: Custom Website & Software Development ───── */}
        <section
          id="custom-website-software"
          className="scroll-mt-24 sm:scroll-mt-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto mb-14 sm:mb-24 md:mb-32"
        >
          <div className="rounded-[24px] sm:rounded-[36px] md:rounded-[44px] bg-[#07240f] border border-white/15 p-4 sm:p-8 md:p-14 shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Service 01 • Web &amp; Software Engine</span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-3 sm:mb-4">
                Websites That Make Customers Enquire.
              </h2>

              <p className="font-body text-white/80 text-sm sm:text-lg leading-relaxed">
                Your business isn’t generic. Your website or software should be built around how your customers actually decide, how your team operates, and what brings you real revenue.
              </p>
            </div>

            {/* Plain English Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="p-4 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                  <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <h3 className="font-heading font-bold text-base sm:text-lg uppercase text-white">
                    What Custom Website Development Means
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-base text-white/75 leading-relaxed">
                  Building a fast, professional online presence designed to turn curious visitors into paying customers. Rather than a static digital brochure, your website clearly explains what you do, shows proof of work, and makes reaching out on WhatsApp or form effortless.
                </p>
              </div>

              <div className="p-4 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                  <Database className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                  <h3 className="font-heading font-bold text-base sm:text-lg uppercase text-white">
                    What Custom Software Development Means
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-base text-white/75 leading-relaxed">
                  Creating a simple, private digital tool for a specific business task—such as tracking leads, managing clinic appointments, or generating banquet quotes—so your team stops juggling handwritten diaries, separate spreadsheets, and personal chats.
                </p>
              </div>
            </div>

            {/* What Can We Build? */}
            <div className="mb-8 sm:mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3.5">
                Available Solution Categories
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Business Websites */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-heading font-bold text-base sm:text-lg uppercase text-white mb-2.5 sm:mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Business Websites
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-white/80 font-body">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Credibility Websites:</strong> Fast, clean company portals that explain your offerings simply and establish immediate trust.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>High-Converting Funnels:</strong> Lead-generation pages built with 1-tap WhatsApp consultation triggers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Service &amp; Portfolio Portals:</strong> Visual galleries for real estate, coaching institutes, and local clinics.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Campaign Landing Pages:</strong> Ultra-fast, single-purpose landing pages optimized for Google and Meta ads.</span>
                    </li>
                  </ul>
                </div>

                {/* Custom Business Software */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-heading font-bold text-base sm:text-lg uppercase text-white mb-2.5 sm:mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Custom Business Software
                  </h4>
                  <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-white/80 font-body">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Internal Operations Dashboards:</strong> Centralized views of daily bookings, project milestones, and client requests.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Lead &amp; Enquiry Management:</strong> Track prospect status from first touchpoint to site visit and final payment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Booking &amp; Scheduling Engines:</strong> Slot-reservation tools for clinics, salons, coaching institutes, and banquet venues.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Process-Specific Web Apps:</strong> Tools customized around your exact business logic and team roles.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How Does It Work? (4 Steps) */}
            <div className="mb-8 sm:mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3.5">
                Our 4-Step Engineering Process
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  {
                    step: '01',
                    title: 'Understand the Bottleneck',
                    desc: 'We discuss your business, target customers, and the specific operational bottleneck you want to solve.',
                  },
                  {
                    step: '02',
                    title: 'Plan Scope & Flow',
                    desc: 'We define the exact pages, user flow, and technical architecture required to meet your agreed goals.',
                  },
                  {
                    step: '03',
                    title: 'Design and Build',
                    desc: 'We engineer the website or software in private staging, reviewing milestones and test scenarios with you.',
                  },
                  {
                    step: '04',
                    title: 'Test, Launch & Handover',
                    desc: 'We test performance across mobile devices, fix identified issues, and provide complete handover and staff training.',
                  },
                ].map((item) => (
                  <div key={item.step} className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="font-heading font-bold text-xl sm:text-2xl text-emerald-400 block mb-1.5 sm:mb-2">
                      {item.step}
                    </span>
                    <h5 className="font-heading font-bold text-xs sm:text-sm uppercase text-white mb-1 sm:mb-1.5">
                      {item.title}
                    </h5>
                    <p className="font-body text-xs text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Value */}
            <div className="mb-6 sm:mb-10 p-4 sm:p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/20">
              <h4 className="font-heading font-bold text-sm sm:text-base uppercase text-emerald-300 mb-2.5 sm:mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Practical Business Value
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/80 font-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Present your business with modern credibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Explain your offerings in clear, plain language</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Give visitors an instant 1-tap way to enquire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Organize business tasks in a single unified view</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Eliminate avoidable manual coordination work</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full code ownership and zero monthly platform lock-in</span>
                </div>
              </div>
            </div>

            {/* Section CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#0B3215] font-heading font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg active:scale-95 text-center"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-[#0B3215]" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all active:scale-95 text-center"
              >
                <span>View Our Work</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ── 3. SERVICE TWO: AI Systems ────────────────────────────── */}
        <section
          id="ai-systems"
          className="scroll-mt-24 sm:scroll-mt-28 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto mb-14 sm:mb-24 md:mb-32"
        >
          <div className="rounded-[24px] sm:rounded-[36px] md:rounded-[44px] bg-[#07240f] border border-white/15 p-4 sm:p-8 md:p-14 shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="max-w-3xl mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 sm:mb-4">
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>Service 02 • Practical AI Systems</span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-3 sm:mb-4">
                AI Systems That Handle Customer Communication.
              </h2>

              <p className="font-body text-white/80 text-sm sm:text-lg leading-relaxed">
                Practical WhatsApp assistants, voice agents, and background automations that answer customer questions in seconds, log leads, and keep your business running when you’re busy or closed.
              </p>
            </div>

            {/* What are AI Systems? Plain English */}
            <div className="p-4 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 sm:mb-12">
              <h3 className="font-heading font-bold text-lg sm:text-xl uppercase text-white mb-2 sm:mb-3">
                What are AI Systems? (In Plain English)
              </h3>
              <p className="font-body text-xs sm:text-base text-white/80 leading-relaxed mb-3 sm:mb-4">
                An AI system is a digital assistant configured to handle specific, repetitive communication tasks. It can answer customer questions on WhatsApp within 30 seconds, share catalog PDFs, verify buyer budgets, or alert your sales team when a high-value lead arrives.
              </p>
              <p className="font-body text-xs sm:text-sm text-emerald-300/90 leading-relaxed">
                <strong>Important distinction:</strong> Our AI systems work strictly within approved business information and guardrails. They are built to assist your team and prevent missed enquiries—not fabricate answers or replace human judgment.
              </p>
            </div>

            {/* Three Capabilities Within AI Systems */}
            <div className="mb-8 sm:mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3.5">
                Three Core Capabilities Within AI Systems
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                
                {/* Capability 1: Voice Agents */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 sm:mb-4">
                      <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold block mb-1">
                      Capability 01
                    </span>
                    <h4 className="font-heading font-bold text-base sm:text-lg uppercase text-white mb-2 sm:mb-3">
                      AI Voice Agents
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed mb-3 sm:mb-4">
                      Configured phone assistants that answer routine calls, answer standard questions, collect caller details, and route priority inquiries to your staff.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-body text-white/70 italic">
                    &ldquo;When staff cannot answer every incoming call, a configured voice agent handles routine enquiries and records caller details for priority team follow-up.&rdquo;
                  </div>
                </div>

                {/* Capability 2: WhatsApp Agents */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 sm:mb-4">
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold block mb-1">
                      Capability 02
                    </span>
                    <h4 className="font-heading font-bold text-base sm:text-lg uppercase text-white mb-2 sm:mb-3">
                      AI WhatsApp Agents
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed mb-3 sm:mb-4">
                      Official WhatsApp Cloud API assistants that greet leads, share approved brochures, qualify budgets, and book appointments 24/7.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-body text-white/70 italic">
                    &ldquo;When customers ask about property floorplans or clinic timings on WhatsApp, an agent responds in 30 seconds using approved business information.&rdquo;
                  </div>
                </div>

                {/* Capability 3: Custom AI Automations */}
                <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3 sm:mb-4">
                      <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold block mb-1">
                      Capability 03
                    </span>
                    <h4 className="font-heading font-bold text-base sm:text-lg uppercase text-white mb-2 sm:mb-3">
                      Custom AI Automations
                    </h4>
                    <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed mb-3 sm:mb-4">
                      Automated connections linking WhatsApp, Google Sheets, CRMs (Zoho/LeadSquared), and payment alerts with zero manual typing.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-body text-white/70 italic">
                    &ldquo;Automatically record new enquiries into Google Sheets or Zoho CRM, alert your sales team, and trigger scheduled follow-up reminders.&rdquo;
                  </div>
                </div>

              </div>
            </div>

            {/* How Does It Work? (4 Steps) */}
            <div className="mb-8 sm:mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3.5">
                Our 4-Step Implementation Process
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  {
                    step: '01',
                    title: 'Identify Repetitive Tasks',
                    desc: 'We pinpoint where your team loses hours, misses customer calls, or types the same replies repeatedly.',
                  },
                  {
                    step: '02',
                    title: 'Define Approved Knowledge',
                    desc: 'We agree on verified business facts, approved pricing ranges, and the exact moment a human staff member takes over.',
                  },
                  {
                    step: '03',
                    title: 'Connect Official APIs & CRM',
                    desc: 'We configure the AI agent with official WhatsApp Cloud APIs, Google Sheets, or CRM pipelines with zero prompt hallucinations.',
                  },
                  {
                    step: '04',
                    title: 'Stress-Test & Handover',
                    desc: 'We test realistic customer scenarios, verify guardrails, and train your staff before going live.',
                  },
                ].map((item) => (
                  <div key={item.step} className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <span className="font-heading font-bold text-xl sm:text-2xl text-emerald-400 block mb-1.5 sm:mb-2">
                      {item.step}
                    </span>
                    <h5 className="font-heading font-bold text-xs sm:text-sm uppercase text-white mb-1 sm:mb-1.5">
                      {item.title}
                    </h5>
                    <p className="font-body text-xs text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Value */}
            <div className="mb-6 sm:mb-10 p-4 sm:p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/20">
              <h4 className="font-heading font-bold text-sm sm:text-base uppercase text-emerald-300 mb-2.5 sm:mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Practical Business Value
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/80 font-body">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Replies to customer inquiries in under 30 seconds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cuts hours of repetitive manual WhatsApp typing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automatic lead organization in Google Sheets or CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero missed weekend and late-evening prospect leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>More time for your team to close high-value sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bilingual support tailored for Indian buyers (English + Hindi)</span>
                </div>
              </div>
            </div>

            {/* Section CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-white/10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#0B3215] font-heading font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg active:scale-95 text-center"
              >
                <span>Discuss an AI System</span>
                <ArrowRight className="w-4 h-4 text-[#0B3215]" />
              </Link>
              <Link
                to="/work?category=ai-systems"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all active:scale-95 text-center"
              >
                <span>Explore AI Demos</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ── 4. Closing CTA Section ─────────────────────────────────── */}
        <section className="px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
          <div className="rounded-[24px] sm:rounded-[36px] md:rounded-[44px] bg-gradient-to-b from-white/[0.08] to-white/[0.03] border border-white/20 p-5 sm:p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
            <h3 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white mb-3 sm:mb-4">
              Let&rsquo;s Build the Right Solution for Your Business.
            </h3>
            <p className="font-body text-white/80 text-xs sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Tell us what is costing your business the most time or money right now. We’ll help you choose the right starting point, whether that’s a custom website, internal software, a WhatsApp AI assistant, or a unified system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Magnet padding={40} strength={3}>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#0B3215] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-xl active:scale-95 text-center"
                >
                  <PhoneCall className="w-4 h-4 text-[#0B3215]" />
                  <span>Book a Discovery Call</span>
                </Link>
              </Magnet>

              <Magnet padding={40} strength={3}>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl active:scale-95 text-center"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-200" />
                  <span>Chat on WhatsApp</span>
                </a>
              </Magnet>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
