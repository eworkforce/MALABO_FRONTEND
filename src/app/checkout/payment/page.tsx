import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function PaymentPage() {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Payment Details */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry-date">Expiry Date</Label>
                  <Input id="expiry-date" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Order Summary */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Static Product 1</span>
                <span>$99.99</span>
              </div>
              <div className="flex justify-between">
                <span>Static Product 2</span>
                <span>$49.99</span>
              </div>
              <Separator />
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>$149.98</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>$154.98</span>
              </div>
              {/* This will eventually link to the order confirmation page */}
              <Link href="/order/confirmed/static-order-id">
                <Button className="w-full">Pay Now</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
