import { useState } from 'react';
import FadeIn from '../components/FadeIn';
import ShinyText from '../components/ShinyText';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    question: 'How much does a custom website or AI system cost?',
    answer:
      'Every business has different requirements, so we don’t force rigid package pricing. During a free 30-minute discovery call, we review your exact enquiry channels and requirements. Then we provide a clear, fixed-price proposal with milestone deliverables—so you know exactly what you’re paying for before any commitment.',
  },
  {
    question: 'How long does a project take from kickoff to handover?',
    answer:
      'Most targeted business websites, landing pages, and WhatsApp AI enquiry desks are fully built, tested, and launched within 2 to 4 weeks. Larger custom software projects are delivered in structured, phased milestones so you inspect and test progress at every stage.',
  },
  {
    question: 'Can GrowtivAI integrate with our existing business tools?',
    answer:
      'Yes. We connect directly with official WhatsApp Cloud APIs, Google Sheets, Zoho CRM, LeadSquared, Razorpay, and modern databases. We adapt our systems to the tools your team already uses every day instead of forcing you onto unfamiliar software.',
  },
  {
    question: 'Can we start with one service and add the other later?',
    answer:
      'Yes, absolutely. Many business owners start by building a fast, conversion-focused website to stop losing visitors, then add our WhatsApp AI enquiry assistant a few weeks later. Others start directly by automating their WhatsApp replies to handle immediate ad campaign leads. Both services work together seamlessly.',
  },
  {
    question: 'What happens after the project is delivered?',
    answer:
      'You get full administrative ownership of your code, workflows, and accounts. We record step-by-step video tutorials for your team and ensure everyone is confident using the system before final project sign-off.',
  },
  {
    question: 'Is ongoing maintenance and technical support available?',
    answer:
      'Yes. Every project includes post-launch support to resolve any early hiccups. We also offer optional monthly maintenance arrangements to handle routine updates, API changes, and performance monitoring so your systems never stop running.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="bg-[#07240f] text-white border-t border-white/10 px-5 sm:px-8 md:px-12 py-20 sm:py-24 md:py-32 relative w-full"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="mb-3">
            <ShinyText
              text="TRANSPARENT ANSWERS • NO JARGON"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-xs sm:text-sm text-emerald-400"
            />
          </div>
          <h2
            className="hero-heading font-heading font-bold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="font-body text-white/75 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Straightforward answers to the questions Indian business owners ask before working with us.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn key={faq.question} delay={idx * 0.05} y={15}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-500/40 bg-white/[0.05] shadow-lg'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/25'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 md:p-7 gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg md:text-xl text-white tracking-tight">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'border-emerald-400 bg-emerald-500 text-black'
                          : 'border-white/20 bg-transparent text-white'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out px-5 sm:px-6 md:px-7 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-5 sm:pb-6 md:pb-7'
                        : 'grid-rows-[0fr] opacity-0 pb-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-body font-normal text-xs sm:text-sm md:text-base text-white/80 leading-relaxed border-t border-white/10 pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Contact Help */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-body text-xs sm:text-sm text-white/80 text-left">
              Have a specific question about your technical setup?
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors shrink-0"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
