type ShinyTextProps = {

  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
};

export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = '',
}: ShinyTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`inline-block ${
        disabled
          ? ''
          : 'bg-clip-text text-transparent bg-gradient-to-r from-emerald-100/50 via-white to-emerald-100/50 bg-[length:200%_100%] animate-shine'
      } ${className}`}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  );
}
