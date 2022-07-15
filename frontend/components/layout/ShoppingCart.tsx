import Image from "next/image";
import { css } from "@emotion/react";
const ShoppingCart = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: flex-end;
				margin-top: 5px;
				display: center;
				align-items: center;
				cursor: pointer;
			`}
		>
			<a><Image src="/images/coffee-bag-svgrepo-com.svg" width="43px" height="48px" />
			
			
			
			</a>

		</div>
	);
};
export default ShoppingCart;
