'use client';

import { useEffect } from 'react';
import { useMeCustomer } from 'medusa-react';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProfilePage() {
  const { customer, isLoading } = useMeCustomer();

  useEffect(() => {
    if (!isLoading && !customer) {
      redirect('/auth/login?redirect=/account/profile');
    }
  }, [isLoading, customer]);

  if (isLoading || !customer) {
    return <div>Loading profile...</div>; // Or a skeleton loader
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" defaultValue={customer.first_name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" defaultValue={customer.last_name} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={customer.email} readOnly />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled>Save Changes</Button> 
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Update your password here. Leave blank to keep the same.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button disabled>Update Password</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
