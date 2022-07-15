import { css } from "@emotion/react";

export const HeaderButton = ({ children, href }) => {
	return (
		<div
			css={css`
				display: flex;
				align-content: center;
				color: #f0ebe7;
				font-weight: 400;
				font-family: "Sirin Stencil", sans-serif;
				font-size: 30px;
				height: 50px;
				padding-bottom: 3px;
				padding-left: 20px;
				padding-right: 22px;
				border-radius: 24px;
				border-radius: 10px 10px 50px 50px;
				text-decoration: none;
				border: 2px solid #eaecebc5;
				background-color:#645541b7;
				:hover {
					background-color: #eda543;
				}
		
				justify-content: center;
				align-items: center;
				text-align: start;
				

				cursor: pointer;
			`}
		>
			{children}
		</div>
	);
};
