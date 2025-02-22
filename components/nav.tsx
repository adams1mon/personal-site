'use client';

import { Home, BookOpen, Code, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: '/home', icon: Home },
    { href: '/blog', label: '~/blog', icon: BookOpen },
    { href: '/projects', label: '~/projects', icon: Code },
    { href: '/about', label: '~/about', icon: User },
  ];

  return (
    <nav className="py-2 px-4 flex justify-center space-x-6 text-sm">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`
              flex items-center gap-2
              border-b-2 pb-0.5
              transition-colors duration-150
              hover:text-accent hover:border-accent
              ${isActive 
                ? 'text-accent border-accent' 
                : 'text-muted border-transparent'
              }
            `}
          >
            <Icon size={14} />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
