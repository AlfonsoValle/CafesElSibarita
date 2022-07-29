import { css } from "@emotion/react";
import { CafeList } from "../../components/home/ShopyCafeList";

const SuscripcionSibarita = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				background-image: url("/images/fondocafe.jpg");
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			`}
		>
			<div
				css={css`
					display: flex;
					align-items: center;
					justify-content: center;
					background: rgb(5, 2, 0);
					background: linear-gradient(
						180deg,
						rgba(5, 2, 0, 0.8472693520767682) 0%,
						rgba(0, 0, 0, 0.4971292960543593) 100%
					);
					height: 100vh;
				`}
			>
				<CafeList />
			</div>
		</section>
	);
};
export default SuscripcionSibarita;
