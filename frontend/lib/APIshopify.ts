import axios from "axios";

export const productoShopify = axios.create({
	baseURL: "http://localhost:5000",
	timeout: 1000, // 5 segundos
	headers: { unheader: "loquesea" },
});
