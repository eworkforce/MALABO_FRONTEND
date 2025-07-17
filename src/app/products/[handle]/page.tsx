'use client';

import { useQuery } from '@tanstack/react-query';
import medusaClient from '@/lib/medusa-client';
import { ProductImageGallery } from '@/components/products/product-image-gallery';
import { ProductInfo } from '@/components/products/product-info';
import { type Product } from '@/types/medusa';

const fetchProductByHandle = async (handle: string): Promise<Product | null> => {
  const { products } = await medusaClient.products.list({ handle });
  return products[0] || null;
};

export default function ProductDetailPage({ params }: { params: { handle: string } }) {
  const { data: product, isLoading, isError } = useQuery<Product | null>({
    queryKey: ['product', params.handle],
    queryFn: () => fetchProductByHandle(params.handle),
  });

  if (isLoading) {
    return <div>Loading product...</div>; // Replace with a proper skeleton loader later
  }

  if (isError || !product) {
    return <div>Product not found or an error occurred.</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

