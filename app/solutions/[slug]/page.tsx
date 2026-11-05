import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import Price from '@/components/Price';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { MockAlert, MockFinding, MockMatrix, MockReport } from '@/components/Mockups';
import { solutions, type Mock } from '@/lib/solutions';
import { offers } from '@/lib/pricing';
import { SITE_URL } from '@/lib/site';
import { pageMeta, breadcrumbs, orgId } from '@/lib/seo';
import './solution.css';

const mocks: Record<Mock, () => React.ReactElement> = { matrix: MockMatrix, finding: MockFinding, alert: MockAlert, report: MockReport };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta({ title: s.title, description: s.description, path: `/solutions/${s.slug}` });
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = solutions.find((x) => x.slug === slug);
  if (!s) notFound();
  const Mockup = mocks[s.mock];
  const plan = offers.find((o) => o.id === s.plan)!;

  return (
    <div className="pg-solution">
      <JsonLd
        data={[
          { '@context': 'https://schema.org', '@type': 'Service', name: s.title, serviceType: 'Continuous penetration testing', provider: { '@id': orgId }, url: `${SITE_URL}/solutions/${s.slug}`, audience: { '@type': 'Audience', audienceType: s.nav } },
          breadcrumbs([{ name: 'Solutions', path: `/solutions/${s.slug}` }, { name: s.nav, path: `/solutions/${s.slug}` }]),
        ]}
      />

      {/* HERO */}
      <section className="sol-hero">
        <div className="bg-grid" />
        <div className="glow glow-lime" style={{ width: 640, height: 640, left: -220, top: -340 }} />
        <div className="glow glow-violet" style={{ width: 520, height: 520, right: -200, top: -120 }} />
        <div className="container rel sol-hero-grid">
          <div>
            <span className="eyebrow">{s.eyebrow}</span>
            <h1>{s.h1} <span className="serif grad">{s.accent}</span></h1>
            <p className="lead">{s.lead}</p>
            <div className="hero-row">
              <Link href={`/contact?plan=${s.plan}`} className="btn btn-primary">Book a free call <Icon name="arrow" /></Link>
              <Link href="/pricing" className="btn btn-ghost">See pricing</Link>
            </div>
            <p className="built"><Icon name="shield-check" size={16} /> Built by ex-Google engineers · Offense is the best defense</p>
          </div>
          <div className="sol-mock rise" style={{ animationDelay: '.15s' }}>
            <Mockup />
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Sound familiar?</span>
            <h2>The problem isn’t effort. <span className="serif grad">It’s timing.</span></h2>
          </div>
          <div className="grid g3">
            {s.pains.map((p, i) => (
              <div className="card reveal" data-delay={String(i)} key={p.t}>
                <div className="icon-tile"><Icon name={p.icon} /></div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How TensorShield helps</span>
            <h2>{s.helpsTitle[0]} <span className="serif grad">{s.helpsTitle[1]}</span></h2>
          </div>
          <div className="grid g2 helps">
            {s.helps.map((h, i) => (
              <div className="card help reveal" data-delay={String(i % 2)} key={h.t}>
                <div className="icon-tile"><Icon name={h.icon} /></div>
                <div>
                  <h3>{h.t}</h3>
                  <p>{h.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section divider">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How it works</span>
            <h2>{s.stepsTitle[0]} <span className="serif grad">{s.stepsTitle[1]}</span></h2>
          </div>
          <ol className="sol-steps">
            {s.steps.map((st, i) => (
              <li className="reveal" data-delay={String(i)} key={st.t}>
                <span className="num mono">0{i + 1}</span>
                <h3>{st.t}</h3>
                <p>{st.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RECOMMENDED PLAN */}
      <section className="section divider">
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">Recommended plan</span>
            <h2>{plan.name}</h2>
            <p className="muted big">{s.planWhy}</p>
            <Link href="/pricing" className="link-arrow">Compare all plans <Icon name="arrow" /></Link>
          </div>
          <div className="card card-glow plan-card reveal" data-delay="1">
            <p className="mono label">{plan.bestFor}</p>
            <p className="amount">
              {plan.from && <small>from </small>}<Price value={plan.price} /> <span>{plan.unit}</span>
            </p>
            <p className="billing dim">{plan.yearly ? <>Billed yearly at <Price value={plan.yearly} /> · </> : null}{plan.billing}<span className="p-inr"> · + GST</span></p>
            <ul className="checks">{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <Link href={`/contact?plan=${plan.id}`} className="btn btn-primary btn-block">{plan.cta} <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      <FAQ items={s.faqs} title={`${s.nav}: common questions`} />
      <CTA title={s.cta.title} text={s.cta.text} />
    </div>
  );
}
