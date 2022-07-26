import { css } from "@emotion/react";
import Socials from "../home/Socials";
import AboutUs from "../home/About";

export const Footer = () => {
	return (
		<>
			<div
				css={css`
					margin-top: 93vh;
					position: absolute;
					display: flex;
					align-items: center;

					justify-content: end;
					width: 100vw;
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
							color: #fafafa;
							font-family: Montserrat, sans-serif;
							font-weight: 600;
							margin-right: 10px;
							text-decoration: none;
							cursor: pointer;
							:hover {
								color: #eda543;
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
