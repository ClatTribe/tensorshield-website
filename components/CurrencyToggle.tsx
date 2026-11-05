'use client';
import { useEffect, useState } from 'react';
import { cx } from '@/lib/cx';

type Cur = 'usd' | 'inr';

export default function CurrencyToggle() {
  const [cur, setCur] = useState<Cur | null>(null);
  useEffect(() => setCur((document.documentElement.dataset.cur as Cur) || 'usd'), []);
  const pick = (c: Cur) => {
    document.documentElement.dataset.cur = c;
    try { localStorage.setItem('ts-cur', c); } catch {}
    setCur(c);
  };
  return (
    <div className="seg" role="group" aria-label="Currency">
      <button className={cx({ on: cur === 'inr' })} onClick={() => pick('inr')}>INR ₹</button>
      <button className={cx({ on: cur === 'usd' })} onClick={() => pick('usd')}>USD $</button>
    </div>
  );
}
