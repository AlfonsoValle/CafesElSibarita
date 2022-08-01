import fastify, { FastifyInstance } from "fastify";
import { app } from "./app";
import blipp from "fastify-blipp";
import { PORT } from "./config";

const server: FastifyInstance = fastify({
	logger: {
		transport: {
			target: "pino-pretty",
			options: {
				translateTime: "HH:MM:ss Z",
				ignore: "pid,hostname",
			},
		},
	},
});

server.register(blipp);
server.register(app);

server
	.listen({
		port: parseInt(PORT || "7000"),
		host: "0.0.0.0",
	})
	.then(() => {
		server.blipp();
	});
