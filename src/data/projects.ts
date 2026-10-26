export type ProjectCategory = 'websites-software' | 'salons-wellness' | 'cafes-dining';
export type ProjectType = 'Client Project';

export interface ProjectItem {
  slug: string;
  number: string;
  title: string;
  category: ProjectCategory;
  projectType: ProjectType;
  badge: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  deliverables: string[];
  metrics: string[];
  features: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  demoUrl: string;
  relatedServiceAnchor: string;
  clientContext?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'urbanity-salon',
    number: '01',
    title: 'Urbanity Hair Atelier & Privé',
    category: 'salons-wellness',
    projectType: 'Client Project',
    badge: 'Luxury Salon & Trichology Clinic',
    industry: 'Bespoke Hair Architecture & Luxury Salon',
    summary:
      'An editorial digital atelier and appointment sanctuary built for a luxury hair salon and clinical scalp trichology studio in Bhagalpur.',
    problem:
      'High-end salon clients were dropping off on generic WhatsApp chats, waiting hours for consultation responses, and missing detailed information on signature rituals and pricing tiers.',
    solution:
      'Architected an editorial, ultra-responsive digital presence featuring bespoke cranial balance diagnostics, an unhurried 1-on-1 reservation concierge, and clear ritual breakdowns with instant consultation booking.',
    deliverables: [
      'Editorial High-Performance Web Architecture',
      'Interactive Consultation & Ritual Reservation Flow',
      'Bespoke Diagnostic Treatment Breakdown',
      'Mobile-First Touch & WhatsApp Concierge Integration',
      'Fast-Loading Next-Gen Visual Asset Pipeline',
    ],
    metrics: [
      '< 1s Initial Load Time',
      '100% Mobile Optimized',
      'Zero Booking Friction',
      'Direct Consultation Capture',
    ],
    features: [
      'Interactive service ritual exploration with detailed treatment philosophies',
      'Instant consultation reserve flow connected to WhatsApp and direct call',
      'Editorial visual layout communicating luxury, exclusivity, and care',
      'Fast navigation for cranial silhouette architecture, balayage, and trichology',
    ],
    images: {
      hero: '/work/urbanity-salon.png',
      gallery: ['/work/urbanity-salon.png'],
    },
    demoUrl: 'https://urbanitysalon.vercel.app/',
    relatedServiceAnchor: '/services#custom-website-software',
    clientContext: 'Luxury hair atelier and clinical scalp trichology clinic based in Tilkamanjhi, Bhagalpur.',
  },
  {
    slug: '90ml-cafe',
    number: '02',
    title: '90ml Drunkyard Cafe',
    category: 'cafes-dining',
    projectType: 'Client Project',
    badge: 'Artisanal Cafe & Beverage Experience',
    industry: 'Specialty Cafe, Co-Working & Casual Dining',
    summary:
      'Vibrant, high-energy digital hub and pre-order engine crafted for Bhagalpur’s premier youth cafe, co-working sanctuary, and specialty beverage lounge.',
    problem:
      'Peak evening foot traffic led to counter delays and long wait times for signature pours, while remote workers had no quick way to reserve work tables or check WiFi amenities in advance.',
    solution:
      'Built a dynamic digital experience showcasing signature 30ml/60ml/90ml espresso and mocktail menus, an integrated pre-order tray flow, and table reservation booking for hangouts and work sessions.',
    deliverables: [
      'Dynamic Craft Menu & Specialty Pour Showcase',
      'Interactive Pre-Order & Digital Order Tray System',
      'Table & Co-Working Hangout Reservation Flow',
      'Mobile Speed Optimization & Mood-Based Browsing',
      'Direct WhatsApp Ordering & Hotline Integration',
    ],
    metrics: [
      'Sub-Second Menu Browsing',
      'Streamlined Order Pre-Selection',
      'Instant Table Booking Access',
      'High-Contrast Night-Vibe Aesthetic',
    ],
    features: [
      'Interactive mood filter (Caffeine Boost, Iced & Refreshing, Savory Bites)',
      'Digital order tray allowing guests to pre-select items before reaching the counter',
      'Instant table booking module for work desks, board game zones, and social hangouts',
      'Direct hotline and one-tap WhatsApp order dispatch',
    ],
    images: {
      hero: '/work/90ml-cafe.png',
      gallery: ['/work/90ml-cafe.png'],
    },
    demoUrl: 'https://90mlcafe.netlify.app/',
    relatedServiceAnchor: '/services#custom-website-software',
    clientContext: 'Signature third place cafe, mocktail bar, and remote work hub in Bhagalpur.',
  },
  {
    slug: 'desi-chulha',
    number: '03',
    title: 'Desi Chulha Restaurant',
    category: 'cafes-dining',
    projectType: 'Client Project',
    badge: 'Heritage Clay-Oven Dining & Online Ordering',
    industry: 'Authentic Indian Cuisine & Clay Tandoor Dining',
    summary:
      'A rich, heritage culinary experience website featuring hand-pounded heirloom spices, authentic wood-fired clay oven dishes, live kitchen status, and direct table reservation.',
    problem:
      'Traditional dine-in customers faced weekend waitlists while takeaway diners were paying 30%+ commissions on food delivery aggregators without direct relationship with the restaurant.',
    solution:
      'Crafted a mouth-watering, warm heritage web portal highlighting wood-fired specialties, Chef’s daily chulha specials, an interactive order tray for direct delivery, and effortless table reservations.',
    deliverables: [
      'Heritage-Inspired Digital Dining Experience',
      'Chef’s Daily Special & Live Kitchen Timing Tracker',
      'Interactive Food Tray & Direct Delivery Engine',
      'Table Reservation Flow with WhatsApp Confirmation',
      'High-Resolution Dish & Tandoor Visual Showcase',
    ],
    metrics: [
      '0% Aggregator Commission on Direct Orders',
      'Live Kitchen Status Indicator',
      'Frictionless Dine-In Table Booking',
      'Fast-Loading Rich Media Assets',
    ],
    features: [
      'Chef’s Daily Chulha Special showcase (Slow-Cooked Dal Chulha with 1-click add to tray)',
      'Separate pure veg and non-veg culinary zoning highlights',
      'Direct table reservation system with immediate confirmation hotline',
      'Optimized for mobile food ordering on any local cellular connection',
    ],
    images: {
      hero: '/work/desi-chulha.png',
      gallery: ['/work/desi-chulha.png'],
    },
    demoUrl: 'https://desi-chulha-three.vercel.app/',
    relatedServiceAnchor: '/services#custom-website-software',
    clientContext: 'Authentic wood-fired and clay-oven heritage restaurant in Bhagalpur.',
  },
];
