import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies the scroll-triggered card stacking animation exclusively to the three approved sections:
 * 1. "Problems We Solve" (#problems)
 * 2. "How We Work" (#process)
 * 3. "Let's Build the Right System for Your Business" (#contact)
 */
export default function useSectionStacking(mainRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !mainRef.current) return;

    const initTimer = setTimeout(() => {
      if (!mainRef.current) return;

      // Exactly the three approved sections
      const targetSelectors = ['#problems', '#process', '#contact'];

      const ctx = gsap.context(() => {
        targetSelectors.forEach((selector, idx) => {
          const section = mainRef.current?.querySelector<HTMLElement>(selector);
          if (!section) return;

          // Find the preceding section element in the DOM
          const prevSection = section.previousElementSibling as HTMLElement | null;
          if (!prevSection) return;

          // Higher z-index on the target section so it glides smoothly on top of preceding section
          const zIndex = 20 + idx * 10;
          section.style.zIndex = `${zIndex}`;
          section.style.position = 'relative';

          // Determine pinning point for preceding section:
          // For viewport-height sections (like Hero): start: "top top"
          // For taller sections: start: "bottom bottom" so users read full content before it pins
          const isTall = prevSection.offsetHeight > window.innerHeight * 1.05;

          ScrollTrigger.create({
            trigger: prevSection,
            start: isTall ? 'bottom bottom' : 'top top',
            endTrigger: section,
            end: 'top top',
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });

          // Subtle scale and dim on preceding section as this section slides over it
          gsap.to(prevSection, {
            scale: 0.95,
            opacity: 0.7,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });
      }, mainRef);

      ScrollTrigger.refresh();

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener('resize', handleResize);

      const preloaderTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 5000);

      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(preloaderTimer);
        ctx.revert();
      };
    }, 200);

    return () => clearTimeout(initTimer);
  }, [mainRef]);
}
