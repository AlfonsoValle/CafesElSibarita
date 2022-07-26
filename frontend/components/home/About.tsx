import { css } from "@emotion/react";
import Link from "next/link";

interface Href {
	href: string;
}

const AboutUs: React.FC<Href> = ({ href }) => {
	return (
		<Link href={href}>
			<a
				css={css`
					display: flex;
					justify-content: center;
					align-items: center;
				`}
			>
				Sobre Nosotros
			</a>
		</Link>
	);
};

export default AboutUs;
