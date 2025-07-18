'use client';

import Link from 'next/link';
import Image from 'next/image';
import { User, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart-store';

export function Header() {
  const { openCart } = useCartStore();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo_malabro.jpg"
              alt="MALABRO Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold sm:inline-block">MALABRO</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
            <button onClick={openCart}>
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Open cart</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
