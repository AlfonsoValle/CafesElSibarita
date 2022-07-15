import { HeaderButton } from "./HeaderButton";
import { css } from "@emotion/react";

export const MainMenu = () => {
	return (
		<div
			css={css`
				white-space: nowrap;
			`}
		>
			<HeaderButton href="/">Cafés El Sibarita</HeaderButton>
		</div>
	);
};
