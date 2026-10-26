import Magnet from './Magnet';

type ContactButtonProps = {
  inverted?: boolean;
  label?: string;
  href?: string;
  className?: string;
  magnetic?: boolean;
};

export default function ContactButton({
  inverted = false,
  label = 'Book a Discovery Call',
  href = '#contact',
  className = '',
  magnetic = true,
}: ContactButtonProps) {
  const button = (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-body font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:opacity-90 ${
        inverted
          ? 'bg-[#0B3215] text-white hover:bg-[#0e3f1b]'
          : 'bg-white text-[#0B3215] hover:bg-neutral-100'
      } ${className}`}
      style={{
        boxShadow: inverted
          ? '0px 8px 24px rgba(11, 50, 21, 0.25)'
          : '0px 8px 24px rgba(255, 255, 255, 0.2)',
        outline: inverted ? '2px solid #0B3215' : '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );

  if (magnetic) {
    return (
      <Magnet padding={70} strength={3.5} className="inline-block">
        {button}
      </Magnet>
    );
  }

  return button;
}

