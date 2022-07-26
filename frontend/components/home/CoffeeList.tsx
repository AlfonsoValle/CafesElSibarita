import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";
import { CoffeeCard } from "./CoffeeCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";

export const CoffeeList = () => {
	const [coffee_data, setCoffeeData] = useState([]);
	useEffect(() => {
		axios.get("http://localhost:5000").then((res) => {
			setCoffeeData(res.data);
		});
	}, []);

	return (
		<div
			css={css`
				font-size: 20px;
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 400px;
				position: relative;
				text-align: center;
				border-radius: 25px;
				background-color: blue;
				color: black;
			`}
		>
			{coffee_data.map((coffee, index) => (
				<CoffeeCard coffee={coffee} key={index} />
			))}
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
