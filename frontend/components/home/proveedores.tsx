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
				background-color: #1e4924;
				border: 1px transparent;
			`}
		>
			<div
				css={css`
					font-family: "montserrat";
					font-size: 12px;
					color: #ffffff;
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
