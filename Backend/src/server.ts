import fastify from "fastify";
import { app } from "./app";

const server = fastify({
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname",
            }
        }
    },
});

server.register(app);

server.listen({
    port: parseInt(process.env.PORT || "5000"),
    host: '0.0.0.0',
});