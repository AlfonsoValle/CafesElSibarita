import { FastifyPluginAsync } from "fastify";
import { AllProducts } from "./allProducts";
import { CheckoutMutation } from "./allProducts";
import { singleProductQuery } from "./singleProduct";

export const shopifyApp: FastifyPluginAsync = async (app) => {
	app.register(AllProducts);
	app.register(singleProductQuery);
	app.register(CheckoutMutation);
};
