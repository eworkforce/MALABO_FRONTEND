import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function ShippingPage() {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Shipping Details */}
        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div className="space-y-2 col-span-1">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" />
              </div>
              <div className="space-y-2 col-span-1">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                <Input id="apartment" />
              </div>
              <div className="space-y-2 col-span-1">
                <Label htmlFor="city">City</Label>
                <Input id="city" />
              </div>
              <div className="space-y-2 col-span-1">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shipping Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="standard">
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <Label htmlFor="standard-shipping" className="flex items-center gap-4 cursor-pointer">
                    <RadioGroupItem value="standard" id="standard-shipping" />
                    Standard Shipping
                  </Label>
                  <span>$5.00</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-md">
                  <Label htmlFor="express-shipping" className="flex items-center gap-4 cursor-pointer">
                    <RadioGroupItem value="express" id="express-shipping" />
                    Express Shipping
                  </Label>
                  <span>$15.00</span>
                </div>
              </RadioGroup>
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
              <Link href="/checkout/payment">
                <Button className="w-full">Continue to Payment</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
