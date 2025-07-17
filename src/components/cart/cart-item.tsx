'use client';

import { Minus, Plus } from 'lucide-react';

// A static component representing a single item in the cart.
export function CartItem() {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="h-16 w-16 bg-muted rounded-md"></div>
      <div className="flex-1">
        <p className="font-medium">Static Product Name</p>
        <p className="text-sm text-muted-foreground">$49.99</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-1 border rounded-md">
          <Minus className="h-4 w-4" />
        </button>
        <span>1</span>
        <button className="p-1 border rounded-md">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
