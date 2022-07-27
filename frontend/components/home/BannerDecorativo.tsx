import { css } from "@emotion/react";

const BannerDecorativo = () => {
	return (
		<div
			css={css`
				display: flex;
			`}
		>
			<img
				src="/images/cafetera.jpg"
				width="1000"
				height="1000"
				css={css`
					display: block;
					object-fit: cover;
					filter: brightness(99%);
					max-height: 100%;
					max-width: 200px;
					width: auto;
					height: auto;
				`}
			/>
		</div>
	);
};

export default BannerDecorativo;
