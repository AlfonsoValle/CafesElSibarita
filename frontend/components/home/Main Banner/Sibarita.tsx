import { css } from "@emotion/react";
import Link from "next/link";

interface NameDescriptionRoute {
	name: string;
	description: string;
	href: string;
}

const Sibarita: React.FC<NameDescriptionRoute> = ({ name, description, href }) => {
	return (
		<Link href={href}>
			<a
				css={css`
					width: 50%;
					font-family: "montserrat", sans-serif;
					font-style: italic;
					padding: 5px;
					cursor: pointer;
					background: linear-gradient(
						90deg,
						rgba(231, 178, 21, 1) 0%,
						rgba(64, 48, 1, 1) 140%
					);
					border: 2px solid #eaecebc5;
					border-left: 0px;
					border-radius: 0px 0px 40px 0px;
					clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 3% 50%);
				`}
			>
				<div
					css={css`
						font-size: 20px;
						color: #000000;
						font-weight: 600;
					`}
				>
					{name}
				</div>
				<div
					css={css`
						font-size: 15px;
						font-weight: 100;
						padding-top: 1.5%;
						padding-right: 5%;
						padding-left: 12%;
						color: #000000;
						font-weight: 600;
					`}
				>
					{description}
				</div>
			</a>
		</Link>
	);
};

export default Sibarita;
