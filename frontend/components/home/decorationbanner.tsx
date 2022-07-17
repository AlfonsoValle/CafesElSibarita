import { css } from "@emotion/react";

const BannerDecorativo = () => {
	return (
		<section
			css={css`
				border-radius: 99px;
				height: 20vh;
				max-width: 15%;
				border: 5px solid #eaeceb;
				display: flex;
				overflow: hidden;
				opacity: 0.95;
				filter: brightness(70%);
				justify-content: center;
			`}
		>
			<img src="/images/cafetera.jpg" alt="" />
		</section>
	);
};

export default BannerDecorativo;
