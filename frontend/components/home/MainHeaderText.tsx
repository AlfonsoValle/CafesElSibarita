import { css } from "@emotion/react";



const MainHeaderText = () => {
	
	return (
		<h1
			css={css`
				font-family: "Dancing Script";
				font-size: 55px;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 500;
				white-space: nowrap;
				margin-top: 8vh;
				
			`}
		> Cafés El Sibarita
			
		</h1>
	);
};

export default MainHeaderText;
