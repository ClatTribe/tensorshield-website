import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { site } from '@/lib/site';
import './Footer.css';

const cols = [
  { title: 'Product', links: [['/platform', 'How it works'], ['/pricing', 'Pricing'], ['/trust', 'Trust & safety'], ['/contact', 'Book a free call']] },
  { title: 'Solutions', links: [['/solutions/startups', 'Startups'], ['/solutions/enterprise', 'Growing teams'], ['/solutions/fintech', 'Fintech'], ['/solutions/healthtech', 'Healthtech']] },
  { title: 'Compliance', links: [['/compliance/soc-2-penetration-testing', 'SOC 2 penetration testing'], ['/compliance/iso-27001-penetration-testing', 'ISO 27001 penetration testing'], ['/vapt-india', 'VAPT services in India']] },
  { title: 'Company', links: [['/about', 'About'], ['/contact', 'Contact'], ['/legal/responsible-disclosure', 'Responsible disclosure'], ['/llms.txt', 'llms.txt']] },
  { title: 'Legal', links: [['/legal/privacy', 'Privacy policy'], ['/legal/terms', 'Terms of service'], ['/legal/refunds', 'Cancellation & refunds']] },
];

export default function Footer() {
  const ids = [site.legal.cin && `CIN ${site.legal.cin}`, site.legal.gstin && `GSTIN ${site.legal.gstin}`, site.legal.address].filter(Boolean);
  return (
    <footer className="ts-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo />
            <p>Continuous AI pentesting for web apps and APIs, built by ex-Google engineers. Every report signed by a senior expert.</p>
            <div className="footer-contact">
              <a href={`tel:${site.phoneE164}`}><Icon name="phone" size={16} /> {site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}><Icon name="mail" size={16} /> {site.email}</a>
              <a href={site.founder.linkedin} target="_blank" rel="noopener"><Icon name="linkedin" size={16} /> LinkedIn</a>
            </div>
          </div>
          {cols.map((c) => (
            <div className="footer-col" key={c.title}>
              <h4>{c.title}</h4>
              <ul>
                {c.links.map(([href, label]) => (
                  <li key={href + label}>{href.endsWith('.txt') ? <a href={href}>{label}</a> : <Link href={href}>{label}</Link>}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.legal.entity || site.name}. All rights reserved.{ids.length > 0 && ` · ${ids.join(' · ')}`}</span>
          <span className="status"><span className="dot pulse" /> Testing only with written authorisation</span>
        </div>
      </div>
    </footer>
  );
}
