import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="pg-404">
      <div className="bg-grid" />
      <div className="glow glow-lime" style={{ width: 600, height: 600, left: '50%', top: -300, transform: 'translateX(-50%)' }} />
      <div className="container rel">
        <p className="mono code">HTTP 404 · out of scope</p>
        <h1>This page isn’t in <span className="serif grad">our allow-list.</span></h1>
        <p className="muted">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="row">
          <Link href="/" className="btn btn-primary">Back to home <Icon name="arrow" /></Link>
          <Link href="/contact" className="btn btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
