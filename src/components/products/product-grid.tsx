"use client";

import { useQuery } from "@tanstack/react-query";
import medusaClient from "@/lib/medusa-client";
import { ProductCard } from "./product-card";
import { ProductCardSkeleton } from "./product-card-skeleton";

import { type Product } from "@/types/medusa";

const fetchProducts = async (limit?: number, category_id?: string[]): Promise<Product[]> => {
  const { products } = await medusaClient.products.list(limit ? { limit, category_id } : { category_id });
  return products;
};

export function ProductGrid({ limit, category_id, products: placeholderProducts }: { limit?: number, category_id?: string[], products?: Product[] }) {
  const { data, isLoading, isError, error } = useQuery<Product[], Error>({
    queryKey: ["products", limit, category_id],
    queryFn: () => fetchProducts(limit, category_id),
    enabled: !placeholderProducts, // Disable query if placeholder products are provided
  });

  const products = placeholderProducts || data;

  if (isLoading && !placeholderProducts) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products
        ?.filter((product) => product.id)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
