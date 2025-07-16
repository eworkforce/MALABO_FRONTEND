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
  // TODO: Price will be passed as a prop once data fetching is implemented in the parent.

  return (
    <Link href={`/products/${product.id}`} passHref>
      <Card className="h-full flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg truncate">{product.title}</CardTitle>
          <CardDescription>
            Price: {product.variants?.[0]?.calculated_price}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center p-0">
          {product.thumbnail ? (
            <Image
              src={product.thumbnail}
              alt={product.title ?? 'Product image'}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-4">
          <p className="text-lg text-gray-500">À partir de ...</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
