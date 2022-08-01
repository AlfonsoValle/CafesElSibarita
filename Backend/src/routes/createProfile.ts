import { FastifyPluginAsync } from "fastify";
import { ProfileModel } from "../profile.model";

export const Createuserprofile: FastifyPluginAsync = async (app) => {
	app.post<{
		Body: {
			auth0id: string;
			name: string;
			lastname: string;
			address: string;
			phone: string;
			favourite_products: string[];
		};
	}>("/X", async (req, res) => {
		const data = req.body;
		req.log.info("Output");
		const { auth0id, name, lastname, address, phone, favourite_products } = data;

		const doc = await ProfileModel.create({
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
