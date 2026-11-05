import Link from 'next/link';
import Icon from './Icon';
import Price from './Price';
import CurrencyToggle from './CurrencyToggle';
import { offers } from '@/lib/pricing';
import { cx } from '@/lib/cx';
import './PricingCards.css';

export default function PricingCards() {
  return (
    <div className="ts-pricing">
      <div className="toggles">
        <CurrencyToggle />
      </div>

      <div className="offers">
        {offers.map((o) => (
          <article key={o.id} className={cx('offer', 'reveal', { featured: o.featured, 'card-glow': o.featured })}>
            {o.featured && <span className="badge">Most popular</span>}
            <p className="best mono">{o.bestFor}</p>
            <h3>{o.name}</h3>
            <p className="tagline">{o.tagline}</p>
            <div className="price">
              {o.from && <span className="from">from</span>}
              <Price value={o.price} className="amt" />
              <span className="per">{o.unit}</span>
            </div>
            <p className="billing">
              {o.yearly && <>Billed yearly at <Price value={o.yearly} /> · </>}
              {o.billing}
            </p>
            <Link href={`/contact?plan=${o.id}`} className={cx('btn', 'btn-block', o.featured ? 'btn-primary' : 'btn-ghost')}>
              {o.cta} <Icon name="arrow" />
            </Link>
            <ul className="checks">
              {o.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <p className="foot dim">
        <span className="p-inr">Prices exclude 18% GST. </span>An “app” is one web application and the APIs it uses. Not sure which fits?{' '}
        <Link href="/contact">Ask us</Link>, and we’ll tell you honestly.
      </p>
    </div>
  );
}
