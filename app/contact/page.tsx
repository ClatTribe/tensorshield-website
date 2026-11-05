import { Suspense } from 'react';
import PageHero from '@/components/PageHero';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';
import { site, SITE_URL } from '@/lib/site';
import { pageMeta, breadcrumbs, orgId } from '@/lib/seo';
import './contact.css';

export const metadata = pageMeta({
  title: 'Contact TensorShield: Book a Free Call',
  description: `Book a free 20-minute call about continuous pentesting or a SOC 2 / ISO 27001 VAPT report. Call ${site.phoneDisplay} or email ${site.email}.`,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pg-contact">
      <JsonLd data={[{ '@context': 'https://schema.org', '@type': 'ContactPage', url: `${SITE_URL}/contact`, mainEntity: { '@id': orgId } }, breadcrumbs([{ name: 'Contact', path: '/contact' }])]} />
      <PageHero
        eyebrow="Contact"
        title="Let’s scope your"
        accent="first test."
        lead="Tell us about your apps and your audit timeline. We reply within one business day with next steps, usually a 20-minute call and a fixed quote the same day."
      />

      <section className="section-tight" style={{ paddingTop: 0 }}>
        <div className="container contact">
          <aside className="channels">
            <a className="channel card reveal" href={`tel:${site.phoneE164}`}>
              <div className="icon-tile"><Icon name="phone" /></div>
              <div><span className="mono dim">Call us</span><strong>{site.phoneDisplay}</strong><small className="dim">{site.hours}</small></div>
            </a>
            <a className="channel card reveal" data-delay="1" href={`mailto:${site.email}?subject=TensorShield%20enquiry`}>
              <div className="icon-tile"><Icon name="mail" /></div>
              <div><span className="mono dim">Email</span><strong>{site.email}</strong><small className="dim">Replies within one business day</small></div>
            </a>
            <a className="channel card reveal" data-delay="2" href={site.whatsapp} target="_blank" rel="noopener">
              <div className="icon-tile"><Icon name="whatsapp" /></div>
              <div><span className="mono dim">WhatsApp</span><strong>Message us</strong><small className="dim">Quick questions, any time</small></div>
            </a>
            <a className="channel card reveal" data-delay="3" href={site.founder.linkedin} target="_blank" rel="noopener">
              <div className="icon-tile"><Icon name="linkedin" /></div>
              <div><span className="mono dim">Founder</span><strong>{site.founder.name}</strong><small className="dim">Connect on LinkedIn</small></div>
            </a>
            <div className="security-note reveal">
              <Icon name="shield-check" size={18} />
              <p>Found a vulnerability in TensorShield? Please follow our <a href="/legal/responsible-disclosure">responsible disclosure policy</a>.</p>
            </div>
          </aside>

          <Suspense>
            <ContactForm email={site.email} phone={site.phoneDisplay} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
