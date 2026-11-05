// Post-build: flatten every prerendered page's <main> into Markdown-ish text at public/llms-full.txt,
// so AI assistants can read the whole site in one request without parsing HTML.
// Commit the generated file: it is regenerated on every build.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../.next/server/app/', import.meta.url).pathname;
const OUT = new URL('../public/llms-full.txt', import.meta.url).pathname;
const SITE = (process.env.SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://tensorshield.vercel.app')).replace(/\/$/, '');
const ORDER = ['index', 'platform', 'pricing', 'solutions/startups', 'solutions/enterprise', 'solutions/fintech', 'solutions/healthtech', 'compliance/soc-2-penetration-testing', 'compliance/iso-27001-penetration-testing', 'vapt-india', 'trust', 'about', 'contact'];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const decode = (s) =>
  s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));

// Remove decorative blocks marked with data-llms-skip (balanced <div> matching).
function stripSkipped(html) {
  let i;
  while ((i = html.search(/<div[^>]*data-llms-skip/)) !== -1) {
    const re = /<div\b|<\/div>/g;
    re.lastIndex = i;
    let depth = 0, m, end = html.length;
    while ((m = re.exec(html))) {
      depth += m[0] === '</div>' ? -1 : 1;
      if (depth === 0) { end = m.index + 6; break; }
    }
    html = html.slice(0, i) + html.slice(end);
  }
  return html;
}

function toText(html) {
  const main = stripSkipped((html.match(/<main[^>]*>([\s\S]*?)<\/main>/) || [, ''])[1]);
  return decode(
    main
      .replace(/<(script|style|svg|form)[\s\S]*?<\/\1>/g, '')
      .replace(/<h1[^>]*>/g, '\n# ').replace(/<h2[^>]*>/g, '\n\n## ').replace(/<h3[^>]*>/g, '\n\n### ')
      .replace(/<li[^>]*>/g, '\n- ').replace(/<(p|tr|summary|div)[^>]*>/g, '\n').replace(/<\/t[dh]>/g, ' | ')
      .replace(/<br[^>]*>/g, '\n').replace(/<[^>]+>/g, '')
  )
    .split('\n').map((l) => l.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n')
    .replace(/\n(#+ )/g, '\n\n$1');
}

const files = (await walk(DIST)).filter((f) => !/(_not-found|_global-error|404|500|\/legal\/)/.test(f));
const key = (f) => relative(DIST, f).replace(/\.html$/, '');
files.sort((a, b) => (ORDER.indexOf(key(a)) + 1 || 99) - (ORDER.indexOf(key(b)) + 1 || 99));

let out = `# TensorShield: full site content\n\nSource: ${SITE}\nGenerated: ${new Date().toISOString().slice(0, 10)}\n`;
for (const f of files) {
  const html = await readFile(f, 'utf8');
  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/) || [, ''])[1]);
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
  const path = key(f) === 'index' ? '/' : '/' + key(f);
  out += `\n\n---\n\nURL: ${SITE}${path}\nTitle: ${title}\nSummary: ${desc}\n${toText(html)}\n`;
}
await writeFile(OUT, out);
console.log(`llms-full.txt: ${files.length} pages, ${Math.round(out.length / 1024)} KB`);
