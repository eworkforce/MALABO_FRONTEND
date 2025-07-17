import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/types/medusa";

interface ProductCardProps {
  product: Product;
}

// Helper to format the price
const formatPrice = (amount: number, currencyCode: string) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: currencyCode,
  }).format(amount / 100);
};

export function ProductCard({ product }: ProductCardProps) {
  const firstVariant = product.variants?.[0];
  const firstPrice = firstVariant?.prices?.[0];

  // The product handle is required for the link, so we return null if it's missing.
  if (!product.handle) {
    return null;
  }

  return (
    <Link href={`/products/${product.handle}`} passHref>
      <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg cursor-pointer group">
        <CardContent className="flex-grow flex items-center justify-center p-0 relative aspect-square">
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              alt={product.title ?? 'Product image'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-500">No image</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-4 flex-col items-start">
          <CardTitle className="text-lg truncate mb-1">{product.title}</CardTitle>
          <CardDescription className="text-base font-semibold text-slate-800">
            {firstPrice ? (
              formatPrice(firstPrice.amount, firstPrice.currency_code)
            ) : (
              <span className="text-slate-500">Price not available</span>
            )}
          </CardDescription>
        </CardFooter>
      </Card>
    </Link>
  );
}
