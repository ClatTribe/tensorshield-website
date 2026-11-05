// Renders public/og.png (1200x630) for social cards. Run: npm run og
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c3ff4f"/><stop offset="0.5" stop-color="#7cf7a6"/><stop offset="1" stop-color="#46e3ff"/></linearGradient>
    <radialGradient id="r1" cx="0.15" cy="0" r="0.7"><stop offset="0" stop-color="#c3ff4f" stop-opacity="0.28"/><stop offset="1" stop-color="#c3ff4f" stop-opacity="0"/></radialGradient>
    <radialGradient id="r2" cx="0.95" cy="1" r="0.6"><stop offset="0" stop-color="#8f7bff" stop-opacity="0.3"/><stop offset="1" stop-color="#8f7bff" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.05"/></pattern>
  </defs>
  <rect width="1200" height="630" fill="#050608"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#r1)"/>
  <rect width="1200" height="630" fill="url(#r2)"/>
  <g transform="translate(80 78)">
    <path d="M24 3.5 6.75 10.5v12.3c0 10.8 7.5 17.7 17.25 21.45 9.75-3.75 17.25-10.65 17.25-21.45V10.5z" fill="none" stroke="url(#g)" stroke-width="3.3" stroke-linejoin="round"/>
    <path d="M15.75 17.25h16.5M24 17.25v16.5" stroke="url(#g)" stroke-width="3.9" stroke-linecap="round"/>
    <text x="64" y="34" font-family="Helvetica Neue, Arial, sans-serif" font-size="34" font-weight="700" fill="#f3f5f8" letter-spacing="-1">TensorShield</text>
  </g>
  <text x="80" y="300" font-family="Helvetica Neue, Arial, sans-serif" font-size="78" font-weight="700" fill="#f3f5f8" letter-spacing="-3">Always-on pentesting.</text>
  <text x="80" y="392" font-family="Helvetica Neue, Arial, sans-serif" font-size="78" font-weight="700" fill="url(#g)" letter-spacing="-3">Audit-ready on demand.</text>
  <text x="80" y="470" font-family="Helvetica Neue, Arial, sans-serif" font-size="28" fill="#9aa3b2">Continuous AI pentesting for web apps &amp; APIs · SOC 2 &amp; ISO 27001 VAPT reports</text>
  <g font-family="Menlo, monospace" font-size="20" fill="#c3ff4f">
    <rect x="80" y="520" width="300" height="46" rx="23" fill="#c3ff4f" fill-opacity="0.1" stroke="#c3ff4f" stroke-opacity="0.4"/>
    <text x="104" y="550">SECURITY AT MACHINE SPEED</text>
  </g>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname);
console.log('public/og.png written');
