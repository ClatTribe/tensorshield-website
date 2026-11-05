import LegalShell from '@/components/LegalShell';
import { site } from '@/lib/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Cancellation & Refund Policy',
  description: 'Cancellation, refund and delivery terms for TensorShield subscriptions and pentests.',
  path: '/legal/refunds',
});

export default function Refunds() {
  return (
    <LegalShell title="Cancellation & Refund Policy" path="/legal/refunds">
      <h2>Continuous and Scale plans</h2>
      <ul>
        <li>Plans are billed yearly in advance. You may cancel within 14 days of purchase for a full refund if no testing has started.</li>
        <li>After testing has started, yearly fees are non-refundable, and the plan stays active until the end of the term. You can turn off renewal at any time.</li>
      </ul>

      <h2>Audit-Ready Pentest</h2>
      <ul>
        <li>You may cancel for a full refund before testing or report preparation begins.</li>
        <li>If you reschedule at least 5 business days before an agreed testing window, there is no charge.</li>
        <li>Once testing or report preparation has begun, fees are non-refundable, but we will always deliver the work completed.</li>
      </ul>

      <h2>Delivery</h2>
      <p>All deliverables are digital. Findings are delivered through our portal and integrations as they are validated. Audit-Ready Pentest reports are delivered within 5–7 business days of the agreed start, with the attestation letter, which is updated after the retest. Nothing is shipped physically.</p>

      <h2>How to cancel or request a refund</h2>
      <p>Email <a href={`mailto:${site.email}?subject=Cancellation%20request`}>{site.email}</a> or call {site.phoneDisplay}. Approved refunds are processed to the original payment method within 7–10 business days.</p>
    </LegalShell>
  );
}
