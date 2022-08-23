
import { css } from "@emotion/react";
import Logo from "./Logo";


export const MainMenu = () => {
	return (
		<div
			css={css`
				display: flex;
				white-space: nowrap;
				align-items: center;
			`}
		>
			<Logo href="/" />
		
			
		</div>
	);
};
