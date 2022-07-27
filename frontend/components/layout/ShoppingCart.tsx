import Image from "next/image";
import { css } from "@emotion/react";
const ShoppingCart = () => {
	return (
		<div
			css={css`
				cursor: pointer;
			`}
		>
			<a>
				<Image src="/images/coffee-bag-svgrepo-com.svg" width="40px" height="40px" />
			</a>
		</div>
	);
};
export default ShoppingCart;
