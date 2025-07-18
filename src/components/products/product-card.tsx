import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { type Product } from '@/types/medusa';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

// Helper to format the price
const formatPrice = (amount: number, currencyCode: string) => {
  // Handle CFA Francs (XOF) for Ivorian market
  if (currencyCode.toLowerCase() === 'xof') {
    return new Intl.NumberFormat('fr-CI', {
      style: 'currency',
      currency: 'XOF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount / 100);
  }
  
  // Default formatting for other currencies
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
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 flex items-center justify-center">
              <span className="text-slate-500">No image</span>
            </div>
          )}
          {/* Organic Certification Badge */}
          <Badge 
            variant="secondary" 
            className="absolute top-2 left-2 bg-green-100 text-green-800 border-green-200 hover:bg-green-200"
          >
            🌿 Bio Certifié
          </Badge>
        </CardContent>
        <CardFooter className="pt-4 flex-col items-start space-y-3">
          <div className="w-full">
            <CardTitle className="text-lg truncate mb-1">{product.title}</CardTitle>
            <CardDescription className="text-base font-semibold text-slate-800">
              {firstPrice ? (
                formatPrice(firstPrice.amount, firstPrice.currency_code)
              ) : (
                <span className="text-slate-500">Price not available</span>
              )}
            </CardDescription>
          </div>
          {/* Add to Cart Button */}
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: Implement add to cart functionality
              console.log('Add to cart:', product.title);
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Ajouter au Panier
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
