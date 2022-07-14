import { css } from "@emotion/react";

export const HeaderButton = ({ children, href }) => {
	return (
		<div
	
			css={css`
			display: flex;
			align-content: center;
				color: #f1eae4;
				font-weight: 400;
				font-family: "Sirin Stencil", sans-serif;
				font-size: 40px;
				line-height:1.2;
			padding-right: 3px;
			padding-left: 3px;
				;
				//padding: 3px 2px;
				border-radius: 17px;
				text-decoration: none;
				background-color:#715c2fbc ;
				justify-content: center;
				align-items: center;
				//margin-left: 5px;
				text-align: start;

				cursor: pointer;
				
			`}
		>
			{children}
		
		</div>
	);
};
