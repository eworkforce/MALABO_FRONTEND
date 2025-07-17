import client from "@/lib/medusa-client";

export type Product = Awaited<ReturnType<typeof client.products.list>>["products"][number];
export type ProductCategory = Awaited<ReturnType<typeof client.productCategories.list>>["product_categories"][number];
