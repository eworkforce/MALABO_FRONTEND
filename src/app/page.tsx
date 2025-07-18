import { HeroBanner } from "@/components/layout/hero-banner";
import { Footer } from "@/components/layout/footer";
import { ProductGrid } from "@/components/products/product-grid";
import { type Product } from "@/types/medusa";

// Placeholder data for static UI development - Organic products for MALABRO
const organicProductNames = [
  'Tomates Bio Fraîches',
  'Salade Verte Bio',
  'Carottes Bio du Terroir',
  'Épinards Bio Locaux',
  'Concombres Bio',
  'Aubergines Bio',
  'Poivrons Bio Colorés',
  'Courgettes Bio Fraîches'
];

const organicProductHandles = [
  'tomates-bio-fraiches',
  'salade-verte-bio',
  'carottes-bio-terroir',
  'epinards-bio-locaux',
  'concombres-bio',
  'aubergines-bio',
  'poivrons-bio-colores',
  'courgettes-bio-fraiches'
];

const placeholderProducts: Product[] = Array.from({ length: 8 }).map((_, i) => ({
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
    // Mock other variant properties as needed
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    product_id: `prod_${i + 1}`,
    ean: null, upc: null, barcode: null, hs_code: null, mid_code: null, allow_backorder: false, manage_inventory: true, weight: null, length: null, height: null, width: null, origin_country: null, material: null, metadata: null, options: [], inventory_quantity: 10
  }],
  // Add other required Product properties with placeholder values
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

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroBanner />
      <section className="py-12 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
            Featured Products
          </h2>
          <ProductGrid products={placeholderProducts} />
        </div>
      </section>
      <Footer />
    </main>
  );
}


