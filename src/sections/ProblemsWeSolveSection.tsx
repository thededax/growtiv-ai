import { motion } from 'framer-motion';
import { 
  Inbox, 
  Globe2, 
  Clock, 
  Layers, 
  ArrowRight,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import ShinyText from '../components/ShinyText';
import SpotlightCard from '../components/ui/spotlight-card';

const PROBLEMS = [
  {
    number: '01',
    icon: Inbox,
    badge: 'Missed Inquiries',
    title: 'Enquiries Arrive at All Hours—and Go Cold Before Anyone Replies',
    problem:
      'Inquiries drop in on WhatsApp, Instagram DMs, calls, and forms while your team is with clients or after office hours. By the time someone gets around to typing a reply, the prospect has already messaged two competitors.',
    impact:
      'Indian buyers expect answers in minutes, not hours. Every delayed brochure or unreturned call wastes the marketing money you spent to attract that prospect in the first place.',
    solution:
      'We set up an automated WhatsApp concierge that greets every lead within 30 seconds, shares your brochure or catalog, qualifies their budget, and alerts your sales team immediately.',
    tag: 'Service: AI Systems & WhatsApp Automation',
  },
  {
    number: '02',
    icon: Globe2,
    badge: 'Low Website Conversion',
    title: 'A Slow Website That Acts Like a Digital Brochure Instead of a Sales Channel',
    problem:
      'Most local business websites take 5+ seconds to load on mobile connections, show cluttered menus, and hide contact details behind long forms that nobody wants to fill out on a smartphone.',
    impact:
      'Visitors leave in seconds. Prospective clients assume your business is inactive, choosing modern competitors whose contact links open instantly.',
    solution:
      'We build ultra-fast, mobile-first websites engineered for Indian buyers—clean layouts, clear service offerings, and 1-tap WhatsApp consultation triggers that prompt immediate action.',
    tag: 'Service: Custom Website Development',
  },
  {
    number: '03',
    icon: Clock,
    badge: 'Repetitive Typing',
    title: 'Spending 2 to 4 Hours Every Day Typing the Exact Same Answers',
    problem:
      'You and your team spend hours answering the exact same questions: "What are your charges?", "Send your catalog", "Where is your location?", "Are you open on weekends?"',
    impact:
      'Your highest-paid staff and founders waste productive hours acting like manual customer service desks instead of closing deals and delivering great work to paying clients.',
    solution:
      'We build custom AI chat and voice agents trained specifically on your business information. They answer accurately in English, Hindi, or Hinglish, passing only qualified buyers to your team.',
    tag: 'Service: AI Agents & Voice Systems',
  },
  {
    number: '04',
    icon: Layers,
    badge: 'Scattered Records',
    title: 'Customer Details Scattered Across Personal WhatsApps, Diaries & Excel Sheets',
    problem:
      'Customer numbers live on staff personal phones, follow-ups are scribbled on paper, and payment receipts are tracked in separate sheets. Nobody knows who followed up with whom.',
    impact:
      'Hot leads get forgotten, customer history vanishes when an employee leaves, and you have zero visibility into which marketing channels actually make money.',
    solution:
      'We link your website, WhatsApp, and CRM (Zoho, Google Sheets, or custom portals) into one automatic pipeline that logs every enquiry and sets timely follow-up reminders.',
    tag: 'Service: Business Process Automation',
  },
];

export default function ProblemsWeSolveSection() {
  return (
    <section
      id="problems"
      className="stack-section bg-white rounded-t-[28px] sm:rounded-t-[48px] md:rounded-t-[56px] shadow-[0_-25px_60px_rgba(0,0,0,0.35)] border-t border-black/5 px-4 sm:px-8 md:px-12 py-10 sm:py-20 md:py-32 relative text-[#0B3215] w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 md:mb-20">
          <div className="mb-2 sm:mb-3">
            <ShinyText
              text="REAL CHALLENGES • PRACTICAL SOLUTIONS"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-[11px] sm:text-sm text-emerald-800"
            />
          </div>
          <h2
            className="font-heading font-bold uppercase leading-none tracking-tight text-[#0B3215]"
            style={{ fontSize: 'clamp(1.75rem, 6.5vw, 90px)' }}
          >
            Problems We Solve
          </h2>
          <p className="font-body text-[#0B3215]/75 text-xs sm:text-base md:text-lg mt-2.5 sm:mt-4 leading-relaxed">
            You don’t need another complicated dashboard or a flashy tech gimmick. You need practical, working systems that stop enquiries from slipping away and cut out hours of repetitive manual work.
          </p>
        </div>

        {/* 2x2 Grid of Detailed Problems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {PROBLEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(11, 50, 21, 0.06)"
                  size={450}
                  className="rounded-2xl sm:rounded-3xl border border-[#0B3215]/15 bg-[#0B3215]/[0.02] hover:bg-[#0B3215]/[0.04] p-4 sm:p-7 md:p-9 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Number & Badge */}
                    <div className="flex items-center justify-between gap-3 mb-3 sm:mb-5 pb-2.5 sm:pb-4 border-b border-[#0B3215]/10">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="font-heading font-bold text-xl sm:text-3xl text-emerald-700">
                          {item.number}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#0B3215]/[0.06] text-[#0B3215]">
                          {item.badge}
                        </span>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0B3215]/10 flex items-center justify-center text-[#0B3215]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    {/* Problem Title */}
                    <h3 className="font-heading font-bold text-base sm:text-xl md:text-2xl text-[#0B3215] uppercase tracking-tight mb-2 sm:mb-4">
                      {item.title}
                    </h3>

                    {/* Problem Description */}
                    <div className="mb-2.5 sm:mb-4">
                      <p className="font-body text-[#0B3215]/80 text-xs sm:text-sm leading-relaxed">
                        <strong className="text-[#0B3215] font-semibold">The everyday reality:</strong>{' '}
                        {item.problem}
                      </p>
                    </div>

                    {/* Why It Matters */}
                    <div className="mb-2.5 sm:mb-4 p-2.5 sm:p-3.5 rounded-xl bg-amber-500/[0.08] border border-amber-600/20 flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-700 shrink-0 mt-0.5" />
                      <p className="font-body text-xs sm:text-sm text-amber-950/90 leading-relaxed">
                        <strong className="font-semibold text-amber-900">Why it hurts:</strong>{' '}
                        {item.impact}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-2.5 sm:p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-600/20 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <p className="font-body text-xs sm:text-sm text-emerald-950 leading-relaxed">
                        <strong className="font-semibold text-emerald-900">How GrowtivAI solves it:</strong>{' '}
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Service Alignment Tag */}
                  <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-[#0B3215]/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-emerald-800">
                    <span>{item.tag}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Transition Card */}
        <div className="p-4 sm:p-7 rounded-2xl bg-[#0B3215] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <div>
            <h4 className="font-heading font-bold text-base sm:text-xl uppercase tracking-tight">
              Tired of losing enquiries and wasting hours on repetitive tasks?
            </h4>
            <p className="font-body text-white/70 text-xs sm:text-sm mt-1">
              See how our two core services fix these bottlenecks with clear scope, tested delivery, and zero fluff.
            </p>
          </div>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-[#0B3215] font-body font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-neutral-100 transition-colors shrink-0"
          >
            <span>See Our Core Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
