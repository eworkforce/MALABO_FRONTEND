'use client';

import { useState } from 'react';
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { type Product, type ProductCategory } from "@/types/medusa";

// Placeholder data for static UI development
const placeholderProducts: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `prod_${i + 1}`,
  title: `Placeholder Product ${i + 1}`,
  handle: `placeholder-product-${i + 1}`,
  thumbnail: `/placeholder.svg?w=400&h=400`,
  variants: [{
    id: `variant_${i + 1}`,
    title: 'Default Variant',
    prices: [{
      amount: (i + 1) * 1500,
      currency_code: 'usd'
    }],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    product_id: `prod_${i + 1}`,
    ean: null, upc: null, barcode: null, hs_code: null, mid_code: null, allow_backorder: false, manage_inventory: true, weight: null, length: null, height: null, width: null, origin_country: null, material: null, metadata: null, options: [], inventory_quantity: 10
  }],
  subtitle: null,
  description: `This is a placeholder description for Product ${i + 1}.`,
  status: 'published',
  images: [],
  options: [],
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
  material: null,
  mid_code: null,
  origin_country: null,
  profiles: [],
  sales_channels: [],
  tags: [],
  type: null,
  type_id: null,
  weight: null,
  width: null,
}));

const placeholderCategories: ProductCategory[] = [
  { id: 'pcat_1', name: 'Apparel', handle: 'apparel', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: '', is_active: true, is_internal: false, rank: 0 },
  { id: 'pcat_2', name: 'Accessories', handle: 'accessories', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: '', is_active: true, is_internal: false, rank: 1 },
  { id: 'pcat_3', name: 'Footwear', handle: 'footwear', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: '', is_active: true, is_internal: false, rank: 2 },
  { id: 'pcat_4', name: 'Home Goods', handle: 'home-goods', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: '', is_active: true, is_internal: false, rank: 3 },
];

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    setSelectedCategories(prev =>
      isChecked ? [...prev, categoryId] : prev.filter(id => id !== categoryId)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid lg:grid-cols-[250px_1fr] gap-8">
        <ProductFilters
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          categories={placeholderCategories} // Pass static categories
        />
        <main>
          <ProductGrid products={placeholderProducts} />
        </main>
      </div>
    </div>
  );
}
