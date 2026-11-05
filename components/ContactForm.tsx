'use client';
import { useSearchParams } from 'next/navigation';
import { useRef, useState, type FormEvent } from 'react';
import Icon from './Icon';

const drivers = ['SOC 2 Type I', 'SOC 2 Type II', 'ISO 27001', 'Customer security review', 'RBI / SEBI / CERT-In', 'Just want to be secure'];
const interests = ['continuous', 'pentest', 'scale', 'other'] as const;

export default function ContactForm({ email, phone }: { email: string; phone: string }) {
  const params = useSearchParams();
  const plan = params.get('plan') ?? '';
  const initial = (interests as readonly string[]).includes(plan) ? plan : 'continuous';
  const formRef = useRef<HTMLFormElement>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<{ msg: string; kind: '' | 'ok' | 'err' }>({ msg: '', kind: '' });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const fd = new FormData(form);
    const data: Record<string, unknown> = Object.fromEntries(fd.entries());
    data.drivers = fd.getAll('drivers');
    data.plan = plan;
    data.page = location.pathname;
    setBusy(true);
    setStatus({ msg: 'Sending…', kind: '' });
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ msg: `Thanks! We’ll get back to you within one business day. For anything urgent, call ${phone}.`, kind: 'ok' });
    } catch {
      // Fallback: hand off to the visitor's email client so no lead is lost.
      const body = Object.entries(data).filter(([k]) => k !== 'website').map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('\n');
      location.href = `mailto:${email}?subject=${encodeURIComponent('Call request: ' + (data.company || ''))}&body=${encodeURIComponent(body)}`;
      setStatus({ msg: `Opening your email app to send this. If nothing happens, email ${email} or call ${phone}.`, kind: 'err' });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form ref={formRef} className="form card card-glow" onSubmit={onSubmit} noValidate>
      <div className="form-head">
        <h2>Book a free call</h2>
        <p className="muted">Takes 60 seconds. Fields marked * are required.</p>
      </div>

      <div className="row2">
        <label>Full name *<input name="name" required autoComplete="name" maxLength={120} /></label>
        <label>Work email *<input name="email" type="email" required autoComplete="email" maxLength={160} /></label>
      </div>
      <div className="row2">
        <label>Company *<input name="company" required autoComplete="organization" maxLength={160} /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40} placeholder="+91 …" /></label>
      </div>
      <div className="row2">
        <label>I’m interested in
          <select name="interest" defaultValue={initial}>
            <option value="continuous">Continuous (yearly pentest + testing every release)</option>
            <option value="pentest">Audit-Ready Pentest (one-time report)</option>
            <option value="scale">Scale (4+ apps)</option>
            <option value="other">Not sure yet, advise me</option>
          </select>
        </label>
        <label>Number of apps / APIs
          <select name="apps" defaultValue="1">
            <option>1</option><option>2–3</option><option>4–10</option><option>10+</option><option>Not sure yet</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>What’s driving this?</legend>
        <div className="pills">
          {drivers.map((d) => (
            <label className="pill" key={d}><input type="checkbox" name="drivers" value={d} /><span>{d}</span></label>
          ))}
        </div>
      </fieldset>

      <div className="row2">
        <label>Audit window or deadline<input name="deadline" type="month" /></label>
        <label>Country<input name="country" autoComplete="country-name" maxLength={80} placeholder="India" /></label>
      </div>
      <label>Anything else we should know?<textarea name="message" rows={4} maxLength={3000} placeholder="Tech stack, number of user roles, staging vs production, auditor firm…" /></label>

      <label className="hp" aria-hidden="true">Leave this empty<input name="website" tabIndex={-1} autoComplete="off" /></label>

      <label className="consent">
        <input type="checkbox" name="authorised" required />
        <span>
          I confirm I am authorised to request security testing for the assets I will share, and agree to the <a href="/legal/privacy">privacy policy</a>. No
          testing starts without a signed authorisation. *
        </span>
      </label>

      <button className="btn btn-primary btn-block" type="submit" disabled={busy}>Send and book my call <Icon name="arrow" /></button>
      <p className={`status ${status.kind}`} role="status" aria-live="polite">{status.msg}</p>
    </form>
  );
}
