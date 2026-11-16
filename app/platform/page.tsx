import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';
import { pageMeta, breadcrumbs } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'How It Works: Continuous AI Pentesting',
  description: 'How TensorShield tests web apps and APIs continuously: discovery, multi-role testing, AI exploitation, proof and expert verification on every release.',
  path: '/platform',
});

const pipeline = [
  { icon: 'radar', t: 'Discover', d: 'Give us your app’s URL: we check DNS, technologies, login pages and published API specs, and propose the scope for you to approve. Nothing is tested until it is in scope.' },
  { icon: 'key', t: 'Authenticate', d: 'We test as each role you provide, with dedicated test accounts stored encrypted and checked before every run. Password and token logins are automated; MFA and SSO flows are tested by our engineers.' },
  { icon: 'layers', t: 'Map', d: 'Authenticated crawling plus your OpenAPI or Postman specs map pages, endpoints and parameters.' },
  { icon: 'bolt', t: 'Attack', d: 'Deterministic tools cover breadth; AI agents go deep: multi-role access control, chained requests, business-logic probes.' },
  { icon: 'fingerprint', t: 'Prove', d: 'A finding exists only if it reproduces. Where possible it is proven by a deterministic check (an out-of-band callback, another user’s canary in a response), with hashed request and response evidence.' },
  { icon: 'users', t: 'Verify', d: 'A senior engineer reproduces every Critical and High, confirms impact and severity, and writes remediation guidance your team can act on.' },
];

const cadence = [
  { t: 'On a schedule', d: 'Weekly, monthly or quarterly authenticated testing of every app, including multi-role access control.' },
  { t: 'On every deploy', d: 'A signed webhook from GitHub or any CI pipeline triggers a quick run on what just shipped.' },
  { t: 'When you fix', d: 'Mention a finding ID in a commit or pull request and its proof is replayed automatically.' },
  { t: 'When a new exploit appears', d: 'A newly exploited CVE that matches your technology stack triggers a targeted check.' },
];

const coverage: [string, string][] = [
  ['API1 · Broken Object Level Authorization (BOLA)', 'Multi-role request replay, proven with per-account canary values'],
  ['API2 · Broken Authentication', 'Login, reset and token handling; JWT weaknesses (MFA and SSO by our engineers)'],
  ['API3 · Broken Object Property Level Authorization', 'Mass assignment and excessive data exposure checks'],
  ['API4 · Unrestricted Resource Consumption', 'Safe, rate-limited checks for missing limits (no load testing)'],
  ['API5 · Broken Function Level Authorization', 'Privileged functions replayed as lower-privilege roles'],
  ['API6 · Unrestricted Access to Sensitive Business Flows', 'Agent-driven abuse of sign-up, checkout and invite flows'],
  ['API7 · Server-Side Request Forgery', 'Out-of-band callback verification on URL-handling parameters'],
  ['API8 · Security Misconfiguration', 'Headers, CORS, TLS, verbose errors, exposed debug endpoints'],
  ['API9 · Improper Inventory Management', 'Deprecated and undocumented endpoints reported when found during testing'],
  ['API10 · Unsafe Consumption of APIs', 'Injection through third-party data and webhook handlers'],
];

const lifecycle = [
  { s: 'New', c: 'crit', d: 'Proven and reproduced' },
  { s: 'Validated', c: 'high', d: 'Human-verified, ticket opened' },
  { s: 'Fixed', c: 'med', d: 'You request a retest or merge the fix' },
  { s: 'Retest passed', c: 'low', d: 'PoC replayed, closed with evidence' },
];

const faqs = [
  { q: 'Do I need to install anything?', a: 'No. For external web apps and APIs, testing runs from our infrastructure against your internet-facing assets. You allow-list our static IPs, give us test accounts and API specs, and we do the rest.' },
  { q: 'How do you avoid testing things we did not authorise?', a: 'Your approved scope is compiled into a network-level allow-list for each run’s isolated sandbox. Anything outside it is blocked and logged, regardless of what an AI agent decides. Newly discovered assets are only reported, and never tested until you approve them.' },
  { q: 'How is this different from DAST tools?', a: 'DAST tools crawl and match known patterns, usually as a single user. TensorShield tests as multiple roles, reasons about what each response means, chains steps together and proves exploitability, then a human verifies the result. That is how it finds access-control and logic flaws that scanners miss.' },
  { q: 'What happens when we fix something?', a: 'Request a retest in the portal, or mention the finding ID in your commit or pull request. We replay the proof through the same guardrails; if it no longer reproduces and the route was reached, the finding closes with retest evidence. On Audit-Ready engagements an engineer confirms the closure and issues a retest letter.' },
  { q: 'Can you test staging instead of production?', a: 'Yes, and for many teams that is the best choice. We recommend a staging environment that mirrors production, with production covered by safe, non-intrusive checks.' },
];

export default function PlatformPage() {
  return (
    <div className="pg-platform">
      <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'How TensorShield continuous pentesting works', url: `${SITE_URL}/platform` }, breadcrumbs([{ name: 'How it works', path: '/platform' }])]} />
      <PageHero
        eyebrow="How it works"
        title="An AI red team that never clocks out,"
        accent="with a human who signs off."
        lead="TensorShield combines deterministic security tooling, autonomous AI agents and experienced engineers into one continuous pipeline for your external web applications and APIs."
      >
        <div className="tldr reveal" style={{ marginTop: 36, maxWidth: 760 }}>
          <strong>In short</strong>
          We discover your attack surface, log in as every role, attack like a skilled adversary, keep only findings we can prove,
          have a human verify the serious ones, and repeat on a schedule and on every deploy.
        </div>
      </PageHero>

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pipe">
            {pipeline.map((p, i) => (
              <div className="pipe-step reveal" data-delay={String(i % 3)} key={p.t}>
                <div className="pipe-top"><span className="mono dim">0{i + 1}</span><div className="icon-tile"><Icon name={p.icon} /></div></div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Cadence</span>
            <h2>Tested on a schedule. <span className="serif grad">And on every change.</span></h2>
            <p className="muted big">Continuous doesn’t mean noisy. We baseline your application, then focus each run on what changed, so you hear about new risk in hours and never about the same issue twice.</p>
          </div>
          <div className="cadence">
            {cadence.map((c, i) => (
              <div className="cad reveal" data-delay={String(i)} key={c.t}>
                <span className="dot" />
                <div><h3>{c.t}</h3><p>{c.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Coverage</span>
            <h2>OWASP API Security Top 10, <span className="serif grad">tested end to end.</span></h2>
            <p>Alongside the OWASP Top 10:2025 and the OWASP Web Security Testing Guide, here is how each API risk is covered.</p>
          </div>
          <div className="table-wrap reveal">
            <table className="cov">
              <thead><tr><th>Risk</th><th>How TensorShield tests it</th></tr></thead>
              <tbody>{coverage.map(([r, h]) => <tr key={r}><td>{r}</td><td>{h}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="dim small reveal">Business-logic flaws, complex MFA/SSO flows and race conditions are assessed by a senior expert in every Audit-Ready Pentest.</p>
        </div>
      </section>

      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Finding lifecycle</span>
            <h2>From proof to closed, <span className="serif grad">with receipts.</span></h2>
            <p>Every state change is timestamped, which is exactly the evidence an auditor samples for remediation and retest.</p>
          </div>
          <div className="life">
            {lifecycle.map((l, i) => (
              <div className="life-step reveal" data-delay={String(i)} key={l.s}>
                <span className={`sev sev-${l.c}`}>{l.s}</span>
                <p>{l.d}</p>
                {i < lifecycle.length - 1 && <Icon name="arrow" className="life-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Onboarding</span>
            <h2>Live in days, <span className="serif grad">not weeks.</span></h2>
            <p className="muted big">There is nothing to install. Here is everything we need from you to start testing.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 12 }}>Book a free call <Icon name="arrow" /></Link>
          </div>
          <div className="card reveal" data-delay="1">
            <ul className="checks">
              <li>A signed authorisation letter and rules of engagement (we provide the templates)</li>
              <li>In-scope domains, API base URLs and any out-of-scope paths</li>
              <li>OpenAPI / Swagger or a Postman collection (a GraphQL schema or HAR walkthrough helps our engineers)</li>
              <li>Two test accounts per user role (two tenants for multi-tenant apps)</li>
              <li>Our static egress IPs allow-listed on your WAF and rate limiter</li>
              <li>A security contact and an emergency phone number</li>
              <li>Optional: a GitHub or CI deploy webhook, and who should receive email alerts</li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Platform questions" />
      <CTA />
    </div>
  );
}
