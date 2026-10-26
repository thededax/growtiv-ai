export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'services' | 'pricing' | 'process';
}

export const FAQS: FAQItem[] = [
  {
    question: 'What does GrowtivAI build?',
    answer:
      'We build two core solutions for Indian businesses: 1) Custom Websites & Software (fast, mobile-first websites and internal workflow tools designed to drive genuine customer enquiries), and 2) Practical AI Systems (smart WhatsApp and phone assistants that answer customer questions 24/7, share catalogs, and log leads into your CRM or Google Sheets).',
    category: 'general',
  },
  {
    question: 'What is the difference between a website and custom software?',
    answer:
      'A website is your public storefront where potential customers discover your services, build trust, and reach out to you. Custom business software is a private internal tool built to solve a specific operational headache—like managing customer leads, booking appointment slots, or generating custom quotes—instead of forcing your team to track everything across messy diaries and personal WhatsApp chats.',
    category: 'services',
  },
  {
    question: 'What are AI Systems and how do they help my business?',
    answer:
      'An AI system is a digital assistant or automated workflow configured to perform repetitive everyday tasks. For example: answering customer WhatsApp queries within 30 seconds, sharing brochures, qualifying a buyer’s budget, or alerting your sales reps when a hot enquiry arrives. They assist your existing team and capture after-hours leads; your staff does not need any technical background to use them.',
    category: 'services',
  },
  {
    question: 'Can I start with just one service and add the other later?',
    answer:
      'Yes, absolutely. Many business owners start by building a fast, high-converting website to stop losing visitors, then add our WhatsApp AI enquiry assistant a few weeks later. Others start directly by automating their WhatsApp replies to handle immediate ad campaign leads. Both services are designed to work together seamlessly.',
    category: 'services',
  },
  {
    question: 'How does a project begin and how is pricing determined?',
    answer:
      'Every project begins with a free 30-minute discovery call to understand your business bottlenecks, customers, and desired outcomes. Because every business workflow is unique, pricing depends on your agreed scope and tool connections. We provide a clear, milestone-based proposal with transparent deliverables before any financial commitment.',
    category: 'pricing',
  },
  {
    question: 'How long does a project take from kickoff to handover?',
    answer:
      'Most targeted business websites, landing pages, and WhatsApp AI enquiry desks are fully built, tested, and launched within 2 to 4 weeks. Larger custom software platforms are delivered in structured, phased milestones so you can inspect and verify working progress continuously.',
    category: 'process',
  },
  {
    question: 'What happens after launch? Do we receive support and training?',
    answer:
      'Yes. When we deliver your system, you receive complete handover documentation, recorded step-by-step video tutorials for your staff, and full administrative ownership of your code, workflows, and accounts. We offer post-launch support to ensure everything runs smoothly, along with optional ongoing maintenance agreements.',
    category: 'process',
  },
  {
    question: 'How do I book a discovery call?',
    answer:
      'You can book a discovery call directly through our Contact form, or message us directly on our WhatsApp Desk. We’ll schedule a convenient 30-minute session with a technical architect to discuss your business requirements.',
    category: 'general',
  },
];
