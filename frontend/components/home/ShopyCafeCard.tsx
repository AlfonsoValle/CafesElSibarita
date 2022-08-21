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
				height: 100%;
				width: 100%;
				display: flex;

				justify-content: space-around;
				align-items: center;
				color: white;
				flex-direction: column;
				border-radius: 10px;
				background-color: #f0c650c9;
			`}
		>
			<div className="card-content">
				<h1
					css={css`
						display: flex;
						justify-content: center;
						align-items: center;
						padding: 20px 0;
					`}
				>
					{cafe.title}
				</h1>
				<div
					css={css`
						display: flex;
						flex-direction: column;
						max-height: 70%;
						line-height: 1.4em;
						margin-top: 2px;
						align-items: center;
						padding: 0 20px;
					`}
				>
					<div
						css={css`
							width: 20%;
						`}
					>
						<img
							src={cafe.images.edges[0].node.transformedSrc}
							css={css`
								border-radius: 10px;
								background-color: white;
							`}
						/>
					</div>
					<div
						css={css`
							font-weight: 400;
							font-size: 20px;
							padding: 0 20px;

							width: 100%;
						`}
					>
						<p>{cafe.description}</p>
					</div>
				</div>
				<div
					css={css`
						font-size: 20px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						padding: 20px 10px;
						margin-top: 20px;
					`}
				>
					<p>
						Suscripción de 3 meses por solo{" "}
						<span>{CurrencyFormat(cafe.priceRange.minVariantPrice.amount)}</span>
					</p>
					{children}
				</div>
			</div>
		</div>
	);
};
