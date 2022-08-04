import { FastifyPluginAsync } from "fastify";
import cors from "@fastify/cors";
import { shopifyApi } from "./shopifyApi";
import Auth0Verify from "fastify-auth0-verify";
import { db_plugin } from "./db";
import { userProfile } from "./routes/profile";
import { specialities } from "./routes/specialities";
import { createSpecialities } from "./routes/createSpecialties";
import { createProfile } from "./routes/createProfile";

// const adminPlugin: FastifyPluginAsync = async (app) => {
// 	// app.addHook("preValidation", app.authenticate);
// 	app.register(shopifyApi);
// };

export const app: FastifyPluginAsync = async (app) => {
	await app.register(Auth0Verify, { domain: "dev-rrewzqgm.us.auth0.com", audience: "sibarita" });
	app.register(db_plugin);
	app.register(cors);
	app.register(createSpecialities, { prefix: "editarespecialidades" });
	app.register(specialities, { prefix: "editarespecialidades" });
	app.register(createProfile, { prefix: "perfil" });
	app.register(userProfile, { prefix: "perfil" });
	app.register(shopifyApi, { prefix: "sibarita" });
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
