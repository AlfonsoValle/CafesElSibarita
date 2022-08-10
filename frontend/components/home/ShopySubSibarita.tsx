import { CafeCard } from "./ShopyCafeCard";
import { css } from "@emotion/react";
import useSWR from "swr";
import { Spinner } from "../shared/Spinner";
import { CheckoutSibarita } from "../subs/CheckoutSibarita";

export const SubSibarita = () => {
	const { data } = useSWR("/sub/single?handle=suscripcion-sibarita", {
		refreshInterval: 5000,
	});

	const cafeData = data?.data.productByHandle;
	const variantIdSibarita = cafeData?.variants.edges[0].node.id;
	console.log(cafeData);
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
			{cafeData != undefined ? (
				<CafeCard cafe={cafeData}>
					<CheckoutSibarita variantId={variantIdSibarita} />
				</CafeCard>
			) : (
				<Spinner />
			)}
		</div>
	);
};
