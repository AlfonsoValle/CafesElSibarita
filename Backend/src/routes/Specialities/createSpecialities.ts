import { FastifyPluginAsync } from "fastify";
import { specialityModel } from "./speciality.model";

export const createSpecialities: FastifyPluginAsync = async (app) => {
	app.post<{
		Body: {
			name: string;
			text: string;
			image: string;
		};
	}>("/createSpecialities", async (req, res) => {
		const data = req.body;
		req.log.info("Output");
		const { name, text, image } = data;

		const doc = await specialityModel.create({
			name,
			text,
			image,
		});

		return doc;
	});
};
