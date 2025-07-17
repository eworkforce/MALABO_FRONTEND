'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { CartItem } from './cart-item';
import Link from 'next/link';

export function CartSidebar() {
  const { isOpen, closeCart } = useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto pr-4">
          {/* Static cart items for placeholder UI */}
          <CartItem />
          <CartItem />
        </div>
        <SheetFooter>
          <div className="w-full space-y-4">
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>$99.98</span>
            </div>
            <Link
              href="/checkout/shipping"
              className="w-full inline-block text-center bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-200"
              onClick={closeCart}
            >
              Checkout
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
