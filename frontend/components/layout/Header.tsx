import { css } from "@emotion/react";
import { MainMenu } from "./MainMenu";
import { LateralMenu } from "./LateralMenu";

export const Header = () => {
	return (
		<>
			<div
				css={css`
					display: flex;
					justify-content: space-between;
					width: 100%;
					align-items: center;
					position: fixed;
					z-index: 2;
				`}
			>
				{" "}
				<MainMenu />
				<div
					css={css`
						margin-right: 5px;
					`}
				>
					{" "}
					<LateralMenu />
				</div>
			</div>
		</>
	);
};
