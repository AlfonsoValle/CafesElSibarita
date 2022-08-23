import { FastifyPluginAsync } from "fastify";
import cors from "@fastify/cors";
import Auth0Verify from "fastify-auth0-verify";
import { db_plugin } from "./db";
import { ShopifyApp } from "./routes/GraphQLApi/ShopifyApp";
import { specialitiesApp } from "./routes/Specialities/specialitiesApp";

export const app: FastifyPluginAsync = async (app) => {
	await app.register(Auth0Verify, { domain: "dev-rrewzqgm.us.auth0.com", audience: "sibarita" });
	app.register(db_plugin);
	app.register(cors);
	app.register(specialitiesApp, { prefix: "especialidades" });
	app.register(ShopifyApp, { prefix: "sub" });
};