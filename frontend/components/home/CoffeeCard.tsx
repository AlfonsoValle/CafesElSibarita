import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React from "react";
import { css } from "@emotion/react";
interface Coffee {
	name: "string";
	type: "string";
	description: "string";
	image: "string";
}

export const CoffeeCard: React.FC<{ coffee: Coffee }> = ({ coffee }) => {
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
				background-color: #c5c5d3;
				
			`}
		>
			<div className="card-image" css={css``}>
				<img src={coffee.image} alt={coffee.name} />
			</div>
			<div className="card-content">
				<h2>{coffee.name}</h2>
				<h3>{coffee.type}</h3>
				<h4>{coffee.description}</h4>
			</div>
		</div>
	);
};
