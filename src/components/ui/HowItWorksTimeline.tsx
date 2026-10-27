import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Compass, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import SpotlightCard from './spotlight-card';
import Magnet from '../Magnet';


export type TimelineStep = {
  number: string;
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  badge: string;
  stats: { label: string; value: string };
};

const STEPS: TimelineStep[] = [
  {
    number: '01',
    phase: '01. Discovery',
    duration: 'Step 1',
    title: 'Understand Your Everyday Bottlenecks',
    description:
      'We start with a practical discovery session to understand where your business loses time, misses customer calls, or repeatedly types answers. We identify whether a custom website, WhatsApp agent, or both will give you the fastest return.',
    deliverables: ['Enquiry Bottleneck Audit', 'Existing Tools Inventory', 'System Requirements Blueprint'],
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    badge: 'Discovery Phase',
    stats: { label: 'Deliverable', value: 'System Audit' },
  },
  {
    number: '02',
    phase: '02. Planning',
    duration: 'Step 2',
    title: 'Map Out Clear Scope & Milestones',
    description:
      'We draft a concrete blueprint: page structure, user conversion funnels, WhatsApp conversation flows, and CRM connections (Zoho/Sheets). You approve the fixed milestone roadmap before any code is written.',
    deliverables: ['Fixed Milestone Scope', 'Conversation Flow Map', 'API & Integration Spec'],
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    badge: 'Fixed Roadmap',
    stats: { label: 'Scope', value: '100% Transparent' },
  },
  {
    number: '03',
    phase: '03. Build',
    duration: 'Step 3',
    title: 'Engineer the Website or AI System',
    description:
      'We build your custom website or train your AI agents in a private staging environment. We connect official WhatsApp Cloud APIs, Google Sheets, CRMs, and payment gateways cleanly and securely.',
    deliverables: ['Mobile-First Frontend', 'Trained AI Conversation Logic', 'Secure CRM & WhatsApp Sync'],
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    badge: 'Private Staging',
    stats: { label: 'Architecture', value: 'Production-Grade' },
  },
  {
    number: '04',
    phase: '04. Testing',
    duration: 'Step 4',
    title: 'Test with Real Customer Scenarios',
    description:
      'Before launch, we stress-test everything: mobile speed across devices, edge-case WhatsApp questions, instant lead logging, and smooth fallback to human staff when complex questions arise.',
    deliverables: ['Multi-Device Speed Audit', 'Strict AI Safety Guardrails', 'Live End-to-End Test Run'],
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    badge: 'Rigorous Testing',
    stats: { label: 'Testing', value: '100% Verified' },
  },
  {
    number: '05',
    phase: '05. Launch & Support',
    duration: 'Step 5',
    title: 'Launch, Staff Training & Handover',
    description:
      'We deploy the system to live traffic, record step-by-step video tutorials for your team, and hand over full ownership of all accounts and code. We provide ongoing support so you’re never left stuck.',
    deliverables: ['Live Production Deployment', 'Step-by-Step Video Walkthrough', 'Agreed Ongoing Support'],
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    badge: 'Complete Ownership',
    stats: { label: 'Ownership', value: '100% Yours' },
  },
];

export default function HowItWorksTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 80%'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto py-6 sm:py-16">
      {/* Central Progress Track Line (Desktop) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-0.5 bg-[#0B3215]/10">
        <motion.div
          className="w-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-600 origin-top shadow-[0_0_12px_rgba(34,197,94,0.6)]"
          style={{ scaleY, height: '100%' }}
        />
      </div>

      {/* Mobile Side Progress Track Line */}
      <div className="md:hidden absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-[#0B3215]/10">
        <motion.div
          className="w-full bg-gradient-to-b from-emerald-500 via-emerald-400 to-emerald-600 origin-top shadow-[0_0_12px_rgba(34,197,94,0.6)]"
          style={{ scaleY, height: '100%' }}
        />
      </div>

      {/* Timeline Steps List */}
      <div className="flex flex-col gap-6 sm:gap-14 md:gap-28 relative">
        {STEPS.map((step, index) => {
          const isEven = index % 2 === 0;
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className={`relative flex flex-col md:flex-row items-center gap-4 sm:gap-10 md:gap-14 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Center Node Badge */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Pulsing halo ring */}
                  <span className="absolute -inset-2 rounded-full bg-emerald-500/20 animate-ping opacity-60 pointer-events-none" />
                  <span className="absolute -inset-0.5 rounded-full bg-emerald-400/40 blur-sm pointer-events-none" />
                  
                  {/* Center Node Button */}
                  <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#0B3215] border-2 border-emerald-400 text-white font-mono font-bold text-[11px] sm:text-xs flex items-center justify-center shadow-[0_0_16px_rgba(34,197,94,0.4)]">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Text Description Column (Left or Right) */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className={`w-full md:w-1/2 pl-10 sm:pl-16 md:pl-0 ${
                  isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}
              >
                {/* Phase & Duration Tag */}
                <div
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0B3215]/[0.06] border border-[#0B3215]/10 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0B3215] mb-2 sm:mb-3 ${
                    isEven ? 'md:ml-auto' : ''
                  }`}
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                  <span>{step.phase}</span>
                  <span className="text-[#0B3215]/40">•</span>
                  <span className="text-emerald-700 font-bold">{step.duration}</span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-2xl md:text-3xl text-[#0B3215] uppercase tracking-tight mb-2 sm:mb-3">
                  {step.title}
                </h3>

                <p className="font-body text-[#0B3215]/75 text-xs sm:text-base leading-relaxed mb-3 sm:mb-5 max-w-xl">
                  {step.description}
                </p>

                {/* Key Deliverables Chips */}
                <div
                  className={`flex flex-wrap gap-1.5 sm:gap-2 ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}
                >
                  {step.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white border border-[#0B3215]/12 text-[10px] sm:text-xs font-body font-medium text-[#0B3215] shadow-xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Pulsing Image Card Column (Opposite Side) */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`w-full md:w-1/2 pl-10 sm:pl-16 md:pl-0 mt-1 md:mt-0 ${
                  isEven ? 'md:pl-12' : 'md:pr-12'
                }`}
              >
                {/* Pulsing Card Container */}
                <div className="relative group">
                  {/* Continuous ambient pulsing glow aura behind image card */}
                  <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-teal-500/20 blur-lg sm:blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700 pointer-events-none animate-pulse" />

                  <SpotlightCard
                    spotlightColor="rgba(34, 197, 94, 0.25)"
                    size={420}
                    className="relative rounded-xl sm:rounded-3xl bg-[#0B3215] text-white p-1.5 sm:p-2.5 border border-white/10 shadow-[0_16px_40px_-15px_rgba(11,50,21,0.5)] overflow-hidden transition-all duration-500 group-hover:border-emerald-500/40 group-hover:translate-y-[-2px]"
                  >
                    {/* Top status bar inside card */}
                    <div className="flex items-center justify-between px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 mb-1 sm:mb-1.5 border-b border-white/10">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-emerald-300">
                          {step.badge}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-mono text-white/60">
                        <Activity className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 animate-pulse" />
                        <span>{step.stats.label}:</span>
                        <span className="text-white font-semibold">{step.stats.value}</span>
                      </div>
                    </div>

                    {/* Image with subtle zoom & cinematic treatment */}
                    <div className="relative h-32 sm:h-48 md:h-60 w-full rounded-lg sm:rounded-2xl overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.88] group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B3215]/90 via-transparent to-black/20" />

                      {/* Floating bottom pill on image */}
                      <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#0B3215]/85 backdrop-blur-md border border-white/15">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                          <span className="text-[11px] sm:text-xs font-heading font-medium text-white tracking-wide">
                            Milestone Verification
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-emerald-300 bg-white/10 px-1.5 py-0.5 rounded">
                          Phase {step.number}
                        </span>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7 }}
        className="mt-8 sm:mt-24 text-center"
      >
        <SpotlightCard
          spotlightColor="rgba(34, 197, 94, 0.15)"
          size={500}
          className="p-5 sm:p-12 rounded-2xl sm:rounded-3xl bg-[#0B3215] text-white border border-white/10 shadow-2xl max-w-3xl mx-auto flex flex-col items-center gap-3.5 sm:gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Clear Milestones • Zero Surprise Fees</span>
          </div>

          <h3 className="font-heading font-bold text-lg sm:text-3xl md:text-4xl uppercase tracking-tight max-w-xl">
            Ready to fix your business bottlenecks with complete clarity?
          </h3>

          <p className="font-body text-white/75 text-xs sm:text-base max-w-lg leading-relaxed">
            Book a free 30-minute discovery call. We’ll look at your enquiry flow and give you an honest, practical recommendation.
          </p>

          <Magnet padding={50} strength={3.5} className="inline-block w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-[#0B3215] font-body font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-100 transition-all duration-300 shadow-xl active:scale-95 w-full sm:w-auto text-center"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-[#0B3215]" />
            </a>
          </Magnet>
        </SpotlightCard>
      </motion.div>
    </div>
  );
}
