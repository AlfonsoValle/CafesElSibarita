<div align="center" >

# ☕ CAFÉS EL SIBARITA ☕

<img title="" src="https://i.imgur.com/NCqrI7f.png" alt="logoSibarita.png" width="80" data-align="center">

</div> 
<br>



<br>
      [![IMAGE ALT TEXT HERE](https://i.gyazo.com/2a8939a62e596446cd96e8262455fd3b.jpg)](https://www.youtube.com/watch?v=SVz6cOqeYoc)


       
<div align="center" >

## **Technologies Used**
<br>

![Esta es una imagen](https://img.shields.io/badge/-YARN-brightgreen?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-NODE.JS-red?style=plastic)


![Esta es una imagen](https://img.shields.io/badge/-NEXT.JS-inactive?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-MONGODB-success?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-FASTIFY-orange?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-REACT-critical?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-TYPESCRIPT-blue?style=plastic)


![Esta es una imagen](https://img.shields.io/badge/-EMOTION-ff69b4?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-TAILWIND-ff69b4?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-TWINMACRO-ff69b4?style=plastic)




![Esta es una imagen](https://img.shields.io/badge/-NODEMON-critical?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-SHOPIFY-brightgreen?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-GRAPHQL-important?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-MONGOOSE-success?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-AUTH0-darkgrey?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-AXIOS-blue?style=plastic)
![Esta es una imagen](https://img.shields.io/badge/-SWR-blue?style=plastic)

>
![Esta es una imagen](https://img.shields.io/badge/POWERED%20BY-CAFFEINE-orange?style=for-the-badge)

</div>

 - ### **Motivation to choose a Coffee Store as Project?**
  
 After having worked creating two stores with Prestashop and Wordpress without programming. This project seemed practical, useful and an interesting experience for a junior developer.

 -  ###   **A subscription model store.**

The real interest of my project was not to have a large list of products that would require me a lot of time just to be able to describe and complete them.
The idea of this business is simple, collect coffees from small businesses and turn it into a subscription model that allows me to make them known to them, and generate a business of discovery of new gourmet products.

-  ###    **The main challenge of making a Headless CMS store with Shopify.**

Without a doubt the worst thing has been to start knowing the connection processes with 🔥GraphQL, the conventional queries that we had seen did not work here.

The lack of "simple" documentation put me in some trouble to deal with the connection between our Backend and Shopify's StorefrontApi. 


-  ###    **Installation and deployment Guide.**

Installation and deployment Guide.
To install the project you only have to go to the repository https://github.com/AlfonsoValle/CafesElSibarita , clone it and run a yarn run dev.

-  ###    **Acknowledgments.**
  
This project would not have worked without the mentorship of [@Boyander](https://github.com/Boyander) as the head of Core Code School's FullStack Bootcamp and my colleague [@Systrent](https://github.com/Systrent), without him and the endless hours of trial and error this website would work much worse.

-  ###    **Blipp Dependency Backend Endpoints.**

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

-  ###   **Backend Schema.**

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

-  ###   **Backend ShopifyApp.**

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

-  ###   **Backend Single Product GraphQL Query.**

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

-  ###    **Frontend Schema.**

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
│       ├───📄 Fondo23.jpg
│       ├───📄 Fondo24.jpg
│       ├───📄 Fondo33.png
│       ├───📄 Fondo34.png
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

-  ###   **Frontend Delete Speciality Crud.**

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
