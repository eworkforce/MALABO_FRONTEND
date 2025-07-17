'use client';

import { useMeCustomer } from 'medusa-react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function AccountDashboardPage() {
  const { customer, isLoading } = useMeCustomer();

  useEffect(() => {
    if (!isLoading && !customer) {
      redirect('/auth/login?redirect=/account');
    }
  }, [isLoading, customer]);

  if (isLoading || !customer) {
    return <div>Loading account...</div>; // Or a skeleton loader
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Hello, {customer.first_name}</h1>
        <p className="text-muted-foreground">Welcome back to your account dashboard.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/account/profile">
          <Card className="hover:bg-accent">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Manage your personal information and password.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/account/addresses">
          <Card className="hover:bg-accent">
            <CardHeader>
              <CardTitle>Addresses</CardTitle>
              <CardDescription>Manage your shipping and billing addresses.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/account/orders">
          <Card className="hover:bg-accent">
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>View your order history and track shipments.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </div>
  );
}
