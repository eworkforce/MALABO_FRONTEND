import { AccountSidebarNav } from '@/components/account/account-sidebar-nav';

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <AccountSidebarNav />
        </aside>
        <main className="md:col-span-3">
          {children}
        </main>
      </div>
    </div>
  );
}
