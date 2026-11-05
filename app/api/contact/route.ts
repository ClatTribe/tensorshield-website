// POST /api/contact: sends the call-booking form to the team inbox via Resend (https://resend.com).
// Env vars (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  required to send; without it the endpoint returns 503 and the page falls back to mailto
//   CONTACT_TO      defaults to tensorshield@gmail.com
//   CONTACT_FROM    defaults to "TensorShield <onboarding@resend.dev>" (use a verified domain sender in production)
//   SHEET_WEBHOOK_URL  Google Apps Script web app URL; each lead is also added as a row in the Google Sheet

const MAX = { name: 120, email: 160, company: 160, phone: 40, country: 80, message: 3000, other: 200 };

const clean = (v: unknown, max: number) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
const json = (body: unknown, status = 200) => Response.json(body, { status });

// Best-effort spam brake: max 5 submissions per IP per 10 minutes on each warm instance.
// For stronger protection, enable Vercel Firewall rate limiting or BotID on /api/contact.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return json({ error: 'Too many requests' }, 429);
  if (Number(req.headers.get('content-length') ?? 0) > 20_000) return json({ error: 'Payload too large' }, 413);

  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch {}

  // Honeypot: bots fill hidden fields. Pretend success.
  if (body.website) return json({ ok: true });

  const lead: Record<string, string> = {
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    company: clean(body.company, MAX.company),
    phone: clean(body.phone, MAX.phone),
    country: clean(body.country, MAX.country),
    interest: clean(body.interest, MAX.other),
    apps: clean(body.apps, MAX.other),
    deadline: clean(body.deadline, MAX.other),
    drivers: (Array.isArray(body.drivers) ? body.drivers : []).slice(0, 10).map((d) => clean(d, 60)).join(', '),
    plan: clean(body.plan, 40),
    page: clean(body.page, 120),
    message: clean(body.message, MAX.message),
    authorised: body.authorised ? 'yes' : 'no',
  };

  if (!lead.name || !lead.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email) || lead.authorised !== 'yes') {
    return json({ error: 'Missing or invalid fields' }, 400);
  }

  const key = process.env.RESEND_API_KEY;
  const sheet = process.env.SHEET_WEBHOOK_URL;
  if (!key && !sheet) return json({ error: 'Lead delivery not configured' }, 503);

  // Google Sheet: one row per lead (Apps Script web app). Runs alongside the email.
  let savedToSheet = false;
  if (sheet) {
    try {
      const s = await fetch(sheet, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ received_at: new Date().toISOString(), ...lead }),
        signal: AbortSignal.timeout(8000),
      });
      savedToSheet = s.ok;
    } catch {}
  }
  if (!key) return savedToSheet ? json({ ok: true }) : json({ error: 'Sheet delivery failed' }, 502);

  const filled = Object.entries(lead).filter(([, v]) => v);
  const rows = filled
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#667;vertical-align:top">${esc(k)}</td><td style="padding:6px 12px">${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');

  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'TensorShield <onboarding@resend.dev>',
      to: [process.env.CONTACT_TO || 'tensorshield@gmail.com'],
      reply_to: lead.email,
      subject: `New call request: ${lead.company} (${lead.interest || 'general'})`,
      html: `<h2 style="font-family:sans-serif">New TensorShield lead</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
      text: filled.map(([k, v]) => `${k}: ${v}`).join('\n'),
    }),
  });

  if (!r.ok && !savedToSheet) return json({ error: 'Email provider error' }, 502);
  return json({ ok: true });
}
