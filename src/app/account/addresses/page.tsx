import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function AddressesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">My Addresses</h2>
          <p className="text-muted-foreground">Manage your shipping and billing addresses.</p>
        </div>
        <Button>Add New Address</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Placeholder for an existing address */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Address</CardTitle>
            <CardDescription>Default</CardDescription>
          </CardHeader>
          <CardContent>
            <address className="not-italic">
              John Doe<br />
              123 Main Street<br />
              Anytown, USA 12345
            </address>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>

        {/* Another placeholder address */}
        <Card>
          <CardHeader>
            <CardTitle>Billing Address</CardTitle>
          </CardHeader>
          <CardContent>
            <address className="not-italic">
              Jane Smith<br />
              456 Oak Avenue<br />
              Someville, USA 67890
            </address>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
