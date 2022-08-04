import { FastifyPluginAsync } from "fastify";
import { profileModel } from "../profile.model";

export const userProfile: FastifyPluginAsync = async (app) => {
	app.get("/readProfile", async (req, res) => {
		const profileFound = await profileModel.findOne({
			auth0id: "auth0|62d3511b69e95f64be8a8a4a",
		});

		return profileFound;
	});
};
