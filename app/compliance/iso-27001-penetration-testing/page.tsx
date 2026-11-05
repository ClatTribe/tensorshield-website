import Link from 'next/link';
import PageHero from '@/components/PageHero';
import OfferBox from '@/components/OfferBox';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { pentest, fmt } from '@/lib/pricing';
import { pageMeta, breadcrumbs, orgId } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'ISO 27001 Penetration Testing: Report in 7 Days',
  description: `ISO 27001 penetration testing at a fixed ${fmt('usd', pentest.price.usd)} / ${fmt('inr', pentest.price.inr)} per app. Report mapped to Annex A 8.8 and 8.29 in 5–7 days.`,
  path: '/compliance/iso-27001-penetration-testing',
});

const helps = [
  { icon: 'target', t: 'Covers your certification scope', d: 'We match the test to the systems inside your ISO 27001 scope, so your auditor sees nothing left out.' },
  { icon: 'file', t: 'Evidence for the controls auditors sample', d: 'Mapped to Annex A 8.8 (technical vulnerabilities) and 8.29 (security testing), the two controls a pentest supports most.' },
  { icon: 'refresh', t: 'Ready for every surveillance audit', d: 'With the Continuous plan, you always have recent, dated evidence, not a scramble before each visit.' },
];

const faqs = [
  { q: 'Does ISO 27001 require penetration testing?', a: 'ISO 27001:2022 doesn’t explicitly require a pentest, but it requires you to find and fix technical vulnerabilities (Annex A 8.8) and to test security (8.29). A pentest report is the most common and convincing evidence auditors look for.' },
  { q: 'How often should we pentest for ISO 27001?', a: 'At least once a year, in line with your surveillance audits, and after major changes to your application.' },
  { q: 'How much does an ISO 27001 pentest cost?', a: `TensorShield’s Audit-Ready Pentest is a fixed ${fmt('usd', pentest.price.usd)} (${fmt('inr', pentest.price.inr)} + GST in India) per app, including the report, attestation letter and a retest.` },
  { q: 'What does the report include?', a: 'What we tested and when, our methodology, every finding with proof and how to fix it, the Annex A controls it supports, retest results and a signed attestation letter.' },
];

export default function IsoPage() {
  return (
    <div className="pg-iso">
      <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'Service', name: 'ISO 27001 Penetration Testing', serviceType: 'Penetration testing for ISO/IEC 27001:2022 certification', provider: { '@id': orgId }, areaServed: 'Worldwide', offers: { '@type': 'Offer', price: pentest.price.usd, priceCurrency: 'USD', url: `${SITE_URL}/pricing` } }, breadcrumbs([{ name: 'ISO 27001 penetration testing', path: '/compliance/iso-27001-penetration-testing' }])]} />
      <PageHero
        eyebrow="ISO 27001 penetration testing"
        title="Pentest evidence for ISO 27001,"
        accent="ready in a week."
        lead="An expert-verified pentest of your app and APIs, with a report mapped to the Annex A controls your certification auditor will sample."
      >
        <div className="hero-row reveal">
          <Link href="/contact?plan=pentest" className="btn btn-primary">Book a free call <Icon name="arrow" /></Link>
          <a href="#faq" className="btn btn-ghost">ISO 27001 pentest FAQ</a>
        </div>
        <div className="tldr reveal" style={{ marginTop: 40, maxWidth: 820 }}>
          <strong>The short answer</strong>
          ISO 27001 doesn’t name the pentest as mandatory, but Annex A 8.8 and 8.29 require you to find, fix and test for security weaknesses.
          A recent pentest report with a retest is the strongest evidence you can give your auditor.
        </div>
      </PageHero>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container grid g3">
          {helps.map((h, i) => (
            <div className="card reveal" data-delay={String(i)} key={h.t}>
              <div className="icon-tile"><Icon name={h.icon} /></div>
              <h3>{h.t}</h3>
              <p>{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      <OfferBox title="An ISO 27001 pentest at one fixed price." />
      <FAQ items={faqs} title="ISO 27001 pentest questions" />
      <CTA title="Preparing for ISO 27001 certification?" text="Share your audit dates on a free call, and we’ll plan the test around them." />
    </div>
  );
}
