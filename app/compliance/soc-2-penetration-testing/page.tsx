import Link from 'next/link';
import PageHero from '@/components/PageHero';
import OfferBox from '@/components/OfferBox';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { site, SITE_URL } from '@/lib/site';
import { pentest, fmt } from '@/lib/pricing';
import { pageMeta, breadcrumbs, orgId } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'SOC 2 Penetration Testing: Report in 7 Days',
  description: `SOC 2 penetration testing at a fixed ${fmt('usd', pentest.price.usd)} / ${fmt('inr', pentest.price.inr)} per app. Signed report and attestation letter in 5–7 days.`,
  path: '/compliance/soc-2-penetration-testing',
});

const checks: [string, string][] = [
  ['Was it a real pentest, not just a scan?', 'Expert-led testing with proof for every finding'],
  ['Did it cover the system being audited?', 'We agree the scope against your SOC 2 boundary on day one'],
  ['Which method was used?', 'Named methodology: OWASP, PTES and NIST SP 800-115'],
  ['Were the issues fixed?', 'Free retest and an updated, signed letter'],
  ['Who is accountable for it?', 'Signed by a named senior security expert'],
  ['Was it done at the right time?', 'Scheduled inside your audit window'],
];

const faqs = [
  { q: 'Does SOC 2 require a penetration test?', a: 'SOC 2 does not list a pentest as a strict requirement, but in practice most auditors expect an annual third-party pentest (it supports criteria CC4.1 and CC7.1), and enterprise customers ask for one. If your SOC 2 system description or customer contracts mention pentesting, it becomes required.' },
  { q: 'When should we do the pentest for SOC 2?', a: 'For SOC 2 Type I, a test within the past 12 months is usually enough. For Type II, the test, your fixes and the retest should all happen inside your observation period, so start at least 8–10 weeks before it ends.' },
  { q: 'How much does a SOC 2 penetration test cost?', a: `Traditional firms typically charge $5,000–25,000. TensorShield’s Audit-Ready Pentest is a fixed ${fmt('usd', pentest.price.usd)} (${fmt('inr', pentest.price.inr)} + GST in India) per app, including the report, attestation letter and a retest.` },
  { q: 'Will my auditor accept your report?', a: 'Our reports include everything auditors check for: scope, methodology, proof, retest and a named signer. The final decision is always your auditor’s, so we’re happy to walk them through our approach before your audit.' },
  { q: 'Is an automated scan enough for SOC 2?', a: 'Usually not. Many auditors treat scanner output as vulnerability scanning, not a penetration test. Every TensorShield report includes expert-verified findings with proof, which is what makes it a pentest.' },
];

export default function Soc2Page() {
  return (
    <div className="pg-soc2">
      <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'Service', name: 'SOC 2 Penetration Testing', serviceType: 'Penetration testing for SOC 2 compliance', provider: { '@id': orgId }, areaServed: 'Worldwide', offers: { '@type': 'Offer', price: pentest.price.usd, priceCurrency: 'USD', url: `${SITE_URL}/pricing` } }, breadcrumbs([{ name: 'SOC 2 penetration testing', path: '/compliance/soc-2-penetration-testing' }])]} />
      <PageHero
        eyebrow="SOC 2 penetration testing"
        title="The SOC 2 pentest your auditor"
        accent="won’t send back."
        lead="A real, expert-verified pentest of your app and APIs, with a signed report and attestation letter in about a week, timed to your SOC 2 audit."
      >
        <div className="hero-row reveal">
          <Link href="/contact?plan=pentest" className="btn btn-primary">Book a free call <Icon name="arrow" /></Link>
          <a href="#faq" className="btn btn-ghost">SOC 2 pentest FAQ</a>
        </div>
        <div className="tldr reveal" style={{ marginTop: 40, maxWidth: 820 }}>
          <strong>The short answer</strong>
          SOC 2 doesn’t strictly require a pentest, but most auditors expect one every year, and big customers will ask for it. For a Type II
          audit, the test, your fixes and the retest should all happen inside your audit period.
        </div>
      </PageHero>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What your auditor checks</span>
            <h2>Six questions. <span className="serif grad">We answer all of them.</span></h2>
            <p>These are the most common reasons auditors reject a pentest report. Ours is built to pass every one.</p>
          </div>
          <div className="grid g3">
            {checks.map(([q, a], i) => (
              <div className="card checkcard reveal" data-delay={String(i % 3)} key={q}>
                <h3>{q}</h3>
                <p><Icon name="check" size={16} className="tick" /> {a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfferBox title="A SOC 2 pentest at one fixed price." />
      <FAQ items={faqs} title="SOC 2 pentest questions" />
      <CTA title="Heading into a SOC 2 audit?" text={`Tell us your audit dates and we’ll plan the test around them. Or call ${site.phoneDisplay}.`} />
    </div>
  );
}
