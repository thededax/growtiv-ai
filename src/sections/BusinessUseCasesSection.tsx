import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  GraduationCap, 
  UtensilsCrossed, 
  ShoppingBag, 
  Stethoscope, 
  ArrowRight, 
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import ShinyText from '../components/ShinyText';
import SpotlightCard from '../components/ui/spotlight-card';

type UseCase = {
  id: string;
  industry: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  commonProblem: string;
  practicalSolution: string;
  operationalBenefit: string;
  deliverables: string[];
};

const USE_CASES: UseCase[] = [
  {
    id: 'real-estate',
    industry: 'Real Estate',
    icon: Building2,
    tagline: 'Brokers, Developers & Luxury Rentals',
    commonProblem:
      'High-intent buyers enquire late at night or on weekends after seeing an ad. Waiting hours for a brochure causes leads to drop off and message rival developers.',
    practicalSolution:
      'Fast, mobile-first property showcase pages with an instant WhatsApp brochure bot that verifies buyer budget, BHK preference, and site visit availability.',
    operationalBenefit:
      'Brochures delivered in 30 seconds 24/7. Your sales reps receive pre-qualified buyer profiles instead of cold, unverified phone numbers.',
    deliverables: ['Mobile Property Showcase', 'Instant WhatsApp Brochure Bot', 'CRM & Sheets Auto-Sync'],
  },
  {
    id: 'coaching',
    industry: 'Coaching & Education',
    icon: GraduationCap,
    tagline: 'Institutes, Test Prep & Academies',
    commonProblem:
      'Counselors spend 3 to 4 hours every day typing the exact same answers about course fees, batch timings, syllabus PDFs, and admission dates.',
    practicalSolution:
      'Clean, trustworthy course portal connected to a bilingual WhatsApp assistant that answers curriculum questions, shares brochures, and sends payment links.',
    operationalBenefit:
      'Over 75% reduction in repetitive counselor typing. Zero lost prospective students during peak admission campaigns.',
    deliverables: ['High-Conversion Course Website', 'Bilingual WhatsApp Counselor Bot', 'Automated Razorpay Payment Receipts'],
  },
  {
    id: 'hospitality',
    industry: 'Restaurants & Hospitality',
    icon: UtensilsCrossed,
    tagline: 'Boutique Hotels, Banquet Halls & Dining',
    commonProblem:
      'Banquet hall and event enquiries get lost in personal WhatsApp chats. Menu PDFs are heavy, non-responsive, and painful to read on mobile phones.',
    practicalSolution:
      'Lightweight mobile venue portal with an automated WhatsApp reservation flow that captures event dates, guest counts, and catering preferences.',
    operationalBenefit:
      'Organized booking pipeline synchronized with Google Sheets and calendar alerts, cutting missed banquet inquiries to zero.',
    deliverables: ['Mobile Venue Showcase', 'WhatsApp Event Booking Flow', 'Calendar Reservation Sync'],
  },
  {
    id: 'retail',
    industry: 'Retail & Brands',
    icon: ShoppingBag,
    tagline: 'Specialty Retailers, Showrooms & D2C Brands',
    commonProblem:
      'Shoppers ask about product availability, store locations, and pricing across Instagram DMs and WhatsApp, then vanish without completing orders.',
    practicalSolution:
      'Fast digital product showcase with 1-tap "Enquire on WhatsApp" checkout and automatic stock inquiries handled by an AI assistant.',
    operationalBenefit:
      'Turns casual social media inquiries into closed sales. Automated follow-ups for repeat purchases without extra administrative hiring.',
    deliverables: ['Fast Product Showcase Web App', '1-Tap WhatsApp Checkout Engine', 'Customer Re-Order Sequences'],
  },
  {
    id: 'services',
    industry: 'Local Service Businesses',
    icon: Stethoscope,
    tagline: 'Clinics, Consultancies & Home Services',
    commonProblem:
      'Staff are busy attending patients or clients when the phone rings. Missed calls mean lost clients and empty appointment slots.',
    practicalSolution:
      'Trust-first credibility website with an automated WhatsApp appointment scheduler that confirms bookings and sends reminder alerts.',
    operationalBenefit:
      'Drastic reduction in appointment no-shows via automated WhatsApp reminders. New patients can schedule visits 24/7 without waiting on hold.',
    deliverables: ['Modern Trust-First Website', '24/7 Appointment Booking Desk', 'WhatsApp Reminder Pipeline'],
  },
];

export default function BusinessUseCasesSection() {
  const [activeId, setActiveId] = useState('real-estate');
  const activeCase = USE_CASES.find((c) => c.id === activeId) || USE_CASES[0];
  const ActiveIcon = activeCase.icon;

  return (
    <section
      id="use-cases"
      className="bg-white px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 relative text-[#0B3215] w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="mb-3">
            <ShinyText
              text="PRACTICAL INDUSTRY WORKFLOWS"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-xs sm:text-sm text-emerald-800"
            />
          </div>
          <h2
            className="font-heading font-bold uppercase leading-none tracking-tight text-[#0B3215]"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 90px)' }}
          >
            Business Use Cases
          </h2>
          <p className="font-body text-[#0B3215]/75 text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
            See how custom websites and AI systems solve real everyday bottlenecks across Indian businesses.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {USE_CASES.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0B3215] text-white shadow-lg scale-[1.02]'
                    : 'bg-[#0B3215]/[0.05] text-[#0B3215]/80 hover:bg-[#0B3215]/10 hover:text-[#0B3215]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-[#0B3215]/60'}`} />
                <span>{item.industry}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Card Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <SpotlightCard
              spotlightColor="rgba(11, 50, 21, 0.05)"
              size={500}
              className="rounded-3xl border border-[#0B3215]/15 bg-[#0B3215]/[0.02] p-7 sm:p-10 md:p-12 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-[#0B3215]/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0B3215] text-white flex items-center justify-center shadow-md shrink-0">
                    <ActiveIcon className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold block mb-1">
                      {activeCase.tagline}
                    </span>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#0B3215]">
                      {activeCase.industry} Systems Architecture
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-600/20 text-xs font-mono text-emerald-900 font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Customized to Your Exact Workflow</span>
                </div>
              </div>

              {/* 3 Pillars: Problem, Solution, Benefit */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* 1. Common Problem */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/[0.07] border border-amber-600/20 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-amber-900 font-heading font-bold uppercase text-xs tracking-wider mb-3">
                      <AlertCircle className="w-4 h-4 text-amber-700" />
                      <span>Common Business Bottleneck</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#0B3215]/85 leading-relaxed">
                      {activeCase.commonProblem}
                    </p>
                  </div>
                </div>

                {/* 2. Practical Solution */}
                <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/[0.08] border border-emerald-600/25 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-emerald-900 font-heading font-bold uppercase text-xs tracking-wider mb-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                      <span>Practical GrowtivAI Solution</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#0B3215]/85 leading-relaxed">
                      {activeCase.practicalSolution}
                    </p>
                  </div>
                </div>

                {/* 3. Expected Operational Benefit */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0B3215]/[0.05] border border-[#0B3215]/15 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[#0B3215] font-heading font-bold uppercase text-xs tracking-wider mb-3">
                      <TrendingUp className="w-4 h-4 text-emerald-700" />
                      <span>Expected Operational Benefit</span>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#0B3215]/85 leading-relaxed">
                      {activeCase.operationalBenefit}
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables & Action CTA */}
              <div className="pt-6 border-t border-[#0B3215]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-semibold uppercase text-[#0B3215]/70 mr-2">
                    Included Components:
                  </span>
                  {activeCase.deliverables.map((del) => (
                    <span
                      key={del}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#0B3215]/15 text-[11px] font-mono text-[#0B3215]"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{del}</span>
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-[#0B3215] hover:text-emerald-700 transition-colors shrink-0"
                >
                  <span>Discuss {activeCase.industry} Setup</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>

        {/* Note on Tailored Requirements */}
        <div className="mt-10 text-center">
          <p className="font-body text-xs sm:text-sm text-[#0B3215]/65 max-w-2xl mx-auto">
            * Don’t see your exact industry? We engineer systems around your real sales and enquiry workflow, not rigid templates. Every business gets a tailored setup.
          </p>
        </div>
      </div>
    </section>
  );
}
