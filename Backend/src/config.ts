import { config } from "dotenv";
config();

export const MONGODB_URL = process.env.MONGODB_URL || "mongodb://0.0.0.0:27017/sibarita";
export const STOREFRONT = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";
export const SHOPIFY_SHOP = process.env.SHOPIFY_SHOP || "";
export const PORT = process.env.PORT || "";
