import { config } from "dotenv";
config();

export const MONGODB_URL = "";
//export process.env.MONGODB_URL || "";
export const STOREFRONT = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || "";
export const SHOPIFY_SHOP = process.env.SHOPIFY_SHOP || "";
