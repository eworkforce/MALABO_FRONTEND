import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * A skeleton component that mimics the layout of a ProductCard.
 * Used to provide a loading state placeholder.
 */
export function ProductCardSkeleton() {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardContent className="flex-grow p-0 relative aspect-square">
        <Skeleton className="h-full w-full" />
      </CardContent>
      <CardFooter className="pt-4 flex-col items-start">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-5 w-1/2" />
      </CardFooter>
    </Card>
  );
}
