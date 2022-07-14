import { Header } from "./Header";
import { css } from "@emotion/react";
import { injectGlobal } from "@emotion/css";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Sirin+Stencil:400');
    body{
		background: #20161e;
  font-family: 'Sirin Stencil', sans-serif;
  
  font-weight: 400;
  line-height: 1;
  color: #ffffff;
        margin:0;
        padding:0;
    }
    :root {
        --main-color: transparent;
    }
    a{
      text-decoration: none;
    }
`;

export const Layout = ({ children }) => (
	<div css={css``}>
		<div>
			<Header />
			<div
				css={css`
					max-width: 100vw;
					margin: 0;
					text-align: center;
				`}
			>
				{children}
			</div>
		</div>
	</div>
);
