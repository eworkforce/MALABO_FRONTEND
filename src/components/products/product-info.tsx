'use client';

import { useState, useEffect } from 'react';
import { AddToCartButton } from '@/components/products/add-to-cart-button';
import { type Product } from '@/types/medusa';
import { formatPrice } from '@/lib/utils';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string | undefined>(
    product.variants?.[0]?.id
  );

  const selectedVariant = product.variants.find(
    (v) => v.id === selectedVariantId
  );

  const price = formatPrice(
    selectedVariant?.calculated_price_incl_tax,
    selectedVariant?.prices?.[0]?.currency_code
  );

  useEffect(() => {
    if (product.variants?.[0]?.id) {
      setSelectedVariantId(product.variants[0].id);
    }
  }, [product]);

  return (
    <div className="flex flex-col justify-center py-4">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
        {product.title}
      </h1>
      <p className="text-slate-600 mb-6 text-lg">
        {product.description}
      </p>
      <div className="text-3xl font-semibold mb-8 text-slate-800">
        <span>{price}</span>
      </div>
      {/* Add variant selection UI here if needed */}
      <div className="max-w-sm">
        <AddToCartButton variantId={selectedVariantId} />
      </div>
    </div>
  );
}
