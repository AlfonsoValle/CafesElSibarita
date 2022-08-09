import { FastifyPluginAsync } from "fastify";
import { specialityModel } from "./speciality.model";

export const specialities: FastifyPluginAsync = async (app) => {
	app.get("/readSpecialities", async (req, res) => {
		const specialityFound = await specialityModel.find({
			auth0id: "auth0|62d3511b69e95f64be8a8a4a",
		});

		return specialityFound;
	});
};
