import { ProductoShopify } from "./APIshopify";

export const PublicFetcher = async (key: string) => {
	const res = await ProductoShopify.get(key);
	return res.data;
};
