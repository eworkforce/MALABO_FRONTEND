import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function OrderConfirmedPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto my-12 flex justify-center">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <CardTitle className="mt-4 text-2xl">Thank You for Your Order!</CardTitle>
          <CardDescription>Your order #{params.id} has been confirmed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Separator />
          <div className="space-y-2">
            <h3 className="font-semibold">Order Summary</h3>
            <div className="flex justify-between">
              <span>Static Product 1 (x1)</span>
              <span>$99.99</span>
            </div>
            <div className="flex justify-between">
              <span>Static Product 2 (x1)</span>
              <span>$49.99</span>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$149.98</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$154.98</span>
            </div>
          </div>
          <Separator />
          <div className="text-center">
            <Link href="/account/orders">
              <Button>View Order Details</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
