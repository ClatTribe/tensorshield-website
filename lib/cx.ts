// Tiny className joiner: cx('a', cond && 'b', { c: true })
export function cx(...args: (string | false | null | undefined | Record<string, unknown>)[]) {
  const out: string[] = [];
  for (const a of args) {
    if (!a) continue;
    if (typeof a === 'string') out.push(a);
    else for (const [k, v] of Object.entries(a)) if (v) out.push(k);
  }
  return out.join(' ');
}
