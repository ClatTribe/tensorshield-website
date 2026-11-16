// "Why us, not them": the three options an ICP buyer is actually choosing between, framed around continuous testing.
import Price from './Price';
import { continuous, market } from '@/lib/pricing';
import { cx } from '@/lib/cx';
import './Compare.css';

type Cell = { t: string; ok?: boolean; bad?: boolean };
const cols = ['Traditional firm', 'Scanner', 'TensorShield'];
const rows: { label: string; firm: Cell; scan: Cell; us: Cell }[] = [
  { label: 'How often you’re tested', firm: { t: 'Once a year', bad: true }, scan: { t: 'Daily, but surface-level' }, us: { t: 'On a schedule and every release', ok: true } },
  { label: 'Time to catch a new issue', firm: { t: 'Up to 12 months', bad: true }, scan: { t: 'Minutes, but unverified' }, us: { t: 'Hours, verified with proof', ok: true } },
  { label: 'Findings checked by a human expert', firm: { t: 'Yes', ok: true }, scan: { t: 'No, lots of false alarms', bad: true }, us: { t: 'Yes, every serious one', ok: true } },
  { label: 'Report auditors treat as a pentest', firm: { t: 'Yes, once a year', ok: true }, scan: { t: 'Often rejected as “just a scan”', bad: true }, us: { t: 'Yes, signed, whenever you need it', ok: true } },
  { label: 'Fixed, published price', firm: { t: 'Rarely, quote after scoping', bad: true }, scan: { t: 'Yes', ok: true }, us: { t: 'Yes', ok: true } },
];

export default function Compare() {
  return (
    <div className="table-wrap reveal ts-compare">
      <table className="cmp">
        <thead>
          <tr>
            <th />
            <th>Traditional pentest firm</th>
            <th>Automated scanner</th>
            <th className="us">TensorShield Continuous</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="lbl">Price</td>
            <td data-col={cols[0]}><span><span className="p-usd">{market.traditional.usd}</span><span className="p-inr">{market.traditional.inr}</span> per test</span></td>
            <td data-col={cols[1]}><span><span className="p-usd">{market.scanner.usd}</span><span className="p-inr">{market.scanner.inr}</span></span></td>
            <td data-col={cols[2]} className="us strong"><span><Price value={continuous.price} />/month, yearly pentest included</span></td>
          </tr>
          {rows.map((r) => (
            <tr key={r.label}>
              <td className="lbl">{r.label}</td>
              {[r.firm, r.scan, r.us].map((c, i) => (
                <td key={i} data-col={cols[i]} className={cx({ us: i === 2, ok: c.ok, bad: c.bad })}>
                  <span className="v">{c.t}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
