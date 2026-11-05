import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import './PageHero.css';

export default function PageHero({
  eyebrow, title, accent, lead, center = false, children,
}: { eyebrow: string; title: string; accent?: string; lead: string; center?: boolean; children?: ReactNode }) {
  return (
    <section className={cx('ts-pagehero', { center })}>
      <div className="bg-grid" />
      <div className="glow glow-lime" style={{ width: 600, height: 600, left: -200, top: -320 }} />
      <div className="glow glow-violet" style={{ width: 500, height: 500, right: -180, top: -200 }} />
      <div className="container rel">
        <span className="eyebrow">{eyebrow}</span>
        <h1>
          {title}
          {accent && <> <span className="serif grad">{accent}</span></>}
        </h1>
        <p className="lead">{lead}</p>
        {children}
      </div>
    </section>
  );
}
