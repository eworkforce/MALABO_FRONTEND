'use client';

import { useEffect } from 'react';
import { useMeCustomer, useOrder } from 'medusa-react';
import { redirect } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatAmount } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
    const { order, isLoading: orderIsLoading, error } = useOrder(params.id);
    const { customer, isLoading: customerIsLoading } = useMeCustomer();

    useEffect(() => {
        if (!customerIsLoading && !customer) {
            redirect('/auth/login?redirect=/account/orders');
        }
    }, [customer, customerIsLoading]);

    if (orderIsLoading || customerIsLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <p>Loading order details...</p>
            </div>
        );
    }

    if (error || !order || (customer && order.customer_id !== customer.id)) {
        return (
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    The order could not be found or you do not have permission to view it.
                </AlertDescription>
            </Alert>
        );
    }

    const { shipping_address, billing_address, items, currency_code } = order;

    return (
        <Card>
            <CardHeader className="flex flex-row items-start justify-between">
                <div>
                    <CardTitle>Order #{order.display_id}</CardTitle>
                    <CardDescription>
                        Date: {new Date(order.created_at).toLocaleDateString()}
                    </CardDescription>
                </div>
                <div>
                    <span className="text-sm font-medium capitalize">
                        Status: {order.fulfillment_status.replace(/_/g, ' ')}
                    </span>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                        <h3 className="font-semibold">Shipping Address</h3>
                        <address className="not-italic text-muted-foreground">
                            {shipping_address.first_name} {shipping_address.last_name}<br />
                            {shipping_address.address_1}<br />
                            {shipping_address.city}, {shipping_address.province} {shipping_address.postal_code}<br />
                            {shipping_address.country_code?.toUpperCase()}
                        </address>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-semibold">Billing Address</h3>
                        <address className="not-italic text-muted-foreground">
                            {billing_address.first_name} {billing_address.last_name}<br />
                            {billing_address.address_1}<br />
                            {billing_address.city}, {billing_address.province} {billing_address.postal_code}<br />
                            {billing_address.country_code?.toUpperCase()}
                        </address>
                    </div>
                </div>

                <Separator className="my-8" />

                <div>
                    <h3 className="font-semibold mb-4">Order Items</h3>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead className="text-right">Total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell className="text-right">
                                        {formatAmount({ amount: item.total || 0, currencyCode: currency_code })}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <Separator className="my-8" />

                <div className="grid gap-2 md:grid-cols-3">
                    <div className="md:col-start-3 space-y-2">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>{formatAmount({ amount: order.subtotal, currencyCode: currency_code })}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>{formatAmount({ amount: order.shipping_total, currencyCode: currency_code })}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>{formatAmount({ amount: order.tax_total || 0, currencyCode: currency_code })}</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>{formatAmount({ amount: order.total, currencyCode: currency_code })}</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
