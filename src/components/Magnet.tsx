import { useCallback, useRef, useState, type MouseEvent, type ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: 'translate3d(0px, 0px, 0)',
    transition: inactiveTransition,
    willChange: 'transform' as const,
  });

  const onMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const withinX =
        event.clientX >= rect.left - padding && event.clientX <= rect.right + padding;
      const withinY =
        event.clientY >= rect.top - padding && event.clientY <= rect.bottom + padding;

      if (!withinX || !withinY) {
        setStyle({
          transform: 'translate3d(0px, 0px, 0)',
          transition: inactiveTransition,
          willChange: 'transform',
        });
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (event.clientX - centerX) / strength;
      const dy = (event.clientY - centerY) / strength;

      setStyle({
        transform: `translate3d(${dx}px, ${dy}px, 0)`,
        transition: activeTransition,
        willChange: 'transform',
      });
    },
    [padding, strength, activeTransition, inactiveTransition],
  );

  const onLeave = useCallback(() => {
    setStyle({
      transform: 'translate3d(0px, 0px, 0)',
      transition: inactiveTransition,
      willChange: 'transform',
    });
  }, [inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
