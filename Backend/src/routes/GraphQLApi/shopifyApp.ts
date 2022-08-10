import { FastifyPluginAsync } from "fastify";
import { AllProducts } from "./AllProducts";
import { CheckoutMutationPrime } from "./checkoutMutationPrime";
import { CheckoutMutationSibarita } from "./checkoutMutationSibarita";
import {SingleProductQuery} from "./SingleProduct";

export const ShopifyApp: FastifyPluginAsync = async (app) => {
	app.register(AllProducts);
	app.register(SingleProductQuery);
	app.register(CheckoutMutationSibarita);
	app.register(CheckoutMutationPrime);
};
