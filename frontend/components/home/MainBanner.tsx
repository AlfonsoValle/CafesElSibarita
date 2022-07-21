import { css } from "@emotion/react";
import BannerDecorativo from "./BannerDecorativo";
interface Intro {
	intro: string;
}

const MainBanner: React.FC<Intro> = ({ intro }) => {
	return (
		<section
			css={css`
				font-family: "montserrat", sans-serif;
				font-size: 25px;
				color: white;
				background-color:#251721;
				display: flex;
				border: 2px solid #eaecebc5;
				border-bottom: 0px;
				border-radius: 50px 50px 0px 0px;
				margin-top: 14vh;
				overflow: hidden;
				height: 120px;
				
			`}
		>
			
			<BannerDecorativo />
			<div
				css={css`
					padding-left: 25px;
					padding-right: 25px;
					padding-top: 10px;
					padding-bottom: 1px;
					color: #ffffff;
					font-weight: 500;
					
				`}
			>
				{intro}
			</div>
		</section>
	);
};

export default MainBanner;
