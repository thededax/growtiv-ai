export type ProjectCategory = 'websites-software' | 'ai-systems';
export type ProjectType = 'Client Project' | 'Interactive Demo';

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
  demoUrl?: string;
  relatedServiceAnchor: string;
  clientContext?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'aura-living-real-estate',
    number: '01',
    title: 'Aura Living Real Estate',
    category: 'websites-software',
    projectType: 'Client Project',
    badge: 'Custom Website + AI Desk',
    industry: 'Real Estate Developer & Premium Advisory',
    summary:
      'Ultra-fast mobile property showcase portal paired with an official WhatsApp AI concierge that instantly delivers floorplans, qualifies budgets, and books site visits.',
    problem:
      'Digital ads brought 50+ inquiries daily, but buyers waited 4+ hours for property brochures. Weekend and late-evening inquiries went completely unanswered, causing prospects to contact rival brokerages.',
    solution:
      'Built a fast mobile property showcase with 1-tap WhatsApp consultation buttons. Connected an official WhatsApp Cloud API bot that delivers floorplan PDFs in 30 seconds, checks buyer budget, and syncs leads directly to Google Sheets and CRM.',
    deliverables: [
      'Custom Mobile-First Website & Project Showcase',
      'Official WhatsApp Cloud API Brochure Concierge',
      'Budget & Unit Pre-Qualification Logic',
      'Bi-Directional CRM & Google Sheets Sync',
      'Automated Sales Team Lead Alerts',
    ],
    metrics: [
      '< 30s Brochure Delivery',
      '99+ Mobile PageSpeed Score',
      '0 Missed Weekend Enquiries',
      '100% Automated Lead Logging',
    ],
    features: [
      'Filter apartments by configuration, price band, and completion date',
      'Instant brochure PDF generation and delivery directly inside WhatsApp',
      'Pre-qualification questionnaire verifying buyer timeline and down payment readiness',
      'Automated site-visit scheduler with calendar invitations sent to sales representatives',
    ],
    images: {
      hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      gallery: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
      ],
    },
    demoUrl: 'https://growtivai.com/preview',
    relatedServiceAnchor: '/services#custom-website-software',
    clientContext: 'Commercial real estate developer operating in Eastern India.',
  },
  {
    slug: 'solaris-systems-coaching',
    number: '02',
    title: 'Solaris Systems & Coaching',
    category: 'ai-systems',
    projectType: 'Client Project',
    badge: 'AI Systems & WhatsApp Workflow',
    industry: 'Executive Coaching & Training Institute',
    summary:
      'Autonomous bilingual WhatsApp AI agent answering 150+ student queries daily, distributing syllabus PDFs, and coordinating course registrations with zero manual staff intervention off-hours.',
    problem:
      'Students and parents flooded counselors with repetitive questions about fees, batch schedules, faculty credentials, and admission rules. Counselors spent 3+ hours daily copy-pasting the exact same answers.',
    solution:
      'Deployed a bilingual WhatsApp AI agent answering FAQs in English and Hindi. The system shares syllabus PDFs instantly, checks batch availability, and collects student details while generating Razorpay payment links.',
    deliverables: [
      'Bilingual WhatsApp AI Agent (English + Hindi)',
      'WhatsApp Cloud API Interactive Messages Flow',
      'Course Curriculum & Batch Availability Engine',
      'Automated Razorpay Invoicing & Receipt Distribution',
      'Counselor Escalation Trigger for Complex Questions',
    ],
    metrics: [
      '24/7 Enquiry Response Time',
      '75% Drop in Repetitive Administrative Inquiries',
      'Zero Lost Enquiries during Peak Ad Campaigns',
      'Under 2-Minute Full Registration Cycle',
    ],
    features: [
      'Instant syllabus PDF download directly within the chat window',
      'Smart batch schedule calendar checker based on student weekend/weekday preferences',
      'Automatic payment receipt generation and WhatsApp confirmation',
      'Seamless human handover when a student requests a 1-on-1 advisor phone call',
    ],
    images: {
      hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      gallery: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
      ],
    },
    demoUrl: 'https://growtivai.com/preview',
    relatedServiceAnchor: '/services#ai-systems',
    clientContext: 'Competitive exam and professional coaching academy.',
  },
  {
    slug: 'nextlevel-studio-retail',
    number: '03',
    title: 'NextLevel Studio & Production',
    category: 'websites-software',
    projectType: 'Client Project',
    badge: 'Custom High-Conversion Website',
    industry: 'Commercial Brand & Creative Production',
    summary:
      'High-speed, cinematic web application with instant portfolio filtering and a streamlined enquiry funnel engineered to command premium commercial project rates.',
    problem:
      'Previous legacy WordPress website took over 6 seconds to load on mobile connections, had broken layout shifts, and offered no structured enquiry flow, causing prospective luxury and commercial brands to bounce.',
    solution:
      'Rebuilt the digital presence with a custom, ultra-fast frontend architecture. Implemented categorized media showcases, frictionless quote request forms, and automated email confirmation notifications to prospective clients.',
    deliverables: [
      'Custom High-Performance Frontend Architecture',
      'Ultra-Fast Asset Pipeline with Next-Gen Image Optimization',
      'Multi-Step Commercial Quote & Discovery Funnel',
      'Dynamic Video and Photography Project Gallery',
      'Instant Email Notification System to Founders',
    ],
    metrics: [
      '< 1.1s Full Page Load Time',
      '98/100 Mobile Performance Score',
      'Zero Layout Shifts (CLS 0.0)',
      '3x Increase in Completed Project Inquiries',
    ],
    features: [
      'Interactive filtering for commercial, editorial, and product production portfolios',
      'Tailored consultation request funnel capturing project timelines and budget tiers',
      'Immediate automated acknowledgment email with company reel sent to clients',
    ],
    images: {
      hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      gallery: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
      ],
    },
    demoUrl: 'https://growtivai.com/preview',
    relatedServiceAnchor: '/services#custom-website-software',
    clientContext: 'Commercial production studio and visual brand.',
  },
  {
    slug: 'clinic-patient-desk-demo',
    number: '04',
    title: 'CarePulse Clinic Concierge',
    category: 'ai-systems',
    projectType: 'Interactive Demo',
    badge: 'AI Systems & WhatsApp Workflow',
    industry: 'Healthcare & Multi-Doctor Clinics',
    summary:
      'Interactive WhatsApp clinic assistant concept demonstrating automated appointment slot reservation, doctor timing inquiries, and visit reminder alerts.',
    problem:
      'Clinic receptionists spend 40% of their workday answering repetitive phone calls about doctor consultation hours, clinic address, and available morning/evening appointment slots.',
    solution:
      'Created a working WhatsApp booking flow demo where patients choose doctors by specialty, view available slots in real time, and receive calendar confirmations with directions.',
    deliverables: [
      'Interactive WhatsApp Booking Flow Prototype',
      'Doctor Schedule & Slot Reservation Logic',
      'Automated Appointment Confirmation Template',
      'Google Calendar & Clinic Diary Integration Mockup',
    ],
    metrics: [
      'Zero Busy Line Drop-offs',
      'Instant Appointment Confirmation',
      'Automated Pre-Visit WhatsApp Reminders',
    ],
    features: [
      'Department and specialist selector (Dentistry, Pediatrics, General Medicine)',
      'Morning, afternoon, and evening slot picker with capacity checks',
      'Location map pin and parking guidance delivered over WhatsApp chat',
    ],
    images: {
      hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      gallery: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      ],
    },
    demoUrl: 'https://growtivai.com/preview',
    relatedServiceAnchor: '/services#ai-systems',
    clientContext: 'Working agency demonstration for healthcare & outpatient clinics.',
  },
  {
    slug: 'banquet-event-scheduler-demo',
    number: '05',
    title: 'GrandVenue Banquet & Event Engine',
    category: 'websites-software',
    projectType: 'Interactive Demo',
    badge: 'Custom Business Software Demo',
    industry: 'Hospitality, Banquets & Luxury Dining',
    summary:
      'Custom event booking and quote estimation dashboard allowing venue operators to manage dates, catering packages, and customer proposals in one place.',
    problem:
      'Banquet bookings were managed across handwritten diary pages and personal WhatsApp chats. Double-booking risks and delayed custom menu pricing caused customer friction.',
    solution:
      'Designed a custom web application combining a mobile guest showcase with an internal event management tool that calculates package estimates and updates availability.',
    deliverables: [
      'Responsive Venue & Hall Showcase Portal',
      'Dynamic Per-Plate & Decor Package Calculator',
      'Internal Date Availability Calendar',
      'Instant WhatsApp Proposal Generator',
    ],
    metrics: [
      'Eliminated Double-Booking Risks',
      'Instant Quote Generation in < 60s',
      'Centralized Lead and Date Pipeline',
    ],
    features: [
      'Interactive guest count and menu tier selection calculator',
      'Hall layout photos and virtual walkthrough preview',
      'One-click PDF proposal download ready for WhatsApp sharing',
    ],
    images: {
      hero: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      gallery: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      ],
    },
    demoUrl: 'https://growtivai.com/preview',
    relatedServiceAnchor: '/services#custom-website-software',
    clientContext: 'Working prototype for banquet halls and event venues.',
  },
];
