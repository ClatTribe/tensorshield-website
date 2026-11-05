// Single source of truth for brand, contact and company details.
// Set SITE_URL in Vercel (Project → Settings → Environment Variables) once the custom domain is live.
// Until then Vercel's production URL is used automatically.
export const SITE_URL = (
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://tensorshield.vercel.app')
).replace(/\/$/, '');

export const site = {
  name: 'TensorShield',
  tagline: 'Always-on pentesting. Audit-ready on demand.',
  positioning: 'Security at machine speed',
  description:
    'TensorShield runs continuous AI-driven penetration testing on your web apps and APIs, proves what is exploitable, and delivers SOC 2 and ISO 27001-ready VAPT reports on demand, reviewed and signed by a senior security engineer.',
  email: 'tensorshield@gmail.com',
  phoneDisplay: '+91 80049 20400',
  phoneE164: '+918004920400',
  whatsapp: 'https://wa.me/918004920400',
  country: 'India',
  hours: 'Mon–Sat, 10:00–19:00 IST',
  founder: {
    name: 'Ashish Mishra',
    role: 'Founder',
    linkedin: 'https://www.linkedin.com/in/eashishm/',
    summary: '15+ years in cybersecurity at Google and Intel',
  },
  // Fill these in once incorporated. Empty values are hidden from the footer.
  legal: {
    entity: '',
    cin: '',
    gstin: '',
    address: '',
  },
  updated: '2026-11-04',
};
