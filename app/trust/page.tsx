import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { site, SITE_URL } from '@/lib/site';
import { pageMeta, breadcrumbs } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Trust & Safety: Guardrails and AI Disclosure',
  description: 'How TensorShield keeps AI pentesting safe: network-enforced scope, non-destructive tests, kill switch, vaulted credentials, audit logs and full AI disclosure.',
  path: '/trust',
});

const controls = [
  { icon: 'lock', t: 'Network-enforced scope', d: 'Each engagement runs on a dedicated scanner whose outbound traffic is restricted to the hosts in your signed scope. Out-of-scope requests are blocked and logged.' },
  { icon: 'shield-check', t: 'Safe testing tiers', d: 'Default checks are non-destructive. Payloads that could modify data, exhaust resources or trigger outages are disabled unless you explicitly opt in, in writing.' },
  { icon: 'gauge', t: 'Rate limits & testing windows', d: 'Per-host request limits and optional time windows keep load predictable. We never run denial-of-service tests.' },
  { icon: 'stop', t: 'Kill switch', d: 'You can halt all testing instantly from the portal or by calling us. Agents stop mid-run.' },
  { icon: 'server', t: 'Static, published egress IPs', d: 'Allow-list them on your WAF. We do not attempt to bypass or evade your defensive controls.' },
  { icon: 'key', t: 'Secrets never reach the model', d: 'Test credentials are stored in a vault and used by an auth broker. AI agents receive short-lived session tokens only.' },
  { icon: 'eye', t: 'Complete audit trail', d: 'Every request, tool call and agent decision is logged with hash-chained integrity, available to you on request.' },
  { icon: 'users', t: 'Human approval gates', d: 'New assets discovered during recon are reported, never tested, until you approve adding them to scope.' },
  { icon: 'refresh', t: 'Data retention & deletion', d: 'Engagement data is retained only as long as your contract requires, then destroyed, with a deletion certificate on request.' },
];

export default function TrustPage() {
  return (
    <div className="pg-trust">
      <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'TensorShield Trust, Safety & AI Disclosure', url: `${SITE_URL}/trust`, dateModified: site.updated }, breadcrumbs([{ name: 'Trust & safety', path: '/trust' }])]} />
      <PageHero
        eyebrow="Trust & safety"
        title="Powerful enough to find real bugs."
        accent="Controlled enough to trust."
        lead="Letting an AI attack your systems should make you ask hard questions. Here are our answers: what we test, how we limit it, how we use AI, and who is accountable."
      />

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid g3">
            {controls.map((c, i) => (
              <div className="card reveal" data-delay={String(i % 3)} key={c.t}>
                <div className="icon-tile"><Icon name={c.icon} /></div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container narrow prose">
          <span className="eyebrow">Methodology</span>
          <h2 style={{ marginTop: 0 }}>How we test</h2>
          <p>Our testing follows established, publicly documented methodologies so that auditors and your security team can understand and verify our approach:</p>
          <ul>
            <li><strong>OWASP Web Security Testing Guide (WSTG)</strong> for web application test cases</li>
            <li><strong>OWASP Top 10:2025</strong> and <strong>OWASP API Security Top 10 (2023)</strong> for risk categorisation</li>
            <li><strong>OWASP ASVS 5.0</strong> as a verification reference</li>
            <li><strong>PTES</strong> and <strong>NIST SP 800-115</strong> for engagement phases, from pre-engagement to reporting</li>
            <li><strong>CVSS 3.1 and 4.0</strong> for severity, computed from the vector, never estimated by an AI</li>
            <li><strong>CWE</strong> identifiers for every finding, validated against MITRE’s list</li>
          </ul>
          <p>A finding is reported only if it is reproducible and supported by captured evidence. Every Critical and High is reproduced by a human before it is delivered.</p>

          <h2 id="ai">AI disclosure</h2>
          <p>We believe you have a right to know exactly how AI is involved in testing your systems.</p>
          <ul>
            <li><strong>What AI does:</strong> plans and executes test steps, analyses responses, attempts exploitation within scope, de-duplicates results and drafts report text.</li>
            <li><strong>What humans do:</strong> agree scope and rules of engagement, verify serious findings, confirm severity, review every report, sign attestation letters, and perform expert-led testing in every Audit-Ready Pentest.</li>
            <li><strong>Models:</strong> we use open-weight large language models, either self-hosted or accessed through providers under zero-data-retention terms. A self-hosted-only option is available for confidential environments.</li>
            <li><strong>Training:</strong> your data is never used to train or fine-tune models.</li>
            <li><strong>Sub-processors:</strong> every infrastructure and model provider that may process engagement data is named in your authorisation letter and data processing agreement before testing begins.</li>
          </ul>

          <h2>Authorised testing only</h2>
          <p>We only test assets that the customer owns or is authorised to test, under a signed authorisation letter and rules of engagement. We do not test third-party services (for example your SaaS vendors or cloud provider control planes) without that provider’s permission, and we follow the published penetration testing policies of major cloud providers.</p>

          <h2>Reporting a vulnerability in TensorShield</h2>
          <p>If you believe you have found a security issue in our website or services, please see our <a href="/legal/responsible-disclosure">responsible disclosure policy</a> or email <a href={`mailto:${site.email}?subject=Security%20report`}>{site.email}</a>.</p>
        </div>
      </section>

      <CTA title="Have a question your CISO will ask?" text="We are happy to walk your security team through our guardrails, data handling and methodology before you sign anything." />
    </div>
  );
}
