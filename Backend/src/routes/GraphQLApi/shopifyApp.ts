import { FastifyPluginAsync } from "fastify";
import { AllProducts } from "./AllProducts";
import { CheckoutMutationPrime } from "./CheckoutMutationPrime";
import { CheckoutMutationSibarita } from "./CheckoutMutationSibarita";
import { SingleProductQuery } from "./SingleProduct";

export const ShopifyApp: FastifyPluginAsync = async (app) => {
	app.register(AllProducts);
	app.register(SingleProductQuery);
	app.register(CheckoutMutationSibarita);
	app.register(CheckoutMutationPrime);
};
