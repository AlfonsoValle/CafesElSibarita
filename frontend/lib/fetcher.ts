import { productoShopify } from "./APIshopify";

export const backend_fetcher = async (key: string) => {
	const res = await productoShopify.get(key);
	return res.data;
};
