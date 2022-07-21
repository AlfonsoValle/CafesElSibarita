import { css } from "@emotion/react";

interface NameUrlImage {
	name?: string;
	text: string;
	image: string;
}

const Especialidades: React.FC<NameUrlImage> = ({ name, text, image }) => {
	return (
		<div
			css={css`
				display: flex;
				flex-direction: row;
				padding: 1px;
				
			`}
		>
			<div
				css={css`
					height: 200px;
					display: flex;
					align-items: center;
					justify-content: space-around;
					width: 40px;
					position: relative;
					text-align: center;
					overflow: hidden;
					background-position: center;
					background-repeat: no-repeat;
					background-size: cover;
					border-radius: 25px;
					background-image: url(${image});
					:hover {
						transition: all 0.3s ease-in-out;
						width: 400px;
					}
				`}
			>
				<div
					css={css`
						font-family: "montserrat";
						font-size: 14px;
						font-weight: 800;
						font-style: bold;
						color: #000000;
						font-weight: 500;
						padding: 5px;
						margin-left: 1px;
						margin-right: 1px;
						background-color: #eaeceb;
						border: 2px solid #eaecebc5;
						border-radius: 24px;
						padding: 4px;
						opacity: 0;

						:hover {
							opacity: 100%;
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
