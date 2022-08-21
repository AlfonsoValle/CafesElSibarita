import { css } from "@emotion/react";

interface Intro {
	intro: string;
}

const MainBanner: React.FC<Intro> = ({ intro }) => {
	return (
		<section
			css={css`
				font-family: "montserrat", sans-serif;
				font-size: 20px;
				background: linear-gradient(
					180deg,
					rgba(186, 158, 113, 1) 0%,
					rgba(214, 206, 175, 1) 99%
				);
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 1.2em;
				font-weight: 400;
				border: 2px solid #eaecebc5;
				border-bottom: 0px;
				border-radius: 40px 40px 0px 0px;
				margin-top: 12vh;
				overflow: hidden;
				max-height: 55%;
			`}
		>
			<img
				src="/images/decorativo.png"
				css={css`
					width: 15%;
				`}
			/>

			<div
				css={css`
					padding-left: 20px;
					padding-right: 20px;
					padding-top: 10px;
					padding-bottom: 10px;
					color: #020202;
					font-weight: 400;
					width: 85%;
				`}
			>
				{intro}
			</div>
		</section>
	);
};

export default MainBanner;
