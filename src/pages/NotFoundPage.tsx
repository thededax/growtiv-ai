import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found (404)"
        description="The page you are looking for does not exist. Explore GrowtivAI services or return to the homepage."
        canonicalPath="/404"
      />

      <div className="w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center px-4 sm:px-8 py-20 sm:py-32 text-center">
        <div className="max-w-md mx-auto">
          <span className="font-heading font-bold text-6xl sm:text-8xl text-emerald-400 block mb-3 sm:mb-4">
            404
          </span>
          <h1 className="font-heading font-bold text-xl sm:text-3xl uppercase text-white mb-2.5 sm:mb-3">
            Page Not Found
          </h1>
          <p className="font-body text-white/75 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
            The page you requested could not be located. Explore our core services or return to the home page.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B3215] font-heading font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors shadow-md"
            >
              <Home className="w-4 h-4 text-[#0B3215]" />
              <span>Return Home</span>
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-heading font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
