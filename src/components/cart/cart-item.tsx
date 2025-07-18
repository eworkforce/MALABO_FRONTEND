'use client';

import { Minus, Plus } from 'lucide-react';
import Image from 'next/image';

export interface CartItemProps {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  quantity: number;
  currencyCode?: string;
}

// This component represents a single item in the cart.
export function CartItem({ item }: { item: CartItemProps }) {
  const { imageUrl, name, price, quantity, currencyCode = 'USD' } = item;

  return (
    <div className="flex items-center gap-4 py-4">
      <div className="relative h-16 w-16 bg-muted rounded-md overflow-hidden">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(price)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 border rounded-md" aria-label="Decrease quantity">
          <Minus className="h-4 w-4" />
        </button>
        <span>{quantity}</span>
        <button className="p-1 border rounded-md" aria-label="Increase quantity">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
