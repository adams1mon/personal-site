'use client';

import { Terminal, Keyboard, Archive, GitCommit } from 'lucide-react';

const stats = [
  {
    icon: Terminal,
    value: '1,337,420',
    label: 'Characters Typed',
    subtext: 'Mostly backspace and delete'
  },
  {
    icon: GitCommit,
    value: '42',
    label: 'Sloppy Commits',
    subtext: 'fix: actually fix the thing I said I fixed'
  },
  {
    icon: Archive,
    value: '13',
    label: 'Elephant Graveyard Projects',
    subtext: 'They seemed like good ideas at the time'
  },
  {
    icon: Keyboard,
    value: '127h 35m',
    label: 'Symbol Layer Tweaking',
    subtext: 'Still can\'t remember where I put ~'
  }
];

export function FunStats() {
  return (
    <div className="fun-stats">
      <h2 className="text-base text-accent mb-3 flex items-center gap-2">
        <Terminal size={16} />
        Developer Metrics*
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-md bg-accent/10">
                <stat.icon size={16} className="text-accent" />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground mb-0.5 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-muted mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-muted/70 italic">
                  {stat.subtext}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted/60 mt-3 text-center">
        * Stats may be slightly exaggerated for dramatic effect
      </p>
    </div>
  );
}