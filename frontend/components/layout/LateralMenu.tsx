import { HeaderButton } from "./HeaderButton";
import { css } from "@emotion/react";

export const LateralMenu = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: flex-end;
				margin-right: 5px;
			`}
		>
			<HeaderButton href="/">Identifícate</HeaderButton>
			
		</div>
	);
};
