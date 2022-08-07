import { css } from "@emotion/react";
import Socials from "../home/Socials";
import AboutUs from "../home/About";

export const Footer = () => {
	return (
		<>
			<div
				css={css`
					position: absolute;
					bottom: 0;
					display: flex;
					justify-content: end;
					width: 100%;
				`}
			>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 10px;
						border-radius: 30px;
						padding: 3px;
					`}
				>
					<Socials />

					<div
						css={css`
							font-size: 18px;
							color: #ffffff;
							font-family: inherit;
							font-weight: 600;
							cursor: pointer;
							position: relative;
							border: none;
							background: none;

							transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
							transition-duration: 400ms;
							transition-property: color;

							:focus,
							:hover {
								color: #eda543;
							}

							:focus:after,
							:hover:after {
								width: 100%;
								left: 0%;
							}

							:after {
								content: "";
								pointer-events: none;
								bottom: -2px;
								left: 50%;
								position: absolute;
								width: 0%;
								height: 2px;
								background-color: #eda543;
								transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
								transition-duration: 400ms;
								transition-property: width, left;
							}
						`}
					>
						<AboutUs href="/sobrenosotros" />
					</div>
				</div>
			</div>
		</>
	);
};
