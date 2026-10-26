import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  PhoneCall, 
  Globe, 
  Bot, 
  Layers,
  Gauge,
  ExternalLink
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import SEO from '../components/SEO';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const isWebsite = project.category === 'websites-software';

  return (
    <>
      <SEO
        title={`${project.title} — Case Study & Project Breakdown`}
        description={project.summary}
        canonicalPath={`/work/${project.slug}`}
      />

      <div className="w-full pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-28 px-5 sm:px-8 md:px-12 max-w-6xl mx-auto">
        
        {/* Breadcrumb & Back Link */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>
          <div className="flex items-center gap-2 text-[11px] font-mono text-white/50 uppercase">
            <span>Project {project.number}</span>
            <span>•</span>
            <span className="text-emerald-300">{project.projectType}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider">
              {isWebsite ? <Globe className="w-3 h-3 text-emerald-400" /> : <Bot className="w-3 h-3 text-emerald-400" />}
              <span>{project.badge}</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs font-body text-white/70">
              Industry: <strong className="text-white font-medium">{project.industry}</strong>
            </span>
          </div>

          <h1 className="font-heading font-bold uppercase tracking-tight text-white leading-[0.95] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            {project.title}
          </h1>

          <p className="font-body text-white/85 text-base sm:text-lg md:text-xl leading-relaxed">
            {project.summary}
          </p>

          {project.demoUrl && (
            <div className="mt-6">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#07240f] font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-xl active:scale-95"
              >
                <span>Live Link</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Hero Visual Banner */}
        <div className="rounded-3xl overflow-hidden border border-white/20 mb-14 shadow-2xl bg-black/40">
          <img
            src={project.images.hero}
            alt={project.title}
            className="w-full h-auto max-h-[560px] object-cover"
          />
        </div>

        {/* Measurable Impact Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {project.metrics.map((metric) => (
            <div
              key={metric}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center flex flex-col justify-center"
            >
              <Gauge className="w-4 h-4 text-emerald-400 mx-auto mb-2" />
              <span className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-tight">
                {metric}
              </span>
            </div>
          ))}
        </div>

        {/* The Problem & The Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Problem */}
          <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.03] border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
              01 • The Business Bottleneck
            </span>
            <h2 className="font-heading font-bold text-xl uppercase text-white mb-4">
              Where Time and Inquiries Were Lost
            </h2>
            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-7 sm:p-9 rounded-3xl bg-emerald-950/40 border border-emerald-500/20">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-2">
              02 • The Working Architecture
            </span>
            <h2 className="font-heading font-bold text-xl uppercase text-white mb-4">
              What We Engineered and Delivered
            </h2>
            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features & Deliverables */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/15 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-lg uppercase text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Delivered System Architecture</span>
              </h3>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/80">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg uppercase text-white mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Core Operational Capabilities</span>
              </h3>
              <ul className="space-y-3 font-body text-xs sm:text-sm text-white/80">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery Preview Images */}
        {project.images.gallery && project.images.gallery.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white/50 font-bold mb-4">
              Interactive System Previews
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.gallery.map((imgUrl, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                  <img
                    src={imgUrl}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Service Connection & CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#07240f] border border-white/20 text-center max-w-3xl mx-auto shadow-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-2">
            Related Core Service
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3">
            Interested in a Similar Solution?
          </h3>
          <p className="font-body text-white/75 text-sm sm:text-base leading-relaxed mb-6">
            Learn more about how this system works in our comprehensive{' '}
            <Link
              to={project.relatedServiceAnchor}
              className="text-emerald-300 underline hover:text-white font-medium"
            >
              Services Guide
            </Link>
            , or book a discovery call to review your exact business requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#07240f] font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
              >
                <span>Live Link</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0B3215] font-heading font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#0B3215]" />
              <span>Discuss a Similar Project</span>
            </Link>
            <Link
              to={project.relatedServiceAnchor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-all active:scale-95"
            >
              <span>Explore Relevant Service</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>

      </div>
    </>
  );
}
