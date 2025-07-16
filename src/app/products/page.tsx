import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits",
  description: "Découvrez tous nos produits frais et locaux.",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nos Produits</h1>
      {/* ProductGrid component will be rendered here */}
    </div>
  );
}
