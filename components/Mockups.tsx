// Small, static product mockups used on the home page and solution pages. Illustrative data only.
import Icon from './Icon';
import './Mockups.css';

export function MockMatrix() {
  return (
    <div className="mock mock-matrix mono" aria-hidden="true">
      <div className="mock-bar"><span>Access-control test · invoices API</span><span className="ok-pill">3 roles</span></div>
      <div className="m-row m-head"><span /><span>admin</span><span>user_a</span><span>user_b</span></div>
      <div className="m-row"><span>GET /invoices/4412</span><i className="ok">200</i><i className="ok">200</i><i className="bad">200</i></div>
      <div className="m-row"><span>DELETE /users/91</span><i className="ok">204</i><i className="no">403</i><i className="no">403</i></div>
      <div className="m-row"><span>PATCH /org/role</span><i className="ok">200</i><i className="bad">200</i><i className="no">403</i></div>
      <div className="m-row"><span>GET /exports/all</span><i className="ok">200</i><i className="no">403</i><i className="no">403</i></div>
    </div>
  );
}

export function MockFinding() {
  return (
    <div className="mock mock-finding" aria-hidden="true">
      <div className="mf-top">
        <span className="sev sev-crit">critical</span>
        <span className="mono dim">CVSS 8.1 · CWE-639</span>
      </div>
      <h4>Users can read other customers’ invoices</h4>
      <div className="mf-verified"><Icon name="shield-check" size={14} /> Verified by a senior expert · PoC attached</div>
      <pre className="mono">{`GET /api/v2/invoices/4412
Authorization: Bearer <user_b>
→ 200 OK  { "owner": "user_a", "total": 18400 }`}</pre>
      <div className="mf-fix"><span className="mono dim">Fix</span> Check invoice.owner_id against the session user before returning it.</div>
    </div>
  );
}

export function MockAlert() {
  return (
    <div className="mock mock-alert" aria-hidden="true">
      <div className="ma-head"><span className="ma-hash mono">#security</span><span className="dim">today</span></div>
      <div className="ma-msg">
        <div className="ma-avatar"><Icon name="shield" size={16} /></div>
        <div>
          <p className="ma-who"><strong>TensorShield</strong> <span className="dim mono">10:42</span></p>
          <p><span className="sev sev-crit">critical</span> Broken access control on <span className="mono">/invoices/&#123;id&#125;</span></p>
          <p className="dim">Found 3h after release v2.14.0 · verified by an expert</p>
          <div className="ma-actions"><span>View proof</span><span>Request retest</span></div>
        </div>
      </div>
      <div className="ma-msg faded">
        <div className="ma-avatar"><Icon name="refresh" size={16} /></div>
        <div><p><span className="sev sev-low">fixed</span> Retest passed for <span className="mono">/exports/all</span></p></div>
      </div>
    </div>
  );
}

export function MockReport() {
  return (
    <div className="mock mock-report" aria-hidden="true">
      <div className="mr-head">
        <div><p className="mono dim">VAPT report · Q3 2026</p><h4>acme-app.com + API</h4></div>
        <span className="ok-pill">Signed</span>
      </div>
      <div className="mr-rows">
        {[['SOC 2 · CC4.1', 'Separate evaluation'], ['SOC 2 · CC7.1', 'Vulnerability detection'], ['ISO 27001 · A.8.8', 'Technical vulnerabilities'], ['ISO 27001 · A.8.29', 'Security testing']].map(([c, d]) => (
          <div className="mr-row" key={c}><span className="mono">{c}</span><span className="dim">{d}</span><Icon name="check" size={14} /></div>
        ))}
      </div>
      <div className="mr-foot"><span>Retest: <b>all critical issues fixed</b></span><span className="mono dim">sha256:9f2c…e1</span></div>
    </div>
  );
}
