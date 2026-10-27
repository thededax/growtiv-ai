import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#0B3215] select-none"
    >
      {/* ── 1. Cinematic Cyborg Background ─────────────────────────── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <img
          src="/hero-bg.png"
          alt="GrowtivAI Cinematic Cyborg & Mountain Landscape"
          className="w-full h-full object-cover object-[85%_8%] sm:object-[82%_25%] lg:object-[86%_center]"
          loading="eager"
          decoding="async"
        />

        {/* Desktop left-side gradient to ensure flawless typography contrast while keeping the robot clear */}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#0B3215] via-[#0B3215]/80 via-50% to-transparent pointer-events-none" />

        {/* Mobile atmospheric vertical gradient: leaves robot head visible at top, dissolves into dark green */}
        <div className="sm:hidden absolute inset-0 bg-gradient-to-b from-black/40 via-[#0B3215]/50 via-35% to-[#0B3215] to-65% pointer-events-none" />

        {/* Subtle top & bottom blending gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B3215]/80 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B3215] to-transparent pointer-events-none" />
      </div>

      {/* ── 2. Editorial Content (Left-Aligned Rule of Thirds) ────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-end sm:justify-center min-h-[90dvh] sm:min-h-[100dvh] pt-24 pb-8 sm:py-32">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Subtle Service-Category Eyebrow */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.16em] mb-2.5 sm:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Websites &amp; Practical AI for Indian Businesses</span>
          </div>

          {/* Dominant Editorial Headline with Deliberate Line Breaks */}
          <h1 className="font-heading font-bold uppercase tracking-tight text-left leading-[1.02] sm:leading-[0.93] text-[27px] xs:text-[30px] sm:text-5xl lg:text-[60px] xl:text-[68px]">
            <span className="block text-white">Websites That Convert.</span>
            <span className="block text-[#a7d0b3]">Systems That Handle</span>
            <span className="block text-[#a7d0b3]">The Rest.</span>
          </h1>

          {/* Short Supporting Copy (Width limited to ~540px) */}
          <p className="mt-3 sm:mt-7 text-white/80 font-body font-normal text-xs sm:text-base md:text-lg leading-relaxed max-w-[540px]">
            We build fast, custom websites that turn visitors into genuine inquiries—and practical WhatsApp &amp; voice systems that answer customer questions, share brochures, and log leads 24/7.
          </p>

          {/* Dual CTAs (Consistent height, typography, padding & radius) */}
          <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
            {/* Primary CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full bg-white text-[#0B3215] hover:bg-neutral-100 font-heading font-semibold uppercase tracking-wider text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.25)] text-center"
            >
              Book a Discovery Call
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/work"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full border border-white/25 hover:border-white/50 text-white/90 hover:text-white bg-white/5 hover:bg-white/10 font-heading font-semibold uppercase tracking-wider text-xs sm:text-sm backdrop-blur-sm transition-all duration-200 active:scale-95 text-center"
            >
              Explore Our Work
            </Link>
          </div>

          {/* Restrained Scroll Cue (Aligned with content) */}
          <div className="mt-4 sm:mt-10 flex items-center gap-2 text-white/45 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-emerald-400" />
            <span>Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
