'use client';

import { useState, useEffect } from 'react';
import { Search, User, Code, BookOpen, Terminal as TerminalIcon } from 'lucide-react';
import Link from 'next/link';

export function Terminal() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([
    'Welcome to my terminal portfolio! Type "help" to see available commands.',
  ]);

  const commands = {
    help: () => `Available commands:
  - about: Learn more about me
  - blog: View my blog posts
  - projects: See my projects
  - contact: Get my contact information
  - clear: Clear the terminal`,
    about: () => `Hi, I'm [Your Name]! 👋
  
I'm a software engineer passionate about building great tools and experiences.
I love working with: TypeScript, React, Node.js, and Neovim.`,
    blog: () => `Recent blog posts:
  
1. "Building a Terminal-themed Portfolio" - 2024-04-01
2. "My Neovim Setup for TypeScript Development" - 2024-03-15
3. "Creating Productive CLI Tools" - 2024-03-01`,
    projects: () => `Featured projects:
  
1. 🚀 CLI Tool Framework
   A modern framework for building CLI applications
   
2. 📝 Markdown Editor
   A terminal-based markdown editor with preview
   
3. 🎮 ASCII Game Engine
   Create text-based games with ASCII graphics`,
    contact: () => `Let's connect!
  
📧 email@example.com
🐦 @twitter_handle
💼 linkedin.com/in/yourprofile
🐙 github.com/yourusername`,
    clear: () => {
      setOutput([]);
      return '';
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const result = commands[trimmedCmd as keyof typeof commands]?.() || `Command not found: ${cmd}`;
    setOutput((prev) => [...prev, `> ${cmd}`, result]);
    setCommand('');
  };

  return (
    <div className="terminal-window max-w-4xl mx-auto">
      <div className="terminal-header">
        <div className="terminal-circle bg-red-500"></div>
        <div className="terminal-circle bg-yellow-500"></div>
        <div className="terminal-circle bg-green-500"></div>
        <span className="ml-2 text-sm text-muted">guest@portfolio ~ </span>
      </div>
      
      <div className="terminal-content">
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
            onKeyDown={(e) => e.key === 'Enter' && handleCommand(command)}
            className="flex-1 ml-2 bg-transparent outline-none cursor"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
