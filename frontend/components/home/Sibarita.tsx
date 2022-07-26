import { css } from "@emotion/react";

interface NameDescriptionRoute {
	name: string;
	description: string;
}

const Sibarita: React.FC<NameDescriptionRoute> = ({ name, description }) => {
	return (
		<section
			css={css`
				font-family: "montserrat", sans-serif;
				font-style: italic;
				min-width: 0%;
				width: 50%;
				cursor: pointer;
				background: linear-gradient(
					90deg,
					rgba(231, 178, 21, 1) 0%,
					rgba(64, 48, 1, 1) 140%
				);
				border: 2px solid #eaecebc5;
				border-radius: 0px 0px 50px 0px;
				clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 9% 50%);
			`}
		>
			<div
				css={css`
					font-size: 40px;
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
		</section>
	);
};

export default Sibarita;
