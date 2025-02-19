import { Terminal } from '@/components/terminal';
import { Footer } from '@/components/footer';
import { WelcomeBanner } from '@/components/welcome-banner';
import { StatusUpdate } from '@/components/status-update';
import { BlogHighlights } from '@/components/blog-highlights';
import { FunStats } from '@/components/fun-stats';

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <div className="section-divider" />
      <StatusUpdate />
      <div className="section-divider" />
      <BlogHighlights />
      <div className="section-divider" />
      <Terminal />
      <div className="section-divider" />
      <FunStats />
      <div className="section-divider" />
      <Footer />
    </>
  );
}