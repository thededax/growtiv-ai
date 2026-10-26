import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative 3D elements with subtle floating drift */}
      <FadeIn delay={0.1} x={-60} y={0} duration={0.9} className="absolute top-[6%] left-[2%] sm:left-[4%] md:left-[6%] pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-[100px] sm:w-[150px] md:w-[190px] animate-pulse drop-shadow-2xl"
          style={{ animationDuration: '6s' }}
        />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-60}
        y={0}
        duration={0.9}
        className="absolute bottom-[10%] left-[3%] sm:left-[6%] md:left-[8%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-[90px] sm:w-[130px] md:w-[170px] drop-shadow-2xl"
        />
      </FadeIn>
      <FadeIn delay={0.15} x={60} y={0} duration={0.9} className="absolute top-[6%] right-[2%] sm:right-[4%] md:right-[6%] pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-[100px] sm:w-[150px] md:w-[190px] drop-shadow-2xl"
        />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={60}
        y={0}
        duration={0.9}
        className="absolute bottom-[10%] right-[3%] sm:right-[6%] md:right-[8%] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-[110px] sm:w-[150px] md:w-[200px] animate-pulse drop-shadow-2xl"
          style={{ animationDuration: '7s' }}
        />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-4xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-heading font-bold uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            About Us
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20">
          <AnimatedText
            text="GrowtivAI builds practical AI and automation systems around a business's needs, sets them up, tests them and hands them over working. We help Indian businesses handle enquiries, follow-ups and daily operations with a clear scope they can see before the final payment. Let's build something that actually works!"
            className="text-[#FFFFFF] font-body font-medium text-center leading-relaxed max-w-[620px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <div>
            <ContactButton label="Explore How We Work" href="#process" />
          </div>
        </div>
      </div>
    </section>
  );
}
