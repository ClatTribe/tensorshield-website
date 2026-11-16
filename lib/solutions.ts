// Content for /solutions/[slug]. One template, four audiences.
import type { Offer } from './pricing';

export type Mock = 'matrix' | 'finding' | 'alert' | 'report';

export type Solution = {
  slug: string;
  group: 'By team' | 'By industry';
  nav: string;
  navDesc: string;
  title: string; // <title>
  description: string; // meta description
  eyebrow: string;
  h1: string;
  accent: string;
  lead: string;
  mock: Mock;
  pains: { icon: string; t: string; d: string }[];
  helpsTitle: [string, string];
  helps: { icon: string; t: string; d: string }[];
  stepsTitle: [string, string];
  steps: { t: string; d: string }[];
  plan: Offer['id'];
  planWhy: string;
  faqs: { q: string; a: string }[];
  cta: { title: string; text: string };
};

export const solutions: Solution[] = [
  {
    slug: 'startups',
    group: 'By team',
    nav: 'Startups',
    navDesc: 'Pass your first SOC 2, win enterprise deals',
    title: 'Pentesting for Startups: Pass SOC 2, Win Deals',
    description: 'Continuous AI pentesting for startups: pass SOC 2 and ISO 27001, answer security questionnaires with a signed report, and test every release.',
    eyebrow: 'For startups',
    h1: 'Close the enterprise deal.',
    accent: 'Pass your first audit.',
    lead: 'Your first big customer just sent a security questionnaire, and your SOC 2 auditor wants a pentest. TensorShield gives you a signed report now and keeps every release tested after it.',
    mock: 'report',
    pains: [
      { icon: 'file', t: 'The questionnaire arrived before your first security hire', d: '“Attach your latest penetration test report.” The deal is waiting on your answer.' },
      { icon: 'clock', t: 'Traditional firms are booked out for weeks', d: 'And they often quote $5,000–25,000 for a test that’s out of date by your next release.' },
      { icon: 'git', t: 'You ship daily with a small team', d: 'Nobody has time to triage scanner noise or babysit a pentest.' },
    ],
    helpsTitle: ['Security that helps you', 'win the next customer.'],
    helps: [
      { icon: 'file', t: 'A report you can send today', d: 'Signed VAPT report and one-page attestation letter that answers the “share your pentest” question in procurement.' },
      { icon: 'shield-check', t: 'SOC 2 and ISO 27001 evidence', d: 'Mapped to the controls your auditor samples, timed inside your audit window, with retests included.' },
      { icon: 'bolt', t: 'Testing that keeps up with you', d: 'AI agents test every release, so new code never sits untested until next year.' },
      { icon: 'plug', t: 'Zero extra work for engineers', d: 'Only verified issues reach your inbox, each with proof and a clear fix.' },
    ],
    stepsTitle: ['From questionnaire to', 'signed report in a week.'],
    steps: [
      { t: 'Tell us what the customer needs', d: 'Share the questionnaire or auditor request and your deadline. We agree scope on a 20-minute call.' },
      { t: 'We test', d: 'AI agents and a senior expert test your app and APIs. Critical issues reach you immediately.' },
      { t: 'Fix with clear guidance', d: 'Every finding comes with proof and a fix your engineers can ship the same day.' },
      { t: 'Send the signed report', d: 'Attach the report and attestation letter to the questionnaire. We retest for free after your fixes.' },
    ],
    plan: 'continuous',
    planWhy: 'Most startups choose Continuous: your yearly pentest for SOC 2 is included, and every release after it is tested.',
    faqs: [
      { q: 'We just need one report for a customer. Can we start there?', a: 'Yes. The Audit-Ready Pentest is a one-time, fixed-price test with a signed report in 5–7 business days. Many startups upgrade to Continuous after their first audit.' },
      { q: 'Do we need a SOC 2 before a pentest?', a: 'No. Many teams run the pentest first because it surfaces issues to fix before the audit, and the report becomes evidence once the audit starts.' },
      { q: 'How much engineering time does it take?', a: 'About an hour to set up test accounts and share your API docs. After that, your team only sees verified issues with clear fixes.' },
      { q: 'Is it safe to test our production app?', a: 'Yes. Testing is limited to what you authorise, nothing destructive runs, and you can stop us at any time. Many startups use a staging copy instead.' },
    ],
    cta: { title: 'Your next enterprise deal needs a pentest.', text: 'Book a free 20-minute call. Tell us the deadline and we’ll work back from it.' },
  },
  {
    slug: 'enterprise',
    group: 'By team',
    nav: 'Growing teams',
    navDesc: 'Every product, every release, one analyst',
    title: 'Continuous Pentesting for Growing Teams',
    description: 'Continuous AI pentesting across every app and API in your portfolio, with a named analyst, expert-verified findings and audit evidence on demand.',
    eyebrow: 'For growing teams',
    h1: 'Every product. Every release.',
    accent: 'One security partner.',
    lead: 'More products, more teams and more deploys than your security team can test by hand. TensorShield attacks your whole portfolio continuously and sends only what’s real.',
    mock: 'alert',
    pains: [
      { icon: 'layers', t: 'Your attack surface grows every sprint', d: 'New apps, APIs and subdomains appear faster than anyone can inventory them.' },
      { icon: 'users', t: 'A small security team, a lot of engineers', d: 'Annual pentests cover a sample. Everything else ships on trust.' },
      { icon: 'bug', t: 'Scanner noise buries the real risks', d: 'Hundreds of alerts, few of them exploitable, and no one has time to tell which.' },
    ],
    helpsTitle: ['Scale your offence', 'without scaling headcount.'],
    helps: [
      { icon: 'radar', t: 'Coverage across your portfolio', d: 'Every app and API you add is tested on a schedule and on every deploy, and anything new is only tested once you approve it.' },
      { icon: 'bolt', t: 'Deploy-triggered testing', d: 'Signed webhooks from GitHub or any CI pipeline start a quick run on whatever just shipped.' },
      { icon: 'users', t: 'A named security analyst', d: 'One expert who knows your products, reviews findings and joins your security reviews.' },
      { icon: 'file', t: 'Evidence for every framework', d: 'Monthly evidence reports and signed pentests for SOC 2, ISO 27001 and customer audits.' },
    ],
    stepsTitle: ['Live across your portfolio', 'in about two weeks.'],
    steps: [
      { t: 'Map your portfolio', d: 'We inventory your internet-facing apps and APIs and agree scope and priorities with you.' },
      { t: 'Connect your workflow', d: 'Deploy webhooks and per-team email alerts, so findings reach the right people.' },
      { t: 'Continuous testing begins', d: 'Scheduled runs plus deploy-triggered tests, with critical issues alerted within 12 hours.' },
      { t: 'Quarterly deep dives', d: 'Your analyst runs expert-led testing on your riskiest flows and reviews trends with you.' },
    ],
    plan: 'scale',
    planWhy: 'Scale covers up to 10 apps with a named analyst, 12-hour critical alerts and two signed pentests a year.',
    faqs: [
      { q: 'Can you replace our annual pentest vendor?', a: 'For web apps and APIs, yes: Scale includes two signed, expert-led pentests a year plus continuous testing in between. For internal networks or physical testing, keep your existing vendor.' },
      { q: 'How do you avoid testing assets we don’t own?', a: 'Scope is enforced at the network level. Newly discovered assets are reported to you and only tested after you approve them.' },
      { q: 'Can findings route to different teams?', a: 'Each team gets portal access and email alerts for the apps they own. Slack, Jira and Linear integrations are on our roadmap.' },
      { q: 'Do you support white-label reports?', a: 'For agencies and MSSPs on the Scale plan, talk to us: branded reports are on our roadmap.' },
    ],
    cta: { title: 'Test your whole portfolio, not a sample.', text: 'Book a free call. We’ll map your attack surface and show you what continuous coverage looks like.' },
  },
  {
    slug: 'fintech',
    group: 'By industry',
    nav: 'Fintech',
    navDesc: 'Payments, lending and banking APIs',
    title: 'Fintech Penetration Testing for APIs',
    description: 'Continuous pentesting for fintech: payment, lending and banking APIs tested every release for access-control and logic flaws. Signed VAPT reports.',
    eyebrow: 'For fintech',
    h1: 'Money moves through your APIs.',
    accent: 'So do attackers.',
    lead: 'Payment, lending and wallet APIs are the first thing attackers probe. TensorShield tests yours every release, as every user role, and proves what’s exploitable before it costs you money or a banking partner.',
    mock: 'matrix',
    pains: [
      { icon: 'api', t: 'API flaws are where the money is lost', d: 'One broken access check can let a user read another customer’s account or move their funds.' },
      { icon: 'users', t: 'Banking partners demand proof', d: 'Sponsor banks and enterprise clients ask for recent VAPT reports before they integrate.' },
      { icon: 'git', t: 'You can’t freeze releases for a pentest', d: 'Product ships weekly. Waiting months for the next test isn’t an option.' },
    ],
    helpsTitle: ['Built for the flaws', 'that cost fintechs money.'],
    helps: [
      { icon: 'users', t: 'Multi-role access-control testing', d: 'We replay every request as every role and tenant to catch account takeover and data exposure.' },
      { icon: 'bolt', t: 'Business-logic abuse', d: 'Agents probe limits, refunds, transfers and coupon flows for logic flaws scanners can’t see.' },
      { icon: 'file', t: 'Reports partners accept', d: 'Signed VAPT reports and attestation letters for sponsor banks, enterprise clients and SOC 2 or ISO 27001.' },
      { icon: 'lock', t: 'Safe on live systems', d: 'Nothing destructive, no real transactions, and strict rate limits. Staging environments preferred.' },
    ],
    stepsTitle: ['Continuous assurance', 'between your audits.'],
    steps: [
      { t: 'Scope your money flows', d: 'We map payment, lending and account APIs and agree which roles and tenants to test.' },
      { t: 'Test every release', d: 'Every deploy triggers a quick test run, with critical issues alerted within 24 hours.' },
      { t: 'Verify and fix', d: 'A senior expert confirms each serious finding and gives your team a precise fix.' },
      { t: 'Share the evidence', d: 'Signed reports for partners and auditors, plus quarterly evidence of continuous testing.' },
    ],
    plan: 'continuous',
    planWhy: 'Continuous includes your yearly signed VAPT report plus testing on every release of your APIs.',
    faqs: [
      { q: 'Are you CERT-In empanelled for RBI or SEBI audits?', a: 'Not yet. Where a regulator requires a CERT-In empanelled auditor, use one for that audit. TensorShield runs alongside it, testing every release so you stay secure between audits.' },
      { q: 'Does this cover PCI DSS penetration testing?', a: 'PCI DSS 11.4 requires a qualified, independent, human-led test. Our continuous testing helps you find and fix issues early, but use a PCI-qualified tester for the formal requirement.' },
      { q: 'Will testing create real transactions?', a: 'No. We test in staging or sandbox environments wherever possible and never execute real payments or transfers.' },
      { q: 'Can you test our mobile app’s APIs?', a: 'Yes. We test the APIs your mobile apps call, which is where most fintech vulnerabilities live.' },
    ],
    cta: { title: 'Find the API flaw before someone else does.', text: 'Book a free call. We’ll scope your payment and account APIs and show you how continuous testing works.' },
  },
  {
    slug: 'healthtech',
    group: 'By industry',
    nav: 'Healthtech',
    navDesc: 'Patient data, portals and clinical APIs',
    title: 'Healthtech Penetration Testing',
    description: 'Continuous pentesting for healthtech: patient portals and clinical APIs tested every release for data exposure. Signed reports for hospital reviews.',
    eyebrow: 'For healthtech',
    h1: 'Patient data deserves',
    accent: 'more than a yearly check.',
    lead: 'One exposed patient record can end a hospital contract. TensorShield tests your portals and APIs on every release and proves whether patient data can leak, before anyone else finds out.',
    mock: 'finding',
    pains: [
      { icon: 'lock', t: 'Health data is the most valuable data to steal', d: 'Patient records sell for more than card numbers, so healthtech apps are constant targets.' },
      { icon: 'file', t: 'Hospital customers run tough security reviews', d: 'They want a recent pentest, a remediation trail and proof that patient data is isolated.' },
      { icon: 'layers', t: 'Multi-tenant platforms, many roles', d: 'Patients, clinicians, admins and partners, each with different access, and one bug away from a breach.' },
    ],
    helpsTitle: ['Prove patient data', 'stays where it belongs.'],
    helps: [
      { icon: 'users', t: 'Tenant and role isolation testing', d: 'We test whether one patient, clinician or clinic can ever see another’s records.' },
      { icon: 'api', t: 'Clinical and integration APIs', d: 'FHIR-style APIs, telehealth, scheduling and partner integrations tested as real users would call them.' },
      { icon: 'file', t: 'Evidence for security reviews', d: 'Signed reports to support your HIPAA risk analysis, SOC 2, ISO 27001 and hospital vendor assessments.' },
      { icon: 'shield-check', t: 'Minimal data exposure', d: 'We prove an issue with the smallest possible access and never copy patient data out of your systems.' },
    ],
    stepsTitle: ['Ready for your next', 'hospital security review.'],
    steps: [
      { t: 'Scope patient-facing systems', d: 'Portals, apps and APIs that touch patient data, with test accounts for every role.' },
      { t: 'Test every release', d: 'AI agents attack each release for data exposure and access-control flaws.' },
      { t: 'Verify and fix', d: 'A senior expert confirms each serious finding, with a clear fix for your team.' },
      { t: 'Share signed evidence', d: 'Reports and attestation letters ready for hospital reviews and your compliance programme.' },
    ],
    plan: 'continuous',
    planWhy: 'Continuous includes your yearly signed pentest plus testing of every release that touches patient data.',
    faqs: [
      { q: 'Does HIPAA require a penetration test?', a: 'HIPAA requires regular risk analysis and evaluation of your technical safeguards. A pentest is not yet explicitly mandated, but it is the most common evidence hospitals and auditors expect.' },
      { q: 'Will you access real patient data?', a: 'We test with dedicated test accounts and data wherever possible. If a flaw exposes real data, we stop at the minimum proof needed and never extract it.' },
      { q: 'Can you sign a BAA or DPA?', a: 'We sign data processing agreements, and can discuss a BAA for US customers on the call.' },
      { q: 'Do you test mobile health apps?', a: 'We test the APIs your mobile apps use, which is where patient data is exposed in most cases.' },
    ],
    cta: { title: 'Prove your patient data is safe.', text: 'Book a free call. We’ll scope your patient-facing systems and plan testing around your next review.' },
  },
];

export const compliancePages = [
  { href: '/compliance/soc-2-penetration-testing', nav: 'SOC 2 pentest', navDesc: 'Evidence for Type I and Type II audits' },
  { href: '/compliance/iso-27001-penetration-testing', nav: 'ISO 27001 pentest', navDesc: 'Annex A 8.8 and 8.29 evidence' },
  { href: '/vapt-india', nav: 'VAPT in India', navDesc: 'Fixed INR pricing, VAPT certificate' },
];
