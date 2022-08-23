import { css } from "@emotion/react";
import Socials from "../home/Footer/Socials";
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
						border-radius: 20px;
						padding: 3px;
					`}
				>
					<Socials />

					
				</div>
			</div>
		</>
	);
};
