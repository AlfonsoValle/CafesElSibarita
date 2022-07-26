import { css } from "@emotion/react";

interface NameDescription {
	name: string;
	description: string;
}

const Prime: React.FC<NameDescription> = ({ name, description }) => {
	return (
		<section
			css={css`
				min-width: 0%;
				width: 50%;
				font-family: "montserrat", sans-serif;
				font-style: italic;
				color: #fefefe;
				background: linear-gradient(90deg, rgba(30, 73, 36, 1) 70%, #006d0f 100%);
				border: 2px solid #eaecebc5;
				border-right: 0px;
				padding-bottom: 9px;
				border-radius: 0px 0px 0px 50px;
				clip-path: polygon(0% 0%, 91% 0, 100% 50%, 91% 100%, 0% 100%);
				cursor: pointer;
			`}
		>
			<div
				css={css`
					font-size: 40px;
					color: #ffffff;
					font-weight: 500;
				`}
			>
				{name}
			</div>
			<div
				css={css`
					font-size: 15px;
					font-weight: 100;
					padding-right: 5%;
					padding-left: 5%;
					padding-top: 1.5%;
					font-weight: 500;
				`}
			>
				{description}
			</div>
		</section>
	);
};

export default Prime;
