import { FastifyPluginAsync } from "fastify";
import mongoose from "mongoose";
import { MONGODB_URL } from "./config";

export const db_plugin: FastifyPluginAsync = async (app) => {
	app.log.info(`<------- Conectando a Mongo -------->`);
	mongoose.connect(MONGODB_URL).then(() => {
		app.log.info(` <-------|||| Conectado a Mongo ||||--------> ${MONGODB_URL}`);
	});
};
