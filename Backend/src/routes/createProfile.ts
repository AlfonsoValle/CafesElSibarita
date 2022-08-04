import { FastifyPluginAsync } from "fastify";
import { profileModel } from "../profile.model";

export const createProfile: FastifyPluginAsync = async (app) => {
	app.post<{
		Body: {
			auth0id: string;
			name: string;
			lastname: string;
			address: string;
			phone: string;
			favourite_products: string[];
		};
	}>("/createProfile", async (req, res) => {
		const data: any = req.body;
		req.log.info("Output");
		const { auth0id, name, lastname, address, phone, favourite_products } = data;

		const doc = await profileModel.create({
			auth0id,
			name,
			lastname,
			address,
			phone,
			favourite_products,
		});

		return doc;
	});
};
