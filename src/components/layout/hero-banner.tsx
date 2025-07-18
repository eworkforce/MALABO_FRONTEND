import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroBanner() {
  return (
    <section className="relative bg-gray-900 text-white py-20 md:py-32 overflow-hidden">
      {/* Ken Burns Effect Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110 animate-ken-burns"
          style={{ backgroundImage: "url(/banner_malabro.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        {/* Organic Certification Badge */}
        <div className="mb-6">
          <Badge variant="secondary" className="bg-green-600 text-white px-4 py-2 text-sm font-semibold">
            🌿 Premier Producteur Biologique Certifié de Côte d'Ivoire
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Produits Bio Premium
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Découvrez la collection certifiée biologique de MALABRO, livrée fraîche à Abidjan. 
          Qualité premium, santé naturelle.
        </p>
        
        {/* Value Propositions */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Livraison gratuite à Abidjan</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Mobile Money accepté</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Produits frais garantis</span>
          </div>
        </div>
        
        <Link href="/products">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold">
            Découvrir nos Produits
          </Button>
        </Link>
      </div>
    </section>
  );
}
