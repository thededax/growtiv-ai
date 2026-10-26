import { motion } from "framer-motion";
import {
  Headset,
  MapTrifold,
  Hammer,
  Globe,
  Rocket,
  CaretRight,
} from "@phosphor-icons/react";
import IsometricBox01 from "@/components/ui/isometric-box-01";
import IsometricBoxes02 from "@/components/ui/isometric-boxes-02";
import Container from "@/components/ui/container";
import * as React from "react";
import { cn } from "@/lib/utils";

const DEFAULT_TEAM_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
];

const PIPELINE_STEPS = [
  { id: "01", label: "CALL", Icon: Headset },
  { id: "02", label: "PLAN", Icon: MapTrifold },
  { id: "03", label: "BUILD", Icon: Hammer },
  { id: "04", label: "DEPLOY", Icon: Globe },
  { id: "05", label: "LAUNCH", Icon: Rocket },
];

export interface WhyUsBentoProps {
  className?: string;
  teamAvatars?: string[];
}

export function WhyUsBento({
  className,
  teamAvatars = DEFAULT_TEAM_AVATARS,
}: WhyUsBentoProps) {
  return (
    <section className={cn("py-4 sm:py-6 relative z-10 w-full", className)}>
      <Container className="flex flex-col gap-3 sm:gap-4 px-0">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-auto">
          {/* 01: AI & Automation (Wide) */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-2 row-span-1 rounded-2xl bg-[#0B3215]/[0.04] border border-[#0B3215]/10 p-6 sm:p-7 md:p-8 relative overflow-hidden group transition-all duration-300 flex flex-col justify-center min-h-[170px] sm:min-h-[190px] hover:border-[#0B3215]/25 hover:bg-[#0B3215]/[0.06]"
          >
            {/* Visual: Isometric Box on the right */}
            <div className="absolute right-2 sm:right-4 md:-right-2 lg:right-6 top-1/2 -translate-y-1/2 w-36 sm:w-48 md:w-56 lg:w-64 z-20 hidden sm:block pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
              <IsometricBox01 className="w-full h-auto" />
            </div>

            <div className="relative z-30 w-full sm:w-3/5 md:w-3/5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold uppercase text-[#0B3215] mb-2 relative overflow-hidden flex flex-wrap">
                <span className="flex">
                  {"AI & Automation".split("").map((l, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      variants={{
                        initial: { y: 0 },
                        hover: { y: "-100%" },
                      }}
                      transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                    >
                      {l === " " ? "\u00A0" : l}
                    </motion.span>
                  ))}
                </span>
                <span className="absolute inset-0 flex text-emerald-600 pointer-events-none" aria-hidden>
                  {"AI & Automation".split("").map((l, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      variants={{
                        initial: { y: "100%" },
                        hover: { y: 0 },
                      }}
                      transition={{ duration: 0.3, delay: i * 0.02, ease: [0.33, 1, 0.68, 1] }}
                    >
                      {l === " " ? "\u00A0" : l}
                    </motion.span>
                  ))}
                </span>
              </h3>
              <p className="text-[#0B3215]/75 font-body text-xs sm:text-sm md:text-base leading-relaxed">
                We engineer autonomous AI agents and integrated backend workflows to handle customer inquiries, data synchronization, and repetitive business tasks with zero dropped leads.
              </p>
            </div>
          </motion.div>

          {/* 02: From Idea to Production (Tall & Dark Brand Card) */}
          <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 rounded-2xl border border-[#0B3215]/20 bg-[#0B3215] p-6 sm:p-7 md:p-8 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between text-white min-h-[320px] sm:min-h-[360px] shadow-xl">
            {/* Visual: Stacked Cards */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px] mb-3 sm:mb-4">
              <div className="relative w-full max-w-[170px] sm:max-w-[200px] aspect-4/3 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-300 ease-out">
                {/* Back card 4 */}
                <div className="absolute inset-0 bg-emerald-900/60 rounded-xl border border-white/10 transform -rotate-12 -translate-x-3 translate-y-3 shadow-xl transition-all duration-300 ease-out group-hover:rotate-[-20deg] group-hover:-translate-x-6 group-hover:translate-y-6" />
                {/* Back card 3 */}
                <div className="absolute inset-0 bg-emerald-800/70 rounded-xl border border-white/10 transform -rotate-9 -translate-x-2.5 translate-y-2.5 shadow-xl transition-all duration-300 ease-out group-hover:rotate-[-15deg] group-hover:-translate-x-5 group-hover:translate-y-5" />
                {/* Back card 2 */}
                <div className="absolute inset-0 bg-[#0f461e] rounded-xl border border-white/10 transform -rotate-6 -translate-x-1.5 translate-y-1.5 shadow-xl transition-all duration-300 ease-out group-hover:rotate-[-10deg] group-hover:-translate-x-3 group-hover:translate-y-3" />
                {/* Back card 1 */}
                <div className="absolute inset-0 bg-[#165a28] rounded-xl border border-white/15 transform -rotate-3 -translate-x-1 translate-y-1 shadow-xl transition-all duration-300 ease-out group-hover:-rotate-5 group-hover:-translate-x-1.5 group-hover:translate-y-1.5" />

                {/* Front card */}
                <div
                  className="absolute inset-0 bg-white rounded-xl p-3.5 sm:p-4 flex flex-col justify-between text-[#0B3215] shadow-2xl border border-white/50"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(11,50,21,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,50,21,0.03) 1px, transparent 1px)",
                    backgroundSize: "10px 10px",
                  }}
                >
                  <div className="flex gap-1 items-center">
                    <div className="w-2.5 h-3 bg-[#0B3215] rounded-xs" />
                    <div className="w-1.5 h-3 bg-emerald-600 rounded-xs" />
                    <div className="w-1.5 h-3 bg-[#0B3215]/30 rounded-xs" />
                  </div>

                  <div className="font-heading uppercase text-[15px] sm:text-[18px] md:text-[20px] font-bold leading-[1.1] tracking-tight mt-auto mb-2 text-[#0B3215]">
                    Idea.
                    <br />
                    Blueprint.
                    <br />
                    Production.
                  </div>

                  <div className="font-mono text-[7.5px] sm:text-[8.5px] text-[#0B3215]/70 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span>&gt; ENTERPRISE DEPLOYED</span>
                    <span className="animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-heading font-bold uppercase text-white mb-2">
                From Idea to Production
              </h3>
              <p className="text-white/70 font-body text-xs sm:text-sm leading-relaxed">
                Bring us your business vision. We map, engineer, stress-test, and deploy it end-to-end, then back you with continuous 24/7 post-launch support.
              </p>
            </div>
            {/* Watermark Number */}
            <div className="absolute -right-6 -bottom-10 text-[9rem] sm:text-[11rem] font-heading font-bold text-white/5 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none">
              02
            </div>
          </div>

          {/* 03: Built by Experienced Engineers */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-1 row-span-1 rounded-2xl bg-[#0B3215]/[0.04] border border-[#0B3215]/10 p-6 sm:p-7 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] hover:border-[#0B3215]/25 hover:bg-[#0B3215]/[0.06]"
          >
            {/* Stacked avatars */}
            <div className="flex items-center relative z-10 mb-4 h-8 sm:h-10">
              {teamAvatars.map((src, i) => (
                <motion.div
                  key={i}
                  className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-white shadow-sm"
                  style={{
                    marginLeft: i === 0 ? 0 : "-8px",
                    zIndex: teamAvatars.length - i,
                  }}
                  variants={{
                    initial: { x: 0, y: 0, rotate: 0, scale: 1 },
                    hover: {
                      x: i * 12,
                      y: i % 2 === 0 ? -4 : 4,
                      rotate: (i - 2) * 5,
                      scale: 1.1,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <img
                    src={src}
                    alt="Senior Engineer"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase text-[#0B3215] mb-1.5">
                Senior AI Engineers Only
              </h3>
              <p className="text-[#0B3215]/75 font-body text-xs sm:text-sm leading-relaxed">
                Work directly with senior AI systems architects from kickoff to live deployment. Zero junior benches or subcontracting.
              </p>
            </div>
            <div className="absolute -right-3 -bottom-8 text-[6rem] sm:text-[7.5rem] font-heading font-bold text-[#0B3215]/5 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none">
              03
            </div>
          </motion.div>

          {/* 04: No Handoffs */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-1 row-span-1 rounded-2xl bg-[#0B3215]/[0.04] border border-[#0B3215]/10 p-6 sm:p-7 relative overflow-hidden group transition-all duration-300 flex flex-col justify-between min-h-[170px] sm:min-h-[190px] hover:border-[#0B3215]/25 hover:bg-[#0B3215]/[0.06]"
          >
            {/* Pipeline visual */}
            <div className="relative z-10 w-full mb-4">
              <div className="flex items-start justify-between">
                {PIPELINE_STEPS.map(({ id, label, Icon }, i) => (
                  <React.Fragment key={id}>
                    <div className="flex flex-col items-center gap-1">
                      <div className="relative p-1 rounded-md bg-[#0B3215]/5 text-[#0B3215]">
                        <Icon size={18} weight="bold" />
                        {i === PIPELINE_STEPS.length - 1 && (
                          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping" />
                        )}
                      </div>
                      <span className="text-[7px] sm:text-[8px] text-[#0B3215] font-mono font-bold tracking-widest">
                        {label}
                      </span>
                    </div>

                    {i < PIPELINE_STEPS.length - 1 && (
                      <div className="mt-1 text-[#0B3215]/30 group-hover:text-[#0B3215] transition-colors duration-300">
                        <CaretRight size={10} weight="bold" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-heading font-bold uppercase text-[#0B3215] mb-1.5">
                Zero Friction Handoffs
              </h3>
              <p className="text-[#0B3215]/75 font-body text-xs sm:text-sm leading-relaxed">
                One dedicated squad through all phases. The engineers in your discovery session are the exact engineers building and shipping your system.
              </p>
            </div>
            <div className="absolute -right-3 -bottom-8 text-[6rem] sm:text-[7.5rem] font-heading font-bold text-[#0B3215]/5 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none">
              04
            </div>
          </motion.div>

          {/* 05: Deep Engineering (Wide Bottom) */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            className="col-span-1 md:col-span-3 row-span-1 md:row-span-1 min-h-[170px] sm:min-h-[190px] rounded-2xl bg-[#0B3215]/[0.04] border border-[#0B3215]/10 p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 flex flex-col justify-center hover:border-[#0B3215]/25 hover:bg-[#0B3215]/[0.06]"
          >
            {/* Visual: Isometric Layered Boxes on the right */}
            <div className="absolute right-2 sm:right-4 md:right-8 lg:right-16 bottom-0 w-36 sm:w-56 md:w-72 lg:w-80 z-20 hidden sm:block pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <IsometricBoxes02 className="w-full h-auto drop-shadow-xs" />
            </div>

            <div className="relative z-30 w-full sm:w-3/5 md:w-3/5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold uppercase text-[#0B3215] mb-2">
                Deep Systems Architecture
              </h3>
              <p className="text-[#0B3215]/75 font-body text-xs sm:text-sm md:text-base leading-relaxed md:max-w-xl">
                LLM agents, WhatsApp automation, CRM sync, enterprise databases, and real-time dashboard analytics. One coherent engineering team executing at the highest caliber.
              </p>
            </div>
            
            {/* Watermark Number */}
            <div className="absolute -right-6 -bottom-10 text-[8rem] sm:text-[11rem] font-heading font-bold text-[#0B3215]/5 pointer-events-none group-hover:scale-105 transition-transform duration-700 leading-none select-none z-10">
              05
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default WhyUsBento;
