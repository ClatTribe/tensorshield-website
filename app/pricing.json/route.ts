// /pricing.json: structured pricing for AI agents and comparison tools. Same source as the pricing page.
import { site, SITE_URL } from '@/lib/site';
import { offers, market } from '@/lib/pricing';

export const dynamic = 'force-static';

export function GET() {
  return new Response(
    JSON.stringify(
      {
        provider: site.name,
        url: `${SITE_URL}/pricing`,
        updated: site.updated,
        unit: 'per app (one web application plus the APIs it uses)',
        notes: ['INR prices exclude 18% GST', 'Fixed, published prices; no extra fees'],
        currencies: ['USD', 'INR'],
        offers,
        typicalMarketPrices: market,
        contact: { email: site.email, phone: site.phoneE164, booking: `${SITE_URL}/contact` },
      },
      null,
      2
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } }
  );
}
