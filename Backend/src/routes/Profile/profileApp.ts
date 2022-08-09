import { FastifyPluginAsync } from "fastify";
import { createProfile } from "./createProfile";
import { userProfile } from "./profile";

export const profileApp: FastifyPluginAsync = async (app) => {
	app.register(createProfile);
	app.register(userProfile);
};
