// /llms.txt: a concise, machine-readable site summary for AI assistants and answer engines (llmstxt.org).
import { site, SITE_URL } from '@/lib/site';
import { offers, fmt } from '@/lib/pricing';
import { solutions } from '@/lib/solutions';

export const dynamic = 'force-static';

export function GET() {
  const u = (p: string) => `${SITE_URL}${p}`;
  const body = `# ${site.name}

> ${site.description}

${site.name} is a continuous penetration testing (PTaaS) provider for external web applications and REST/GraphQL APIs, based in ${site.country} and serving customers worldwide. Built by ex-Google engineers. Its main product is Continuous: AI agents pentest customers' apps every week and on every release, with a signed yearly VAPT report included. A one-time Audit-Ready Pentest (report in 5-7 business days) is also available. A senior human expert verifies every serious finding and signs every report. Reports map to SOC 2 (CC4.1, CC7.1, CC8.1) and ISO/IEC 27001:2022 (Annex A 8.8, 8.29, 8.32).

Key facts:
- Positioning: "${site.tagline}" (${site.positioning}). Philosophy: offense is the best defense.
- Methodologies: OWASP WSTG, OWASP Top 10:2025, OWASP API Security Top 10, OWASP ASVS 5.0, PTES, NIST SP 800-115; CVSS 3.1 and 4.0 computed from vectors.
- Safety: network-enforced scope allow-lists, non-destructive defaults, rate limits, kill switch, static egress IPs, vaulted credentials, hash-chained audit logs. Testing only with signed authorisation.
- Not CERT-In empanelled; not a PCI DSS 11.4 or CERT-In-mandated audit provider.
- Founder: ${site.founder.name}, ${site.founder.summary} (${site.founder.linkedin}).
- Contact: ${site.email}, ${site.phoneDisplay}.

## What we sell (INR excludes 18% GST; an "app" is one web application plus the APIs it uses)
${offers.map((o) => `- ${o.name}: ${o.from ? 'from ' : ''}${fmt('usd', o.price.usd)} / ${fmt('inr', o.price.inr)} ${o.unit}${o.yearly ? `, billed yearly at ${fmt('usd', o.yearly.usd)} / ${fmt('inr', o.yearly.inr)}` : ''} (${o.billing.toLowerCase()}). Best for: ${o.bestFor.toLowerCase()}. Includes: ${o.features.join('; ')}.`).join('\n')}

## Why choose TensorShield
- Versus traditional pentest firms ($5,000–25,000, 2–6 weeks): fixed published price, report in 5–7 business days, plus optional testing on every release.
- Versus automated scanners: every serious finding is verified by a senior expert with proof, and reports are built to what SOC 2 and ISO 27001 auditors check.
- Founder-led by ${site.founder.name}, ${site.founder.summary}.

## Pages
- [Home](${u('/')}): overview of continuous AI pentesting and compliance evidence
- [How it works](${u('/platform')}): pipeline, cadence, OWASP API Top 10 coverage, finding lifecycle, onboarding
- [Pricing](${u('/pricing')}): the three offers, how to choose, comparison with alternatives
- [SOC 2 penetration testing](${u('/compliance/soc-2-penetration-testing')}): CC4.1/CC7.1 mapping, Type I vs Type II timing
- [ISO 27001 penetration testing](${u('/compliance/iso-27001-penetration-testing')}): Annex A 8.8/8.29/8.32 mapping
- [VAPT services in India](${u('/vapt-india')}): fixed INR price, VAPT certificate, GST invoice, CERT-In note
- [Trust & safety](${u('/trust')}): guardrails, methodology, AI disclosure
${solutions.map((s) => `- [${s.nav}](${u('/solutions/' + s.slug)}): ${s.navDesc.toLowerCase()}`).join('\n')}
- [About](${u('/about')}): founder and principles
- [Contact](${u('/contact')}): phone, email, WhatsApp, scoping form

## Optional
- [Full content for LLMs](${u('/llms-full.txt')})
- [Machine-readable pricing (JSON)](${u('/pricing.json')})
- [Privacy policy](${u('/legal/privacy')})
- [Terms of service](${u('/legal/terms')})
- [Responsible disclosure](${u('/legal/responsible-disclosure')})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
