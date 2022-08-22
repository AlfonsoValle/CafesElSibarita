import { Header } from "./Header";
import { css } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import { Footer } from "./Footer";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Dancing+Script:wght@400;500;600;700&family=Life+Savers:wght@400;700;800&family=Montserrat:wght@400;700;800&family=Open+Sans:wght@400;700;800&family=Roboto:wght@400;700;800&family=Roboto+Condensed:wght@400;700;800&family=Roboto+Slab:wght@400;700;800&family=Source+Sans+Pro:wght@400;700;800&family=Titillium+Web:wght@400;700;800&family=Ubuntu:wght@400;700;800&family=Work+Sans:wght@400;700;800&family=Zilla+Slab:wght@400;700;800&family=Zilla+Slab+Highlight:wght@400;700;800&display=swap');


    
    body{
	
  font-family: "montserrat";
  font-weight: 600;
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
	<div>
		<div>
			<Header />

			<div
				css={css`
					display: flex;
					margin: 0;
					text-align: center;
				`}
			>
				{children}
			</div>
			<Footer />
		</div>
	</div>
);
