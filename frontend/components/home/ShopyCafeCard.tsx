import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React from "react";
import { css } from "@emotion/react";

export const CafeCard: React.FC<{ cafe }> = ({ cafe }) => {
	return (
		<div
			className="card"
			css={css`
				color: black;
				font-size: 10px;
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 400px;
				position: relative;
				text-align: center;
				border-radius: 25px;
				background-color: #981717;
				color: white;
				margin-top: 40%;
			`}
		>
			<div className="card-content">
				<h2>{cafe.title}</h2>
				<h2>{cafe.handle}</h2>
				<img src={cafe.images.edges[0].node.transformedSrc}/>
				<h4>{cafe.priceRange.minVariantPrice.amount}</h4> 
			</div>
		</div>
	);
};
