import { Clock } from "react-svg-spinners";
import { css } from "@emotion/react";

export const Spinner = () => {
	return (
		<div
			css={css`
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100vh;
				background-image: url("/images/24.jpg");
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
			`}
		>
			<div
				css={css`
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100vh;
					background: linear-gradient(
						1deg,
						rgba(255, 255, 255, 0.1),
						rgba(255, 255, 255, 0.1)
					);
					backdrop-filter: blur(2px);
				`}
			>
				{" "}
				<Clock width={400} height={400} dur="5s" color="#aa680a" />
			</div>{" "}
		</div>
	);
};
