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
				background-color: #eda543;
				border: 5px solid #eaecebc5;
				border-right: 0px;
				padding-bottom: 9px;
				border-radius: 0px 0px 0px 50px;
				clip-path: polygon(0% 0%, 91% 0, 100% 50%, 91% 100%, 0% 100%);
			`}
		>
			<div
				css={css`
					font-size: 40px;
					color: #faf9f7;
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
				`}
			>
				{description}
			</div>
		</section>
	);
};

export default Prime;
