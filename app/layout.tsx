import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { Analytics } from '@vercel/analytics/next';
import JsonLd from '@/components/JsonLd';
import { site, SITE_URL } from '@/lib/site';
import { orgId } from '@/lib/seo';
import './globals.css';
import './pages.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-instrument', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${site.name} | Continuous AI Pentesting`, template: `%s | ${site.name}` },
  description: site.description,
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/icon-192.png', sizes: '192x192', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = { themeColor: '#050608' };

// Sets the visitor's currency before first paint (INR for India time zones, else USD) so prices never flash.
const currencyScript = `try{var c=localStorage.getItem('ts-cur');if(!c){var z=Intl.DateTimeFormat().resolvedOptions().timeZone||'';c=/Calcutta|Kolkata/.test(z)?'inr':'usd'}document.documentElement.dataset.cur=c}catch(e){document.documentElement.dataset.cur='usd'}`;

const orgSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: site.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: site.description,
    email: site.email,
    telephone: site.phoneE164,
    founder: { '@type': 'Person', name: site.founder.name, sameAs: [site.founder.linkedin] },
    areaServed: ['IN', 'US', 'GB', 'EU', 'AE', 'SG', 'AU'],
    knowsAbout: ['Penetration testing', 'Continuous penetration testing', 'VAPT', 'API security testing', 'Web application security', 'SOC 2', 'ISO 27001', 'OWASP Top 10'],
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', telephone: site.phoneE164, email: site.email, areaServed: 'Worldwide', availableLanguage: ['English', 'Hindi'] }],
  },
  { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: site.name, publisher: { '@id': orgId } },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: currencyScript }} />
        <link rel="alternate" type="text/plain" title="LLM summary" href="/llms.txt" />
        <noscript><style>{'.reveal,.rise{opacity:1!important;transform:none!important}'}</style></noscript>
        <JsonLd data={orgSchema} />
      </head>
      <body>
        <a className="sr-only" href="#main">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <Analytics />
      </body>
    </html>
  );
}
