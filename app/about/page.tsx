import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { site, SITE_URL } from '@/lib/site';
import { pageMeta, breadcrumbs, orgId } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'About TensorShield | Founded by Ashish Mishra',
  absoluteTitle: true,
  description: 'TensorShield was founded by Ashish Mishra, with 15+ years in cybersecurity at Google and Intel, to make continuous, audit-grade pentesting accessible.',
  path: '/about',
});

const principles = [
  { icon: 'target', t: 'Proof over noise', d: 'If we can’t demonstrate it, we don’t report it. Every finding ships with a working proof of concept and the evidence behind it.' },
  { icon: 'users', t: 'Humans stay accountable', d: 'AI tests relentlessly. A named, experienced engineer verifies what matters and signs what goes to your auditor.' },
  { icon: 'lock', t: 'Guardrails are infrastructure', d: 'Scope, rate limits and kill switches are enforced in the network, not left to a model’s judgment.' },
  { icon: 'eye', t: 'Radical transparency', d: 'We disclose how we use AI, which providers process data, and exactly what was tested, when and how.' },
];

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}/about`,
    mainEntity: {
      '@type': 'Person',
      '@id': `${SITE_URL}/about#founder`,
      name: site.founder.name,
      jobTitle: 'Founder',
      worksFor: { '@id': orgId },
      sameAs: [site.founder.linkedin],
      description: `${site.founder.name} is the founder of TensorShield, with more than 15 years of cybersecurity experience at Google and Intel.`,
      knowsAbout: ['Cybersecurity', 'Penetration testing', 'Application security', 'Cloud security', 'Security engineering'],
    },
  },
  breadcrumbs([{ name: 'About', path: '/about' }]),
];

export default function AboutPage() {
  return (
    <div className="pg-about">
      <JsonLd data={schema} />
      <PageHero
        eyebrow="About us"
        title="Security that moves as fast"
        accent="as you ship."
        lead="TensorShield exists to close the gap between how often software changes and how often it gets tested, without sacrificing the rigour that auditors, customers and security leaders depend on."
      />

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="profile reveal">
            <div className="glow glow-lime" style={{ width: 480, height: 480, left: -200, top: -200 }} />
            <div className="profile-card rel">
              <div className="avatar" aria-hidden="true">AM</div>
              <h2>{site.founder.name}</h2>
              <p className="role mono">Founder, TensorShield</p>
              <div className="creds">
                <span className="chip"><Icon name="shield" size={14} /> 15+ years in cybersecurity</span>
                <span className="chip"><Icon name="globe" size={14} /> Google</span>
                <span className="chip"><Icon name="server" size={14} /> Intel</span>
              </div>
              <a href={site.founder.linkedin} className="btn btn-ghost btn-sm" target="_blank" rel="noopener"><Icon name="linkedin" size={16} /> View LinkedIn profile</a>
            </div>
            <div className="profile-copy rel">
              <span className="eyebrow">Founder</span>
              <h3 className="lede">More than fifteen years defending systems at global scale, at Google and Intel.</h3>
              <p>
                {site.founder.name} has spent over 15 years in cybersecurity, building and securing systems at some of the world’s most
                demanding engineering organisations, including Google and Intel. That experience shaped a simple conviction: the
                attackers are already automated, and the defence has to be too.
              </p>
              <p>
                Most teams still buy security testing the way they did a decade ago: one engagement a year, a PDF weeks later, and a long
                gap until the next one. Meanwhile they ship every day. TensorShield combines AI agents that test continuously with the
                judgment of experienced engineers, so every release is tested and every report stands up to an auditor.
              </p>
              <p>Ashish leads TensorShield’s methodology, quality standards and sign-off, and works directly with every early customer.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What we believe</span>
            <h2>Four principles we <span className="serif grad">won’t trade away.</span></h2>
          </div>
          <div className="grid g4">
            {principles.map((p, i) => (
              <div className="card reveal" data-delay={String(i)} key={p.t}>
                <div className="icon-tile"><Icon name={p.icon} /></div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section divider">
        <div className="container mission reveal">
          <span className="eyebrow">Our mission</span>
          <p className="mission-text">
            Give every software team, from a five-person startup to a scaling enterprise, the{' '}
            <span className="serif grad">continuous, provable security testing</span> that used to be reserved for companies with a red team.
          </p>
          <div className="facts">
            <div><span className="mono dim">Headquarters</span><strong>{site.country}</strong></div>
            <div><span className="mono dim">Serving</span><strong>India, US, UK, EU, Middle East, APAC</strong></div>
            <div><span className="mono dim">Talk to us</span><strong><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a></strong></div>
            <div><span className="mono dim">Email</span><strong><a href={`mailto:${site.email}`}>{site.email}</a></strong></div>
          </div>
        </div>
      </section>

      <CTA title="Talk to the founder directly." text="Early customers work with Ashish directly on scoping, methodology and sign-off. Book a call, or just pick up the phone." />
    </div>
  );
}
