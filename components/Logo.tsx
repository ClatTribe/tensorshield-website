import './Logo.css';

export default function Logo() {
  return (
    <span className="ts-logo">
      <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <defs>
          <linearGradient id="ts-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c3ff4f" />
            <stop offset="1" stopColor="#46e3ff" />
          </linearGradient>
        </defs>
        <path d="M16 2.5 4.5 7v8.2c0 7.2 5 11.8 11.5 14.3 6.5-2.5 11.5-7.1 11.5-14.3V7z" fill="none" stroke="url(#ts-g)" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M10.5 11.5h11M16 11.5v11" stroke="url(#ts-g)" strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="10.5" cy="11.5" r="1.7" fill="#c3ff4f" />
        <circle cx="21.5" cy="11.5" r="1.7" fill="#46e3ff" />
        <circle cx="16" cy="22.5" r="1.7" fill="#7cf7a6" />
      </svg>
      <span className="ts-logo-word">
        Tensor<b>Shield</b>
      </span>
    </span>
  );
}
