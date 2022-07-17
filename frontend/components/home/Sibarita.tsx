import { css } from "@emotion/react";

interface NameDescription {
	name: string;
	description: string;
}

const Sibarita: React.FC<NameDescription> = ({ name, description }) => {
	return (
		<section
			css={css`
				min-width: 0%;
				width: 50%;
				background-color: #eda543;
				border: 5px solid #eaecebc5;
				border-radius: 0px 0px 50px 0px;
				clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 9% 50%);
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
					padding-top: 1.5%;
					padding-right: 5%;
					padding-left: 12%;
				`}
			>
				{description}
			</div>
		</section>
	);
};

export default Sibarita;
