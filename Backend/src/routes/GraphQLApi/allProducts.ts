import Shopify from "@shopify/shopify-api";
import { FastifyPluginAsync } from "fastify";
import { STOREFRONT, SHOPIFY_SHOP } from "../../config";

export const AllProducts: FastifyPluginAsync = async (app) => {
	app.get("/list", async (req, res) => {
		const storefrontClient: any = new Shopify.Clients.Storefront(SHOPIFY_SHOP, STOREFRONT);
		try {
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
                variants(first:1) {
                  edges {
                    node {
                      id
                    }
                  }
                } 
              }
            }
          }
        }`,
			});

			return products.body;
		} catch (error) {
			console.log(error);
		}
	});
};

export const OneProduct: FastifyPluginAsync = async (app) => {
	app.get("/single", async (req, res) => {
		const storefrontClient: any = new Shopify.Clients.Storefront(SHOPIFY_SHOP, STOREFRONT);
		try {
			const product: any = await storefrontClient.query({
				data: {
					query: ` query OneProduct($handle: String!) {
          productByHandle(handle: $handle) {
         
                title
                description
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
              variants(first:1) {
                edges {
                  node {
                    id
                  }
                }
              } 
             }
            
          }
        }`,
					variables: {
						handle: 2,
					},
				},
			});
			return product.body;
		} catch (error) {
			console.log(error);
		}
	});
};

export const CheckoutMutation: FastifyPluginAsync = async (app) => {
	app.get("/checkout", async (req, res) => {
		const storefrontClient: any = new Shopify.Clients.Storefront(SHOPIFY_SHOP, STOREFRONT);
		try {
			const product: any = await storefrontClient.mutation({
				data: {
					query: ` mutation CheckoutMutation($variantId: ID!) {
          checkoutCreate(input: {
            lineItemsL {
              variantId:$variantID,
              quantity:1
            
            }
          }){

checkout {
  webUrl
}

          }    
        }`,
					variables: {
						variantID: "gid://shopify/ProductVariant/42235895447730",
					},
				},
			});
			return product.body;
		} catch (error) {
			console.log(error);
		}
	});
};
