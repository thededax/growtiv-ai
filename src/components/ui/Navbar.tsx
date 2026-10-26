import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X } from 'lucide-react';

interface NavLinkItem {
  label: string;
  path: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Our Work', path: '/work' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar padding
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 pointer-events-none px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Primary Navigation"
            className="pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0B3215]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            {/* Brand Logo (Left) */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group transition-opacity hover:opacity-90 shrink-0"
              aria-label="GrowtivAI Homepage"
            >
              <img
                src="/logo-mark-white.png"
                alt="GrowtivAI"
                className="w-6 h-6 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-heading font-bold text-xs sm:text-sm tracking-wider uppercase text-white">
                GrowtivAI
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-widest font-body font-medium transition-all duration-200 py-1 px-3 rounded-full ${
                      isActive
                        ? 'text-white bg-white/15 shadow-sm'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right Action: Discovery Call CTA & Mobile/Tablet Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-200 active:scale-95 whitespace-nowrap shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-300" />
                <span className="hidden sm:inline">Book Discovery Call</span>
                <span className="sm:hidden">Book Call</span>
              </Link>

              {/* Mobile/Tablet Menu Button (< lg) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile/Tablet Menu Dropdown Modal */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden pt-24 px-6 flex flex-col justify-start"
        >
          <div className="rounded-2xl bg-[#0B3215] border border-white/15 p-6 flex flex-col gap-4 shadow-2xl max-w-lg mx-auto w-full">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <p className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
                Navigation
              </p>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white p-1 text-xs uppercase font-mono"
              >
                Close ✕
              </button>
            </div>

            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `font-heading font-semibold text-lg uppercase tracking-wider py-2.5 transition-colors border-b border-white/10 flex items-center justify-between ${
                    isActive ? 'text-emerald-300' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                <span>{item.label}</span>
                <span className="text-xs text-white/40">→</span>
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 w-full py-3.5 rounded-full bg-white text-[#0B3215] font-heading font-semibold text-xs uppercase tracking-wider text-center transition-opacity hover:opacity-90 shadow-md"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
