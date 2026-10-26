import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Globe, 
  Bot, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';
import ShinyText from '../components/ShinyText';
import Magnet from '../components/Magnet';

type Project = {
  number: string;
  name: string;
  type: 'website' | 'ai' | 'fullstack';
  badge: string;
  useCase: string;
  problem: string;
  solution: string;
  deliverables: string[];
  col1: [string, string];
  col2: string;
  demoDetails: {
    overview: string;
    metrics: string[];
    features: string[];
  };
};

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Aura Living Real Estate',
    type: 'fullstack',
    badge: 'Custom Website + AI Desk',
    useCase: 'Real Estate Developer & Premium Advisory',
    problem:
      'High ad spend driving 50+ inquiries daily, but buyers waited 4+ hours for property brochures. Weekend and evening leads went completely unanswered.',
    solution:
      'Engineered an ultra-fast mobile property showcase portal paired with an official WhatsApp AI concierge that instantly delivers floorplans, qualifies budgets, and books site visits.',
    deliverables: ['Custom Mobile-First Website', 'WhatsApp Brochure Concierge', 'Google Sheets & Zoho CRM Sync'],
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    demoDetails: {
      overview: 'Interactive property viewing website with embedded 1-tap WhatsApp consultation triggers and automated brochure dispatch.',
      metrics: ['< 30s Brochure Delivery', '99+ PageSpeed Mobile', 'Zero Manual Data Entry'],
      features: ['Filter by configuration & budget', 'Automated site-visit scheduler', 'Instant WhatsApp notification to sales agents'],
    },
  },
  {
    number: '02',
    name: 'Solaris Systems & Coaching',
    type: 'ai',
    badge: 'AI Systems & WhatsApp Workflow',
    useCase: 'Executive Coaching & Training Institute',
    problem:
      'Students and prospects had repetitive queries regarding course curriculum, timing, fees, and certificates, drowning staff in manual WhatsApp replies.',
    solution:
      'Deployed a bilingual WhatsApp AI agent capable of answering detailed FAQs, sharing demo videos, collecting student registrations, and generating automated invoices.',
    deliverables: ['Bilingual AI Agent (English + Hindi)', 'WhatsApp Cloud API Flow', 'Automated Razorpay Invoicing'],
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    demoDetails: {
      overview: 'Autonomous course discovery agent answering 150+ student queries daily with 0% staff intervention during off-hours.',
      metrics: ['24/7 Enquiry Response', 'Bilingual Natural Dialogue', 'Direct Payment Integration'],
      features: ['Syllabus PDF download over chat', 'Batch schedule checker', 'Automated payment receipts via WhatsApp'],
    },
  },
  {
    number: '03',
    name: 'NextLevel Studio & Retail',
    type: 'website',
    badge: 'Custom High-Conversion Website',
    useCase: 'Modern Commercial Brand & Production Agency',
    problem:
      'Previous generic WordPress website took 6+ seconds to load, had no mobile responsiveness, and lacked structured enquiry funnels.',
    solution:
      'Built a custom, editorial Next.js web application with cinematic visual storytelling, instant portfolio filters, and direct 1-tap quote requests.',
    deliverables: ['Custom Next.js Frontend', 'Ultra-Fast Asset Pipeline', 'Multi-Step Enquiry Funnel'],
    col1: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    demoDetails: {
      overview: 'High-end aesthetic web experience designed to command premium pricing and capture high-intent corporate inquiries.',
      metrics: ['98/100 Mobile Performance', '< 1.1s Full Load', 'Clear Call-to-Action Flows'],
      features: ['Filterable video & photo portfolio', 'Tailored consultation request form', 'Automatic email confirmation to client'],
    },
  },
];

function ProjectCard({
  project,
  index,
  total,
  onOpenDemo,
}: {
  project: Project;
  index: number;
  total: number;
  onOpenDemo: (p: Project) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={ref}
      className="min-h-[82vh] sm:h-[88vh] sticky mb-10"
      style={{ top: `calc(5rem + ${index * 20}px)` }}
    >
      <motion.article
        style={{ scale }}
        className="rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 border-white/20 bg-[#0B3215] p-5 sm:p-7 md:p-9 h-full flex flex-col justify-between overflow-hidden shadow-2xl relative"
      >
        {/* Top Info Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
          <div className="flex items-start sm:items-center gap-4 sm:gap-6">
            <span
              className="font-heading font-bold text-emerald-400/80 leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 90px)' }}
            >
              {project.number}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                  {project.badge}
                </span>
                <span className="text-white/40 hidden sm:inline">•</span>
                <span className="font-body text-xs text-white/70">
                  Use Case: <strong className="text-white font-medium">{project.useCase}</strong>
                </span>
              </div>
              <h3
                className="font-heading font-bold uppercase text-white tracking-tight"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenDemo(project)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0B3215] font-body font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all active:scale-95 shadow-md"
            >
              <span>See How It Works</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0B3215]" />
            </button>
          </div>
        </div>

        {/* Problem & Solution Mini Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs font-body">
          <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10">
            <span className="font-mono uppercase tracking-wider text-amber-400/90 font-bold block mb-0.5">
              Problem Addressed:
            </span>
            <p className="text-white/80 line-clamp-2">{project.problem}</p>
          </div>
          <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20">
            <span className="font-mono uppercase tracking-wider text-emerald-300 font-bold block mb-0.5">
              Solution Delivered:
            </span>
            <p className="text-white/80 line-clamp-2">{project.solution}</p>
          </div>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="w-full sm:w-[40%] flex sm:flex-col gap-3 sm:gap-4 h-48 sm:h-full">
            <img
              src={project.col1[0]}
              alt={project.name}
              loading="lazy"
              className="w-1/2 sm:w-full h-full sm:h-1/2 object-cover rounded-2xl border border-white/10"
            />
            <img
              src={project.col1[1]}
              alt={project.name}
              loading="lazy"
              className="w-1/2 sm:w-full h-full sm:h-1/2 object-cover rounded-2xl border border-white/10"
            />
          </div>
          <div className="w-full sm:w-[60%] h-48 sm:h-full">
            <img
              src={project.col2}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl border border-white/10"
            />
          </div>
        </div>

        {/* Deliverables footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/60">
          <div className="flex flex-wrap gap-2">
            {project.deliverables.map((del) => (
              <span key={del} className="inline-flex items-center gap-1.5 text-white/80">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                {del}
              </span>
            ))}
          </div>
          <span className="text-emerald-400/80">Verified Working Architecture</span>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'website' | 'ai'>('all');
  const [selectedDemo, setSelectedDemo] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.type === activeTab || p.type === 'fullstack');

  return (
    <section
      id="work"
      className="relative bg-[#07240f] border-t border-white/10 px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 text-white w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3">
            <ShinyText
              text="LIVE DEMOS • PROVEN IMPLEMENTATIONS"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-xs sm:text-sm text-emerald-400"
            />
          </div>
          <h2
            className="hero-heading font-heading font-bold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Our Work &amp; Live Demos
          </h2>
          <p className="font-body text-white/80 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            Explore working projects and interactive demos. Test them yourself and see how practical digital systems fix real business bottlenecks.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === 'all'
                  ? 'bg-emerald-500 text-black font-bold shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
            >
              All Demonstrations ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('website')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'website'
                  ? 'bg-emerald-500 text-black font-bold shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Websites &amp; Portals</span>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                activeTab === 'ai'
                  ? 'bg-emerald-500 text-black font-bold shadow-md'
                  : 'bg-white/10 text-white hover:bg-white/15'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>AI Agents &amp; WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Stacked Project Cards */}
        <div className="max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
              total={filteredProjects.length}
              onOpenDemo={(p) => setSelectedDemo(p)}
            />
          ))}
        </div>

        {/* Bottom Discovery Call Cue */}
        <div className="mt-20 text-center max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <Magnet padding={50} strength={3}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-body font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg"
            >
              <span>Explore All Projects &amp; Demos</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </Magnet>
          <Magnet padding={50} strength={3}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0B3215] font-body font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-xl"
            >
              <span>Request a Tailored Demo</span>
              <Sparkles className="w-4 h-4 text-[#0B3215]" />
            </Link>
          </Magnet>
        </div>
      </div>

      {/* Interactive Project Demo Modal */}
      {selectedDemo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#0B3215] text-white rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedDemo(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                {selectedDemo.badge}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-white mb-2">
              {selectedDemo.name}
            </h3>
            <p className="text-xs font-mono text-white/60 mb-6">
              Use Case: {selectedDemo.useCase}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold mb-1">
                  Architecture Overview
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {selectedDemo.demoDetails.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                  Key Verification Metrics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedDemo.demoDetails.metrics.map((m) => (
                    <div key={m} className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-center font-mono text-xs text-emerald-300 font-semibold">
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 font-bold mb-2">
                  Core Workflow Capabilities
                </h4>
                <ul className="space-y-1.5 text-xs text-white/80 font-body">
                  {selectedDemo.demoDetails.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setSelectedDemo(null)}
                className="flex-1 py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-body font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-lg"
              >
                Discuss Similar Architecture for My Business
              </a>
              <button
                onClick={() => setSelectedDemo(null)}
                className="py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white font-body font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
