import { FastifyPluginAsync } from "fastify";
import { specialities } from "./specialities";
import { createSpecialities } from "./createSpecialities";

export const specialitiesApp: FastifyPluginAsync = async (app) => {
	app.register(specialities);
	app.register(createSpecialities);
};
