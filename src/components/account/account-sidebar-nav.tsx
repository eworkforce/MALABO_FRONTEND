'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/account', label: 'Dashboard' },
  { href: '/account/profile', label: 'Profile' },
  { href: '/account/addresses', label: 'Addresses' },
  { href: '/account/orders', label: 'Orders' },
];

export function AccountSidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <span
            className={cn(
              'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
              pathname === item.href ? 'bg-accent' : 'transparent'
            )}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
