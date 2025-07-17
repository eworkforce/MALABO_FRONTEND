import { Skeleton } from "@/components/ui/skeleton";

/**
 * A skeleton loading component for the Product Detail Page.
 * This is a special Next.js file that automatically wraps the page component
 * and is displayed during server-side data fetching.
 */
export default function ProductDetailLoading() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-pulse">
        <div className="flex items-center justify-center bg-slate-100 rounded-lg p-4">
          <Skeleton className="w-full h-[500px] rounded-lg" />
        </div>
        <div className="flex flex-col justify-center py-4">
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-full mb-2" />
          <Skeleton className="h-5 w-2/3 mb-6" />
          <Skeleton className="h-10 w-1/3 mb-8" />
          <Skeleton className="h-12 w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
}
