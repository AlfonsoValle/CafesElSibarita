import { css } from "@emotion/react";
import Link from "next/link";

interface ButtonProps {
	href?: string;
	text: string;
}

export const HeaderButton: React.FC<ButtonProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<a
				css={css`
					display: flex;
					align-content: center;
					
					color: #f0ebe7;
					font-weight: 400;
					font-family: Montserrat, sans-serif;
					font-size: 25px;
					height: 30px;
					border-radius: 50px 50px 50px 50px;
					text-decoration: none;
					border: 1px solid #eaecebc5;
					background-color: #251721;
					:hover {
						background-color: #eda6439d;
					}

					justify-content: center;
					align-items: center;
					text-align: start;

					cursor: pointer;
				`}
			>
			
				{text}
			</a>
		</Link>
	);
};
