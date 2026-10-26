export interface SiteConfig {
  name: string;
  tagline: string;
  mission: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  bookingCalendarUrl: string; // If left empty, direct contact form is primary
  domain: string;
  location: string;
  socials: {
    instagram: string;
    linkedin: string;
    twitter: string;
    github?: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: 'GrowtivAI',
  tagline: 'AI Growth & Automation Partner for Indian Businesses',
  mission:
    'Fix the problem that costs an Indian business owner the most time or money, with a working system they can see, understand and measure, not a tool they have to figure out alone.',
  email: 'growtivai@gmail.com',
  phone: '+91 92794 83979',
  whatsappNumber: '919279483979',
  whatsappDefaultMessage:
    'Hi GrowtivAI, I would like to discuss a custom website or AI automation system for my business.',
  bookingCalendarUrl: '', // Configurable: e.g. 'https://calendly.com/growtivai/discovery-call'
  domain: 'https://growtivai.com',
  location: 'Bhagalpur, Bihar & Pan-India',
  socials: {
    instagram: 'https://www.instagram.com/growtivai?dlrf=NTl5amNhZWZwNXk1',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const text = encodeURIComponent(customMessage || SITE_CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
};
