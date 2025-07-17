import { ProductGrid } from "@/components/products/product-grid";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <ProductGrid />
    </main>
  );
}

