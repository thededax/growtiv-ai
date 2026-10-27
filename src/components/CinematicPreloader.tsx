import { useEffect, useState } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';

/**
 * CinematicPreloader
 *
 * Exact frame-by-frame recreation of the reference video ("Growtiv Ai.mp4"):
 *
 * Detailed Timeline (30 fps):
 *   Phase 1 (0.00s – 0.23s, Frames 1–6):
 *     Solid deep forest green screen (#0F3015). Text is masked below y=770 clip line.
 *
 *   Phase 2 (0.23s – 0.67s, Frames 7–20):
 *     Words rise smoothly from behind horizontal mask line at y=770:
 *     - "Growtiv" rises at t=0.23s (0.42s duration, easeOutCubic).
 *     - "Ai" rises at t=0.37s (4-frame / 0.133s stagger, 0.42s duration, easeOutCubic).
 *     Both settle at resting baseline y=668 by t=0.67s.
 *
 *   Phase 3 (0.67s – 2.40s, Frames 20–72):
 *     Stationary reading hold (~1.73s). Text center is (959, 537).
 *
 *   Phase 4 (2.40s – 3.15s, Frames 73–94):
 *     Camera-style zoom smoothly targeting the dot of 'i' in "Ai" at (1795.6, 433.5).
 *     Scale increases from 1.0 to 2.4x.
 *
 *   Phase 5 (3.15s – 4.17s, Frames 95–125):
 *     The dot of 'i' expands into a brilliant white (#FFFFFF) geometric circle
 *     centered at (1795.6, 433.5), growing from radius 75px to 2500px across the
 *     dark green screen (#0F3015). Remaining letters fade out over 0.2s.
 *     The expanding white circle sweeps from right to left, consuming the entire
 *     viewport into solid pure white by Frame 125 (t=4.17s).
 *
 *   Phase 6 (4.17s – 4.55s, Frames 126+):
 *     From the solid white circle, the preloader smoothly dissolves/fades out
 *     (opacity: 1 -> 0 over 0.38s), revealing the full Growtiv AI website beneath.
 *     Body scroll unlocks, preloader unmounts.
 */

const T_BLANK = 0.23;         // Initial solid green hold (s)
const T_GROWTIV_DUR = 0.42;   // "Growtiv" rise duration (s)
const T_AI_DELAY = 0.133;     // Stagger delay for "Ai" (s)
const T_AI_DUR = 0.42;        // "Ai" rise duration (s)
const T_ZOOM_START = 2.40;    // Zoom starts at t=2.40s (s)
const T_ZOOM_DUR = 0.75;      // Zoom duration: 2.40s to 3.15s (s)
const T_CIRCLE_DUR = 1.02;    // Circle expansion: 3.15s to 4.17s (s)
const T_FADE_DUR = 0.38;      // Final fade-out to website: 4.17s to 4.55s (s)
const FAILSAFE_MS = 6000;     // Failsafe timeout (ms)

const BG_COLOR = '#0F3015';

// Reference coordinate constants in 1920x1080 viewBox
const REF_DOT_X = 1795.6;
const REF_DOT_Y = 433.5;
const REF_DOT_PCT_X = (REF_DOT_X / 1920) * 100; // 93.5208%
const REF_DOT_PCT_Y = (REF_DOT_Y / 1080) * 100; // 40.1389%

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export default function CinematicPreloader() {
  const reducedMotion = useReducedMotion();

  const [visible, setVisible] = useState(() => {
    try {
      if (typeof window !== 'undefined' && sessionStorage.getItem('growtiv_preloader_seen')) {
        return false;
      }
    } catch (e) {}
    return true;
  });
  const [expandingCircle, setExpandingCircle] = useState(false);
  const [circleRadius, setCircleRadius] = useState(29);
  const [lettersOpacity, setLettersOpacity] = useState(1);
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  const growtivCtrl = useAnimation();
  const aiCtrl = useAnimation();
  const zoomCtrl = useAnimation();

  useEffect(() => {
    try {
      if (sessionStorage.getItem('growtiv_preloader_seen')) {
        setVisible(false);
        return;
      }
    } catch (e) {}

    (window as any).__preloaderT0 = performance.now();
    setVisible(true);
    setExpandingCircle(false);
    setCircleRadius(29);
    setLettersOpacity(1);
    setOverlayOpacity(1);

    const origOverflow = document.body.style.overflow;
    const origHeight = document.body.style.height;
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    const unlockScroll = () => {
      document.body.style.overflow = origOverflow;
      document.body.style.height = origHeight;
    };

    let cancelled = false;
    let circleRafId: number | null = null;
    let fadeRafId: number | null = null;

    const finish = () => {
      if (cancelled) return;
      cancelled = true;
      unlockScroll();
      setVisible(false);
      try {
        sessionStorage.setItem('growtiv_preloader_seen', '1');
      } catch (e) {}
    };

    const failsafeId = setTimeout(finish, FAILSAFE_MS);

    if (reducedMotion) {
      const tid = setTimeout(finish, 400);
      return () => {
        clearTimeout(failsafeId);
        clearTimeout(tid);
        cancelled = true;
        unlockScroll();
      };
    }

    (async () => {
      /* Phase 1: Blank solid green holds until T_BLANK (0.23s) */
      await wait(T_BLANK * 1000);
      if (cancelled) return;

      /* Phase 2: "Growtiv" rises from below clip line at y=770 */
      growtivCtrl.start({
        y: 0,
        transition: {
          duration: T_GROWTIV_DUR,
          ease: [0.16, 1, 0.3, 1],
        },
      });

      /* "Ai" rises 4 frames later (stagger 0.133s) */
      await wait(T_AI_DELAY * 1000);
      if (cancelled) return;

      aiCtrl.start({
        y: 0,
        transition: {
          duration: T_AI_DUR,
          ease: [0.16, 1, 0.3, 1],
        },
      });

      /* Phase 3: Hold until T_ZOOM_START (2.40s) */
      const remainingHoldMs = (T_ZOOM_START - (T_BLANK + T_AI_DELAY)) * 1000;
      await wait(Math.max(remainingHoldMs, 100));
      if (cancelled) return;

      /* Phase 4: Camera zoom into dot of 'i' in "Ai" (2.40s – 3.15s) */
      try {
        await zoomCtrl.start({
          scale: 2.4,
          transition: {
            duration: T_ZOOM_DUR,
            ease: [0.4, 0, 0.2, 1],
          },
        });
      } catch {
        return;
      }
      if (cancelled) return;

      /* Phase 5: Expanding White Circle (3.15s – 4.17s) */
      setExpandingCircle(true);

      // Fade out remaining letters over 0.2s so only the pure white circle expands
      const lettersFadeT0 = performance.now();
      const fadeLettersTick = (now: number) => {
        if (cancelled) return;
        const p = Math.min((now - lettersFadeT0) / 200, 1);
        setLettersOpacity(1 - p);
        if (p < 1) requestAnimationFrame(fadeLettersTick);
      };
      requestAnimationFrame(fadeLettersTick);

      // Circle expansion loop: radius 75px -> 2600px with power 1.2 easing
      const circleT0 = performance.now();
      const circleDurMs = T_CIRCLE_DUR * 1000;
      const startR = 75;
      const targetR = 2600;

      await new Promise<void>((resolve) => {
        const tickCircle = (now: number) => {
          if (cancelled) return resolve();
          const p = Math.min((now - circleT0) / circleDurMs, 1);
          // Easing power 1.2 fitted to reference video frames
          const eased = 1 - Math.pow(1 - p, 1.25);
          const r = startR + eased * (targetR - startR);
          setCircleRadius(r);

          if (p < 1) {
            circleRafId = requestAnimationFrame(tickCircle);
          } else {
            resolve();
          }
        };
        circleRafId = requestAnimationFrame(tickCircle);
      });
      if (cancelled) return;

      /* Phase 6: Smooth dissolve from white screen into website (4.17s – 4.55s) */
      const fadeT0 = performance.now();
      const fadeDurMs = T_FADE_DUR * 1000;

      await new Promise<void>((resolve) => {
        const tickFade = (now: number) => {
          if (cancelled) return resolve();
          const p = Math.min((now - fadeT0) / fadeDurMs, 1);
          setOverlayOpacity(1 - p);

          if (p < 1) {
            fadeRafId = requestAnimationFrame(tickFade);
          } else {
            finish();
            resolve();
          }
        };
        fadeRafId = requestAnimationFrame(tickFade);
      });
    })();

    return () => {
      clearTimeout(failsafeId);
      cancelled = true;
      unlockScroll();
      if (circleRafId !== null) cancelAnimationFrame(circleRafId);
      if (fadeRafId !== null) cancelAnimationFrame(fadeRafId);
      growtivCtrl.stop();
      aiCtrl.stop();
      zoomCtrl.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: BG_COLOR,
        opacity: overlayOpacity,
        pointerEvents: overlayOpacity < 0.5 ? 'none' : 'auto',
        transition: 'opacity 0.05s linear',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={zoomCtrl}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transformOrigin: `${REF_DOT_PCT_X}% ${REF_DOT_PCT_Y}%`,
          }}
        >
          <svg
            viewBox="0 0 1920 1080"
            style={{
              width: '100vw',
              height: '100vh',
              display: 'block',
            }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Horizontal clip boundary at y=770 (matching reference frames 7–13) */}
              <clipPath id="wordmark-rise-clip">
                <rect x="0" y="0" width="1920" height="770" />
              </clipPath>
            </defs>

            {/* "Growtiv" word group: rises at t=0.23s */}
            <g clipPath="url(#wordmark-rise-clip)" opacity={lettersOpacity}>
              <motion.g
                initial={{ y: 360 }}
                animate={growtivCtrl}
              >
                <text
                  x="93"
                  y="668"
                  fill="#FFFFFF"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: 329,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Growtiv
                </text>
              </motion.g>
            </g>

            {/* "Ai" word group: rises at t=0.37s */}
            <g clipPath="url(#wordmark-rise-clip)">
              <motion.g
                initial={{ y: 360 }}
                animate={aiCtrl}
              >
                {/* Letter 'A' (fades out as circle expands) */}
                <text
                  x="1523"
                  y="668"
                  fill="#FFFFFF"
                  opacity={lettersOpacity}
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: 329,
                    letterSpacing: '-0.05em',
                  }}
                >
                  A
                </text>

                {/* Stem of lowercase 'i' (fades out as circle expands) */}
                <rect
                  x="1772"
                  y="484"
                  width="46"
                  height="182"
                  rx="3"
                  fill="#FFFFFF"
                  opacity={lettersOpacity}
                />

                {/* The Dot of lowercase 'i' / Expanding White Circle */}
                {/* During Phase 2 & 3: dot radius is 29px */}
                {/* During Phase 5: expands from 75px to 2600px, consuming the screen */}
                <circle
                  cx={REF_DOT_X}
                  cy={REF_DOT_Y}
                  r={expandingCircle ? circleRadius : 29}
                  fill="#FFFFFF"
                />
              </motion.g>
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
