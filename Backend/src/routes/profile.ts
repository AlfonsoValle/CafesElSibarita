import { FastifyPluginAsync } from "fastify";
import { ProfileModel } from "../profile.model";

export const userprofile: FastifyPluginAsync = async (app) => {
	app.get("/perfil", { preValidation: app.authenticate }, async (req, res) => {
		const profilefound = await ProfileModel.findOne({
			auth0id: "auth0|62d3511b69e95f64be8a8a4a",
		});

		return profilefound;
	});
};
