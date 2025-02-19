'use client';

import { Code, BookOpen, Wrench } from 'lucide-react';

const currentStatus = {
  working_on: [
    {
      project: 'Personal Website',
      description: 'Building this very site you\'re looking at',
      status: 'in-progress'
    },
    {
      project: 'Cellular Automata Explorer',
      description: 'Interactive visualization of various CA patterns',
      status: 'in-progress'
    }
  ],
  learning: [
    'Rust 🦀',
    'Category Theory 📚',
    'Mechanical Keyboard Building ⌨️'
  ]
};

export function StatusUpdate() {
  return (
    <div className="status-update">
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <h2 className="text-base text-accent mb-3 flex items-center gap-2">
            <Wrench size={16} />
            Currently Working On
          </h2>
          <div className="space-y-3">
            {currentStatus.working_on.map((project, index) => (
              <div key={index} className="post-card">
                <h3 className="font-medium text-base">{project.project}</h3>
                <p className="text-xs text-muted mt-0.5">{project.description}</p>
                <span className="inline-block px-1.5 py-0.5 text-xs rounded-full bg-accent/10 text-accent mt-1">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base text-accent mb-3 flex items-center gap-2">
            <BookOpen size={16} />
            Currently Learning
          </h2>
          <div className="space-y-3">
            {currentStatus.learning.map((item, index) => (
              <div key={index} className="post-card">
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}