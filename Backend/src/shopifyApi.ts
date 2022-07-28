import Shopify from "@shopify/shopify-api";
import { FastifyPluginAsync } from "fastify";
import { STOREFRONT, SHOPIFY_SHOP } from "./config";

export const shopifyApi: FastifyPluginAsync = async (app) => {
	app.get("/sibarita", async (req, res) => {
		const storefrontClient: any = new Shopify.Clients.Storefront(SHOPIFY_SHOP, STOREFRONT);
		const products: any = await storefrontClient.query({
			data: ` {
            products(first: 2) {
              edges {
                node {
                  title
                  handle
                  tags
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  images(first: 1) {
                    edges {
                      node {
                        transformedSrc
                        altText
                      }
                    }
                  }
                }
              }
            }
          }`,
		});

		return products.body;
	});
};
