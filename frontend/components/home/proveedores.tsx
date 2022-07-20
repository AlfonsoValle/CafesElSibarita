import { css } from "@emotion/react";

interface NameUrlImage {
	name: string;
	url: string;
	image: string;
}

const Proveedores: React.FC<NameUrlImage> = ({ name, url, image }) => {
	return (
		<button
			css={css`
				background-color: #eda543;
				border: 1px transparent;
            
           
			`}
		>
			<div
				css={css`
					font-family: "montserrat-bold", sans-serif;
					font-size: 12px;
					font-weight: 800;
					font-style: bold;
					color: #141310;
					font-weight: 500;
					
				`}
			>
				{name}
			</div>
			<div
				css={css`
					transform: rotate(90deg);
				`}
			>
				<a href={url}>
					<img src={image} alt={name} />
				</a>
			</div>
		</button>
	);
};

export default Proveedores;
