import React from "react";
import { css } from "@emotion/react";

export const CafeCard: React.FC<{ cafe: any }> = ({ cafe }) => {
	return (
		<div
			className="card"
			css={css`
				
				height: 500px;
				display: flex;
				align-items: center;
				position: relative;
				text-align: center;
				border-radius: 25px;
				background-color: #e2a808ca;
				
			`}
		>
			<div className="card-content">
				<h2> Producto: {cafe.title}</h2>
				<img src={cafe.images.edges[0].node.transformedSrc} />
				<h3>{cafe.description}</h3>
				<div
					css={css`
						
					`}
				>
					Precio:
					<h4>{cafe.priceRange.minVariantPrice.amount} €</h4>
				</div>
			</div>
		</div>
	);
};
