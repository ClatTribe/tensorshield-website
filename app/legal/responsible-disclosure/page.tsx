import LegalShell from '@/components/LegalShell';
import { site } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Responsible Disclosure Policy',
  description: "How to report a security vulnerability in TensorShield's website or services, and our safe-harbour commitment to good-faith researchers.",
  path: '/legal/responsible-disclosure',
});

export default function Disclosure() {
  return (
    <LegalShell title="Responsible Disclosure Policy" path="/legal/responsible-disclosure">
      <p>We are a security company and we take the security of our own systems seriously. If you believe you have found a vulnerability in TensorShield’s website or services, we want to hear from you.</p>

      <h2>How to report</h2>
      <p>Email <a href={`mailto:${site.email}?subject=Security%20report`}>{site.email}</a> with the subject “Security report”. Please include a description of the issue, the affected URL or component, steps to reproduce, and its potential impact. We will acknowledge your report within 3 business days and keep you informed as we investigate.</p>

      <h2>Scope</h2>
      <ul>
        <li>This website and its subdomains operated by TensorShield.</li>
        <li>Out of scope: denial-of-service, spam, social engineering or phishing of our staff, physical attacks, and issues in third-party services we use.</li>
      </ul>

      <h2>Rules</h2>
      <ul>
        <li>Do not access, modify or delete data that does not belong to you, and stop as soon as you have demonstrated the issue.</li>
        <li>Do not degrade the availability of our services or use automated high-volume scanning.</li>
        <li>Give us reasonable time to fix the issue before any public disclosure.</li>
      </ul>

      <h2>Safe harbour</h2>
      <p>If you act in good faith and follow this policy, we will not pursue legal action against you for your research, and we will work with you to understand and resolve the issue quickly. We are happy to credit researchers who wish to be acknowledged.</p>
    </LegalShell>
  );
}
