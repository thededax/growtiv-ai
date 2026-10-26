import React, { useState } from "react";
import Magnet from "@/components/Magnet";
import {

  Home,
  User,
  Sparkles,
  Briefcase,
  Layers,
  HelpCircle,
  Menu,
  X,
  PhoneCall,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NavLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <a
    href={href}
    className="group flex items-center gap-1.5 text-xs lg:text-sm font-heading font-medium tracking-wide uppercase text-white/75 hover:text-white transition-colors whitespace-nowrap"
  >
    <Icon className="w-3.5 h-3.5 text-emerald-400 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
    <span>{label}</span>
  </a>
);

export function NotchNavbar({
  className,
  logo,
  ...props
}: React.HTMLAttributes<HTMLElement> & { logo?: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items tailored to GrowtivAI
  const items = {
    left: [
      { label: "Home", href: "#home", icon: Home },
      { label: "About", href: "#about", icon: User },
      { label: "Services", href: "#services", icon: Sparkles },
    ],
    right: [
      { label: "Projects", href: "#projects", icon: Briefcase },
      { label: "How We Work", href: "#process", icon: Layers },
      { label: "FAQ", href: "#faq", icon: HelpCircle },
    ],
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-16 flex px-0 pointer-events-auto",
          className
        )}
        {...props}
      >
        {/* Left Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[#0B3215]/95 backdrop-blur-md z-20 relative min-w-0 border-b border-white/10">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="#22c55e"
              strokeOpacity={0.15}
              strokeWidth={0.5}
            />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          {/* Left Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0">
            {/* Notch Background */}
            <div
              className="absolute inset-0 bg-[#0B3215]/95 backdrop-blur-md"
              style={{
                clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')",
              }}
            />
            {/* Outlines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 50 64"
            >
              <path
                d="M0 39.5 C25 39.5 25 63.5 50 63.5"
                fill="none"
                stroke="#22c55e"
                strokeOpacity={0.25}
                strokeWidth={0.75}
              />
            </svg>
          </div>

          {/* Center Slice (Flexible Content Area) */}
          <div className="flex-1 h-full relative min-w-0 -ml-px">
            {/* Background & Lines Layer */}
            <div className="absolute inset-0 bg-[#0B3215]/95 backdrop-blur-md">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                preserveAspectRatio="none"
              >
                <line
                  x1="0"
                  y1="63.5"
                  x2="100%"
                  y2="63.5"
                  stroke="#22c55e"
                  strokeOpacity={0.25}
                  strokeWidth={0.75}
                />
              </svg>
            </div>

            {/* Content Layer */}
            <div className="relative w-full h-full flex items-end justify-between pb-2.5 px-4 md:px-8">
              {/* Desktop Left Nav */}
              <nav className="hidden md:flex gap-6 lg:gap-8 mb-1 shrink-0">
                {items.left.map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>

              {/* Mobile Menu Button (Left) */}
              <button
                className="md:hidden mb-1 p-1 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              {/* Logo (Center) */}
              <div className="flex justify-center items-center shrink-0 mx-2 md:mx-6 mb-1">
                {logo || (
                  <a
                    href="#home"
                    className="flex items-center gap-2.5 relative group"
                  >
                    <img
                      src="/logo-mark-white.png"
                      alt="GrowtivAI"
                      className="w-7 h-7 object-contain group-hover:scale-105 transition-transform drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]"
                    />
                    <span className="font-heading font-bold text-sm lg:text-base tracking-widest uppercase text-white hidden sm:inline-block">
                      GrowtivAI
                    </span>
                  </a>
                )}
              </div>

              {/* Desktop Right Nav */}
              <nav className="hidden md:flex gap-6 lg:gap-7 items-center shrink-0 mb-0.5">
                {items.right.map((item) => (
                  <NavLink key={item.label} {...item} />
                ))}

                <div className="flex gap-4 pl-4 border-l border-white/15 shrink-0 items-center">
                  <Magnet padding={40} strength={4} className="inline-block">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider text-white bg-emerald-600/90 hover:bg-emerald-500 rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-[1.02] whitespace-nowrap"
                    >
                      <PhoneCall className="w-3 h-3" />
                      <span>Discovery Call</span>
                    </a>
                  </Magnet>
                </div>

              </nav>

              {/* Mobile Right Action */}
              <div className="md:hidden flex items-center gap-2 mb-1">
                <a
                  href="#contact"
                  className="px-2.5 py-1 text-[11px] font-heading font-semibold uppercase tracking-wider text-white bg-emerald-600 rounded-full"
                >
                  Book Call
                </a>
              </div>
            </div>
          </div>

          {/* Right Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            {/* Notch Background */}
            <div
              className="absolute inset-0 bg-[#0B3215]/95 backdrop-blur-md"
              style={{
                clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')",
              }}
            />
            {/* Outlines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 50 64"
            >
              <path
                d="M0 63.5 C25 63.5 25 39.5 50 39.5"
                fill="none"
                stroke="#22c55e"
                strokeOpacity={0.25}
                strokeWidth={0.75}
              />
            </svg>
          </div>
        </div>

        {/* Right Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-[#0B3215]/95 backdrop-blur-md z-20 relative min-w-0 -ml-px border-b border-white/10">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="39.5"
              x2="100%"
              y2="39.5"
              stroke="#22c55e"
              strokeOpacity={0.15}
              strokeWidth={0.5}
            />
          </svg>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#07240f]/98 backdrop-blur-xl border-b border-white/10 p-5 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {[...items.left, ...items.right].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 text-emerald-400" />
                  <span className="font-heading font-medium uppercase tracking-wider text-sm">
                    {item.label}
                  </span>
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-600 text-white font-heading font-semibold uppercase tracking-wider text-sm shadow-lg shadow-emerald-900/40"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NotchNavbar;
