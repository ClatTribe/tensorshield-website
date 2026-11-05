// The continuous loop: ship → attack → prove → verify → fix → evidence → ship.
// Pure CSS animation: the sweep, travelling dot, node highlights and step list all run on one 9s cycle so they stay in sync.
import Icon from './Icon';
import './ContinuousLoop.css';

export const loopSteps = [
  { icon: 'git', t: 'Ship', d: 'You release new code' },
  { icon: 'bolt', t: 'Attack', d: 'AI agents attack what changed' },
  { icon: 'target', t: 'Prove', d: 'Only exploitable issues survive' },
  { icon: 'fingerprint', t: 'Verify', d: 'A senior expert confirms impact' },
  { icon: 'refresh', t: 'Fix', d: 'Your team ships the fix, we retest' },
  { icon: 'file', t: 'Evidence', d: 'Proof logged for your auditor' },
];

const R = 150;
const pos = (i: number) => {
  const a = ((-90 + i * 60) * Math.PI) / 180;
  return { left: `${((200 + R * Math.cos(a)) / 400) * 100}%`, top: `${((200 + R * Math.sin(a)) / 400) * 100}%` };
};

export function LoopSteps() {
  return (
    <ol className="ts-loop-steps">
      {loopSteps.map((s, i) => (
        <li key={s.t} style={{ animationDelay: `${i * 1.5}s` }}>
          <span className="n mono">0{i + 1}</span>
          <span><strong>{s.t}.</strong> {s.d}</span>
        </li>
      ))}
    </ol>
  );
}

export default function ContinuousLoop() {
  return (
    <div className="ts-loop" aria-label="Continuous testing loop: ship, attack, prove, verify, fix, evidence, repeat">
      <div className="sweep" aria-hidden="true" />
      <svg viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r={R + 26} fill="none" stroke="rgba(255,255,255,0.05)" />
        <circle cx="200" cy="200" r={R} fill="none" stroke="rgba(195,255,79,0.22)" strokeWidth="1.5" strokeDasharray="3 7" />
        <circle cx="200" cy="200" r={R - 26} fill="none" stroke="rgba(255,255,255,0.05)" />
      </svg>
      <div className="orbit" aria-hidden="true"><i /></div>
      {loopSteps.map((s, i) => (
        <div className="node" key={s.t} style={{ ...pos(i), animationDelay: `${i * 1.5}s` }}>
          <Icon name={s.icon} size={16} />
          <span>{s.t}</span>
        </div>
      ))}
      <div className="center">
        <span className="mono dim">continuous</span>
        <strong>Every release.</strong>
        <span className="sub">Every week. Every fix retested.</span>
      </div>
    </div>
  );
}
