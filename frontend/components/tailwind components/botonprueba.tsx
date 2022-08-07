import { css } from "@emotion/react";
import Link from "next/link";

interface ButtonProps {
	href?: string;
	text: string;
}

export const BotonPrueba: React.FC<ButtonProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<div>
				<a
					css={css`
						font-size: 18px;
						color: #ffffff;
						font-family: inherit;
						font-weight: 400;
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
					{text}
				</a>
			</div>
		</Link>
	);
};
