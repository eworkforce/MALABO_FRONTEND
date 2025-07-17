import { ProductGrid } from "@/components/products/product-grid";
import { HeroSection } from "@/components/layout/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        {/* The ProductGrid will eventually fetch featured products */}
        <ProductGrid limit={4} />
      </section>
    </>
  );
}


