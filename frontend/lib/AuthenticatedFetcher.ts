import { ProductoShopify } from "./APIshopify";

export const AuthenticatedFetcher = (token: string) => async (key: string) => {
	const res = await ProductoShopify.get(key, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return res.data;
};
