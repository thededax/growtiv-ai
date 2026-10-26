import { Link } from 'react-router-dom';
import AnimatedFooter from '../components/ui/animated-footer';
import ShinyText from '../components/ShinyText';
import { SITE_CONFIG, getWhatsAppUrl } from '../data/siteConfig';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatedFooter
      headingLines={['GROWTIVAI']}
      leftImage="/animated-footer/hand-left.jpg"
      rightImage="/animated-footer/hand-right.jpg"
      background="#07240f"
      textColor="#ffffff"
      charColor="#1a6332"
      hoverColor="#22c55e"
      hoverCharColor="#ffffff"
      parallaxStrength={25}
      columns={75}
      className="min-h-[580px] sm:min-h-[680px] md:min-h-[750px] w-full border-t border-white/10 flex flex-col justify-between relative"
    >
      <div className="max-w-7xl mx-auto w-full pt-12 sm:pt-16 px-6 sm:px-10 md:px-14">
        {/* Top Header / Links Area */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand info */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3 mb-3 inline-block">
              <img
                src="/logo-mark-white.png"
                alt="GrowtivAI"
                className="w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
              />
              <span className="font-heading font-bold text-2xl uppercase tracking-wider text-white">
                GrowtivAI
              </span>
            </Link>
            <p className="font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
              AI Growth &amp; Automation Partner for Indian businesses. We build custom websites, software, and practical AI systems that fix real bottlenecks and drive revenue.
            </p>
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono uppercase tracking-widest text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <ShinyText text="Available for New Projects" speed={3.5} className="font-mono text-emerald-300 tracking-widest" />
            </div>
          </div>

          {/* Quick Navigation & Connect */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            <div>
              <p className="font-heading font-semibold text-xs uppercase tracking-widest text-white/40 mb-3">
                Navigation
              </p>
              <ul className="space-y-2 text-xs sm:text-sm font-body">
                <li>
                  <Link to="/" className="text-white/75 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/75 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-white/75 hover:text-white transition-colors">
                    Our Work &amp; Demos
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/75 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/75 hover:text-white transition-colors">
                    Contact &amp; Book Call
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-heading font-semibold text-xs uppercase tracking-widest text-white/40 mb-3">
                Core Solutions
              </p>
              <ul className="space-y-2 text-xs sm:text-sm font-body text-white/75">
                <li>
                  <Link to="/services#custom-website-software" className="hover:text-white transition-colors">
                    Custom Websites &amp; Portals
                  </Link>
                </li>
                <li>
                  <Link to="/services#custom-website-software" className="hover:text-white transition-colors">
                    Custom Business Software
                  </Link>
                </li>
                <li>
                  <Link to="/services#ai-systems" className="hover:text-white transition-colors">
                    AI Voice Agents
                  </Link>
                </li>
                <li>
                  <Link to="/services#ai-systems" className="hover:text-white transition-colors">
                    AI WhatsApp Agents
                  </Link>
                </li>
                <li>
                  <Link to="/services#ai-systems" className="hover:text-white transition-colors">
                    Custom AI Automations
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-heading font-semibold text-xs uppercase tracking-widest text-white/40 mb-3">
                Direct Contact
              </p>
              <ul className="space-y-2 text-xs sm:text-sm font-body">
                <li>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>WhatsApp Desk</span>
                    <span className="text-[10px] text-emerald-400">● 24/7</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SITE_CONFIG.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    X / Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sub-bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs font-body text-white/50">
          <p>© {new Date().getFullYear()} GrowtivAI. All rights reserved. Based in India.</p>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">Hover across the ASCII hands below</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-white/80 hover:text-white flex items-center gap-1 uppercase tracking-wider font-semibold transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </AnimatedFooter>
  );
}
