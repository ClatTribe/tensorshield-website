// Currency-aware amount. The visitor's currency is set on <html data-cur> before paint.
import { fmt, type Money } from '@/lib/pricing';

export default function Price({ value, className }: { value: Money; className?: string }) {
  return (
    <span className={className}>
      <span className="p-usd">{fmt('usd', value.usd)}</span>
      <span className="p-inr">{fmt('inr', value.inr)}</span>
    </span>
  );
}
