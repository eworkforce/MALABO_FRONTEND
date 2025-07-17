import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | undefined | null, currency: string = 'USD') {
  if (price === undefined || price === null) {
    return "N/A";
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price / 100);
}
