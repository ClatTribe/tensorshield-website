// Single source of truth for what we sell and what it costs.
// Used by the home page, /pricing, compliance pages, /vapt-india, /pricing.json and /llms.txt.
// INR prices exclude 18% GST.

export type Money = { usd: number; inr: number };

export type Offer = {
  id: 'pentest' | 'continuous' | 'scale';
  name: string;
  tagline: string;
  bestFor: string;
  price: Money;
  from?: boolean;
  unit: string;
  billing: string;
  yearly?: Money;
  featured?: boolean;
  cta: string;
  features: string[];
};

export const offers: Offer[] = [
  {
    id: 'pentest',
    name: 'Audit-Ready Pentest',
    tagline: 'One-time pentest for your next audit or customer review.',
    bestFor: 'You need a pentest report now',
    price: { usd: 2990, inr: 99999 },
    unit: 'per app',
    billing: 'One-time · fixed price',
    cta: 'Book my pentest',
    features: [
      'Expert-led + AI pentest of one web app and its APIs',
      'Every finding verified by a senior expert, with proof',
      'VAPT report mapped to SOC 2 and ISO 27001',
      'Signed attestation letter for auditors and customers',
      'Free retest within 30 days, with an updated letter',
      'Report in 5–7 business days',
    ],
  },
  {
    id: 'continuous',
    name: 'Continuous',
    tagline: 'Your yearly pentest, plus AI testing on every release.',
    bestFor: 'You ship often and want to stay audit-ready',
    price: { usd: 333, inr: 16666 }, // = yearly / 12
    unit: 'per month',
    billing: 'Up to 3 apps',
    yearly: { usd: 3990, inr: 199990 },
    featured: true,
    cta: 'Book a call',
    features: [
      'Everything in Audit-Ready Pentest, once a year',
      'AI testing every week and on every release',
      'Critical issues verified and alerted within 24 hours',
      'Unlimited retests as you fix',
      'Quarterly evidence reports for your auditor',
      'Alerts by email and in the portal; retests on merge via GitHub',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'For multiple products, larger teams and agencies.',
    bestFor: 'You have 4 or more apps',
    price: { usd: 833, inr: 41666 }, // = yearly / 12
    from: true,
    unit: 'per month',
    billing: 'Up to 10 apps',
    yearly: { usd: 9990, inr: 499990 },
    cta: 'Talk to us',
    features: [
      'Everything in Continuous, for up to 10 apps',
      'Two audit-ready pentests a year',
      'Quarterly expert deep-dive testing',
      'Critical issues alerted within 12 hours',
      'A named security analyst',
    ],
  },
];

export const pentest = offers[0];
export const continuous = offers[1];

// Typical market prices, used in the comparison table (sources: pricing research, Nov 2026).
export const market = {
  traditional: { usd: '$5,000–25,000', inr: '₹40,000–1,50,000+' }, // per test
  scanner: { usd: '$70–500 / month', inr: '₹5,000–40,000 / month' },
};

export const fmt = (cur: 'usd' | 'inr', n: number) =>
  cur === 'usd' ? '$' + n.toLocaleString('en-US') : '₹' + n.toLocaleString('en-IN');
