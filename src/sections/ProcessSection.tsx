import HowItWorksTimeline from '../components/ui/HowItWorksTimeline';
import ShinyText from '../components/ShinyText';

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="stack-section bg-[#fbfdfb] rounded-t-[28px] sm:rounded-t-[48px] md:rounded-t-[56px] shadow-[0_-25px_60px_rgba(0,0,0,0.18)] border-t border-black/10 px-4 sm:px-8 md:px-12 py-10 sm:py-20 md:py-32 relative text-[#0B3215] w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16 md:mb-20">
          <div className="mb-2 sm:mb-3">
            <ShinyText
              text="PREDICTABLE EXECUTION • ZERO GUESSWORK"
              speed={3.5}
              className="font-body font-semibold uppercase tracking-widest text-[11px] sm:text-sm text-emerald-800"
            />
          </div>

          <h2
            className="font-heading font-bold uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(1.85rem, 7vw, 100px)' }}
          >
            How We Work
          </h2>
          <p className="font-body text-[#0B3215]/75 max-w-2xl mx-auto mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg leading-relaxed">
            A clear 5-step engineering process with zero guesswork. You inspect and test working deliverables at every milestone before going live.
          </p>
        </div>

        {/* Scroll Timeline with Pulsing Image Cards */}
        <HowItWorksTimeline />
      </div>
    </section>
  );
}

