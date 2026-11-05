// Accessible FAQ built on <details>. Emits FAQPage JSON-LD so answers are eligible for rich results and AI citations.
import Link from 'next/link';
import JsonLd from './JsonLd';
import './FAQ.css';

export type QA = { q: string; a: string };

export default function FAQ({ items, title = 'Questions, answered', eyebrow = 'FAQ' }: { items: QA[]; title?: string; eyebrow?: string }) {
  return (
    <section className="section ts-faq" id="faq">
      <div className="container faq-wrap">
        <div className="faq-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p className="muted">
            Can’t find what you need? <Link className="link-arrow" href="/contact">Ask us directly</Link>
          </p>
        </div>
        <div className="faq-list">
          {items.map((i, n) => (
            <details className="faq reveal" open={n === 0} key={i.q}>
              <summary>
                <span>{i.q}</span>
                <span className="plus" aria-hidden="true" />
              </summary>
              <p>{i.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
        }}
      />
    </section>
  );
}
