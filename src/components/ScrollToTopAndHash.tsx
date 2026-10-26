import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles smooth scrolling on route and hash changes:
 * - On normal route transitions without a hash: scrolls to top (0, 0).
 * - On hash navigation (e.g. /services#ai-systems or /services#custom-website-software):
 *   locates the target element and scrolls to it, respecting header offset and prefers-reduced-motion.
 */
export default function ScrollToTopAndHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is rendered on page transitions
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          // Calculate offset accounting for sticky navbar (~80-100px)
          const yOffset = -90;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({
            top: y,
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
