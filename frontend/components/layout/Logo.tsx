import Image from "next/image";
import { css } from "@emotion/react";
import Link from "next/link";

interface ButtonProps {
	href?: string;
	text?: string;
}

export const Logo: React.FC<ButtonProps> = ({ href, text }) => {
	return (
		<Link href={href}>
			<a
				css={css`
					margin-left: 5px;
					margin-top: 5px;
					cursor: pointer;
				`}

			>
				<Image src="/images/logoSibarita.png" width="60px" height="60px" />
			</a>
		</Link>
	);
};
export default Logo;
