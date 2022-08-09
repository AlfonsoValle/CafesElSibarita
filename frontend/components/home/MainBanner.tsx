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
				font-size: 30px;
				background: linear-gradient(
					180deg,
					rgba(186, 158, 113, 1) 0%,
					rgba(214, 206, 175, 1) 99%
				);
				display: flex;
				border: 2px solid #eaecebc5;
				border-bottom: 0px;
				border-radius: 50px 50px 0px 0px;
				margin-top: 10vh;
				overflow: hidden;
				min-height: 100px;
			`}
		>
			<BannerDecorativo />
			<div
				css={css`
					padding-left: 25px;
					padding-right: 25px;
					padding-top: 10px;
					padding-bottom: 10px;
					color: #020202;
					font-weight: 500;
				`}
			>
				{intro}
			</div>
		</section>
	);
};

export default MainBanner;
