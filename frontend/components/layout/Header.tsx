import { css } from "@emotion/react";
import { MainMenu } from "./MainMenu";
import Loguito from "./Logo";
import { LateralMenu } from "./LateralMenu";

export const Header = () => {
	return (
		<>
			<div
				css={css`
					background: var(--main-color);
					position: fixed;
					z-index: 2;
				`}
			>
				<div
					css={css`
						padding-top: 5px;
						display: grid;
						grid-template-columns: 1fr 1fr 8fr;
						align-items: center;
					`}
				>
					<Loguito />
					<MainMenu />
					<LateralMenu />
				</div>
			</div>
		</>
	);
};
