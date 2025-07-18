import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import QueryProvider from "@/components/providers/query-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartSidebar } from "@/components/cart/cart-sidebar";

export const metadata: Metadata = {
  title: "MALABRO - Premium Organic Products | Côte d'Ivoire",
  description: "Discover MALABRO's certified organic collection, the first certified organic producer in Côte d'Ivoire. Fresh, premium products delivered to Abidjan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <QueryProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-4 px-4">
            <div className="relative flex min-h-screen flex-col max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <CartSidebar />
            </div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
