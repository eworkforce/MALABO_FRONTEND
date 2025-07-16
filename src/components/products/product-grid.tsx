"use client";

import { useQuery } from "@tanstack/react-query";
import client from "@/lib/medusa-client";
import { ProductCard } from "./product-card";


import { type Product } from "@/types/medusa";

const fetchProducts = async (): Promise<Product[]> => {
  const { products } = await client.products.list();
  return products;
};

export function ProductGrid() {
  const { data, isLoading, isError, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <div>Chargement des produits...</div>;
  }

  if (isError) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data
        ?.filter((product) => product.id)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}
