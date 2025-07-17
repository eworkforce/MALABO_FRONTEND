'use client';

import { useState } from 'react';
import Image from 'next/image';
import { type Product } from '@/types/medusa';

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(product.thumbnail || '/placeholder.svg');

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-square bg-muted rounded-lg overflow-hidden">
        <Image
          src={mainImage}
          alt={product.title || 'Product image'}
          fill
          className="object-cover"
        />
      </div>
      {product.images && product.images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {product.images.map((image) => (
            <div
              key={image.id}
              className={`relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${mainImage === image.url ? 'border-primary' : 'border-transparent'}`}
              onClick={() => setMainImage(image.url)}
            >
              <Image
                src={image.url}
                alt={`${product.title} thumbnail`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
