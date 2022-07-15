import { HeaderButton } from "./HeaderButton";
import { css } from "@emotion/react";
import ShoppingCart from "./ShoppingCart";

export const LateralMenu = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: flex-end;
				margin-right: 5px;
				height: 50px;
			`}
		>
			<HeaderButton href="/">Identifícate</HeaderButton>
			<ShoppingCart></ShoppingCart>
			
		</div>
	);
};
