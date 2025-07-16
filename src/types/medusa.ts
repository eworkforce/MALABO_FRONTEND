import client from "@/lib/medusa-client";

export type Product = Awaited<ReturnType<typeof client.products.list>>["products"][number];
