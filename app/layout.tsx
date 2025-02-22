import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { Nav } from '@/components/nav';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: "Terminal Dojo",
  description: "A wannabe wizard\'s personal website",
  keywords: ["programming", "developer", "blog", "portfolio", "tech", "software engineer", "ascii", "terminal"],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: "Terminal Dojo",
    description: "A wannabe wizard\'s personal website",
    type: "website",
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
        <div className="min-h-screen bg-background crt overflow-auto">
          <main className="container mx-auto px-2 py-4">
            <div className="terminal-container">
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
