import { CafeCard } from "./ShopyCafeCard";
import { css } from "@emotion/react";
import useSWR from "swr";

export const CafeList = () => {
	const { data } = useSWR("/sibarita", {
		refreshInterval: 5000,
	});

	const cafeData = data?.data.products.edges;

	return (
		<div
			css={css`
				font-family: "montserrat";
				font-size: 29px;
				color: #000000;
				font-weight: bold;
				width: 400px;
				height: 100vh;
				display: flex;
				align-items: center;
				justify-content: center;
				
				background: linear-gradient(
					1deg,
					rgba(255, 255, 255, 0.1),
					rgba(255, 255, 255, 0.1)
				);
				backdrop-filter: blur(6px);
			`}
		>
			{cafeData?.length > 0 &&
				cafeData.map((edge, index) => <CafeCard cafe={edge.node} key={index} />)}
		</div>
	);
};
