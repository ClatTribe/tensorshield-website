// RFC 9116 security.txt. Expires is set one year from build; redeploy at least yearly.
import { site, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const expires = new Date(Date.now() + 365 * 24 * 3600 * 1000).toISOString().replace(/\.\d{3}Z$/, 'Z');
  return new Response(
    `Contact: mailto:${site.email}
Contact: tel:${site.phoneE164}
Expires: ${expires}
Policy: ${SITE_URL}/legal/responsible-disclosure
Preferred-Languages: en, hi
Canonical: ${SITE_URL}/.well-known/security.txt
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
}
