import { CafeCard } from "./ShopyCafeCard";
import { css } from "@emotion/react";
import useSWR from "swr";
import { Spinner } from "../../shared/Spinner";
import { CheckoutSibarita } from "../../subscriptions/CheckoutSibarita";

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
				padding: 20px;
				font-size: 25px;
				font-weight: bold;
				width: 85%;
				height: 80%;
				border-radius: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: linear-gradient(
					1deg,
					rgba(255, 253, 253, 0.382),
					rgba(217, 211, 211, 0.227)
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
