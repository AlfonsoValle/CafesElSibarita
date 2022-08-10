import { FastifyPluginAsync } from "fastify";
import cors from "@fastify/cors";
import Auth0Verify from "fastify-auth0-verify";
import { db_plugin } from "./db";
import { profileApp } from "./routes/Profile/profileApp";
import { ShopifyApp } from "./routes/GraphQLApi/ShopifyApp";
import { specialitiesApp } from "./routes/Specialities/specialitiesApp";

export const app: FastifyPluginAsync = async (app) => {
	await app.register(Auth0Verify, { domain: "dev-rrewzqgm.us.auth0.com", audience: "sibarita" });
	app.register(db_plugin);
	app.register(cors);
	app.register(specialitiesApp, { prefix: "especialidades" });
	app.register(profileApp, { prefix: "perfil" });
	app.register(ShopifyApp, { prefix: "sub" });

	app.get("/static", async (req, res) => {
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
