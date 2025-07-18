'use client';

import { ProductImageGallery } from '@/components/products/product-image-gallery';
import { ProductInfo } from '@/components/products/product-info';
import { type Product } from '@/types/medusa';

// A detailed placeholder product for static UI development
const placeholderProduct: Product = {
  id: 'prod_placeholder',
  title: 'Iconic Style T-Shirt',
  handle: 'iconic-style-t-shirt',
  subtitle: 'A Modern Classic',
  description: 'Crafted from premium, ultra-soft cotton, this t-shirt offers both comfort and style. It features a classic crew neck, a tailored fit that flatters any physique, and our signature embroidered logo on the chest. Available in a range of versatile colors, this t-shirt is a perfect staple for any wardrobe, easily dressed up or down.',
  status: 'published',
  images: [
    { id: 'img1', url: '/placeholder.svg?w=600&h=600', created_at: '', updated_at: '', deleted_at: null, metadata: null },
    { id: 'img2', url: '/placeholder.svg?w=600&h=600', created_at: '', updated_at: '', deleted_at: null, metadata: null },
    { id: 'img3', url: '/placeholder.svg?w=600&h=600', created_at: '', updated_at: '', deleted_at: null, metadata: null },
    { id: 'img4', url: '/placeholder.svg?w=600&h=600', created_at: '', updated_at: '', deleted_at: null, metadata: null },
  ],
  thumbnail: '/placeholder.svg?w=400&h=400',
  variants: [
    {
      id: 'variant_1',
      title: 'Small / Black',
      prices: [{ amount: 2500, currency_code: 'usd' }],
      inventory_quantity: 15,
      options: [], created_at: '', updated_at: '', product_id: '', ean: null, upc: null, barcode: null, hs_code: null, mid_code: null, allow_backorder: false, manage_inventory: true, weight: null, length: null, height: null, width: null, origin_country: null, material: null, metadata: null
    },
    {
      id: 'variant_2',
      title: 'Medium / Black',
      prices: [{ amount: 2500, currency_code: 'usd' }],
      inventory_quantity: 20,
      options: [], created_at: '', updated_at: '', product_id: '', ean: null, upc: null, barcode: null, hs_code: null, mid_code: null, allow_backorder: false, manage_inventory: true, weight: null, length: null, height: null, width: null, origin_country: null, material: null, metadata: null
    },
    {
      id: 'variant_3',
      title: 'Large / White',
      prices: [{ amount: 2500, currency_code: 'usd' }],
      inventory_quantity: 10,
      options: [], created_at: '', updated_at: '', product_id: '', ean: null, upc: null, barcode: null, hs_code: null, mid_code: null, allow_backorder: false, manage_inventory: true, weight: null, length: null, height: null, width: null, origin_country: null, material: null, metadata: null
    },
  ],
  options: [
    { id: 'option1', title: 'Size', values: [], product_id: '', created_at: '', updated_at: '', metadata: null, deleted_at: null },
    { id: 'option2', title: 'Color', values: [], product_id: '', created_at: '', updated_at: '', metadata: null, deleted_at: null },
  ],
  // Add other required Product properties with placeholder values
  profile_id: 'sp_123',
  collection_id: null,
  collection: null,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  deleted_at: null,
  metadata: null,
  discountable: true,
  ean: null,
  external_id: null,
  height: null,
  hs_code: null,
  is_giftcard: false,
  length: null,
  material: '100% Cotton',
  mid_code: null,
  origin_country: 'Portugal',
  profiles: [],
  sales_channels: [],
  tags: [],
  type: null,
  type_id: null,
  weight: null,
  width: null,
};

export default function ProductDetailPage({ params }: { params: { handle: string } }) {
  // For static build, we ignore the handle and use the placeholder product.
  // In a real app, you'd use the handle to fetch the specific product.
  const product = placeholderProduct;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery product={product} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}

