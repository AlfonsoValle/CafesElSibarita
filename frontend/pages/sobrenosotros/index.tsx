import { css } from "@emotion/react";
import { AboutUsText } from "../../components/Texts/AboutUsText";
const SobreNosotros = () => {
	return (
		<section
			css={css`
				height: 100vh;
				width: 100%;
				background-image: url("/images/34.png");
				background-repeat: no-repeat;
				background-size: cover;
			`}
		>
			<div
				css={css`
					height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
					background: rgb(5, 2, 0);
					background: linear-gradient(
						180deg,
						rgba(58, 53, 50, 0.847) 0%,
						rgba(138, 100, 47, 0.497) 100%
					);
				`}
			>
				{" "}
				<AboutUsText />
			</div>
		</section>
	);
};
export default SobreNosotros;
