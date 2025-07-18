'use client';

import { useState } from 'react';
import { ProductGrid } from "@/components/products/product-grid";
import { ProductFilters } from "@/components/products/product-filters";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { type Product, type ProductCategory } from "@/types/medusa";

// Placeholder data for static UI development - Organic products for MALABRO
const organicProductNames = [
  'Tomates Bio Fraîches',
  'Salade Verte Bio',
  'Carottes Bio du Terroir',
  'Épinards Bio Locaux',
  'Concombres Bio',
  'Aubergines Bio',
  'Poivrons Bio Colorés',
  'Courgettes Bio Fraîches',
  'Oignons Bio Locaux',
  'Piments Bio Forts',
  'Gombo Bio Traditionnel',
  'Patates Douces Bio'
];

const organicProductHandles = [
  'tomates-bio-fraiches',
  'salade-verte-bio',
  'carottes-bio-terroir',
  'epinards-bio-locaux',
  'concombres-bio',
  'aubergines-bio',
  'poivrons-bio-colores',
  'courgettes-bio-fraiches',
  'oignons-bio-locaux',
  'piments-bio-forts',
  'gombo-bio-traditionnel',
  'patates-douces-bio'
];

const organicProductDescriptions = [
  'Tomates biologiques cultivées sans pesticides, riches en saveur et en nutriments.',
  'Salade verte fraîche et croquante, parfaite pour vos salades quotidiennes.',
  'Carottes du terroir ivoirien, douces et nutritives, idéales pour tous vos plats.',
  'Épinards biologiques locaux, source de fer et de vitamines essentielles.',
  'Concombres bio rafraîchissants, parfaits pour les salades et jus détox.',
  'Aubergines biologiques violettes, excellentes grillées ou en sauce.',
  'Poivrons colorés bio, riches en vitamine C et saveurs authentiques.',
  'Courgettes bio tendres, polyvalentes pour gratins et ratatouilles.',
  'Oignons biologiques locaux, base essentielle de la cuisine ivoirienne.',
  'Piments bio forts, pour relever vos plats traditionnels avec authenticité.',
  'Gombo bio traditionnel, légume emblématique de la cuisine ouest-africaine.',
  'Patates douces bio sucrées, riches en bêta-carotène et fibres.'
];

const placeholderProducts: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: `prod_${i + 1}`,
  title: organicProductNames[i],
  handle: organicProductHandles[i],
  thumbnail: `/placeholder.svg?w=400&h=400`,
  variants: [{
    id: `variant_${i + 1}`,
    title: 'Bio Certifié',
    prices: [{
      amount: (i + 1) * 125000, // CFA Francs pricing (1250, 2500, 3750, etc.)
      currency_code: 'xof' // West African CFA Franc
    }],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    product_id: `prod_${i + 1}`,
    ean: null, upc: null, barcode: null, hs_code: null, mid_code: null, allow_backorder: false, manage_inventory: true, weight: null, length: null, height: null, width: null, origin_country: null, material: null, metadata: null, options: [], inventory_quantity: 10
  }],
  subtitle: null,
  description: organicProductDescriptions[i],
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
  { id: 'pcat_1', name: 'Légumes Bio', handle: 'legumes-bio', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: 'Légumes biologiques frais cultivés localement', is_active: true, is_internal: false, rank: 0 },
  { id: 'pcat_2', name: 'Fruits Bio', handle: 'fruits-bio', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: 'Fruits biologiques de saison', is_active: true, is_internal: false, rank: 1 },
  { id: 'pcat_3', name: 'Céréales & Graines', handle: 'cereales-graines', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: 'Céréales et graines biologiques', is_active: true, is_internal: false, rank: 2 },
  { id: 'pcat_4', name: 'Herbes & Épices', handle: 'herbes-epices', parent_category_id: null, parent_category: null, category_children: [], created_at: '', updated_at: '', description: 'Herbes aromatiques et épices biologiques', is_active: true, is_internal: false, rank: 3 },
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
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Nos Produits Bio</h1>
        
        {/* Mobile Filter Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden">
              <Filter className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Filtres</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <ProductFilters
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
                categories={placeholderCategories}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      
      <div className="grid lg:grid-cols-[250px_1fr] gap-8">
        {/* Desktop Filters - Hidden on Mobile */}
        <div className="hidden lg:block">
          <ProductFilters
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
            categories={placeholderCategories}
          />
        </div>
        
        <main>
          <ProductGrid products={placeholderProducts} />
        </main>
      </div>
    </div>
  );
}
