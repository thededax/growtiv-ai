import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  PhoneCall, 
  Compass, 
  FileCheck, 
  Share2, 
  HeartHandshake, 
  ShieldCheck, 
  Target 
} from 'lucide-react';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us — Practical Business Systems & Everyday AI"
        description="GrowtivAI is a founder-led AI growth and automation partner helping Indian businesses adopt working websites, software, and AI systems with clear scope and tested delivery."
        canonicalPath="/about"
      />

      <div className="w-full pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Founder-Led Engineering Partner</span>
          </div>

          <h1 className="font-heading font-bold uppercase tracking-tight text-white leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Technology Should Make Business Easier.
          </h1>

          <p className="font-body text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
            GrowtivAI helps Indian business owners fix daily bottlenecks with custom websites and practical AI systems—without technical headaches, complex jargon, or having to figure out software alone.
          </p>
        </div>

        {/* Mission Statement Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-emerald-950/40 border border-emerald-500/30 mb-16 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-300 font-semibold mb-3">
            <Target className="w-4 h-4 text-emerald-400" />
            <span>Our Core Mission</span>
          </div>
          <blockquote className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl uppercase text-white leading-tight mb-4">
            &ldquo;Fix the problem that costs an Indian business owner the most time or money, with a working system they can see, understand and measure, not a tool they have to figure out alone.&rdquo;
          </blockquote>
          <p className="font-body text-xs sm:text-sm text-white/70">
            Rooted in Bhagalpur, Bihar and serving growing businesses across India.
          </p>
        </div>

        {/* Founder Story & Motivation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/10 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-2">
            The Perspective Behind GrowtivAI
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white mb-6">
            Why We Built GrowtivAI
          </h2>

          <div className="space-y-4 font-body text-sm sm:text-base text-white/80 leading-relaxed">
            <p>
              Most Indian small and medium business owners are inundated with generic sales pitches about &ldquo;AI revolutions&rdquo; and bloated enterprise software suites. Yet on the ground, the reality looks quite different: business owners still spend hours manually typing the same course fees, sending property brochures late at night, or chasing enquiries lost across scattered personal WhatsApp chats.
            </p>
            <p>
              Off-the-shelf software tools often end up unused because nobody customizes them to the specific business workflow, and middleman agencies deliver template websites that look decorative but fail to capture customer enquiries.
            </p>
            <p>
              GrowtivAI was founded on a simple conviction: <strong>technology is only as good as the practical problem it solves</strong>. We act as an engineering partner, not a middleman. We analyze the actual bottleneck in your customer enquiry or daily workflow, build a tailored website or automated AI system, test it with real scenarios, and hand it over working.
            </p>
          </div>
        </div>

        {/* How We Work: 5 Steps */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              Structured Engineering
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white">
              How We Work With You
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                step: '01',
                title: 'Understand the Actual Business Problem',
                desc: 'We start by identifying where your business loses time, misses enquiries, or struggles with manual coordination—not by pushing pre-packaged tools.',
              },
              {
                step: '02',
                title: 'Recommend a Practical Solution',
                desc: 'We define whether a conversion website, an AI WhatsApp desk, custom software, or a combination is the right starting point for your budget and goals.',
              },
              {
                step: '03',
                title: 'Agree on Scope and Expectations',
                desc: 'Every project receives a clear deliverable roadmap with defined milestones. We promise implementation clarity, not unrealistic overnight sales growth.',
              },
              {
                step: '04',
                title: 'Build and Test Carefully',
                desc: 'We engineer the system, connect official APIs, set up strict guardrails against errors, and test realistic customer scenarios.',
              },
              {
                step: '05',
                title: 'Provide Complete Handover & Training',
                desc: 'We hand over full ownership of your code and workflows, record video walkthroughs for your team, and verify everyone is comfortable before final sign-off.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              >
                <span className="font-heading font-bold text-3xl text-emerald-400 shrink-0">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-base uppercase text-white mb-1">
                    {s.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Working Principles */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              Our Commitments
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase text-white">
              5 Working Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Compass,
                title: 'Practical Value Over Hype',
                desc: 'We do not sell experimental gimmicks. If a simple form or automated spreadsheet solves your bottleneck better than complex AI, that is what we build.',
              },
              {
                icon: ShieldCheck,
                title: 'Clear, Plain-English Communication',
                desc: 'We explain how every system works in plain language without hiding behind technical buzzwords or jargon.',
              },
              {
                icon: FileCheck,
                title: 'Honest Expectations & Zero False Claims',
                desc: 'We provide realistic timelines and transparent deliverables. We never promise guaranteed revenue spikes or 100% replacement of human workers.',
              },
              {
                icon: Share2,
                title: 'Systems Designed Around Your Workflows',
                desc: 'We connect with the tools your team already uses—WhatsApp Business API, Zoho CRM, Google Workspace, and Razorpay—instead of forcing new platforms.',
              },
              {
                icon: HeartHandshake,
                title: 'Appropriate Support After Delivery',
                desc: 'You receive complete documentation, recorded team training, and agreed ongoing monitoring arrangements so you are never left stuck.',
              },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className={`p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base uppercase text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#07240f] border border-white/20 text-center shadow-2xl">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3">
            Ready to Build a Working System for Your Business?
          </h3>
          <p className="font-body text-white/75 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-6">
            Book a 30-minute discovery call with our technical architect to discuss your business bottlenecks and identify a practical roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0B3215] font-heading font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#0B3215]" />
              <span>Book a Discovery Call</span>
            </Link>
            <Link
              to="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all active:scale-95"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
