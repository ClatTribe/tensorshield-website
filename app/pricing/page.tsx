import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PricingCards from '@/components/PricingCards';
import Compare from '@/components/Compare';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { offers, pentest, continuous, fmt } from '@/lib/pricing';
import { SITE_URL } from '@/lib/site';
import { pageMeta, breadcrumbs } from '@/lib/seo';

export const metadata = pageMeta({
  title: `Pricing: Pentesting from ${fmt('inr', continuous.price.inr)}/month`,
  description: `Fixed, published prices. Continuous pentesting from ${fmt('inr', continuous.price.inr)} / ${fmt('usd', continuous.price.usd)} a month with your yearly pentest included.`,
  path: '/pricing',
});

const choose = [
  { icon: 'refresh', q: 'Shipping every week and want to stay audit-ready?', a: 'Choose Continuous. Your yearly pentest is included, and we test every release in between.', id: 'continuous' },
  { icon: 'file', q: 'Just need a report for an audit or customer?', a: 'Get the Audit-Ready Pentest. One app, fixed price, signed report in about a week.', id: 'pentest' },
  { icon: 'layers', q: 'Four or more apps, or an agency?', a: 'Talk to us about Scale. One plan, one analyst, every product covered.', id: 'scale' },
];

const faqs = [
  { q: 'What counts as one app?', a: 'One web application plus the APIs it uses, for example app.yourcompany.com and api.yourcompany.com. A separate product or a separate customer-facing portal counts as another app. We confirm this on the call before you pay anything.' },
  { q: 'Are there any extra costs?', a: 'No. The price includes testing, the report, the signed attestation letter and retests. Indian customers pay 18% GST on top. Customers outside India are billed in USD.' },
  { q: 'Is the Continuous plan worth it over a one-time pentest?', a: `Continuous costs ${fmt('inr', continuous.yearly!.inr)} / ${fmt('usd', continuous.yearly!.usd)} a year for up to 3 apps and already includes your yearly pentest. If you ship often, it keeps you audit-ready all year and catches new issues within days instead of at next year’s test.` },
  { q: 'Do you offer discounts for early-stage startups?', a: 'Yes. Tell us your stage on the call. We also run a small founding-customer programme with a discount in exchange for feedback.' },
  { q: 'What if we need a more in-depth or specialised test?', a: 'Tell us on the call. Business-logic-heavy apps, many user roles or unusual stacks can need extra expert time, and we will quote it upfront before any work starts.' },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'TensorShield Penetration Testing',
    brand: { '@type': 'Brand', name: 'TensorShield' },
    description: 'Continuous AI penetration testing for web apps and APIs, with SOC 2 and ISO 27001-mapped reports.',
    offers: offers.flatMap((o) => [
      { '@type': 'Offer', name: `${o.name} (USD)`, price: o.price.usd, priceCurrency: 'USD', url: `${SITE_URL}/pricing`, availability: 'https://schema.org/InStock' },
      { '@type': 'Offer', name: `${o.name} (INR, excl. GST)`, price: o.price.inr, priceCurrency: 'INR', url: `${SITE_URL}/pricing`, availability: 'https://schema.org/InStock' },
    ]),
  },
  breadcrumbs([{ name: 'Pricing', path: '/pricing' }]),
];

export default function PricingPage() {
  return (
    <div className="pg-pricing">
      <JsonLd data={schema} />
      <PageHero
        eyebrow="Pricing"
        title="Fixed prices."
        accent="No surprise quotes."
        lead="Three options, all published. Pick the one that fits, or book a free call and we’ll tell you honestly which you need."
        center
      />

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <PricingCards />
        </div>
      </section>

      <section className="section-tight divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Which one is right for me?</span>
            <h2>Pick by the situation <span className="serif grad">you’re in today.</span></h2>
          </div>
          <div className="grid g3">
            {choose.map((c, i) => (
              <Link href={`/contact?plan=${c.id}`} className="card choose reveal" data-delay={String(i)} key={c.id}>
                <div className="icon-tile"><Icon name={c.icon} /></div>
                <h3>{c.q}</h3>
                <p>{c.a}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How we compare</span>
            <h2>Tested every release. <span className="serif grad">Signed by an expert.</span></h2>
          </div>
          <Compare />
        </div>
      </section>

      <FAQ items={faqs} title="Pricing questions" />
      <CTA title="Get your fixed price in 20 minutes." text="Tell us how many apps you have and when your audit is. You’ll get a price and a start date on the call." />
    </div>
  );
}
