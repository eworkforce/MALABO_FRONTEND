'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { CartItem, type CartItemProps } from './cart-item';
import Link from 'next/link';

// Placeholder data for static UI development
const placeholderCartItems: CartItemProps[] = [
  {
    id: 'item_1',
    imageUrl: '/placeholder.svg?w=100&h=100',
    name: 'Iconic Style T-Shirt',
    price: 25.00,
    quantity: 2,
    currencyCode: 'USD',
  },
  {
    id: 'item_2',
    imageUrl: '/placeholder.svg?w=100&h=100',
    name: 'Classic Leather Belt',
    price: 49.99,
    quantity: 1,
    currencyCode: 'USD',
  },
];

export function CartSidebar() {
  const { isOpen, closeCart } = useCartStore();

  const subtotal = placeholderCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto pr-4 divide-y divide-gray-200">
          {placeholderCartItems.length > 0 ? (
            placeholderCartItems.map(item => <CartItem key={item.id} item={item} />)
          ) : (
            <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
          )}
        </div>
        <SheetFooter>
          <div className="w-full space-y-4 pt-4 border-t">
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal)}
              </span>
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
