import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">MALABRO</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Elevating your everyday life.
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Shop</h3>
          <Link href="/products" className="text-sm hover:underline">
            All Products
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">About</h3>
          <Link href="/about" className="text-sm hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="text-sm hover:underline">
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Legal</h3>
          <Link href="/terms" className="text-sm hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} MALABRO. All rights reserved.
      </div>
    </footer>
  );
}
