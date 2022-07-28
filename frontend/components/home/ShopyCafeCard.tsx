import React from "react";
import { css } from "@emotion/react";

export const CafeCard: React.FC<{ cafe: any }> = ({ cafe }) => {
	return (
		<div
			className="card"
			css={css`
				color: black;
				font-size: 15px;
				height: 500px;
				display: flex;
				align-items: center;
				position: relative;
				text-align: center;
				border-radius: 25px;
				background-color: #e2a808ca;
				color: black;
			`}
		>
			<div className="card-content">
				<h2> Producto: {cafe.title}</h2>
				<img src={cafe.images.edges[0].node.transformedSrc} />
				<h3>{cafe.description}</h3>
				<div
					css={css`
						color: black;
					`}
				>
					Precio:
					<h4>{cafe.priceRange.minVariantPrice.amount} E</h4>
				</div>
			</div>
		</div>
	);
};
