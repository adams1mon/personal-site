import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Nav } from '@/components/nav';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Terminal Portfolio | Your Name',
  description: 'A programmer\'s personal website featuring blog posts, projects, and interesting findings',
  keywords: ['programming', 'developer', 'blog', 'portfolio', 'tech', 'software engineer'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Terminal Portfolio | Your Name',
    description: 'A programmer\'s personal website featuring blog posts, projects, and interesting findings',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body>
        <div className="min-h-screen bg-background terminal-crt">
          <main className="container mx-auto px-2 py-4">
            <div className="terminal-container terminal-crt">
              <Nav />
              <div className="section-divider my-0" />
              <div className="terminal-content">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
