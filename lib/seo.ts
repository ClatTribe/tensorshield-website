import type { Metadata } from 'next';
import { site, SITE_URL } from './site';

// Per-page metadata: title, description, canonical, Open Graph and Twitter card.
export function pageMeta({ title, description, path, absoluteTitle = false, noindex = false }: {
  title: string; description: string; path: string; absoluteTitle?: boolean; noindex?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false } : undefined,
    openGraph: { title: fullTitle, description, url: path, siteName: site.name, type: 'website', images: [{ url: '/og.png', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title: fullTitle, description, images: ['/og.png'] },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((b, i) => ({
      '@type': 'ListItem', position: i + 1, name: b.name, item: new URL(b.path, SITE_URL).href,
    })),
  };
}

export const orgId = `${SITE_URL}/#organization`;
