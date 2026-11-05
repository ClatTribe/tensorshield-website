import Link from 'next/link';
import LegalShell from '@/components/LegalShell';
import { site } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Terms of Service',
  description: 'Terms governing use of the TensorShield website and continuous penetration testing services.',
  path: '/legal/terms',
});

export default function Terms() {
  const entity = site.legal.entity || site.name;
  return (
    <LegalShell title="Terms of Service" path="/legal/terms">
      <p>These terms govern your use of this website and of services provided by {entity} (“TensorShield”). Paid services are also governed by the master services agreement, statement of work and authorisation letter signed for your engagement; if they conflict with these terms, the signed documents prevail.</p>

      <h2>1. Authorised testing only</h2>
      <p>We perform security testing only against assets you own or are authorised to test, and only after receiving a signed authorisation letter and agreed rules of engagement. You confirm that you have the authority to grant that permission, including any permissions required from hosting or third-party providers. You must not ask us to test assets you are not authorised to test.</p>

      <h2>2. Services</h2>
      <p>Services, scope, cadence, deliverables and fees are described on our pricing page and in your order or statement of work. Security testing reduces but cannot eliminate risk; no test can guarantee that a system is free of vulnerabilities.</p>

      <h2>3. Your responsibilities</h2>
      <ul>
        <li>Provide accurate scope, test accounts and contact details, and keep them current.</li>
        <li>Maintain backups and appropriate monitoring of the systems in scope.</li>
        <li>Inform us promptly of any change that affects scope, testing windows or safety.</li>
      </ul>

      <h2>4. Fees and payment</h2>
      <p>Fees are payable in advance for the billing period selected. Indian customers are charged applicable GST. Late payments may result in suspension of testing. Cancellations and refunds are governed by our <Link href="/legal/refunds">cancellation and refund policy</Link>.</p>

      <h2>5. Confidentiality</h2>
      <p>Each party will keep the other’s confidential information, including findings, evidence and credentials, confidential and use it only to perform or receive the services.</p>

      <h2>6. Intellectual property</h2>
      <p>You own your data and the reports delivered to you. We retain ownership of our platform, methodologies, templates and tooling.</p>

      <h2>7. Limitation of liability</h2>
      <p>To the extent permitted by law, neither party is liable for indirect or consequential losses, and each party’s total liability is limited to the fees paid for the services in the twelve months before the claim, except where your signed agreement provides otherwise.</p>

      <h2>8. Website use</h2>
      <p>Content on this website is provided for general information and is not legal or compliance advice. Do not attempt to probe, scan or test this website except as permitted by our <Link href="/legal/responsible-disclosure">responsible disclosure policy</Link>.</p>

      <h2>9. Governing law</h2>
      <p>These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts specified in your signed agreement, or otherwise the courts of India.</p>

      <h2>10. Contact</h2>
      <p>{entity} · <a href={`mailto:${site.email}`}>{site.email}</a> · {site.phoneDisplay}</p>
    </LegalShell>
  );
}
