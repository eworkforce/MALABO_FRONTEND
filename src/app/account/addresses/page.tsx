import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Inferred Address type for static data
type StaticAddress = {
    id: string;
    first_name: string;
    last_name: string;
    company?: string;
    address_1: string;
    address_2?: string;
    city: string;
    province?: string;
    postal_code: string;
    country_code: string;
    phone?: string;
};

const placeholderAddresses: StaticAddress[] = [
    {
        id: 'addr_1',
        first_name: 'Alex',
        last_name: 'Doe',
        company: 'MALABRO Inc.',
        address_1: '123 Market St',
        address_2: 'Suite 456',
        city: 'San Francisco',
        province: 'CA',
        postal_code: '94103',
        country_code: 'US',
        phone: '555-123-4567',
    },
    {
        id: 'addr_2',
        first_name: 'Alex',
        last_name: 'Doe',
        address_1: '456 Tech Ave',
        city: 'Palo Alto',
        province: 'CA',
        postal_code: '94301',
        country_code: 'US',
        phone: '555-987-6543',
    },
];

export default function AddressesPage() {
    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">My Addresses</h1>
                <Button>Add New Address</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {placeholderAddresses.map((address) => (
                    <Card key={address.id}>
                        <CardHeader>
                            <CardTitle>{address.first_name} {address.last_name}</CardTitle>
                            {address.company && <CardDescription>{address.company}</CardDescription>}
                        </CardHeader>
                        <CardContent>
                            <p>{address.address_1}{address.address_2 ? `, ${address.address_2}` : ''}</p>
                            <p>{address.city}, {address.province} {address.postal_code}</p>
                            <p>{address.country_code.toUpperCase()}</p>
                            {address.phone && <p>{address.phone}</p>}
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            <Button variant="outline">Edit</Button>
                            <Button variant="destructive">Delete</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
