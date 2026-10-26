import { useRef } from 'react';
import HeroSection from '../sections/HeroSection';
import ProblemsWeSolveSection from '../sections/ProblemsWeSolveSection';
import ServicesSection from '../sections/ServicesSection';
import ProjectsSection from '../sections/ProjectsSection';
import BusinessUseCasesSection from '../sections/BusinessUseCasesSection';
import ProcessSection from '../sections/ProcessSection';
import WhyUsSection from '../sections/WhyUsSection';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';
import useSectionStacking from '../hooks/useSectionStacking';
import SEO from '../components/SEO';

export default function HomePage() {
  const mainRef = useRef<HTMLDivElement>(null);
  useSectionStacking(mainRef);

  return (
    <>
      <SEO
        title="Websites That Convert. Systems That Handle The Rest."
        description="GrowtivAI builds fast custom websites and practical AI systems that turn visitors into genuine inquiries and answer customers 24/7."
        canonicalPath="/"
      />

      <div ref={mainRef} className="w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Problems We Solve (Card stacking animation) */}
        <ProblemsWeSolveSection />

        {/* Two Core Services Preview */}
        <ServicesSection />

        {/* Selected Work & Live Demos */}
        <ProjectsSection />

        {/* Business Use Cases Across Indian Industries */}
        <BusinessUseCasesSection />

        {/* How We Work Timeline (Card stacking animation) */}
        <ProcessSection />

        {/* Why GrowtivAI Bento Differentiators */}
        <WhyUsSection />

        {/* Plain-English Frequently Asked Questions */}
        <FAQSection />

        {/* Final CTA: Discovery Call & WhatsApp (Card stacking animation) */}
        <CTASection />
      </div>
    </>
  );
}
