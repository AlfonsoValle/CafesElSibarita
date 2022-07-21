import { css } from "@emotion/react";

interface NameDescription {
	name: string;
	description: string;
}

const Sibarita: React.FC<NameDescription> = ({ name, description }) => {
	return (
		<section
			css={css`
				font-family: "montserrat", sans-serif;
				font-style: italic;
				min-width: 0%;
				width: 50%;
				background-color: #c49711;
				border: 2px solid #eaecebc5;
				border-radius: 0px 0px 50px 0px;
				clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 9% 50%);
			`}
		>
			<div
				css={css`
					font-size: 40px;
					color: #0d0d0c;
					font-weight: 500;
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
					color: #0d0d0c;
					font-weight: 500;
				`}
			>
				{description}
			</div>
		</section>
	);
};

export default Sibarita;
