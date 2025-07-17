import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Order #{params.id}</CardTitle>
          <CardDescription>Date: July 15, 2024</CardDescription>
        </div>
        <div>
          <span className="text-sm font-medium">Status: Shipped</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold">Shipping Address</h3>
            <address className="not-italic text-muted-foreground">
              John Doe<br />
              123 Main Street<br />
              Anytown, USA 12345
            </address>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Billing Address</h3>
            <address className="not-italic text-muted-foreground">
              John Doe<br />
              123 Main Street<br />
              Anytown, USA 12345
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
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Static Product 1</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$99.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Static Product 2</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$49.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-2 md:grid-cols-3">
          <div className="md:col-start-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$149.98</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$12.00</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$166.98</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
