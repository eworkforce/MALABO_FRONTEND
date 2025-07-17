import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const staticOrders = [
  {
    id: 'ORD-001',
    date: '2024-07-15',
    status: 'Shipped',
    total: '$149.98',
  },
  {
    id: 'ORD-002',
    date: '2024-06-28',
    status: 'Delivered',
    total: '$75.50',
  },
  {
    id: 'ORD-003',
    date: '2024-05-12',
    status: 'Delivered',
    total: '$299.00',
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
            {staticOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
                <TableCell className="text-right">
                  <Link href={`/account/orders/${order.id}`}>
                    <Button variant="outline" size="sm">View</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
