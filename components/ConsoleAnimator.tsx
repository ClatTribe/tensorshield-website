'use client';
import { useEffect } from 'react';

export default function ConsoleAnimator() {
  useEffect(() => {
    const body = document.querySelector<HTMLElement>('[data-console]');
    if (!body || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lines = Array.from(body.querySelectorAll<HTMLElement>('.ln:not(.cursor-ln)'));
    body.classList.add('js-typing');
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      if (i < lines.length) {
        lines[i++].classList.add('show');
        timer = setTimeout(step, i === 5 ? 1400 : 650);
      } else {
        timer = setTimeout(() => {
          lines.forEach((l) => l.classList.remove('show'));
          i = 0;
          timer = setTimeout(step, 500);
        }, 4200);
      }
    };
    timer = setTimeout(step, 500);
    return () => {
      clearTimeout(timer);
      body.classList.remove('js-typing');
      lines.forEach((l) => l.classList.remove('show'));
    };
  }, []);
  return null;
}
