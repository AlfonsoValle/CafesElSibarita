import { FastifyPluginAsync } from "fastify";
import { specialities } from "./specialities";
import { createSpecialities } from "./createSpecialities";
import { deleteSpecialities } from "./deleteSpecialities";

export const specialitiesApp: FastifyPluginAsync = async (app) => {
	app.register(specialities);
	app.register(createSpecialities);
	app.register(deleteSpecialities);
};