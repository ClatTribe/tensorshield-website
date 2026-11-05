import LegalShell from '@/components/LegalShell';
import { site } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Privacy Policy',
  description: "How TensorShield collects, uses and protects personal data under India's Digital Personal Data Protection Act, 2023 and the GDPR.",
  path: '/legal/privacy',
});

export default function Privacy() {
  const entity = site.legal.entity || site.name;
  return (
    <LegalShell title="Privacy Policy" path="/legal/privacy">
      <p>This policy explains how {entity} (“TensorShield”, “we”, “us”) handles personal data when you visit this website, contact us, or use our services. We process personal data in line with India’s Digital Personal Data Protection Act, 2023 and its Rules and, where applicable, the EU/UK General Data Protection Regulation.</p>

      <h2>1. Data we collect</h2>
      <table>
        <thead><tr><th>Data</th><th>Purpose</th><th>Basis</th></tr></thead>
        <tbody>
          <tr><td>Name, work email, company, phone, country, and details you submit in our contact form</td><td>Responding to your enquiry, scoping and quoting</td><td>Your consent; steps prior to a contract</td></tr>
          <tr><td>Customer contact and billing details</td><td>Delivering services, invoicing, tax compliance</td><td>Contract; legal obligation</td></tr>
          <tr><td>Engagement data (scope, test-account credentials, findings, evidence)</td><td>Performing authorised security testing and reporting</td><td>Contract</td></tr>
          <tr><td>Basic, cookieless usage analytics (pages viewed, referrer, approximate country)</td><td>Improving the website</td><td>Legitimate use; no personal profiles are built</td></tr>
        </tbody>
      </table>
      <p>We do not sell personal data, and we do not use your data, or data from your systems, to train AI models.</p>

      <h2>2. Cookies</h2>
      <p>This website does not use advertising or tracking cookies. Your currency preference may be stored in your browser’s local storage, which you can clear at any time.</p>

      <h2>3. Sharing and sub-processors</h2>
      <p>We share personal data only with service providers who help us operate, such as hosting, email delivery, infrastructure and AI model providers, under contracts that require them to protect it. For customer engagements, all sub-processors are listed in the data processing agreement before testing begins. We may disclose data where required by law.</p>

      <h2>4. International transfers</h2>
      <p>We are based in India. Where data is transferred outside India or the EEA, we use appropriate safeguards and comply with any restrictions notified under applicable law.</p>

      <h2>5. Retention</h2>
      <p>Enquiry data is kept for up to 24 months unless you become a customer. Engagement data is retained for the period agreed in your contract and then securely deleted. Billing records are kept as required by tax law.</p>

      <h2>6. Security</h2>
      <p>We protect data with encryption in transit and at rest, access controls, vaulted credential storage, logging and isolation of each customer’s testing environment.</p>

      <h2>7. Your rights</h2>
      <p>You may request access to, correction of, or erasure of your personal data, withdraw consent at any time, and nominate another person to exercise your rights. EU/UK residents also have rights to restriction, objection and portability. To exercise these rights, email <a href={`mailto:${site.email}?subject=Privacy%20request`}>{site.email}</a> with the subject “Privacy request”.</p>

      <h2>8. Grievance officer</h2>
      <p>Grievance Officer: {site.founder.name}<br />Email: <a href={`mailto:${site.email}?subject=Grievance`}>{site.email}</a><br />Phone: {site.phoneDisplay}</p>
      <p>We will acknowledge grievances promptly and resolve them within the timelines required by law, and in any case within 90 days. If you are not satisfied, you may complain to the Data Protection Board of India, or to your local supervisory authority if you are in the EU/UK.</p>

      <h2>9. Changes</h2>
      <p>We may update this policy. The “last updated” date above shows when it last changed.</p>
    </LegalShell>
  );
}
