import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Bot, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import SEO from '../components/SEO';

type FilterCategory = 'all' | 'websites-software' | 'ai-systems' | 'demos' | 'client-projects';

const FILTER_TABS: { id: FilterCategory; label: string; icon?: React.ComponentType<{ className?: string }> }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'websites-software', label: 'Websites & Software', icon: Globe },
  { id: 'ai-systems', label: 'AI Systems', icon: Bot },
  { id: 'demos', label: 'Interactive Demos', icon: Sparkles },
  { id: 'client-projects', label: 'Client Projects', icon: Layers },
];

export default function WorkPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as FilterCategory) || 'all';
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(initialCategory);

  useEffect(() => {
    const categoryParam = searchParams.get('category') as FilterCategory | null;
    if (categoryParam && ['all', 'websites-software', 'ai-systems', 'demos', 'client-projects'].includes(categoryParam)) {
      setActiveFilter(categoryParam);
    }
  }, [searchParams]);

  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: filter });
    }
  };

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'websites-software') return p.category === 'websites-software';
    if (activeFilter === 'ai-systems') return p.category === 'ai-systems';
    if (activeFilter === 'demos') return p.projectType === 'Interactive Demo';
    if (activeFilter === 'client-projects') return p.projectType === 'Client Project';
    return true;
  });

  return (
    <>
      <SEO
        title="Our Work — Websites, Software & Practical AI Systems"
        description="Explore GrowtivAI's client websites, custom software, and practical AI solutions built for growing businesses."
        canonicalPath="/work"
      />

      <div className="w-full pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Working Demos &amp; Real Projects</span>
          </div>

          <h1 className="font-heading font-bold uppercase tracking-tight text-white leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our Work.
          </h1>

          <p className="font-body text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
            Explore our custom websites, software prototypes, and practical AI demos to see how we solve real business bottlenecks.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-4 border-b border-white/10">
          {FILTER_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleFilterChange(tab.id)}
                className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-[#07240f] shadow-lg'
                    : 'bg-white/5 text-white/75 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl bg-[#07240f] border border-white/15 overflow-hidden flex flex-col justify-between group hover:border-emerald-400/50 transition-all duration-300 shadow-xl"
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={project.images.hero}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07240f] via-transparent to-transparent opacity-80" />

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-emerald-300 border border-white/15">
                      {project.projectType}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#0B3215]/80 backdrop-blur-md text-white/80 border border-white/10">
                      {project.number}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                      {project.industry}
                    </p>
                    <h2 className="font-heading font-bold text-xl uppercase tracking-tight text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-body text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Deliverables snippet */}
                    <div className="space-y-1.5 mb-6">
                      {project.deliverables.slice(0, 3).map((d) => (
                        <div key={d} className="flex items-center gap-2 text-xs text-white/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <Link
                      to={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-white hover:text-emerald-300 transition-colors"
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                        title="Open Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Discovery Call Bottom Banner */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/15 text-center max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3">
            Need a Solution Built for Your Specific Workflow?
          </h3>
          <p className="font-body text-white/75 text-sm sm:text-base leading-relaxed mb-6">
            We build custom websites and AI systems tailored directly around how your business attracts, qualifies, and serves customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0B3215] font-heading font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg active:scale-95"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#0B3215]" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all active:scale-95"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
