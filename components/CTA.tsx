import Link from 'next/link';
import Icon from './Icon';
import { site } from '@/lib/site';
import './CTA.css';

export default function CTA({
  title = 'See what an attacker sees. Before your auditor asks.',
  text = 'Tell us about your apps and audit window. We will scope it on a 20-minute call and send a fixed quote the same day.',
}: { title?: string; text?: string }) {
  return (
    <section className="section-tight ts-cta">
      <div className="container">
        <div className="cta reveal">
          <div className="bg-grid" />
          <div className="glow glow-lime" style={{ width: 520, height: 520, left: -120, top: -260 }} />
          <div className="glow glow-cyan" style={{ width: 480, height: 480, right: -140, bottom: -280 }} />
          <div className="cta-inner rel">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn btn-primary">Book a free call <Icon name="arrow" /></Link>
              <a href={`tel:${site.phoneE164}`} className="btn btn-ghost"><Icon name="phone" /> {site.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
