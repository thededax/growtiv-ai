# React Bits & GrowtivAI Animations & Components Guide

> **Live Reference:** [React Bits Official Website](https://reactbits.dev/)  
> **Status:** Inspected live via local Google Chrome session and DevTools CDP.

---

## 1. Executive Summary

This document provides a complete audit and architecture reference for:
1. **React Bits Library Ecosystem**: The complete directory of 217+ animated components, interactive UI elements, and shader backgrounds from [reactbits.dev](https://reactbits.dev/).
2. **GrowtivAI Architecture**: Detailed analysis of how animations and components are structured in this codebase, where each is used, the animation engines driving them (GSAP, Framer Motion, HTML5 Canvas, SVG Math), and how to leverage React Bits to elevate the user experience.

---

## 2. React Bits Component Catalog

React Bits organizes its 217+ components into **5 core categories**. All components support TypeScript/JavaScript and Tailwind CSS or plain CSS.

### Category 1: Text Animations (33 Components)
High-impact animated typography and headline reveal effects.

| Component | Engine / Tech | Best Use Case in GrowtivAI |
| :--- | :--- | :--- |
| `split-text` | GSAP / Framer Motion | Section headlines, hero title entry reveals |
| `blur-text` | Framer Motion | Subheadings, value propositions, punchy one-liners |
| `shiny-text` | CSS Linear Gradients | "Available for New Projects" badge & pill tags |
| `decrypted-text` | JavaScript Timer / Canvas | AI agent terminal text, tech metrics, stats |
| `text-pressure` | Variable Fonts / Canvas | Interactive hero title that responds to mouse distance |
| `rotating-text` | Framer Motion | Dynamic switching words in Hero (e.g. "AI Systems", "Automations") |
| `scroll-reveal` | Framer Motion `useScroll` | Paragraph reading reveal (already adapted in `AnimatedText.tsx`) |
| `count-up` | Framer Motion / Spring | Quantifiable metrics (e.g. "99.8%", "10x", "50+ Deployments") |
| `gradient-text` | CSS Webkit Background Clip | Emerald & gold glowing header accents |
| `ascii-text` | Canvas / Monospace | Tech-forward headers matching the ASCII footer |
| `variable-proximity` | Mouse Pointer Distance | Interactive typography that scales as the user moves near |
| `scroll-velocity` | Framer Motion Marquee | Smooth infinite ticker text for client brands / tech stack |

*Other text animations:* `tech-text`, `text-loop`, `masked-heading`, `particle-text`, `split-flap-text`, `warp-text`, `stroke-text`, `depth-text`, `fold-text`, `echo-text`, `circular-text`, `text-type`, `shuffle`, `curved-loop`, `fuzzy-text`, `falling-text`, `text-cursor`, `true-focus`, `scroll-float`, `scrambled-text`, `glitch-text`.

---

### Category 2: General Animations & Cursor Effects (38 Components)
Micro-interactions, pointer trails, physics magnets, and interactive border effects.

| Component | Engine / Tech | Best Use Case in GrowtivAI |
| :--- | :--- | :--- |
| `magnet` | CSS / Pointer Coordinates | **Already added** in `src/components/Magnet.tsx`. Attracts CTA buttons to cursor |
| `star-border` | CSS Conic Gradient | High-conversion CTA borders (`Book Consultation`, `Contact`) |
| `electric-border` | SVG Filter / CSS | AI feature cards, highlight bento containers |
| `glare-hover` | CSS 3D Perspective | Cards that reflect realistic light glare when hovered |
| `click-spark` | Canvas Particles | Subtle sparks when clicking consultation buttons |
| `pixel-trail` | HTML5 Canvas | Interactive grid mouse trail behind dark green sections |
| `splash-cursor` | WebGL Fluid Sim | Organic liquid ripple on desktop cursor move |
| `fade-content` | Framer Motion InView | Smooth scroll reveals across all sections (`FadeIn.tsx`) |
| `orbit-images` | Framer Motion / SVG Math | Floating partner & tech logos orbiting an AI core |

*Other animations:* `crystalized-ball`, `electric-logo`, `dither-veil`, `glow-cursor`, `scroll-expand`, `ripple-distortion`, `elastic-mesh`, `swarm-cursor`, `halftone-reveal`, `pixel-swap`, `cursor-grid`, `animated-content`, `logo-loop`, `target-cursor`, `laser-flow`, `ghost-cursor`, `gradual-blur`, `strands`, `sticker-peel`, `cubes`, `metallic-paint`, `noise`, `shape-blur`, `crosshair`, `image-trail`, `ribbons`, `meta-balls`, `blob-cursor`.

---

### Category 3: UI Layout & Complex Components (48 Components)
High-level layouts, cards, dynamic navigation, docks, and carousels.

| Component | Engine / Tech | Best Use Case in GrowtivAI |
| :--- | :--- | :--- |
| `staggered-menu` | GSAP Timeline | **Already added** in `src/components/StaggeredMenu.tsx`. Fullscreen animated drawer |
| `magic-bento` | CSS Grid + Mouse Listeners | Interactive Bento container matching `why-us-bento.tsx` |
| `spotlight-card` | Radial CSS Gradients | Service cards where mouse position illuminates card borders |
| `tilted-card` | Framer Motion 3D Tilt | Case study project preview cards in `ProjectsSection.tsx` |
| `border-glow` | CSS Custom Properties | Subtle emerald neon border pulsing around active items |
| `dock` | Framer Motion Physics | macOS style icon dock for quick contact actions |
| `pill-nav` | Framer Motion LayoutId | Floating navigation tabs in `NotchNavbar.tsx` |
| `infinite-menu` | Three.js / WebGL | Interactive 3D carousel for client projects |
| `stack` / `card-swap` | Framer Motion Drag | Interactive card stacking for process steps |

*Other components:* `holo-card`, `circular-carousel`, `flex-carousel`, `infinite-spiral`, `depth-carousel`, `morph-slider`, `drift-wall`, `accordion-gallery`, `specular-button`, `option-wheel`, `curved-input`, `line-sidebar`, `animated-list`, `scroll-stack`, `bubble-menu`, `circular-gallery`, `reflective-card`, `card-nav`, `fluid-glass`, `masonry`, `glass-surface`, `dome-gallery`, `chroma-grid`, `folder`, `model-viewer`, `lanyard`, `profile-card`, `gooey-nav`, `pixel-card`, `carousel`, `flying-posters`, `glass-icons`, `decay-card`, `flowing-menu`, `elastic-slider`, `counter`, `stepper`, `bounce-cards`.

---

### Category 4: Micro-Interactions (35 Components)
Tactile micro-feedback for inputs, switches, toggles, and buttons.

| Component | Engine / Tech | Best Use Case in GrowtivAI |
| :--- | :--- | :--- |
| `hold-button` | Framer Motion Progress | "Hold to Submit" or "Hold to Book" confirmation button |
| `spring-check` | Framer Motion Springs | Form validation and checklist indicators |
| `squish-switch` | Spring Physics | Light/Dark theme toggle or Monthly/Annual pricing switcher |
| `warm-tooltip` | Framer Motion Layout | Explanatory popovers for technical AI terms |
| `voice-pill` | Web Audio / Canvas | AI voice agent status indicator |

*Other micro components:* `flying-button`, `shredder`, `paper-crumple`, `tear-ticket`, `flip-card`, `branched-menu`, `folder-float`, `refine-frame`, `thought-line`, `slosh-gauge`, `prompt-bar`, `swipe-toast`, `sling-button`, `bell-toggle`, `call-chip`, `status-mark`, `glide-select`, `swipe-row`, `jelly-radio`, `comet-dial`, `wake-slider`, `code-slots`, `dodge-field`, `lattice-loader`, `scrub-field`, `fuse-button`, `slide-commit`, `rubber-segment`, `pulse-heart`, `peek-rating`.

---

### Category 5: Canvas & Shader Backgrounds (63 Components)
GPU-accelerated ambient backgrounds built on WebGL, Canvas, and CSS.

| Component | Engine / Tech | Best Use Case in GrowtivAI |
| :--- | :--- | :--- |
| `particles` | HTML5 Canvas 2D | Subtle floating ambient particles over the dark green `#0B3215` canvas |
| `beams` | CSS / SVG Mask | Atmospheric lighting beams streaming down behind the Hero title |
| `soft-aurora` | WebGL Shader | Organic shifting emerald & teal aurora behind the Bento or CTA |
| `dot-grid` / `dot-field` | Canvas 2D Matrix | Tech grid background for AI Systems and Services |
| `lightning` | Procedural Canvas | Electric energy accents for high-performance AI workflows |
| `antigravity` | Canvas Particle Physics | Floating nodes that gently disperse when the user scrolls |

*Other backgrounds:* `gradient-ascii`, `flux-lines`, `pattern-waves`, `micro-slats`, `shape-waves`, `aero-shards`, `ghost-fibers`, `crt-warp`, `molten-metal`, `gradient-waves`, `web-threads`, `topography`, `light-tunnel`, `sliced-waves`, `acid-squares`, `scanner`, `ferrofluid`, `lightfall`, `liquid-ether`, `prism`, `dark-veil`, `light-pillar`, `silk`, `floating-lines`, `side-rays`, `light-rays`, `pixel-blast`, `color-bends`, `line-waves`, `radar`, `magic-rings`, `aurora`, `plasma`, `plasma-wave`, `gradient-blinds`, `grainient`, `grid-scan`, `pixel-snow`, `prismatic-burst`, `galaxy`, `dither`, `faulty-terminal`, `ripple-grid`, `threads`, `hyperspeed`, `iridescence`, `waves`, `magnet-lines`, `grid-distortion`, `ballpit`, `orb`, `letter-glitch`, `grid-motion`, `shape-grid`, `liquid-chrome`, `balatro`.

---

## 3. Current GrowtivAI Component & Animation Map

Here is how animations and components are implemented across the active codebase:

### 1. `CinematicPreloader.tsx`
- **Location:** [src/components/CinematicPreloader.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/CinematicPreloader.tsx)
- **Engine:** Framer Motion (`useAnimation`, `useReducedMotion`) + Native SVG Typography API (`getExtentOfChar`).
- **How it Works:**
  - **Phase 1 (0.2s):** Fullscreen `#0B3215` brand green backdrop.
  - **Phase 2 (1.1s):** "GrowtivAI" SVG wordmark animates in with subtle opacity & scale.
  - **Phase 3 (1.0s):** Dynamic camera zooms directly toward the dot of the letter **`i`**, calculated in real-time from SVG bounding boxes.
  - **Phase 4 (0.5s):** Circular mask punches an expanding hole through the green screen to reveal the landing page.
  - **Failsafe:** Built-in 6000ms safety timeout guarantees the site is never trapped behind the loader.

### 2. `NotchNavbar.tsx`
- **Location:** [src/components/ui/notch-navbar.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/ui/notch-navbar.tsx)
- **Engine:** Tailwind CSS + Framer Motion (`AnimatePresence`).
- **How it Works:**
  - Dynamic Island / Notch form factor fixed at viewport top.
  - Split navigation: Left links (`Home`, `About`, `Services`) and Right links (`Projects`, `How We Work`, `FAQ`).
  - Center logo anchor with pulsing "Available for New Projects" beacon.
  - Mobile backdrop blur drawer with staggered link entry and exit transitions.

### 3. `HeroSection.tsx`
- **Location:** [src/sections/HeroSection.tsx](file:///home/thededax/Documents/growtivai%20new/src/sections/HeroSection.tsx)
- **Engine:** Framer Motion (`useScroll`, `useTransform`).
- **How it Works:**
  - **Parallax Mountain Background:** Translates down (`0%` to `16%`) and scales up (`1.0` to `1.06`) as user scrolls.
  - **Headline Motion:** Translates up (`0%` to `-25%`) while fading to `0.2` opacity for a cinematic vanishing effect.
  - **Responsive adaptations:** Motion is reduced gracefully on mobile viewports (<768px) and respects `prefers-reduced-motion`.

### 4. `AboutSection.tsx` & `AnimatedText.tsx`
- **Location:** [src/sections/AboutSection.tsx](file:///home/thededax/Documents/growtivai%20new/src/sections/AboutSection.tsx) & [src/components/AnimatedText.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/AnimatedText.tsx)
- **Engine:** Framer Motion (`useScroll`, `useTransform`).
- **How it Works:**
  - Splits paragraph text into individual characters.
  - Normalizes scroll offset (`['start 0.8', 'end 0.2']`) against character index.
  - As user scrolls down, characters dynamically illuminate from `opacity: 0.2` to `opacity: 1.0`, creating a reading highlight experience.

### 5. `why-us-bento.tsx`
- **Location:** [src/components/ui/why-us-bento.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/ui/why-us-bento.tsx)
- **Engine:** Framer Motion + Phosphor Icons + SVG Isometric Models.
- **How it Works:**
  - **Card 01 (AI & Automation):** Character-by-character letter hover stagger (`"AI & Automation".split("")`) with [IsometricBox01](file:///home/thededax/Documents/growtivai%20new/src/components/ui/isometric-box-01.tsx).
  - **Card 02 (Human Verification):** Overlapping team avatar pile with badge counters.
  - **Card 03 (5-Stage Pipeline):** Interactive step-by-step progress cards (`CALL` → `PLAN` → `BUILD` → `DEPLOY` → `LAUNCH`).
  - **Card 04 (Clear Scope):** Micro 3D isometric stack with [IsometricBoxes02](file:///home/thededax/Documents/growtivai%20new/src/components/ui/isometric-boxes-02.tsx).

### 6. `ServicesSection.tsx` & `FadeIn.tsx`
- **Location:** [src/sections/ServicesSection.tsx](file:///home/thededax/Documents/growtivai%20new/src/sections/ServicesSection.tsx) & [src/components/FadeIn.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/FadeIn.tsx)
- **Engine:** Framer Motion viewport triggers (`whileInView`, `viewport={{ once: true }}`).
- **How it Works:**
  - 5 service modules (`AI Systems`, `Automation`, `Websites & Portals`, `Enquiry Handling`, `Implementation & Handover`).
  - Smooth upward translation (`y: 30` → `0`) and cubic bezier ease `[0.25, 0.1, 0.25, 1]`.

### 7. `animated-footer.tsx` & `FooterSection.tsx`
- **Location:** [src/components/ui/animated-footer.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/ui/animated-footer.tsx) & [src/sections/FooterSection.tsx](file:///home/thededax/Documents/growtivai%20new/src/sections/FooterSection.tsx)
- **Engine:** GSAP + HTML5 Canvas 2D Context + IntersectionObserver.
- **How it Works:**
  - **ASCII Art Rasterization:** Samples two source images into live ASCII characters on a high-DPI `<canvas>`.
  - **Interactive Cursor Radius:** Points near the cursor dynamically illuminate into neon emerald (`#22c55e`).
  - **Pointer Parallax:** GSAP gently glides ASCII layers in response to mouse coordinates.
  - **Scroll Unmasking:** IntersectionObserver triggers a character unmask sequence for the giant display logo `GROWTIVAI`.

### 8. Ready-To-Use React Bits Components in Repo
- **[Magnet.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/Magnet.tsx):** Physics-driven magnetic button wrapper that follows cursor attraction within `150px` padding.
- **[StaggeredMenu.tsx](file:///home/thededax/Documents/growtivai%20new/src/components/StaggeredMenu.tsx):** GSAP staggered multi-column navigation menu drawer with fluid color interpolation and social links.

---

## 4. How to Integrate React Bits Components into GrowtivAI

### Implementation A: Adding `Magnet` to CTA Buttons
Wrap the existing `ContactButton` or `LiveProjectButton` with `Magnet` for a premium physical feel:
```tsx
import Magnet from '@/components/Magnet';
import ContactButton from '@/components/ContactButton';

export function HeroCTA() {
  return (
    <Magnet padding={120} strength={2.5}>
      <ContactButton />
    </Magnet>
  );
}
```

### Implementation B: Upgrading Headlines with `SplitText`
Replace static section titles with React Bits `SplitText` for a staggered letter-reveal on scroll:
```tsx
import SplitText from '@/components/SplitText';

<SplitText
  text="AI Solutions That Actually Drive Revenue"
  className="text-4xl md:text-6xl font-heading font-bold"
  delay={40}
  animationFrom={{ opacity: 0, transform: 'translate3d(0, 40px, 0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
/>
```

### Implementation C: Upgrading Services Cards with `SpotlightCard`
Wrap service cards so that hovering casts a radial emerald spotlight matching `#22c55e`:
```tsx
import SpotlightCard from '@/components/SpotlightCard';

<SpotlightCard 
  spotlightColor="rgba(34, 197, 94, 0.15)"
  className="border border-[#0B3215]/10 rounded-2xl p-8"
>
  <h3>01. AI Systems</h3>
  <p>Practical AI systems built around your business needs...</p>
</SpotlightCard>
```

---

## 5. Summary Checklist of Next Animation Enhancements

- [x] **Dev Server Running:** `http://localhost:5173/` active.
- [x] **Chrome Tab Connected:** Live remote debugging interface open on port `9222`.
- [x] **React Bits Library Analyzed:** 217+ components cataloged and mapped.
- [ ] **Wire `Magnet` into `ContactButton`:** Activate cursor physics on hero and footer buttons.
- [ ] **Wire `SpotlightCard` into `ServicesSection`:** Add interactive cursor spotlight to service cards.
- [ ] **Add `CountUp` to Stats in `AboutSection`:** Animate key metric numbers when scrolled into view.
