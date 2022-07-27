import { HeaderButton } from "./HeaderButton";
import { css } from "@emotion/react";
import Loguito from "./Logo";


export const MainMenu = () => {
	return (
		<div
			css={css`
				display: flex;
				white-space: nowrap;
				align-items: center;
			`}
		>
			<Loguito/>
			<HeaderButton href="/" text="Cafés el Sibarita"></HeaderButton>
			
		</div>
	);
};
