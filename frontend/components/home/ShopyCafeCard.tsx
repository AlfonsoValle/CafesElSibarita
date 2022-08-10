import { css } from "@emotion/react";
import { CurrencyFormat } from "../../lib/CurrencyFormat";
import Link from "next/link";
import useSWR, { useSWRConfig } from "swr";

export const CafeCard: React.FC<{ cafe: any; children: any }> = ({ cafe, children }) => {
	const { mutate } = useSWRConfig();
	return (
		<div
			className="card"
			css={css`
				height: 500px;
				white-space: nowrap;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				position: relative;
				text-align: center;
				border-radius: 25px;
				background-color: #e2a808ca;
			`}
		>
			<div className="card-content">
				<h2> Producto: {cafe.title}</h2>
				<img
					src={cafe.images.edges[0].node.transformedSrc}
					css={css`
						height: 100px;
					`}
				/>
				<h3>{cafe.description}</h3>
				<div css={css``}>
					Precio:
					<h4>{CurrencyFormat(cafe.priceRange.minVariantPrice.amount)}</h4>
				</div>
			</div>
			{children}
		</div>
	);
};
