import axios from "axios";

export const ProductoShopify = axios.create({
	baseURL: "http://localhost:5000",
});
