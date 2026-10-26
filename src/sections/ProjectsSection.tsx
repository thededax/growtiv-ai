import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ShinyText from '../components/ShinyText';
import Magnet from '../components/Magnet';

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative bg-[#07240f] border-t border-white/10 px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 text-white w-full"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Strictly "Our Work" with zero mention of Live Demo */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="mb-3">
            <ShinyText
              text="SELECTED CLIENT WORK"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-xs sm:text-sm text-emerald-400"
            />
          </div>
          <h2
            className="hero-heading font-heading font-bold uppercase leading-none tracking-tight text-white"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 84px)' }}
          >
            Our Work
          </h2>
          <p className="font-body text-white/80 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed">
            A showcase of custom websites and digital systems built for growing businesses.
          </p>
        </div>

        {/* Single Featured Photo Showcase */}
        <div className="max-w-4xl mx-auto">
          <Link
            to="/work"
            className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-[#0B3215] shadow-2xl transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_20px_50px_rgba(11,50,21,0.6)]"
          >
            <div className="relative aspect-[1024/608] w-full overflow-hidden bg-neutral-900">
              <img
                src="/work-featured.png"
                alt="GrowtivAI Featured Client Work"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          </Link>

          {/* Direct Clickable Link Placed Right Below the Photo */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Magnet padding={40} strength={3}>
              <Link
                to="/work"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#0B3215] hover:bg-neutral-100 font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-xl group text-center"
              >
                <span>See All Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#0B3215] group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
