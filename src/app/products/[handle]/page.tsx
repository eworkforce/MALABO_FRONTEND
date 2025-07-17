import medusaClient from "@/lib/medusa-client";
import { Product } from "@/types/medusa";
import Image from "next/image";
import { notFound } from "next/navigation";

/**
 * Fetches a product by its handle.
 * Medusa's JS client fetches a list of products filtered by the handle and we take the first one.
 * @param handle - The product handle (slug).
 * @returns The product object or null if not found.
 */
const fetchProductByHandle = async (handle: string): Promise<Product | null> => {
  const { products } = await medusaClient.products.list({ handle });
  if (!products || products.length === 0) {
    return null;
  }
  return products[0];
};

/**
 * The page component for displaying a single product's details.
 * This is a Next.js Server Component that fetches data on the server.
 */
export default async function ProductDetailPage({ params }: { params: { handle: string } }) {
  const product = await fetchProductByHandle(params.handle);

  if (!product) {
    notFound(); // Triggers the 404 page if the product doesn't exist.
  }

  const firstVariant = product.variants?.[0];
  const firstPrice = firstVariant?.prices?.[0];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex items-center justify-center bg-slate-100 rounded-lg p-4">
          {product.thumbnail && (
            <Image
              src={product.thumbnail}
              alt={product.title ?? "Product image"}
              width={600}
              height={600}
              className="rounded-lg object-contain w-full h-full max-h-[500px]"
            />
          )}
        </div>
        <div className="flex flex-col justify-center py-4">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">{product.title}</h1>
          <p className="text-slate-600 mb-6 text-lg">{product.description}</p>
          <div className="text-3xl font-semibold mb-8 text-slate-800">
            {firstPrice ? (
              <span>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: firstPrice.currency_code,
                }).format(firstPrice.amount / 100)}
              </span>
            ) : (
              <span className="text-slate-500">Price not available</span>
            )}
          </div>
          {/* Future location for variant selection and quantity controls */}
          <button className="w-full max-w-sm bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
