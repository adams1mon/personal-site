'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
}

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  link: string;
}

export function Terminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to my terminal portfolio! Type "help" to see available commands.',
    '',
    'Featured sections:',
    '  📝 Blog - Technical writing and insights',
    '  🧪 Lab - Interactive experiments and demos',
    '  🚀 Projects - Software I\'ve built',
    '',
    'Type "explore" to start browsing interactively.',
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const projects: Project[] = [
    {
      title: '🎮 Cellular Automata Lab',
      description: 'Interactive playground for exploring cellular automata patterns',
      tech: ['TypeScript', 'Canvas API', 'Web Workers'],
      link: '/lab/automata'
    },
    {
      title: '🧮 Algorithm Visualizer',
      description: 'Visual demonstrations of common algorithms and data structures',
      tech: ['React', 'D3.js', 'TypeScript'],
      link: '/lab/algorithms'
    },
    {
      title: '📊 Data Structure Explorer',
      description: 'Interactive visualizations of fundamental data structures',
      tech: ['React', 'SVG', 'TypeScript'],
      link: '/lab/structures'
    }
  ];

  const blogPosts: BlogPost[] = [
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

  const commands = {
    help: () => `Available commands:
  - about     : Learn about me and this site
  - blog      : Browse my technical writing
  - projects  : View my software projects
  - lab       : Explore interactive experiments
  - clear     : Clear the terminal
  - explore   : Interactive navigation mode
  - github    : View source code
  - contact   : Get in touch`,

    about: () => `About this site:
  
This is my digital workshop where I explore interesting ideas in computer science,
mathematics, and interactive visualization. You'll find:

- Technical blog posts about software development
- Interactive experiments with cellular automata
- Visualizations of algorithms and data structures
- Various side projects and coding experiments

The site itself is built with Next.js and features a custom terminal interface
for navigation. Feel free to explore using the available commands!`,

    blog: () => {
      const posts = blogPosts.map(post => 
        `\n${post.title}\n  📅 ${post.date}\n  ${post.summary}\n  Link: ${post.link}`
      ).join('\n');
      return `Recent blog posts:${posts}`;
    },

    projects: () => {
      const projectList = projects.map(project =>
        `\n${project.title}\n  ${project.description}\n  🛠️ ${project.tech.join(', ')}\n  Link: ${project.link}`
      ).join('\n');
      return `Featured projects:${projectList}`;
    },

    lab: () => `Interactive Experiments:

1. 🎮 Cellular Automata Lab (/lab/automata)
   - Conway's Game of Life
   - Elementary Cellular Automata
   - Custom Rule Explorer

2. 🧮 Algorithm Visualizer (/lab/algorithms)
   - Sorting Algorithms
   - Pathfinding Visualizations
   - Tree Traversals

3. 📊 Data Structure Explorer (/lab/structures)
   - Binary Trees
   - Graphs
   - Hash Tables

Type "goto [path]" to visit any lab (e.g., "goto /lab/automata")`,

    explore: () => `Interactive Navigation Mode:
    
Use arrow keys to navigate through sections:
  ↑/↓ : Move between options
  ← : Go back
  → or Enter: Select option

Sections:
  📝 Blog
  🧪 Lab
  🚀 Projects
  ℹ️ About
  
Press any key to start...`,

    clear: () => {
      setOutput([]);
      return '';
    },

    github: () => `View the source code:
https://github.com/yourusername/personal-site

Star the repository if you find it interesting!`,

    contact: () => `Let's connect!
  
📧 email@example.com
🐦 @twitter_handle
💼 linkedin.com/in/yourprofile
🐙 github.com/yourusername`
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add command to history
    setHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    const result = commands[trimmedCmd as keyof typeof commands]?.() || `Command not found: ${cmd}`;
    setOutput(prev => [...prev, `\n> ${cmd}`, result]);
    setCommand('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(command);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand('');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="terminal-header">
        <span className="ml-2 text-sm text-muted">guest@portfolio ~ </span>
      </div>
      
      <div className="terminal-content h-[600px] overflow-auto">
        <div className="mb-4 ascii-art">
{`
 ____                                 _ 
|  _ \\ ___ _ __ ___  ___  _ __   __ _| |
| |_) / _ \\ '__/ __|/ _ \\| '_ \\ / _\` | |
|  __/  __/ |  \\__ \\ (_) | | | | (_| | |
|_|   \\___|_|  |___/\\___/|_| |_|\\__,_|_|
   _____                  _             _ 
  |_   _|__ _ __ _ __ _(_)_ __   __ _| |
    | |/ _ \\ '__| '__| | | '_ \\ / _\` | |
    | |  __/ |  | |  | | | | | | (_| | |
    |_|\\___|_|  |_|  |_|_|_| |_|\\__,_|_|
`}
        </div>
        {output.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'command-prompt' : 'command-output'}>
            {line}
          </div>
        ))}
        <div className="flex items-center">
          <span className="command-prompt">guest@portfolio ~ </span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 ml-2 bg-transparent outline-none cursor"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
