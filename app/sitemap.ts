import type { MetadataRoute } from 'next';
import { site, SITE_URL } from '@/lib/site';
import { solutions } from '@/lib/solutions';

const pages: [string, number][] = [
  ['/', 1],
  ['/pricing', 0.9],
  ['/platform', 0.8],
  ['/compliance/soc-2-penetration-testing', 0.8],
  ['/compliance/iso-27001-penetration-testing', 0.8],
  ['/vapt-india', 0.8],
  ...solutions.map((s): [string, number] => [`/solutions/${s.slug}`, 0.8]),
  ['/about', 0.6],
  ['/contact', 0.7],
  ['/trust', 0.6],
  ['/legal/privacy', 0.2],
  ['/legal/terms', 0.2],
  ['/legal/refunds', 0.2],
  ['/legal/responsible-disclosure', 0.2],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, priority]) => ({ url: `${SITE_URL}${path === '/' ? '' : path}`, lastModified: site.updated, priority }));
}
