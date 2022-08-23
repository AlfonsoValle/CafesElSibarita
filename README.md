<div align="center" >

# CAFÉS EL SIBARITA

<img title="" src="https://i.imgur.com/NCqrI7f.png" alt="logoSibarita.png" width="80" data-align="center">

</div>

- **Why to choose a Shop?**
  After having worked creating two stores with Prestashop and Wordpress without programming. This project seemed practical, useful and an interesting experience for a junior developer.

- **The main challenge of making a Headless CMS store with Shopify.**

        Without a doubt the worst thing has been to start knowing the connection         processes     with GraphQL, the conventional queries that we had seen did not         work here.

- **A subscription model store.**

        The real interest of my project was not to have a large list of products that would         require me a lot of time just to be able to describe and complete them.
        The idea of this business is simple, collect coffees from small businesses and turn         it into a subscription model that allows me to make them known to them, and         generate a business of discovery of new gourmet products.

-  **Blipp Dependency Backend Endpoints**

```
�️  Routes:
OPTIONS *
GET     /especialidades/readSpecialities
HEAD    /especialidades/readSpecialities
POST    /especialidades/createSpecialities
DELETE  /especialidades/deleteSpecialities/:_id
GET     /sub
HEAD    /sub
HEAD    /sub/
GET     /sub/single
HEAD    /sub/single
GET     /sub/checkout01
HEAD    /sub/checkout01
GET     /sub/checkout02
HEAD    /sub/checkout02
```

- **Backend Schema**

```
├───📁 src/
│   ├───📁 routes/
│   │   ├───📁 GraphQLApi/
│   │   │   ├───📄 AllProducts.ts
│   │   │   ├───📄 CheckoutMutationPrime.ts
│   │   │   ├───📄 CheckoutMutationSibarita.ts
│   │   │   ├───📄 ShopifyApp.ts
│   │   │   └───📄 SingleProduct.ts
│   │   └───📁 Specialities/
│   │       ├───📄 createSpecialities.ts
│   │       ├───📄 deleteSpecialities.ts
│   │       ├───📄 specialities.ts
│   │       ├───📄 specialitiesApp.ts
│   │       └───📄 speciality.model.ts
│   ├───📄 app.ts
│   ├───📄 config.ts
│   ├───📄 db.ts
│   └───📄 server.ts
├───📄 package.json
├───📄 tsconfig.json
└───📄 yarn.lock
```

- **Backend ShopifyApp**

```
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
```

- **Backend Single Product GraphQL Query**

```
import Shopify from "@shopify/shopify-api";
import { FastifyPluginAsync } from "fastify";
import { SHOPIFY_SHOP, STOREFRONT } from "../../config";

export const SingleProductQuery: FastifyPluginAsync = async (app) => {
    // app.get('/products', {preValidation: app.authenticate}, async (req, res) => {
    app.get<{ Querystring: { handle: string } }>("/single", async (req, res) => {
        //Req
        // req.body;
        const { handle } = req.query;

        // Load the access token as per instructions above
        const Storefront: string = STOREFRONT;

        // Shop from which we're fetching data
        const shop: string = SHOPIFY_SHOP;

        // StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
        const storefrontClient: any = new Shopify.Clients.Storefront(shop, Storefront);
        try {
            const product: any = await storefrontClient.query({
                data: {
                    query: `query singleProductQuery($handle: String!) {
                     productByHandle(handle: $handle) {
                         title
                         description
                         updatedAt
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
                         variants(first: 1) {
                             edges {
                                 node {
                                     id
                                 }
                             }
                         }
                     }
                 }`,
                    variables: {
                        handle,
                    },
                },
            });
            console.log(product.body);
            return product.body;
        } catch (error) {
            console.log(error);
        }
    });
};
```

- **Frontend Schema**

```
├───📁 components/
│   ├───📁 Admin/
│   │   ├───📄 Botondeformulario.tsx
│   │   ├───📄 CreateSpeciality.tsx
│   │   ├───📄 DeleteSpeciality.tsx
│   │   ├───📄 EspecialidadCard.tsx
│   │   └───📄 ListaEspecialidades.tsx
│   ├───📁 home/
│   │   ├───📁 Footer/
│   │   │   └───📄 Socials.tsx
│   │   ├───📁 Main Banner/
│   │   │   ├───📄 MainBanner.tsx
│   │   │   ├───📄 Prime.tsx
│   │   │   └───📄 Sibarita.tsx
│   │   ├───📁 Shopify/
│   │   │   ├───📄 ShopyCafeCard.tsx
│   │   │   ├───📄 ShopySubPrime.tsx
│   │   │   └───📄 ShopySubSibarita.tsx
│   │   ├───📁 Slider/
│   │   │   └───📄 BannerSlider.tsx
│   │   ├───📄 About.tsx
│   │   ├───📄 MainHeadText.tsx
│   │   └───📄 Section.tsx
│   ├───📁 layout/
│   │   ├───📄 Footer.tsx
│   │   ├───📄 Header.tsx
│   │   ├───📄 LateralMenu.tsx
│   │   ├───📄 Layout.tsx
│   │   ├───📄 Login.tsx
│   │   ├───📄 Logo.tsx
│   │   └───📄 MainMenu.tsx
│   ├───📁 profile/
│   │   ├───📄 ButtonForm.tsx
│   │   ├───📄 CardProfile.tsx
│   │   └───📄 CrudProfile.tsx
│   ├───📁 Shared/
│   │   ├───📄 AuthenticatedApp.tsx
│   │   ├───📄 BotonHeader.tsx
│   │   ├───📄 Spinner.tsx
│   │   └───📄 TokenApp.tsx
│   ├───📁 Subscriptions/
│   │   ├───📄 CheckoutPrime.tsx
│   │   └───📄 CheckoutSibarita.tsx
│   └───📁 Texts/
│       └───📄 AboutUsText.tsx
├───📁 lib/
│   ├───📄 APIshopify.ts
│   ├───📄 AuthenticatedFetcher.ts
│   ├───📄 CurrencyFormat.ts
│   ├───📄 GetSingleProduct.ts
│   ├───📄 ProfileApi.ts
│   ├───📄 ProfileRepo.ts
│   ├───📄 PublicFetcher.ts
│   ├───📄 SpecialityRepo.ts
│   ├───📄 SpecialityToBackend.ts
│   └───📄 Tokencontext.ts
├───📁 pages/
│   ├───📁 editarespecialidades/
│   │   └───📄 index.tsx
│   ├───📁 perfil/
│   │   ├───📄 consultarPerfil.tsx
│   │   ├───📄 editarPerfil.tsx
│   │   └───📄 index.tsx
│   ├───📁 sobrenosotros/
│   │   └───📄 index.tsx
│   ├───📁 subs/
│   │   ├───📄 prime.tsx
│   │   └───📄 sibarita.tsx
│   ├───📄 index.tsx
│   ├───📄 _app.tsx
│   └───📄 _document.tsx
├───📁 public/
│   └───📁 images/
│       ├───📄 23.jpg
│       ├───📄 24.jpg
│       ├───📄 33.png
│       ├───📄 34.png
│       ├───📄 cafetera.jpg
│       ├───📄 coffee-bag-svgrepo-com.svg
│       ├───📄 decorativo.png
│       ├───📄 facebook.svg
│       ├───📄 favicon.png
│       ├───📄 fondocafe.jpg
│       ├───📄 fondocafebueno.jpg
│       ├───📄 instagram.svg
│       ├───📄 logoSibarita.png
│       ├───📄 twitter.svg
│       └───📄 vasosibarita.png
├───📁 types/
│   └───📄 emotion.d.ts
├───📄 .babelrc
├───📄 .env
├───📄 .gitignore
├───📄 next-env.d.ts
├───📄 next.config.js
├───📄 package.json
├───📄 postcss.config.js
├───📄 tailwind.config.js
├───📄 tsconfig.json
└───📄 yarn.lock
```

- **Frontend Speciality Crud**

```
import { css } from "@emotion/react";
import useSWR from "swr";
import { DeleteSpeciality } from "../../lib/SpecialityRepo";
import { Spinner } from "../Shared/Spinner";
import { EspecialidadCard } from "./EspecialidadCard";

export const ListaEspecialidades: React.FC = () => {
    const { data, mutate } = useSWR("/especialidades/readSpecialities", {
        refreshInterval: 800,
    });

    return (
        <div className="images-list">
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    max-height: 300px;
                    padding: 0px 60px;
                    gap: 5px;
                    color: white;
                    border-radius: 10px;
                `}
            >
                {data?.length > 0 ? (
                    data.map((item, i) => (
                        <EspecialidadCard
                            item={item}
                            onDelete={async () => {
                                await DeleteSpeciality(item._id);
                                mutate();
                            }}
                        />
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
};
```