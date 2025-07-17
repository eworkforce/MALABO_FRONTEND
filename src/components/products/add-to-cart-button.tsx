'use client';

import { useTransition } from 'react';

// NOTE: This is a simplified version for the static build.
// The full implementation will handle adding items to the cart.
export function AddToCartButton({ variantId }: { variantId: string | undefined }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      // In the future, this will call the addItemToCart action.
      console.log(`Adding variant ${variantId} to cart.`);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending || !variantId}
      className="w-full bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isPending ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
