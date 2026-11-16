import Link from 'next/link';
import Icon from '@/components/Icon';
import Console from '@/components/Console';
import ContinuousLoop, { LoopSteps } from '@/components/ContinuousLoop';
import { MockAlert, MockFinding, MockMatrix, MockReport } from '@/components/Mockups';
import PricingCards from '@/components/PricingCards';
import Compare from '@/components/Compare';
import Price from '@/components/Price';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { site, SITE_URL } from '@/lib/site';
import { offers, pentest, continuous, fmt } from '@/lib/pricing';
import { solutions } from '@/lib/solutions';
import { pageMeta, orgId } from '@/lib/seo';
import './home.css';

export const metadata = pageMeta({
  title: 'TensorShield | Continuous AI Pentesting at Machine Speed',
  absoluteTitle: true,
  description: `Offense is the best defense. AI agents pentest your web apps and APIs on every release, experts verify findings, and your SOC 2 report is always ready.`,
  path: '/',
});

const solutionIcons: Record<string, string> = { startups: 'bolt', enterprise: 'layers', fintech: 'api', healthtech: 'shield-check' };

const faqs = [
  { q: 'What is continuous penetration testing?', a: 'Instead of one pentest a year, your application is attacked continuously: every week and every time you release new code. TensorShield’s AI agents do the testing, a senior expert verifies what they find, and you always have recent, signed evidence for auditors and customers.' },
  { q: 'Why “offense is the best defense”?', a: 'Attackers already use automation and AI to probe new code within hours of release. The only way to stay ahead is to attack your own systems first, continuously, and fix what you find before anyone else can use it.' },
  { q: 'How is this different from a vulnerability scanner?', a: 'Scanners match known patterns and report possibilities, often with many false alarms. Our agents log in as real users, chain steps together and prove what is actually exploitable, and a human expert confirms every serious finding. Auditors treat the result as a pentest, not a scan.' },
  { q: 'Will my SOC 2 or ISO 27001 auditor accept it?', a: 'Continuous plans include a signed yearly VAPT report built around what auditors check: scope, methodology, proof, retest and a named signer, plus quarterly evidence reports. The final call is always your auditor’s, so we’re happy to walk them through our approach before your audit.' },
  { q: 'What if I only need a one-time pentest report?', a: `We offer that too: the Audit-Ready Pentest is ${fmt('inr', pentest.price.inr)} / ${fmt('usd', pentest.price.usd)} per app, with a signed report in 5–7 business days. Continuous includes that yearly pentest and keeps testing every release after it.` },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'TensorShield Continuous Penetration Testing',
  serviceType: 'Continuous penetration testing (PTaaS) for web applications and APIs',
  provider: { '@id': orgId },
  areaServed: 'Worldwide',
  description: site.description,
  offers: offers.map((o) => ({ '@type': 'Offer', name: o.name, price: o.price.usd, priceCurrency: 'USD', url: `${SITE_URL}/pricing` })),
};

export default function Home() {
  return (
    <div className="pg-home">
      <JsonLd data={schema} />

      {/* HERO */}
      <section className="hero">
        <div className="bg-grid" />
        <div className="glow glow-lime" style={{ width: 760, height: 760, left: '50%', top: -420, transform: 'translateX(-60%)' }} />
        <div className="glow glow-violet" style={{ width: 520, height: 520, right: -160, top: 120 }} />
        <div className="glow glow-cyan" style={{ width: 520, height: 520, left: -200, top: 300 }} />

        <div className="container rel hero-inner">
          <span className="chip hero-chip rise"><span className="dot pulse" /> Security at machine speed</span>
          <h1>
            Always-on pentesting.
            <br />
            Audit-ready <span className="serif grad">on demand.</span>
          </h1>
          <p className="hero-lead">
            AI agents pentest your web apps and APIs <strong>every time you ship</strong>. Experts verify every serious finding.
            Your SOC 2 and ISO 27001 report is always ready.
          </p>
          <div className="hero-actions rise" style={{ animationDelay: '.1s' }}>
            <Link href="/contact?plan=continuous" className="btn btn-primary">Start continuous testing <Icon name="arrow" /></Link>
            <Link href="#pricing" className="btn btn-ghost">See pricing</Link>
          </div>
          <ul className="hero-ticks rise" style={{ animationDelay: '.18s' }}>
            <li className="built"><Icon name="shield-check" size={16} /> <span>Built by <strong>ex-Google engineers</strong></span></li>
            <li><Icon name="check" size={16} /> <span>Every release tested, not once a year</span></li>
            <li><Icon name="check" size={16} /> <span>From <strong><Price value={continuous.price} />/month</strong></span></li>
          </ul>

          <div className="hero-visual rise" style={{ animationDelay: '.25s' }} data-llms-skip="">
            <div className="float f1"><span className="sev sev-crit">crit</span> Found 3h after release</div>
            <div className="float f2"><Icon name="refresh" size={14} /> Fix verified · retest passed</div>
            <div className="float f3"><Icon name="file" size={14} /> SOC 2 evidence ready</div>
            <Console />
          </div>
        </div>
      </section>

      {/* OFFENSE IS THE BEST DEFENSE + CONTINUOUS LOOP */}
      <section className="section divider offense">
        <div className="glow glow-lime" style={{ width: 640, height: 640, right: -160, top: '8%' }} />
        <div className="container rel offense-grid">
          <div className="reveal">
            <span className="eyebrow">Offense is the best defense</span>
            <h2>Attack yourself first. <span className="serif grad">Every release.</span></h2>
            <p className="muted big">
              Attackers already use AI to probe new code within hours of release. TensorShield runs the same playbook on your apps,
              continuously, so you find the hole before they do.
            </p>
            <LoopSteps />
          </div>
          <div className="reveal" data-delay="1" data-llms-skip="">
            <ContinuousLoop />
          </div>
        </div>
      </section>

      {/* PRODUCT BENTO */}
      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">What you get</span>
            <h2>From release to proof, <span className="serif grad">without lifting a finger.</span></h2>
            <p>Real attacks, verified findings, alerts where your team works, and audit evidence that writes itself.</p>
          </div>
          <div className="bento" data-llms-skip="">
            <article className="tile reveal">
              <div className="tile-copy">
                <h3>Finds the bugs scanners miss</h3>
                <p>Our agents log in as every user role and try each other’s data, exactly how real breaches happen.</p>
              </div>
              <MockMatrix />
            </article>
            <article className="tile reveal" data-delay="1">
              <div className="tile-copy">
                <h3>Only proven, expert-verified issues</h3>
                <p>Every serious finding comes with proof, impact and a fix, confirmed by a senior expert.</p>
              </div>
              <MockFinding />
            </article>
            <article className="tile reveal">
              <div className="tile-copy">
                <h3>Critical issues in hours, where you work</h3>
                <p>Alerts reach you by email and in the portal. Merge the fix and the retest runs on its own.</p>
              </div>
              <MockAlert />
            </article>
            <article className="tile reveal" data-delay="1">
              <div className="tile-copy">
                <h3>Audit evidence that writes itself</h3>
                <p>Signed reports mapped to SOC 2 and ISO 27001, ready whenever an auditor or customer asks.</p>
              </div>
              <MockReport />
            </article>
          </div>
        </div>
      </section>

      {/* WHY: TIMELINE + COMPARE */}
      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why continuous</span>
            <h2>Your annual pentest expires <span className="serif grad">on the next deploy.</span></h2>
            <p>A traditional pentest checks one week of your year. You ship every week. Everything after it is untested until an attacker, or your next auditor, finds what changed.</p>
          </div>

          <div className="timeline reveal">
            <div className="tl-row">
              <div className="tl-label"><span>Annual pentest</span><small className="dim">tested once · findings weeks later</small></div>
              <div className="tl-track">
                <span className="tl-hit tl-annual" style={{ left: '2%' }} />
                <span className="tl-gap">~51 weeks of releases, untested</span>
              </div>
            </div>
            <div className="tl-row">
              <div className="tl-label"><span className="grad">TensorShield</span><small className="dim">every week · every release</small></div>
              <div className="tl-track live">
                {Array.from({ length: 52 }).map((_, i) => (
                  <span key={i} className="tl-hit" style={{ left: `${2 + i * 1.86}%`, animationDelay: `${i * 40}ms` }} />
                ))}
              </div>
            </div>
            <div className="tl-axis mono dim"><span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span></div>
          </div>

          <div className="compare-wrap">
            <Compare />
          </div>
          <div className="grid g3 why">
            <div className="card reveal"><div className="icon-tile"><Icon name="shield-check" /></div><h3>Built by ex-Google engineers</h3><p>Led by a founder with 15+ years in cybersecurity at Google and Intel. A senior expert verifies every serious finding.</p></div>
            <div className="card reveal" data-delay="1"><div className="icon-tile"><Icon name="target" /></div><h3>Only proven issues</h3><p>If we can’t demonstrate it, we don’t report it. Your engineers get real problems with clear fixes, not noise.</p></div>
            <div className="card reveal" data-delay="2"><div className="icon-tile"><Icon name="lock" /></div><h3>Safe by design</h3><p>We test only what you authorise in writing, never run destructive attacks, and you can stop us with one call. <Link href="/trust" className="inline">How we stay safe</Link></p></div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Solutions</span>
            <h2>Built for teams <span className="serif grad">like yours.</span></h2>
          </div>
          <div className="grid g4 sols">
            {solutions.map((s, i) => (
              <Link href={`/solutions/${s.slug}`} className="card sol reveal" data-delay={String(i)} key={s.slug}>
                <div className="icon-tile"><Icon name={solutionIcons[s.slug] ?? 'sparkle'} /></div>
                <p className="mono dim sol-group">{s.group}</p>
                <h3>{s.nav}</h3>
                <p>{s.navDesc}</p>
                <span className="link-arrow">Learn more <Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section divider" id="pricing">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Pricing</span>
            <h2>Fixed prices. <span className="serif grad">No surprise quotes.</span></h2>
            <p>Continuous testing for less than most teams pay for a single annual pentest, with that yearly pentest included.</p>
          </div>
          <PricingCards />
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section divider">
        <div className="container">
          <div className="founder card reveal">
            <div className="glow glow-violet" style={{ width: 420, height: 420, right: -120, top: -160 }} />
            <div className="avatar rel" aria-hidden="true">AM</div>
            <div className="rel">
              <span className="eyebrow">Built by a practitioner</span>
              <p className="founder-quote">
                “Most teams test once a year and ship every week. We built TensorShield so every release is tested, and every report
                stands up to an auditor.”
              </p>
              <div className="founder-meta">
                <div>
                  <strong>{site.founder.name}</strong>
                  <span className="muted">Founder · 15+ years in cybersecurity at Google and Intel</span>
                </div>
                <a href={site.founder.linkedin} className="btn btn-ghost btn-sm" target="_blank" rel="noopener"><Icon name="linkedin" size={16} /> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={faqs} />
      <CTA title="Offense is the best defense. Start today." text="Book a free 20-minute call. We’ll scope your apps, give you a fixed price, and have our agents attacking them within days." />
    </div>
  );
}
