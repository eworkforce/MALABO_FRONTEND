'use client';

import { useState } from 'react';
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string, isChecked: boolean) => {
    setSelectedCategories(prev => 
      isChecked ? [...prev, categoryId] : prev.filter(id => id !== categoryId)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Nos Produits</h1>
      <div className="grid lg:grid-cols-[250px_1fr] gap-8">
        <ProductFilters 
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
        <main>
          <ProductGrid category_id={selectedCategories} />
        </main>
      </div>
    </div>
  );
}
