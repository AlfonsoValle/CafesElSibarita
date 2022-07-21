import { css } from "@emotion/react";

const BannerDecorativo = () => {
	return (
		<section
			css={css`
				display: flex;
				
				filter: brightness(99%);
			`}
		>
			<img src="/images/cafetera.jpg" alt="" />
		</section>
	);
};

export default BannerDecorativo;
