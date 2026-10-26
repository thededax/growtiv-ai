import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react';
import ShinyText from '../components/ShinyText';
import Magnet from '../components/Magnet';
import { PROJECTS } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative bg-[#07240f] border-t border-white/10 px-5 sm:px-8 md:px-12 py-16 sm:py-20 md:py-24 text-white w-full"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
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
            Real custom websites and digital systems built for growing businesses.
          </p>
        </div>

        {/* 3 Real Client Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.slug}
              className="group rounded-3xl bg-[#0B3215]/60 border border-white/15 overflow-hidden flex flex-col justify-between hover:border-emerald-400/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              <div>
                {/* Photo Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                  <img
                    src={project.images.hero}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Badge & Number */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-emerald-300 border border-white/15">
                      {project.projectType}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#0B3215]/90 backdrop-blur-md text-white/80 border border-white/15">
                      {project.number}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                    {project.badge}
                  </p>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-tight text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Actions: Prominent Live Link & Case Study */}
              <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 hover:bg-emerald-500 text-emerald-300 hover:text-[#07240f] border border-emerald-500/30 font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95"
                >
                  <span>Live Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Work Page */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Magnet padding={40} strength={3}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#0B3215] hover:bg-neutral-100 font-heading font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-xl group text-center"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4 text-[#0B3215] group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
