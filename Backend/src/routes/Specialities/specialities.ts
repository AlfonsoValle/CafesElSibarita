import { FastifyPluginAsync } from "fastify";
import { specialityModel } from "./speciality.model";

export const specialities: FastifyPluginAsync = async (app) => {
	app.get("/readSpecialities", async (req, res) => {
		const specialityFound = await specialityModel.find({});

		return specialityFound;
	});
};