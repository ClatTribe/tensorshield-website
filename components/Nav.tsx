'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from './Icon';
import Price from './Price';
import { continuous } from '@/lib/pricing';
import { solutions, compliancePages } from '@/lib/solutions';
import { cx } from '@/lib/cx';
import './Nav.css';

type Child = { href: string; label: string; desc: string };
const groups: { title: string; items: Child[] }[] = [
  { title: 'By team', items: solutions.filter((x) => x.group === 'By team').map((x) => ({ href: `/solutions/${x.slug}`, label: x.nav, desc: x.navDesc })) },
  { title: 'By industry', items: solutions.filter((x) => x.group === 'By industry').map((x) => ({ href: `/solutions/${x.slug}`, label: x.nav, desc: x.navDesc })) },
  { title: 'By compliance', items: compliancePages.map((x) => ({ href: x.href, label: x.nav, desc: x.navDesc })) },
];
const allChildren = groups.flatMap((g) => g.items);

type NavItem = { href?: string; label: string; mega?: boolean };
const links: NavItem[] = [
  { href: '/platform', label: 'How it works' },
  { label: 'Solutions', mega: true },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = (href?: string) => !!href && (path === href || path.startsWith(href + '/'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <>
      <Link className="ts-announce" href="/pricing">
        <span className="chip-new">Continuous</span>
        <span>
          Every release pentested, from <Price value={continuous.price} />/month. SOC 2 &amp; ISO 27001 report included
        </span>
        <Icon name="arrow" size={14} />
      </Link>

      <header className={cx('ts-nav', { scrolled: scrolled || open })}>
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" aria-label="TensorShield home">
            <Logo />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {links.map((l) =>
              l.mega ? (
                <div className="dd" key={l.label}>
                  <button className={cx('nav-link', { active: allChildren.some((c) => isActive(c.href)) })} aria-haspopup="true">
                    {l.label} <Icon name="chevron" size={14} />
                  </button>
                  <div className="dd-menu mega">
                    {groups.map((g) => (
                      <div className="dd-group" key={g.title}>
                        <p className="dd-group-title mono">{g.title}</p>
                        {g.items.map((c) => (
                          <Link href={c.href} className="dd-item" key={c.href}>
                            <span className="dd-title">{c.label}</span>
                            <span className="dd-desc">{c.desc}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={l.href!} key={l.href} className={cx('nav-link', { active: isActive(l.href) })}>
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="nav-cta">
            <Link href="/contact" className="btn btn-primary btn-sm">
              <span className="cta-long">Book a free call</span><span className="cta-short">Book a call</span> <Icon name="arrow" />
            </Link>
            <button className="burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
              <Icon name={open ? 'x' : 'menu'} size={22} />
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile">
            <div className="container">
              <Link href="/platform">How it works</Link>
              {groups.map((g) => (
                <div className="m-group" key={g.title}>
                  <p className="mono">{g.title}</p>
                  {g.items.map((c) => <Link href={c.href} key={c.href}>{c.label}</Link>)}
                </div>
              ))}
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/contact" className="btn btn-primary btn-block">
                Book a free call
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
