import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatAmount } from '@/lib/utils';
import Link from 'next/link';

// Define a type for our static order data
type StaticOrder = {
    id: string;
    display_id: number;
    created_at: string;
    fulfillment_status: string;
    total: number;
    currency_code: string;
};

// Create placeholder data for the orders
const placeholderOrders: StaticOrder[] = [
    {
        id: 'order_123456',
        display_id: 123456,
        created_at: new Date('2023-10-26T10:00:00Z').toISOString(),
        fulfillment_status: 'fulfilled',
        total: 14550, // in cents, e.g., $145.50
        currency_code: 'usd',
    },
    {
        id: 'order_123457',
        display_id: 123457,
        created_at: new Date('2023-10-20T14:30:00Z').toISOString(),
        fulfillment_status: 'shipped',
        total: 8999, // in cents, e.g., $89.99
        currency_code: 'usd',
    },
    {
        id: 'order_123458',
        display_id: 123458,
        created_at: new Date('2023-09-15T09:05:00Z').toISOString(),
        fulfillment_status: 'fulfilled',
        total: 25000, // in cents, e.g., $250.00
        currency_code: 'usd',
    },
];

export default function OrderHistoryPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Check the status of your recent orders.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {placeholderOrders.map((order: StaticOrder) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">#{order.display_id}</TableCell>
                                <TableCell>{new Date(order.created_at).toLocaleDateString()}</TableCell>
                                <TableCell className="capitalize">{order.fulfillment_status.replace(/_/g, ' ')}</TableCell>
                                <TableCell className="text-right">
                                    {formatAmount({ amount: order.total, currencyCode: order.currency_code })}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button asChild variant="outline" size="sm">
                                        <Link href={`/account/orders/${order.id}`}>View</Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
