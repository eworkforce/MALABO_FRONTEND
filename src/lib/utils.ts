import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAmount({
  amount,
  currencyCode,
  locale = 'en-US',
}: { 
  amount?: number | null;
  currencyCode: string;
  locale?: string;
}) {
  if (!amount) {
    return "";
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  }).format(amount / 100);
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
