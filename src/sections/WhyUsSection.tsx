import { motion } from 'framer-motion';
import { 
  Compass, 
  Eye, 
  FileCheck, 
  Share2, 
  HeartHandshake, 
  ArrowRight
} from 'lucide-react';
import ShinyText from '../components/ShinyText';
import SpotlightCard from '../components/ui/spotlight-card';

const DIFFERENTIATORS = [
  {
    icon: Compass,
    title: 'Built Around Your Real Workflows',
    description:
      'We never force generic templates or push unnecessary AI tools. Every website and automation system is custom-built around how your business actually handles customers.',
    badge: 'Custom Architecture',
  },
  {
    icon: Eye,
    title: 'Working Demos, Not Slide Decks',
    description:
      'We show you real interactive demos and live workflow prototypes before asking you to commit. You test reality, not agency sales talk.',
    badge: 'Verifiable Proof',
  },
  {
    icon: FileCheck,
    title: 'Clear Scope & Milestone Delivery',
    description:
      'Every project has a strictly defined deliverable roadmap with milestone-based sign-offs. You inspect and test the working system before making the final payment.',
    badge: 'Zero Surprise Fees',
  },
  {
    icon: Share2,
    title: 'Works with the Tools You Already Use',
    description:
      'We connect directly with your existing tools: WhatsApp Business API, Zoho CRM, LeadSquared, Google Sheets, Razorpay, and modern cloud databases.',
    badge: 'Native Ecosystem',
  },
  {
    icon: HeartHandshake,
    title: 'Full Code Ownership & Ongoing Support',
    description:
      'You receive 100% administrative ownership of your code and workflows, step-by-step video tutorials for your staff, and agreed maintenance so you’re never stranded.',
    badge: 'Full Ownership',
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="bg-[#0B3215] text-white px-4 sm:px-8 md:px-12 py-10 sm:py-20 md:py-32 relative w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="mb-2 sm:mb-3">
            <ShinyText
              text="THE GROWTIVAI STANDARD"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-[11px] sm:text-sm text-emerald-400"
            />
          </div>
          <h2
            className="hero-heading font-heading font-bold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.85rem, 7.5vw, 100px)' }}
          >
            Why GrowtivAI
          </h2>
          <p className="font-body text-white/80 text-xs sm:text-base md:text-lg mt-2.5 sm:mt-4 leading-relaxed">
            We operate as an engineering partner, not a middleman agency. We don’t sell buzzwords—we solve the specific problem that costs your business the most time or money.
          </p>
        </div>

        {/* 5 Differentiators Grid (Asymmetric Bento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {DIFFERENTIATORS.map((diff, index) => {
            const Icon = diff.icon;
            const isFeatured = index === 0;

            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'}
              >
                <SpotlightCard
                  spotlightColor="rgba(34, 197, 94, 0.15)"
                  size={450}
                  className="rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] p-4 sm:p-7 md:p-10 h-full flex flex-col justify-between group hover:border-emerald-400/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3 sm:mb-6">
                      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-500/25">
                        {diff.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-xl md:text-2xl uppercase tracking-tight text-white mb-1.5 sm:mb-3">
                      {diff.title}
                    </h3>
                    <p className="font-body text-white/75 text-xs sm:text-base leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-8 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-white/50">
                    <span>Deliverable Standard</span>
                    <span className="text-emerald-400 font-semibold">0{index + 1}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Transition Cue */}
        <div className="text-center">
          <p className="font-body text-xs sm:text-sm text-white/60 mb-2">
            Have questions before reaching out?
          </p>
          <a
            href="#faq"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Review Frequently Asked Questions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
