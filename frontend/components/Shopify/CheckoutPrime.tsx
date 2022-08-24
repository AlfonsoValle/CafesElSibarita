import { css } from "@emotion/react";
import useSWR from "swr";

export const CheckoutPrime = ({ variantId }) => {
	const { data } = useSWR(`/sub/checkout02?variantId=${variantId}`);
	const url = data?.data.checkoutCreate.checkout.webUrl;

	return (
		<div
			css={css`
				color: white;
				border: 1px solid white;
				border-radius: 25px;
				background-color: green;
				width: 200px;
				font-weight: 200;
				padding: 5px;
				margin-top: 25px;
				:hover {
					background-color: #062b06;
				}
			`}
		>
			<a href={url} target="_blank">
				Comprar
			</a>
		</div>
	);
};
