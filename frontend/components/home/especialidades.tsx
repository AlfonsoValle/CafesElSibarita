import { css } from "@emotion/react";

interface NameUrlImage {
	name: string;
	text: string;
	image: string;
}

const Especialidades: React.FC<NameUrlImage> = ({ name, text, image }) => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 2px;
				:hover {
				}
			`}
		>
			<div
				css={css`
					height: 150px;
					display: flex;
					align-items: center;
					justify-content: space-around;
					width: 90px;
					position: relative;
					text-align: center;
					overflow: hidden;
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					border-radius: 25px;
					background-image: url(${image});
					:hover {
						width: 400px;
					}
				`}
			>
				<div
					css={css`
						font-family: "montserrat-bold", sans-serif;
						font-size: 20px;
						text-transform: uppercase;
						color: #dfd8d8;
						position: absolute;
						background-color: grey;
						border-radius: 25px;
						padding: 4px;
						white-space: nowrap;
						transform: rotate(-90deg) translate(1px);
						:hover {
							all: unset;
							padding-bottom: 2px;
						}
					`}
				>
					{name}
				</div>
				<div
					css={css`
						font-family: "montserrat-bold", sans-serif;
						font-size: 14px;
						font-weight: 800;
						font-style: bold;
						color: #141310;
						font-weight: 500;
						padding: 10px;
						position: relative;
						background-color: #cf9b17;
						padding: 4px;
						opacity: 0;

						:hover {
							opacity: 100%;

							filter: brightness(1);
						}
					`}
				>
					{text}
				</div>
			</div>
		</div>
	);
};

export default Especialidades;
