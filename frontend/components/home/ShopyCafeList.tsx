import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";
import { CafeCard } from "./ShopyCafeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

export const CafeList = () => {
	const [cafe_data, setCafeData]: any[] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000/sibarita").then((res) => {
			setCafeData(res.data.data.products.edges[0].node);
		});
	}, []);

	return (
		<div
			css={css`
				font-size: 300px;
				height: 600px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 400px;
				position: relative;
				text-align: center;
				border-radius: 25px;
				background-color: #9696cc;
				color: #cf2525;
			`}
		>
			{/* {cafe_data.edges.map((cafe, index) => (
				<CafeCard cafe={cafe} key={index} />
			))} */}
         
				<CafeCard cafe={cafe_data}  />
			
		</div>
	);
};

export const getServerSideProps = async () => {
	// Fetch all the products
	const products = await shopifyClient.product.fetchAll();

	return {
		props: {
			products: parseShopifyResponse(products),
		},
	};
};
