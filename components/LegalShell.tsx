import type { ReactNode } from 'react';
import JsonLd from './JsonLd';
import { site } from '@/lib/site';
import { breadcrumbs } from '@/lib/seo';

export default function LegalShell({ title, path, children }: { title: string; path: string; children: ReactNode }) {
  return (
    <div className="pg-legal">
      <JsonLd data={breadcrumbs([{ name: title, path }])} />
      <section className="legal-hero">
        <div className="bg-grid" />
        <div className="container narrow rel">
          <span className="eyebrow">Legal</span>
          <h1>{title}</h1>
          <p className="dim mono">Last updated {site.updated}</p>
        </div>
      </section>
      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container narrow prose">{children}</div>
      </section>
    </div>
  );
}
