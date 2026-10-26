import Magnet from './Magnet';

type LiveProjectButtonProps = {
  href?: string;
  label?: string;
  magnetic?: boolean;
};

export default function LiveProjectButton({
  href = '#projects',
  label = 'View Details',
  magnetic = true,
}: LiveProjectButtonProps) {
  const button = (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border-2 border-[#FFFFFF] text-[#FFFFFF] font-body font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#FFFFFF] hover:text-[#0B3215] active:scale-95 transition-all duration-300"
    >
      {label}
    </a>
  );

  if (magnetic) {
    return (
      <Magnet padding={60} strength={3.5} className="inline-block">
        {button}
      </Magnet>
    );
  }

  return button;
}

