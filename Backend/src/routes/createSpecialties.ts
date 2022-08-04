import { FastifyPluginAsync } from "fastify";
import { specialityModel } from "../specialty.model";

export const createSpecialities: FastifyPluginAsync = async (app) => {
	app.post<{
		Body: {
			auth0id: string;
			name: string;
			text: string;
			image: string;
		};
	}>("/createSpecialities", async (req, res) => {
		const data = req.body;
		req.log.info("Output");
		const { auth0id, name, text, image } = data;

		const doc = await specialityModel.create({
			auth0id,
			name,
			text,
			image,
		});

		return doc;
	});
};
