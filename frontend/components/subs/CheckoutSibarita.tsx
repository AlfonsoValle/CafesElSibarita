import useSWR from "swr";

export const CheckoutSibarita = ({ variantId }) => {
	const { data } = useSWR(`/sub/checkout01?variantId=${variantId}`);
	const url = data?.data.checkoutCreate.checkout.webUrl;

	return (
		<div tw="flex flex-col justify-center items-center w-full h-screen">
			<a href={url} target="_blank">
				Comprar WOLOLOOO
			</a>
		</div>
	);
};
