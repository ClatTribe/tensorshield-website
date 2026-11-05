// Purpose: capture Indian buyers who search "VAPT" (the term used in India instead of "pentest")
// and answer their India-specific questions: INR price, GST invoice, VAPT certificate, CERT-In.
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { site, SITE_URL } from '@/lib/site';
import { pentest, continuous, fmt } from '@/lib/pricing';
import { pageMeta, breadcrumbs, orgId } from '@/lib/seo';

const inr = (n: number) => fmt('inr', n);

export const metadata = pageMeta({
  title: `VAPT Services in India: Fixed ${inr(pentest.price.inr)}`,
  description: `Web app and API VAPT for Indian companies at a fixed ${inr(pentest.price.inr)} + GST. Expert-verified report and VAPT certificate in 5–7 business days.`,
  path: '/vapt-india',
});

const who = [
  { icon: 'globe', t: 'You sell to US, UK or EU customers', d: 'They ask for SOC 2 or ISO 27001, and both expect a recent VAPT report.' },
  { icon: 'users', t: 'An enterprise is onboarding you as a vendor', d: 'Their security team wants a VAPT report and certificate before they sign.' },
  { icon: 'chart', t: 'You’re raising or being acquired', d: 'Investors and acquirers increasingly ask for a recent VAPT in due diligence.' },
];

const faqs = [
  { q: 'What is VAPT?', a: 'VAPT stands for Vulnerability Assessment and Penetration Testing. We look for security weaknesses in your web application and APIs, then safely try to exploit them to prove which ones are real. You get a report with each issue, its risk and how to fix it.' },
  { q: 'How much does VAPT cost in India?', a: `Web application VAPT in India usually costs between ₹40,000 and ₹1,50,000 per application. TensorShield charges a fixed ${inr(pentest.price.inr)} per app (plus GST), which includes expert verification, a SOC 2 and ISO 27001-ready report, a signed attestation letter and a free retest.` },
  { q: 'Do I get a VAPT certificate?', a: 'Yes. You get a signed attestation letter (often called a VAPT certificate) that summarises what was tested, when, and the result. After you fix the issues, we retest and issue an updated letter.' },
  { q: 'Is TensorShield CERT-In empanelled?', a: 'Not yet. If you are regulated by RBI, SEBI, IRDAI or a government body that specifically requires a CERT-In empanelled auditor, you will need an empanelled firm for that audit. For SOC 2, ISO 27001, customer reviews and due diligence, CERT-In empanelment is not required.' },
  { q: 'Do you provide a GST invoice?', a: 'Yes. Indian customers receive a GST invoice in INR. Prices on this page exclude 18% GST.' },
];

export default function VaptIndiaPage() {
  return (
    <div className="pg-vapt">
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org', '@type': 'Service', name: 'VAPT Services in India', serviceType: 'Vulnerability Assessment and Penetration Testing (VAPT)',
            provider: { '@id': orgId }, areaServed: { '@type': 'Country', name: 'India' },
            offers: [
              { '@type': 'Offer', name: pentest.name, price: pentest.price.inr, priceCurrency: 'INR', url: `${SITE_URL}/pricing` },
              { '@type': 'Offer', name: `${continuous.name} (monthly)`, price: continuous.price.inr, priceCurrency: 'INR', url: `${SITE_URL}/pricing` },
            ],
          },
          breadcrumbs([{ name: 'VAPT in India', path: '/vapt-india' }]),
        ]}
      />
      <PageHero
        eyebrow="VAPT services in India"
        title="Your VAPT report in 7 days."
        accent={`Fixed at ${inr(pentest.price.inr)}.`}
        lead="For Indian SaaS and tech companies that need a VAPT report for a SOC 2 or ISO 27001 audit, an enterprise customer or investors. Expert-verified, with a VAPT certificate and a GST invoice."
      >
        <div className="hero-row reveal">
          <Link href="/contact?plan=pentest" className="btn btn-primary">Book a free call <Icon name="arrow" /></Link>
          <a href={site.whatsapp} className="btn btn-ghost" target="_blank" rel="noopener"><Icon name="whatsapp" /> WhatsApp us</a>
        </div>
      </PageHero>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Who this is for</span>
            <h2>You need a VAPT report <span className="serif grad">because…</span></h2>
          </div>
          <div className="grid g3">
            {who.map((w, i) => (
              <div className="card reveal" data-delay={String(i)} key={w.t}>
                <div className="icon-tile"><Icon name={w.icon} /></div>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Price</span>
            <h2>One fixed price. <span className="serif grad">Everything included.</span></h2>
            <p className="muted big">No “contact us for a quote”. The price covers testing, the report, the VAPT certificate and one retest.</p>
          </div>
          <div className="price-card card card-glow reveal" data-delay="1">
            <p className="mono label">{pentest.name}</p>
            <p className="amount">{inr(pentest.price.inr)} <span>per app + GST</span></p>
            <ul className="checks">{pentest.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <Link href="/contact?plan=pentest" className="btn btn-primary btn-block">Book my VAPT <Icon name="arrow" /></Link>
            <p className="alt">Ship every week? <Link href="/pricing">Continuous</Link> includes this yearly VAPT plus testing on every release, from {inr(continuous.price.inr)}/month.</p>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="VAPT in India: common questions" />
      <CTA title="Need a VAPT report this month?" text={`Call or WhatsApp ${site.phoneDisplay}, or book a free call. You’ll get a start date on the call.`} />
    </div>
  );
}
