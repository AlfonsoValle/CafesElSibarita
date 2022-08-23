import { css } from "@emotion/react";

import { Login } from "./Login";

export const LateralMenu = () => {
	return (
		<div
			css={css`
				display: flex;
			`}
		>
			<Login />
			
		</div>
	);
};
