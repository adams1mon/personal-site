import { Terminal } from '@/components/terminal';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Terminal />
      <Footer />
    </main>
  );
}