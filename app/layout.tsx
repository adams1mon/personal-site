import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

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
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}