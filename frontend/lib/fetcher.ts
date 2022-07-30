import { productoShopify } from "./APIshopify";

export const backend_fetcher = (token: string) => async (key: string) => {
	const res = await productoShopify.get(key, {
		headers: { "Authorization": `Bearer ${token}` },
	});
	return res.data;
};
