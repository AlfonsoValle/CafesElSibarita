import { css } from "@emotion/react";

interface NameDescription {
	name: string;
	description: string;
}

const Sibarita: React.FC<NameDescription> = ({ name, description }) => {
	return (
		<section
			css={css`
				background-color: #eda543;
				width: 30.5%;
				position: absolute;
				right: 0;
				border: 5px solid #eaecebc5;
				border-radius: 0px 0px 50px 0px;
				padding-bottom: 9px;
				margin-right: 20%;
				clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%, 9% 50%);
				height: 10%;
				margin-top: 14%;
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
