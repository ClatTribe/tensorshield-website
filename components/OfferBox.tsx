// The one-time pentest offer, shown on compliance landing pages.
import Link from 'next/link';
import Icon from './Icon';
import Price from './Price';
import { pentest, continuous } from '@/lib/pricing';
import './OfferBox.css';

export default function OfferBox({
  title = 'One fixed price.',
  lead = 'Testing, report, signed attestation letter and one retest. Nothing extra.',
}: { title?: string; lead?: string }) {
  return (
    <section className="section divider ts-offerbox">
      <div className="container ob">
        <div className="reveal">
          <span className="eyebrow">Price</span>
          <h2>{title}</h2>
          <p className="muted big">{lead}</p>
        </div>
        <div className="card card-glow reveal" data-delay="1">
          <p className="mono label">{pentest.name}</p>
          <p className="amount">
            <Price value={pentest.price} /> <span>per app<span className="p-inr"> + GST</span></span>
          </p>
          <ul className="checks">{pentest.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <Link href="/contact?plan=pentest" className="btn btn-primary btn-block">Book my pentest <Icon name="arrow" /></Link>
          <p className="alt">
            Ship every week? <Link href="/pricing">Continuous</Link> includes this yearly pentest plus testing on every release, from{' '}
            <Price value={continuous.price} />/month.
          </p>
        </div>
      </div>
    </section>
  );
}
