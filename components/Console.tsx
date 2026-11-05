// Hero visual: an illustrative, looping agent run. Content is server-rendered; ConsoleAnimator replays it line by line.
import ConsoleAnimator from './ConsoleAnimator';
import './Console.css';

const lines = [
  { t: 'scope', c: 'cyan', m: 'allow-list loaded · 3 hosts · egress via 13.235.x.x · rate 10 rps' },
  { t: 'recon', c: 'dim', m: 'subfinder → 14 hosts · httpx → 9 live · openapi.json diff: +2 endpoints' },
  { t: 'auth', c: 'dim', m: 'role=admin ✓  role=member_a ✓  role=member_b ✓  (tokens vaulted)' },
  { t: 'agent', c: 'lime', m: 'GET /api/v2/invoices/{id} as member_b → probing object ownership' },
  { t: 'exploit', c: 'crit', m: 'BOLA confirmed: member_b read invoice #4412 owned by member_a' },
  { t: 'evidence', c: 'dim', m: 'req/resp sha256:9f2c…e1 · PoC saved · CVSS 3.1 8.1 (computed)' },
  { t: 'agent', c: 'lime', m: 'POST /api/v2/export → testing SSRF via callback_url' },
  { t: 'verify', c: 'dim', m: 'no outbound callback observed → unproven, discarded' },
  { t: 'report', c: 'cyan', m: 'mapped → SOC 2 CC4.1, CC7.1 · ISO 27001 A.8.8 · queued for human sign-off' },
];

export default function Console() {
  return (
    <div className="ts-console" aria-label="Illustrative TensorShield agent run">
      <div className="console-bar">
        <span className="lights"><i /><i /><i /></span>
        <span className="mono console-title">tensorshield · continuous run · app.example.com</span>
        <span className="live"><span className="dot pulse" /> live</span>
      </div>
      <div className="console-body mono" data-console>
        {lines.map((l, i) => (
          <div className="ln" key={i}>
            <span className={`tag ${l.c}`}>[{l.t}]</span> <span className="msg">{l.m}</span>
          </div>
        ))}
        <div className="ln cursor-ln"><span className="tag lime">$</span> <span className="cursor" /></div>
      </div>
      <div className="console-foot">
        <div className="stat"><span className="sev sev-crit">crit</span> 1 new</div>
        <div className="stat"><span className="sev sev-high">high</span> 0</div>
        <div className="stat"><span className="sev sev-med">med</span> 2 fixed</div>
        <div className="stat dim mono">illustrative run</div>
      </div>
      <ConsoleAnimator />
    </div>
  );
}
