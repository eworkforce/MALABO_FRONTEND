import Medusa from "@medusajs/medusa-js";

const MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000";

const client = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 });

export default client;
