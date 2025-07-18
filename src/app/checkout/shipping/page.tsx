import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { formatAmount } from '@/lib/utils';
import Link from 'next/link';

// Static data definitions
const placeholderAddress = {
    first_name: 'Alex',
    last_name: 'Doe',
    address_1: '123 Market St',
    address_2: 'Suite 456',
    city: 'San Francisco',
    postal_code: '94103',
};

const placeholderShippingOptions = [
    {
        id: 'shipping_standard',
        name: 'Standard Shipping',
        amount: 500, // $5.00
    },
    {
        id: 'shipping_express',
        name: 'Express Shipping',
        amount: 1500, // $15.00
    },
];

const placeholderCart = {
    items: [
        { id: 'item_1', title: 'Classic Tee', quantity: 2, total: 5000 }, // $50.00
        { id: 'item_2', title: 'Cool Hoodie', quantity: 1, total: 7500 }, // $75.00
    ],
    subtotal: 12500, // $125.00
    shipping_total: 500, // $5.00 (default selected)
    total: 13000, // $130.00
    currency_code: 'usd',
};

export default function ShippingPage() {
    return (
        <div className="container mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <Card>
                        <CardHeader><CardTitle>Shipping Address</CardTitle></CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2"><Label htmlFor="first_name">First Name</Label><Input id="first_name" defaultValue={placeholderAddress.first_name} readOnly /></div>
                                    <div className="space-y-2"><Label htmlFor="last_name">Last Name</Label><Input id="last_name" defaultValue={placeholderAddress.last_name} readOnly /></div>
                                </div>
                                <div className="space-y-2"><Label htmlFor="address_1">Address</Label><Input id="address_1" defaultValue={placeholderAddress.address_1} readOnly /></div>
                                <div className="space-y-2"><Label htmlFor="address_2">Apartment, suite, etc.</Label><Input id="address_2" defaultValue={placeholderAddress.address_2} readOnly /></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2"><Label htmlFor="city">City</Label><Input id="city" defaultValue={placeholderAddress.city} readOnly /></div>
                                    <div className="space-y-2"><Label htmlFor="postal_code">ZIP Code</Label><Input id="postal_code" defaultValue={placeholderAddress.postal_code} readOnly /></div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader><CardTitle>Shipping Method</CardTitle></CardHeader>
                        <CardContent>
                            <RadioGroup defaultValue={placeholderShippingOptions[0].id}>
                                {placeholderShippingOptions.map((option) => (
                                    <div key={option.id} className="flex items-center justify-between p-4 border rounded-md">
                                        <Label htmlFor={option.id} className="flex items-center gap-4 cursor-pointer">
                                            <RadioGroupItem value={option.id} id={option.id} />
                                            {option.name}
                                        </Label>
                                        <span>{formatAmount({ amount: option.amount, currencyCode: placeholderCart.currency_code })}</span>
                                    </div>
                                ))}
                            </RadioGroup>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:col-span-1">
                    <Card>
                        <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {placeholderCart.items.map((item) => (
                                <div key={item.id} className="flex justify-between">
                                    <span>{item.title} x {item.quantity}</span>
                                    <span>{formatAmount({ amount: item.total, currencyCode: placeholderCart.currency_code })}</span>
                                </div>
                            ))}
                            <Separator />
                            <div className="flex justify-between text-muted-foreground">
                                <span>Subtotal</span>
                                <span>{formatAmount({ amount: placeholderCart.subtotal, currencyCode: placeholderCart.currency_code })}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Shipping</span>
                                <span>{formatAmount({ amount: placeholderCart.shipping_total, currencyCode: placeholderCart.currency_code })}</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold">
                                <span>Total</span>
                                <span>{formatAmount({ amount: placeholderCart.total, currencyCode: placeholderCart.currency_code })}</span>
                            </div>
                            <Button asChild className="w-full">
                                <Link href="/checkout/payment">Continue to Payment</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
