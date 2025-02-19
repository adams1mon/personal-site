'use client';

import { BookOpen } from 'lucide-react';

const recentPosts = [
  {
    title: 'Building an Interactive Cellular Automata Explorer',
    date: '2024-04-01',
    summary: 'Deep dive into implementing Conway\'s Game of Life and other CA patterns',
    link: '/blog/cellular-automata-explorer'
  },
  {
    title: 'Optimizing Canvas Rendering for Large Scale Simulations',
    date: '2024-03-15',
    summary: 'Performance techniques for smooth animations with thousands of particles',
    link: '/blog/canvas-optimization'
  },
  {
    title: 'Creating an Ergonomic Terminal Interface with React',
    date: '2024-03-01',
    summary: 'Design patterns for building terminal-like interfaces on the web',
    link: '/blog/terminal-interface'
  }
];

export function BlogHighlights() {
  return (
    <div className="blog-highlights">
      <h2 className="text-base text-accent mb-3 flex items-center gap-2">
        <BookOpen size={16} />
        Recent Writings
      </h2>
      <div className="grid gap-3">
        {recentPosts.map((post, index) => (
          <article key={index} className="post-card">
            <h3 className="text-base font-medium mb-1">
              <a href={post.link} className="hover:text-accent transition-colors">
                {post.title}
              </a>
            </h3>
            <p className="text-xs text-muted mb-1">📅 {post.date}</p>
            <p className="text-sm text-muted/80">{post.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}