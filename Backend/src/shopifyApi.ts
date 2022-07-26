import Shopify from "@shopify/shopify-api";
import { FastifyPluginAsync } from "fastify";

export const shopifyApi: FastifyPluginAsync = async (app) => {
	app.get("/sibarita", async (req, res) => {
		const storefrontAccessToken = "a49676320ff0612be117f3891cd0d138 ";
		const shop = "cafes-el-sibarita.myshopify.com";
      
		const storefrontClient = new Shopify.Clients.Storefront(shop, storefrontAccessToken);
		const products = await storefrontClient.query({
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
