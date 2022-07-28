import { FastifyPluginAsync } from "fastify";
import cors from "@fastify/cors";
import { shopifyApi } from "./shopifyApi";

export const app: FastifyPluginAsync = async (app) => {
	app.register(cors);
	app.register(shopifyApi);
	app.get("/", async (req, res) => {
		return [
			{
				handle: 1,
				name: "Suscripción Prime",
				description:
					"Sólo tu Café Favorito, de tu proveedor favorito. Cada 15 días en casa.",
				image: "images/coffee-bag-svgrepo-com.svg",
				type: "30",
			},

			{
				handle: 2,
				name: "Suscripción Sibarita",
				description:
					"Dos variedades diferentes al mes, rotando todo el año. En tu puerta cada 15 días. ",
				image: "images/coffee-bag-svgrepo-com.svg",
				type: "30",
			},
		];
	});
};
